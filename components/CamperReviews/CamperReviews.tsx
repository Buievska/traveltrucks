import styles from "./CamperReviews.module.css";

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface Props {
  reviews: Review[];
}

export const Reviews = ({ reviews }: Props) => {
  const renderStars = (rating: number) => {
    const numericRating = Number(rating) || 0;

    return Array.from({ length: 5 }, (_, i) => {
      const iconHref =
        i < numericRating
          ? "/icons.svg#icon-star"
          : "/icons.svg#icon-star-empty";

      return (
        <svg key={i} className={styles.starIcon} width="16" height="16">
          <use href={iconHref} />
        </svg>
      );
    });
  };

  if (!reviews || reviews.length === 0) {
    return <p className={styles.noReviews}>No reviews yet.</p>;
  }

  return (
    <ul className={styles.reviewsList}>
      {reviews.map((review, index) => (
        <li key={index} className={styles.reviewItem}>
          <div className={styles.userHeader}>
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>

            <div className={styles.userInfo}>
              <p className={styles.userName}>{review.reviewer_name}</p>
              <div className={styles.starsContainer}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>

          <p className={styles.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};
