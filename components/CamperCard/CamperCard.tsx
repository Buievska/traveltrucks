import Image from "next/image";
import { Camper } from "@/types/camper";
import { useCamperStore } from "@/lib/store/useCamperStore";
import styles from "./CamperCard.module.css";
import Link from "next/link";

interface Props {
  camper: Camper;
}

export const CamperCard = ({ camper }: Props) => {
  const { toggleFavorite, favorites } = useCamperStore();
  const isFavorite = favorites.includes(camper.id);

  const imageUrl =
    camper.gallery[0]?.original || camper.gallery[0]?.thumb || "";

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={camper.name} fill className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.name}>{camper.name}</h2>
          <div className={styles.priceBlock}>
            <span className={styles.price}>€{camper.price.toFixed(2)}</span>
            <button
              type="button"
              className={`${styles.favoriteBtn} ${
                isFavorite ? styles.active : ""
              }`}
              onClick={() => toggleFavorite(camper.id)}
            >
              <svg className={styles.heartIcon} width="25" height="24">
                <use href="/icons.svg#icon-heart" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.meta}>
          <div className={styles.rating}>
            <svg className={styles.starIcon}>
              <use href="/icons.svg#icon-star" />
            </svg>
            <span>
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
          </div>
          <div className={styles.location}>
            <svg className={styles.locationIcon}>
              <use href="/icons.svg#icon-map" />
            </svg>
            <span>{camper.location}</span>
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.badges}>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon}>
              <use href="/icons.svg#icon-automatic" />
            </svg>
            <span>{camper.transmission}</span>
          </div>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon}>
              <use href="/icons.svg#icon-petrol" />
            </svg>
            <span>{camper.engine}</span>
          </div>
          {camper.kitchen && (
            <div className={styles.badge}>
              <svg className={styles.badgeIcon}>
                <use href="/icons.svg#icon-kitchen" />
              </svg>
              <span>Kitchen</span>
            </div>
          )}
          {camper.AC && (
            <div className={styles.badge}>
              <svg className={styles.badgeIcon}>
                <use href="/icons.svg#icon-ac" />
              </svg>
              <span>AC</span>
            </div>
          )}
          {camper.refrigerator && (
            <div className={styles.badge}>
              <svg className={styles.badgeIcon}>
                <use href="/icons.svg#icon-refrigerator" />
              </svg>
              <span>Refrigerator</span>
            </div>
          )}
          {camper.microwave && (
            <div className={styles.badge}>
              <svg className={styles.badgesIcon}>
                <use href="/icons.svg#icon-microwave" />
              </svg>
              <span>Microwave</span>
            </div>
          )}
          {camper.gas && (
            <div className={styles.badge}>
              <svg className={styles.badgesIcon}>
                <use href="/icons.svg#icon-gas" />
              </svg>
              <span>Gas</span>
            </div>
          )}
          {camper.water && (
            <div className={styles.badge}>
              <svg className={styles.badgesIcon}>
                <use href="/icons.svg#icon-water" />
              </svg>
              <span>Water</span>
            </div>
          )}
          {camper.bathroom && (
            <div className={styles.badge}>
              <svg className={styles.badgeIcon}>
                <use href="/icons.svg#icon-bathroom" />
              </svg>
              <span>Bathroom</span>
            </div>
          )}
          {camper.TV && (
            <div className={styles.badge}>
              <svg className={styles.badgeIcon}>
                <use href="/icons.svg#icon-tv" />
              </svg>
              <span>TV</span>
            </div>
          )}
        </div>

        <Link href={`/catalog/${camper.id}`} className={styles.showMoreBtn}>
          Show more
        </Link>
      </div>
    </div>
  );
};
