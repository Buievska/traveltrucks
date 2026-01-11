import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { Camper, FilterState } from "@/types/camper";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

interface CamperStore {
  items: Camper[];
  currentCamper: Camper | null;
  favorites: string[];
  page: number;
  isLoading: boolean;
  hasMore: boolean;
  filters: FilterState;
  toggleFavorite: (id: string) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  fetchCampers: (isNewSearch?: boolean) => Promise<void>;
  fetchCamperById: (id: string) => Promise<void>;
}

interface ApiResponse {
  total: number;
  items: Camper[];
}

interface SearchParams {
  page: number;
  limit: number;
  location?: string;
  form?: string;
  transmission?: string;
  AC?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  bathroom?: boolean;
}

export const useCamperStore = create<CamperStore>()(
  persist(
    (set, get) => ({
      items: [],
      currentCamper: null,
      favorites: [],
      page: 1,
      isLoading: false,
      hasMore: true,
      filters: {
        location: "",
        form: "",
        AC: false,
        transmission: "",
        kitchen: false,
        TV: false,
        bathroom: false,
      },

      toggleFavorite: (id: string) => {
        const { favorites } = get();
        const newFavorites = favorites.includes(id)
          ? favorites.filter((favId) => favId !== id)
          : [...favorites, id];
        set({ favorites: newFavorites });
      },

      setFilters: (newFilters) =>
        set((state) => ({ filters: { ...state.filters, ...newFilters } })),

      // Функція для завантаження одного кемпера за ID
      fetchCamperById: async (id: string) => {
        set({ isLoading: true, currentCamper: null });
        try {
          const response = await axios.get<Camper>(`${API_URL}/${id}`);
          set({ currentCamper: response.data, isLoading: false });
        } catch (error) {
          console.error("Error fetching camper by id:", error);
          set({ isLoading: false, currentCamper: null });
        }
      },

      fetchCampers: async (isNewSearch = false) => {
        set({ isLoading: true });
        try {
          const { page, filters, items } = get();
          const currentPage = isNewSearch ? 1 : page;

          const activeParams: SearchParams = {
            page: currentPage,
            limit: 4,
          };

          if (filters.location) activeParams.location = filters.location;
          if (filters.form) activeParams.form = filters.form;
          if (filters.transmission)
            activeParams.transmission = filters.transmission;

          if (filters.AC) activeParams.AC = true;
          if (filters.kitchen) activeParams.kitchen = true;
          if (filters.TV) activeParams.TV = true;
          if (filters.bathroom) activeParams.bathroom = true;

          const response = await axios.get<ApiResponse>(API_URL, {
            params: activeParams,
          });

          const newData = response.data.items;
          const totalLoaded = isNewSearch
            ? newData.length
            : items.length + newData.length;

          set({
            items: isNewSearch ? newData : [...items, ...newData],
            page: currentPage + 1,
            isLoading: false,
            hasMore: totalLoaded < response.data.total,
          });
        } catch (error) {
          console.error("Error fetching campers:", error);
          set({
            isLoading: false,
            items: isNewSearch ? [] : get().items,
            hasMore: false,
          });
        }
      },
    }),
    {
      name: "camper-favorites",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
