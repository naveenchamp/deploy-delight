import { Star } from "lucide-react";
import "./index.css";

interface Book {
  bookId: number;
  title: string;
  authorId: number;
  rating: number;
  ratingCount: number;
  reviewCount: number;
  description: string;
  pages: number;
  dateOfPublication: string;
  editionLanguage: string;
  price: number;
  onlineStores: string;
}

interface BookCardProps {
  book: Book;
  index: number;
}

const BookCard = ({ book, index }: BookCardProps) => {
  const formatRatingCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toString();
  };

  return (
    <article
      className="book-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="book-card-content">
        <div className="book-header">
          <h3 className="book-title">{book.title}</h3>
          <div className="book-rating">
            <Star className="star-icon" />
            <span className="rating-value">{book.rating}</span>
            <span className="rating-count">
              ({formatRatingCount(book.ratingCount)} reviews)
            </span>
          </div>
        </div>

        <p className="book-description">{book.description}</p>

        <div className="book-footer">
          <span className="book-meta">
            <span className="meta-value">{book.pages}</span> pages
          </span>
          <span className="book-meta">{book.editionLanguage}</span>
          <span className="book-date">Published {book.dateOfPublication}</span>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
