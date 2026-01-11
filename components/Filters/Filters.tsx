"use client";

import { useCamperStore } from "@/lib/store/useCamperStore";
import styles from "./Filters.module.css";

export const Filters = () => {
  const { filters, setFilters, fetchCampers } = useCamperStore();

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ location: e.target.value });
  };

  const toggleEquipment = (key: keyof typeof filters) => {
    const value = filters[key];
    if (typeof value === "boolean") {
      setFilters({ [key]: !value });
    }
  };

  const setVehicleType = (type: string) => {
    setFilters({ form: filters.form === type ? "" : type });
  };

  const handleSearch = () => {
    fetchCampers(true);
  };

  return (
    <div className={styles.wrapper}>
      {/* Location */}
      <div className={styles.section}>
        <label className={styles.label}>Location</label>
        <div className={styles.inputWrapper}>
          <svg className={styles.inputIcon}>
            <use href="/icons.svg#icon-map" />
          </svg>
          <input
            type="text"
            className={styles.input}
            placeholder="Kyiv, Ukraine"
            value={filters.location}
            onChange={handleLocationChange}
          />
        </div>
      </div>

      <p className={styles.filterTitle}>Filters</p>

      <div className={styles.section}>
        <h3 className={styles.categoryTitle}>Vehicle equipment</h3>
        <div className={styles.grid}>
          <button
            className={`${styles.filterBtn} ${filters.AC ? styles.active : ""}`}
            onClick={() => toggleEquipment("AC")}
          >
            <svg className={styles.icon}>
              <use href="/icons.svg#icon-ac" />
            </svg>
            AC
          </button>
          <button
            className={`${styles.filterBtn} ${
              filters.transmission === "automatic" ? styles.active : ""
            }`}
            onClick={() =>
              setFilters({
                transmission:
                  filters.transmission === "automatic" ? "" : "automatic",
              })
            }
          >
            <svg className={styles.icon}>
              <use href="/icons.svg#icon-automatic" />
            </svg>
            Automatic
          </button>
          <button
            className={`${styles.filterBtn} ${
              filters.kitchen ? styles.active : ""
            }`}
            onClick={() => toggleEquipment("kitchen")}
          >
            <svg className={styles.icon}>
              <use href="/icons.svg#icon-kitchen" />
            </svg>
            Kitchen
          </button>
          <button
            className={`${styles.filterBtn} ${filters.TV ? styles.active : ""}`}
            onClick={() => toggleEquipment("TV")}
          >
            <svg className={styles.icon}>
              <use href="/icons.svg#icon-tv" />
            </svg>
            TV
          </button>
          <button
            className={`${styles.filterBtn} ${
              filters.bathroom ? styles.active : ""
            }`}
            onClick={() => toggleEquipment("bathroom")}
          >
            <svg className={styles.icon}>
              <use href="/icons.svg#icon-bathroom" />
            </svg>
            Bathroom
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.categoryTitle}>Vehicle type</h3>
        <div className={styles.grid}>
          <button
            className={`${styles.filterBtn} ${
              filters.form === "van" ? styles.active : ""
            }`}
            onClick={() => setVehicleType("van")}
          >
            <svg className={styles.icon}>
              <use href="/icons.svg#icon-van" />
            </svg>
            Van
          </button>
          <button
            className={`${styles.filterBtn} ${
              filters.form === "fullyIntegrated" ? styles.active : ""
            }`}
            onClick={() => setVehicleType("fullyIntegrated")}
          >
            <svg className={styles.icon}>
              <use href="/icons.svg#icon-fully" />
            </svg>
            Fully Integrated
          </button>
          <button
            className={`${styles.filterBtn} ${
              filters.form === "alcove" ? styles.active : ""
            }`}
            onClick={() => setVehicleType("alcove")}
          >
            <svg className={styles.icon}>
              <use href="/icons.svg#icon-alcove" />
            </svg>
            Alcove
          </button>
        </div>
      </div>

      <button className={styles.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
