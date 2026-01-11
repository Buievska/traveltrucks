"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useCamperStore } from "@/lib/store/useCamperStore";
import { Features } from "@/components/CamperFeatures/CamperFeatures";
import { Reviews } from "@/components/CamperReviews/CamperReviews";
import { BookingForm } from "@/components/BookingForm/BookingForm";
import styles from "./CatalogDetails.module.css";
import { Loader } from "@/components/Loader/Loader";

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
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.name}>{currentCamper.name}</h1>
        <div className={styles.meta}>
          <div className={styles.ratingWrapper}>
            <svg className={styles.iconStar} width="16" height="16">
              <use href="/icons.svg#icon-star" />
            </svg>

            <span className={styles.ratingText}>
              {currentCamper.rating}({currentCamper.reviews.length} Reviews)
            </span>
          </div>

          <div className={styles.locationWrapper}>
            <svg className={styles.iconMap} width="16" height="16">
              <use href="/icons.svg#icon-map" />
            </svg>
            <span className={styles.locationText}>
              {currentCamper.location}
            </span>
          </div>
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
              sizes="(max-width: 1440px) 290px"
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
