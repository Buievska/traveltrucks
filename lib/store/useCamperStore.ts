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

          const params: SearchParams = {
            page: currentPage,
            limit: 4,
          };

          if (filters.location) params.location = filters.location;
          if (filters.form) params.form = filters.form;
          if (filters.transmission) params.transmission = filters.transmission;
          if (filters.AC) params.AC = true;
          if (filters.kitchen) params.kitchen = true;
          if (filters.TV) params.TV = true;
          if (filters.bathroom) params.bathroom = true;

          const response = await axios.get<ApiResponse>(API_URL, { params });
          const newData = response.data.items;

          set({
            items: isNewSearch ? newData : [...items, ...newData],
            page: currentPage + 1,
            isLoading: false,
            hasMore: newData.length === 4,
          });
        } catch (error) {
          console.error("Error loading campers:", error);
          set({
            isLoading: false,
            hasMore: false,
            items: isNewSearch ? [] : get().items,
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
