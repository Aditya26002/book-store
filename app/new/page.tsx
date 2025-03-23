import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";
import BookCard from "@/components/book-card";

// Sample data
const newReleases = [
  {
    id: "1",
    title: "Cloud Cuckoo Land",
    author: "Anthony Doerr",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 19.99,
    isNew: true,
  },
  {
    id: "2",
    title: "Beautiful World, Where Are You",
    author: "Sally Rooney",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 17.99,
    isNew: true,
  },
  {
    id: "3",
    title: "The Lincoln Highway",
    author: "Amor Towles",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 18.99,
    isNew: true,
  },
  {
    id: "4",
    title: "Crossroads",
    author: "Jonathan Franzen",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 20.99,
    isNew: true,
  },
  {
    id: "5",
    title: "The Last Thing He Told Me",
    author: "Laura Dave",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 15.99,
    isNew: true,
  },
  {
    id: "6",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 19.99,
    isNew: true,
  },
  {
    id: "7",
    title: "The Four Winds",
    author: "Kristin Hannah",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 16.99,
    isNew: true,
  },
  {
    id: "8",
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 18.99,
    isNew: true,
  },
];

const upcomingReleases = [
  {
    title: "The Winds of Winter",
    author: "George R.R. Martin",
    coverImage: "/placeholder.svg?height=600&width=400",
    releaseDate: "December 15, 2023",
    description:
      "The long-awaited sixth novel in the A Song of Ice and Fire series.",
  },
  {
    title: "The Mirror and the Light",
    author: "Hilary Mantel",
    coverImage: "/placeholder.svg?height=600&width=400",
    releaseDate: "January 5, 2024",
    description:
      "The stunning conclusion to Mantel's award-winning Wolf Hall trilogy.",
  },
  {
    title: "The Starless Sea",
    author: "Erin Morgenstern",
    coverImage: "/placeholder.svg?height=600&width=400",
    releaseDate: "February 10, 2024",
    description: "A timeless love story set in a secret underground world.",
  },
];

export default function NewReleasesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1200&width=2000"
            alt="New book releases"
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
              New Releases
            </h1>
            <p className="text-lg mb-8 text-amber-100">
              Discover the latest additions to our collection. Fresh off the
              press and ready for your bookshelf.
            </p>
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="section-title">This Month's Releases</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {newReleases.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

      {/* Upcoming Releases */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Coming Soon</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {upcomingReleases.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={book.coverImage || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="font-semibold text-xl mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {book.title}
                  </h3>
                  <p className="text-amber-700 mb-3">{book.author}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{book.releaseDate}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  <button className="text-amber-800 font-medium flex items-center hover:text-amber-900">
                    Pre-order now <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-amber-800 text-white rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Stay Updated on New Releases
            </h2>
            <p className="text-amber-100 mb-8">
              Be the first to know when new books arrive. Subscribe to our
              newsletter for updates on the latest releases from your favorite
              authors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md w-full focus:outline-none text-amber-900"
              />
              <button className="bg-amber-900 hover:bg-amber-950 px-6 py-3 rounded-md transition-colors font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
