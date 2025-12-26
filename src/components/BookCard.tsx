import { Star } from "lucide-react";

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
      className="group bg-card rounded-lg p-6 shadow-card card-hover border border-border/50 opacity-0 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col gap-4">
        {/* Header with title and rating */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-card-foreground leading-tight group-hover:text-accent transition-colors">
            {book.title}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0">
            <Star className="w-4 h-4 fill-rating text-rating" />
            <span className="font-semibold text-card-foreground">{book.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({formatRatingCount(book.ratingCount)} reviews)
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {book.description}
        </p>

        {/* Footer with metadata */}
        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/50">
          <span className="text-sm text-muted-foreground">
            <span className="font-medium text-card-foreground">{book.pages}</span> pages
          </span>
          <span className="text-sm text-muted-foreground">
            {book.editionLanguage}
          </span>
          <span className="text-sm text-muted-foreground ml-auto">
            Published {book.dateOfPublication}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
