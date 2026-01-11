"use client";

import { useEffect } from "react";
import { useCamperStore } from "@/lib/store/useCamperStore";
import { Filters } from "@/components/Filters/Filters";
import { CamperCard } from "@/components/CamperCard/CamperCard";
import styles from "./catalog.module.css";

export default function CatalogPage() {
  const { items, fetchCampers, isLoading, hasMore } = useCamperStore();

  useEffect(() => {
    fetchCampers(true);
  }, [fetchCampers]);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Filters />
      </aside>

      <main className={styles.main}>
        <div className={styles.list}>
          {Array.isArray(items) && items.length > 0
            ? items.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))
            : !isLoading && <p>No campers found.</p>}
        </div>

        {isLoading && <p className={styles.loading}>Loading...</p>}

        {hasMore && !isLoading && (
          <button className={styles.loadMore} onClick={() => fetchCampers()}>
            Load more
          </button>
        )}
      </main>
    </div>
  );
}
