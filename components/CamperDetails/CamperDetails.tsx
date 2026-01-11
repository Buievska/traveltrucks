import styles from "./CamperDetails.module.css";

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export const Reviews = ({ reviews }: { reviews: Review[] }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? styles.starFull : styles.starEmpty}>
        ★
      </span>
    ));
  };

  return (
    <div className={styles.reviewsList}>
      {reviews.map((rev, idx) => (
        <div key={idx} className={styles.reviewCard}>
          <div className={styles.userHeader}>
            <div className={styles.avatar}>{rev.reviewer_name.charAt(0)}</div>
            <div>
              <p className={styles.userName}>{rev.reviewer_name}</p>
              <div className={styles.stars}>
                {renderStars(rev.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={styles.comment}>{rev.comment}</p>
        </div>
      ))}
    </div>
  );
};
