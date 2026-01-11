import { Camper } from "@/types/camper";
import styles from "./CamperFeatures.module.css";

interface Props {
  camper: Camper;
}

export const Features = ({ camper }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.badges}>
        <div className={styles.badge}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-automatic" />
          </svg>
          <span>{camper.transmission}</span>
        </div>
        <div className={styles.badge}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-ac" />
          </svg>
          <span>AC</span>
        </div>
        <div className={styles.badge}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-petrol" />
          </svg>
          <span>{camper.engine}</span>
        </div>
        {camper.kitchen && (
          <div className={styles.badge}>
            <svg width="20" height="20">
              <use href="/icons.svg#icon-kitchen" />
            </svg>
            <span>Kitchen</span>
          </div>
        )}
        {camper.radio && (
          <div className={styles.badge}>
            <svg width="20" height="20">
              <use href="/icons.svg#icon-radio" />
            </svg>
            <span>Radio</span>
          </div>
        )}
        {camper.refrigerator && (
          <div className={styles.badge}>
            <svg width="20" height="20">
              <use href="/icons.svg#icon-refrigerator" />
            </svg>
            <span>Refrigerator</span>
          </div>
        )}
        {camper.microwave && (
          <div className={styles.badge}>
            <svg width="20" height="20" className={styles.iconDetails}>
              <use href="/icons.svg#icon-microwave" />
            </svg>
            <span>Microwave</span>
          </div>
        )}
        {camper.gas && (
          <div className={styles.badge}>
            <svg width="20" height="20" className={styles.iconDetails}>
              <use href="/icons.svg#icon-gas " />
            </svg>
            <span>Gas</span>
          </div>
        )}
        {camper.water && (
          <div className={styles.badge}>
            <svg width="20" height="20" className={styles.iconDetails}>
              <use href="/icons.svg#icon-water" />
            </svg>
            <span>Water</span>
          </div>
        )}
      </div>

      <div className={styles.details}>
        <h3 className={styles.detailsTitle}>Vehicle details</h3>
        <div className={styles.detailsList}>
          <div className={styles.detailsItem}>
            <span>Form</span>
            <span className={styles.capitalize}>{camper.form}</span>
          </div>
          <div className={styles.detailsItem}>
            <span>Length</span>
            <span>{camper.length}</span>
          </div>
          <div className={styles.detailsItem}>
            <span>Width</span>
            <span>{camper.width}</span>
          </div>
          <div className={styles.detailsItem}>
            <span>Height</span>
            <span>{camper.height}</span>
          </div>
          <div className={styles.detailsItem}>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </div>
          <div className={styles.detailsItem}>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
