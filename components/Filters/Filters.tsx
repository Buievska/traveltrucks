"use client";

import { useCamperStore } from "@/lib/store/useCamperStore";
import styles from "./Filters.module.css";

export const Filters = () => {
  const { filters, setFilters, fetchCampers } = useCamperStore();

  const handleSearch = () => {
    fetchCampers(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <label className={styles.label}>Location</label>
        <div className={styles.inputWrapper}>
          <svg className={styles.inputIcon} width="18" height="20">
            <use href="/icons.svg#icon-map" />
          </svg>
          <input
            type="text"
            className={styles.input}
            placeholder="City"
            value={filters.location}
            onChange={(e) => setFilters({ location: e.target.value })}
          />
        </div>
      </div>

      <p className={styles.filterTitle}>Filters</p>

      <div className={styles.section}>
        <h3 className={styles.categoryTitle}>Vehicle equipment</h3>
        <div className={styles.grid}>
          <button
            type="button"
            className={`${styles.filterBtn} ${filters.AC ? styles.active : ""}`}
            onClick={() => setFilters({ AC: !filters.AC })}
          >
            <svg className={styles.icon} width="32" height="32">
              <use href="/icons.svg#icon-ac" />
            </svg>
            AC
          </button>

          <button
            type="button"
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
            <svg className={styles.icon} width="32" height="32">
              <use href="/icons.svg#icon-automatic" />
            </svg>
            Automatic
          </button>

          <button
            type="button"
            className={`${styles.filterBtn} ${
              filters.kitchen ? styles.active : ""
            }`}
            onClick={() => setFilters({ kitchen: !filters.kitchen })}
          >
            <svg className={styles.icon} width="32" height="32">
              <use href="/icons.svg#icon-kitchen" />
            </svg>
            Kitchen
          </button>

          <button
            type="button"
            className={`${styles.filterBtn} ${filters.TV ? styles.active : ""}`}
            onClick={() => setFilters({ TV: !filters.TV })}
          >
            <svg className={styles.icon} width="32" height="32">
              <use href="/icons.svg#icon-tv" />
            </svg>
            TV
          </button>

          <button
            type="button"
            className={`${styles.filterBtn} ${
              filters.bathroom ? styles.active : ""
            }`}
            onClick={() => setFilters({ bathroom: !filters.bathroom })}
          >
            <svg className={styles.icon} width="32" height="32">
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
            type="button"
            className={`${styles.filterBtn} ${
              filters.form === "panelTruck" ? styles.active : ""
            }`}
            onClick={() =>
              setFilters({
                form: filters.form === "panelTruck" ? "" : "panelTruck",
              })
            }
          >
            <svg className={styles.icon} width="32" height="32">
              <use href="/icons.svg#icon-van" />
            </svg>
            Van
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${
              filters.form === "fullyIntegrated" ? styles.active : ""
            }`}
            onClick={() =>
              setFilters({
                form:
                  filters.form === "fullyIntegrated" ? "" : "fullyIntegrated",
              })
            }
          >
            <svg className={styles.icon} width="32" height="32">
              <use href="/icons.svg#icon-fully" />
            </svg>
            <span>Fully Integrated</span>
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${
              filters.form === "alcove" ? styles.active : ""
            }`}
            onClick={() =>
              setFilters({ form: filters.form === "alcove" ? "" : "alcove" })
            }
          >
            <svg className={styles.icon} width="32" height="32">
              <use href="/icons.svg#icon-alcove" />
            </svg>
            Alcove
          </button>
        </div>
      </div>

      <button type="button" className={styles.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
