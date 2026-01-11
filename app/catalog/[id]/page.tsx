"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useCamperStore } from "@/lib/store/useCamperStore";
import { Features } from "@/components/CamperFeatures/CamperFeatures";
import { Reviews } from "@/components/CamperReviews/CamperReviews";
import { BookingForm } from "@/components/BookingForm/BookingForm";
import styles from "./catalogDetails.module.css";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const { currentCamper, fetchCamperById, isLoading } = useCamperStore();

  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );
  useEffect(() => {
    if (typeof id === "string") {
      fetchCamperById(id);
    }
  }, [id, fetchCamperById]);

  if (isLoading || !currentCamper) {
    return <div className={styles.loader}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.name}>{currentCamper.name}</h1>
        <div className={styles.meta}>
          <span className={styles.rating}>
            ⭐ {currentCamper.rating} ({currentCamper.reviews.length} Reviews)
          </span>
          <span className={styles.location}>📍 {currentCamper.location}</span>
        </div>
        <p className={styles.price}>€{currentCamper.price.toFixed(2)}</p>
      </section>

      <section className={styles.gallery}>
        {currentCamper.gallery.map((img, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={img.original || img.thumb || ""}
              alt={`${currentCamper.name} ${index + 1}`}
              fill
              className={styles.image}
            />
          </div>
        ))}
      </section>

      <p className={styles.description}>{currentCamper.description}</p>

      <div className={styles.tabsWrapper}>
        <button
          className={`${styles.tabLink} ${
            activeTab === "features" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${styles.tabLink} ${
            activeTab === "reviews" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.tabContent}>
          {activeTab === "features" ? (
            <Features camper={currentCamper} />
          ) : (
            <Reviews reviews={currentCamper.reviews} />
          )}
        </div>
        <aside className={styles.stickySidebar}>
          <BookingForm />
        </aside>
      </div>
    </div>
  );
}
