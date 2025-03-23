import Image from "next/image";
import { Star, TrendingUp, Award } from "lucide-react";
import BookCard from "@/components/book-card";

// Sample data
const bestsellingBooks = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 16.99,
    originalPrice: 24.99,
    isBestseller: true,
  },
  {
    id: "2",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 18.99,
    isBestseller: true,
  },
  {
    id: "3",
    title: "The Vanishing Half",
    author: "Brit Bennett",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 15.99,
    isBestseller: true,
  },
  {
    id: "4",
    title: "Hamnet",
    author: "Maggie O'Farrell",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 14.99,
    originalPrice: 19.99,
    isBestseller: true,
  },
  {
    id: "5",
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 18.99,
    isBestseller: true,
  },
  {
    id: "6",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 15.99,
    isBestseller: true,
  },
  {
    id: "7",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 16.99,
    isBestseller: true,
  },
  {
    id: "8",
    title: "It Ends with Us",
    author: "Colleen Hoover",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 14.99,
    isBestseller: true,
  },
];

const awardWinners = [
  {
    id: "1",
    title: "Shuggie Bain",
    author: "Douglas Stuart",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 17.99,
    award: "Booker Prize",
  },
  {
    id: "2",
    title: "The Nickel Boys",
    author: "Colson Whitehead",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 15.99,
    award: "Pulitzer Prize",
  },
  {
    id: "3",
    title: "The Overstory",
    author: "Richard Powers",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 18.99,
    award: "Pulitzer Prize",
  },
  {
    id: "4",
    title: "Milkman",
    author: "Anna Burns",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 16.99,
    award: "Booker Prize",
  },
];

const topRatedBooks = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 12.99,
    rating: 4.8,
    reviewCount: 12547,
  },
  {
    id: "2",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 9.99,
    rating: 4.7,
    reviewCount: 10982,
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 11.99,
    rating: 4.6,
    reviewCount: 9876,
  },
  {
    id: "4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 10.99,
    rating: 4.5,
    reviewCount: 8765,
  },
];

export default function PopularPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1200&width=2000"
            alt="Popular books"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl text-white">
            <h1
              className="text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Popular Books
            </h1>
            <p className="text-lg mb-8 text-amber-100">
              Discover the books everyone is talking about. From bestsellers to
              award winners and reader favorites.
            </p>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp size={24} className="text-amber-800" />
          <h2 className="section-title">Current Bestsellers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bestsellingBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

      {/* Award Winners */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Award size={24} className="text-amber-800" />
            <h2 className="section-title">Award Winners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {awardWinners.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <div className="book-cover">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-amber-900 text-white text-xs px-2 py-1 rounded-full">
                    {book.award}
                  </div>
                </div>
                <div className="p-4">
                  <h3
                    className="font-medium text-lg line-clamp-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {book.title}
                  </h3>
                  <p className="text-amber-700 text-sm mb-2">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      ${book.price.toFixed(2)}
                    </span>
                    <button className="text-xs bg-amber-100 text-amber-900 px-2 py-1 rounded hover:bg-amber-200 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Star size={24} className="text-amber-800 fill-amber-800" />
          <h2 className="section-title">Top Rated by Readers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {topRatedBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="book-cover">
                <Image
                  src={book.coverImage || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3
                  className="font-medium text-lg line-clamp-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {book.title}
                </h3>
                <p className="text-amber-700 text-sm mb-2">{book.author}</p>
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill={i < Math.floor(book.rating) ? "#d97706" : "none"}
                        stroke={
                          i < Math.floor(book.rating) ? "#d97706" : "#d1d5db"
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {book.rating} ({book.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    ${book.price.toFixed(2)}
                  </span>
                  <button className="text-xs bg-amber-100 text-amber-900 px-2 py-1 rounded hover:bg-amber-200 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Staff Picks */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto">Staff Picks</h2>

          <div className="mt-12 bg-amber-50 rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Staff Pick: Circe"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="BookHaven Staff"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Emma Thompson</h4>
                    <p className="text-sm text-gray-600">Fiction Department</p>
                  </div>
                </div>

                <h3
                  className="font-semibold text-2xl mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Circe
                </h3>
                <p className="text-amber-700 mb-4">by Madeline Miller</p>

                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#d97706"
                        stroke="#d97706"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0</span>
                </div>

                <p className="text-gray-700 mb-6">
                  "In the house of Helios, god of the sun and mightiest of the
                  Titans, a daughter is born. But Circe is a strange child—not
                  powerful, like her father, nor viciously alluring like her
                  mother. Turning to the world of mortals for companionship, she
                  discovers that she does possess power—the power of witchcraft,
                  which can transform rivals into monsters and menace the gods
                  themselves."
                </p>

                <p className="text-gray-700 mb-6">
                  "This book completely captivated me from the first page.
                  Miller's prose is beautiful and lyrical, and her reimagining
                  of Circe's story gives voice to a fascinating character who
                  has often been relegated to the sidelines of mythology. It's a
                  powerful exploration of femininity, power, and what it means
                  to be immortal yet deeply human."
                </p>

                <div className="flex items-center gap-4">
                  <span className="font-semibold text-lg">$19.99</span>
                  <button className="btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
