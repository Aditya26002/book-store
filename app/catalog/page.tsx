import { Filter, SlidersHorizontal } from "lucide-react";
import BookCard from "@/components/book-card";

// Sample data
const books = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "/the-midnight-library.jpg",
    price: 16.99,
    originalPrice: 24.99,
    isNew: true,
  },
  {
    id: "2",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    coverImage: "/klara-and-the-sun.jpg",
    price: 18.99,
    isBestseller: true,
  },
  {
    id: "3",
    title: "The Vanishing Half",
    author: "Brit Bennett",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 15.99,
  },
  {
    id: "4",
    title: "Hamnet",
    author: "Maggie O'Farrell",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 14.99,
    originalPrice: 19.99,
  },
  {
    id: "5",
    title: "Cloud Cuckoo Land",
    author: "Anthony Doerr",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 19.99,
    isNew: true,
  },
  {
    id: "6",
    title: "Beautiful World, Where Are You",
    author: "Sally Rooney",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 17.99,
    isNew: true,
  },
  {
    id: "7",
    title: "The Lincoln Highway",
    author: "Amor Towles",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 18.99,
  },
  {
    id: "8",
    title: "Crossroads",
    author: "Jonathan Franzen",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 20.99,
  },
  {
    id: "9",
    title: "The Last Thing He Told Me",
    author: "Laura Dave",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 15.99,
  },
  {
    id: "10",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 19.99,
  },
  {
    id: "11",
    title: "The Four Winds",
    author: "Kristin Hannah",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 16.99,
  },
  {
    id: "12",
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    coverImage: "/placeholder.svg?height=600&width=400",
    price: 18.99,
    isBestseller: true,
  },
];

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Filters
            </h2>
            <SlidersHorizontal size={18} className="text-amber-800" />
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="price-1" className="mr-2" />
                <label htmlFor="price-1" className="text-sm">
                  Under $10
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="price-2" className="mr-2" />
                <label htmlFor="price-2" className="text-sm">
                  $10 - $20
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="price-3" className="mr-2" />
                <label htmlFor="price-3" className="text-sm">
                  $20 - $30
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="price-4" className="mr-2" />
                <label htmlFor="price-4" className="text-sm">
                  Over $30
                </label>
              </div>
            </div>
          </div>

          {/* Genre */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Genre</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="genre-1" className="mr-2" />
                <label htmlFor="genre-1" className="text-sm">
                  Fiction
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="genre-2" className="mr-2" />
                <label htmlFor="genre-2" className="text-sm">
                  Mystery
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="genre-3" className="mr-2" />
                <label htmlFor="genre-3" className="text-sm">
                  Science Fiction
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="genre-4" className="mr-2" />
                <label htmlFor="genre-4" className="text-sm">
                  Biography
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="genre-5" className="mr-2" />
                <label htmlFor="genre-5" className="text-sm">
                  History
                </label>
              </div>
            </div>
            <button className="text-amber-800 text-sm mt-2 hover:underline">
              Show more
            </button>
          </div>

          {/* Author */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Author</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="author-1" className="mr-2" />
                <label htmlFor="author-1" className="text-sm">
                  Jane Austen
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="author-2" className="mr-2" />
                <label htmlFor="author-2" className="text-sm">
                  George Orwell
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="author-3" className="mr-2" />
                <label htmlFor="author-3" className="text-sm">
                  Toni Morrison
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="author-4" className="mr-2" />
                <label htmlFor="author-4" className="text-sm">
                  Haruki Murakami
                </label>
              </div>
            </div>
            <button className="text-amber-800 text-sm mt-2 hover:underline">
              Show more
            </button>
          </div>

          {/* Format */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Format</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="format-1" className="mr-2" />
                <label htmlFor="format-1" className="text-sm">
                  Hardcover
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="format-2" className="mr-2" />
                <label htmlFor="format-2" className="text-sm">
                  Paperback
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="format-3" className="mr-2" />
                <label htmlFor="format-3" className="text-sm">
                  Audiobook
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="format-4" className="mr-2" />
                <label htmlFor="format-4" className="text-sm">
                  E-Book
                </label>
              </div>
            </div>
          </div>

          <button className="w-full bg-amber-800 text-white py-2 rounded-md hover:bg-amber-900 transition-colors">
            Apply Filters
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1
              className="text-3xl font-semibold mb-4 md:mb-0"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Book Catalog
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm">
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                  <option>Bestselling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                  <option>Customer Rating</option>
                </select>
              </div>

              <button className="md:hidden flex items-center gap-1 bg-amber-100 text-amber-900 px-3 py-1 rounded-md">
                <Filter size={16} />
                <span>Filters</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-md border border-amber-200 flex items-center justify-center hover:bg-amber-100 transition-colors">
                &laquo;
              </button>
              <button className="w-10 h-10 rounded-md bg-amber-800 text-white flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-md border border-amber-200 flex items-center justify-center hover:bg-amber-100 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-md border border-amber-200 flex items-center justify-center hover:bg-amber-100 transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-md border border-amber-200 flex items-center justify-center hover:bg-amber-100 transition-colors">
                4
              </button>
              <button className="w-10 h-10 rounded-md border border-amber-200 flex items-center justify-center hover:bg-amber-100 transition-colors">
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
