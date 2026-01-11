import styles from "./CamperDetails.module.css";
import { Reviews } from "@/components/CamperReviews/CamperReviews";

interface Props {
  camper: {
    reviews: {
      reviewer_name: string;
      reviewer_rating: number;
      comment: string;
    }[];
  };
}

export const CamperDetails = ({ camper }: Props) => {
  return (
    <div className={styles.container}>
      <section className={styles.reviewsSection}>
        <h2 className={styles.title}>Reviews</h2>
        <Reviews reviews={camper.reviews} />
      </section>
    </div>
  );
};
