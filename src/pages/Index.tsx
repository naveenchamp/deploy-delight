import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import BooksList from "@/components/BooksList";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Good Reads - Meet Your Next Favourite Book</title>
        <meta
          name="description"
          content="Discover your next favorite book with Good Reads. Browse popular books, read reviews, and find your perfect read."
        />
      </Helmet>

      <main className="main-container">
        <Hero />
        <BooksList />
      </main>
    </>
  );
};

export default Index;
