import { useState, useEffect } from "react";
import BookCard from "./BookCard";

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

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
} as const;

type ApiStatus = typeof apiStatusConstants[keyof typeof apiStatusConstants];

interface ApiResponse {
  status: ApiStatus;
  data: Book[] | null;
  errorMsg: string | null;
}

const BooksList = () => {
  const [apiResponse, setApiResponse] = useState<ApiResponse>({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  });

  useEffect(() => {
    // Simulating API call with sample data
    setApiResponse({
      status: apiStatusConstants.success,
      data: [
        {
          bookId: 1,
          title: "Harry Potter and the Sorcerer's Stone",
          authorId: 1,
          rating: 4.48,
          ratingCount: 7464819,
          reviewCount: 118312,
          description:
            "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself.",
          pages: 309,
          dateOfPublication: "November 1st, 2003",
          editionLanguage: "English",
          price: 750,
          onlineStores: "Amazon, Audible, Google Play, Indigo, Abebooks",
        },
        {
          bookId: 2,
          title: "The Hobbit",
          authorId: 2,
          rating: 4.28,
          ratingCount: 3245678,
          reviewCount: 89234,
          description:
            "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep.",
          pages: 366,
          dateOfPublication: "September 21st, 1937",
          editionLanguage: "English",
          price: 650,
          onlineStores: "Amazon, Barnes & Noble, Waterstones",
        },
        {
          bookId: 3,
          title: "To Kill a Mockingbird",
          authorId: 3,
          rating: 4.27,
          ratingCount: 5123456,
          reviewCount: 102345,
          description:
            "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill a Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960.",
          pages: 281,
          dateOfPublication: "July 11th, 1960",
          editionLanguage: "English",
          price: 550,
          onlineStores: "Amazon, Audible, Google Play",
        },
        {
          bookId: 4,
          title: "1984",
          authorId: 4,
          rating: 4.19,
          ratingCount: 3876543,
          reviewCount: 76543,
          description:
            "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision.",
          pages: 328,
          dateOfPublication: "June 8th, 1949",
          editionLanguage: "English",
          price: 480,
          onlineStores: "Amazon, Penguin Books, Waterstones",
        },
        {
          bookId: 5,
          title: "Pride and Prejudice",
          authorId: 5,
          rating: 4.28,
          ratingCount: 3654321,
          reviewCount: 85432,
          description:
            "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work 'her own darling child' and its witty heroine has captivated readers for generations.",
          pages: 279,
          dateOfPublication: "January 28th, 1813",
          editionLanguage: "English",
          price: 420,
          onlineStores: "Amazon, Penguin Classics, AbeBooks",
        },
      ],
      errorMsg: null,
    });
  }, []);

  const renderLoadingView = () => (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
        <p className="text-muted-foreground">Loading books...</p>
      </div>
    </div>
  );

  const renderBooksListView = () => {
    const { data } = apiResponse;
    return (
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-8 opacity-0 animate-fade-in">
            Popular Books
          </h2>
          <div className="flex flex-col gap-6">
            {data?.map((book, index) => (
              <BookCard key={book.bookId} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderFailureView = () => (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <p className="text-destructive font-medium mb-2">Something went wrong</p>
        <p className="text-muted-foreground text-sm">{apiResponse.errorMsg}</p>
      </div>
    </div>
  );

  const renderBooks = () => {
    const { status } = apiResponse;
    switch (status) {
      case apiStatusConstants.success:
        return renderBooksListView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return <>{renderBooks()}</>;
};

export default BooksList;
