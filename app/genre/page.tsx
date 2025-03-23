import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CategoryCard from "@/components/category-card";
import BookCard from "@/components/book-card";

// Sample data
const mainCategories = [
  {
    title: "Fiction",
    image: "/placeholder.svg?height=400&width=600",
    count: 1245,
    slug: "fiction",
  },
  {
    title: "Mystery",
    image: "/placeholder.svg?height=400&width=600",
    count: 867,
    slug: "mystery",
  },
  {
    title: "Science Fiction",
    image: "/placeholder.svg?height=400&width=600",
    count: 532,
    slug: "science-fiction",
  },
  {
    title: "Biography",
    image: "/placeholder.svg?height=400&width=600",
    count: 418,
    slug: "biography",
  },
  {
    title: "History",
    image: "/placeholder.svg?height=400&width=600",
    count: 356,
    slug: "history",
  },
  {
    title: "Fantasy",
    image: "/placeholder.svg?height=400&width=600",
    count: 621,
    slug: "fantasy",
  },
  {
    title: "Romance",
    image: "/placeholder.svg?height=400&width=600",
    count: 892,
    slug: "romance",
  },
  {
    title: "Self-Help",
    image: "/placeholder.svg?height=400&width=600",
    count: 475,
    slug: "self-help",
  },
];

const featuredGenre = {
  title: "Mystery & Thriller",
  description:
    "Dive into the world of suspense, intrigue, and unexpected twists. Our mystery collection features detective stories, psychological thrillers, and crime fiction from both classic and contemporary authors.",
  image: "/placeholder.svg?height=600&width=1000",
  books: [
    {
      id: "1",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      coverImage: "/placeholder.svg?height=600&width=400",
      price: 16.99,
      isBestseller: true,
    },
    {
      id: "2",
      title: "Gone Girl",
      author: "Gillian Flynn",
      coverImage: "/placeholder.svg?height=600&width=400",
      price: 15.99,
    },
    {
      id: "3",
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      coverImage: "/placeholder.svg?height=600&width=400",
      price: 14.99,
    },
    {
      id: "4",
      title: "The Da Vinci Code",
      author: "Dan Brown",
      coverImage: "/placeholder.svg?height=600&width=400",
      price: 17.99,
    },
  ],
};

export default function GenrePage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-amber-100 py-16 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Explore by Genre
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover books across all genres, from timeless classics to
              contemporary bestsellers. Find your next literary adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="section-title">Popular Genres</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {mainCategories.map((category) => (
            <CategoryCard key={category.slug} {...category} />
          ))}
        </div>
      </section>

      {/* Featured Genre */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="section-title">
                Featured Genre: {featuredGenre.title}
              </h2>
              <p className="text-gray-700 mb-6">{featuredGenre.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredGenre.books.map((book) => (
                  <BookCard key={book.id} {...book} />
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={`/genre/mystery-thriller`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Explore {featuredGenre.title} <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={featuredGenre.image || "/placeholder.svg"}
                  alt={featuredGenre.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Genres List */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="section-title">All Genres</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 mt-8">
          <div>
            <h3
              className="font-semibold text-lg mb-3 text-amber-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Fiction
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Literary Fiction
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Contemporary Fiction
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Historical Fiction
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Women's Fiction
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Short Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold text-lg mb-3 text-amber-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mystery & Thriller
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Crime Fiction
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Detective Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Psychological Thrillers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Legal Thrillers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Espionage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold text-lg mb-3 text-amber-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Science Fiction & Fantasy
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Space Opera
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Dystopian
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Epic Fantasy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Urban Fantasy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Magical Realism
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold text-lg mb-3 text-amber-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Non-Fiction
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Biography & Memoir
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Self-Help & Personal Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Business & Economics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Science & Technology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold text-lg mb-3 text-amber-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Romance
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Contemporary Romance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Historical Romance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Paranormal Romance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Romantic Comedy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Romantic Suspense
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold text-lg mb-3 text-amber-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Young Adult
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  YA Fantasy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  YA Contemporary
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  YA Science Fiction
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  YA Mystery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  YA Romance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold text-lg mb-3 text-amber-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Children's Books
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Picture Books
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Middle Grade
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Children's Classics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Educational
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Activity Books
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold text-lg mb-3 text-amber-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Poetry & Drama
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Contemporary Poetry
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Classical Poetry
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Drama & Plays
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Poetry Collections
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Literary Criticism
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
