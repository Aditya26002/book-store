"use client";

import {
  Heart,
  Search,
  ShoppingBag,
  UserRound,
  X,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Popular search suggestions
  const popularSearches = [
    "Fiction",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Biography",
    "Self-Help",
    "Fantasy",
    "History",
  ];

  // Focus input when search bar opens
  useEffect(() => {
    if (searchBar && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchBar]);

  // Close search on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchBar(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="flex justify-between items-center px-4 py-4 z-50 shadow-md absolute top-0 left-0 right-0 bg-primary-light/35 backdrop-blur-xs mx-4 my-4 rounded-full">
        {/* LEFT */}
        <Link
          href={"/"}
          className="text-xl font-semibold"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          BookHaven
        </Link>

        {/* CENTER */}
        <div className="flex gap-6 font-semibold text-sm">
          <Link
            className="border-b-2 border-transparent hover:border-b-amber-800 hover:font-semibold transition-all duration-200"
            href={"/catalog"}
          >
            CATALOG
          </Link>
          <Link
            className="border-b-2 border-transparent hover:border-b-amber-800 hover:font-semibold transition-all duration-200"
            href={"/new"}
          >
            NEW
          </Link>
          <Link
            className="border-b-2 border-transparent hover:border-b-amber-800 hover:font-semibold transition-all duration-200"
            href={"/genre"}
          >
            GENRE
          </Link>
          <Link
            className="border-b-2 border-transparent hover:border-b-amber-800 hover:font-semibold transition-all duration-200"
            href={"/popular"}
          >
            POPULAR
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex gap-5">
          <button
            className="flex items-center gap-1 hover:text-amber-800 transition-colors"
            onClick={() => setSearchBar(true)}
          >
            <Search size={20} />
          </button>
          <button className="hover:text-amber-800 transition-colors">
            <UserRound size={20} />
          </button>
          <button className="hover:text-amber-800 transition-colors">
            <Heart size={20} />
          </button>
          <button className="hover:text-amber-800 transition-colors">
            <ShoppingBag size={20} />
          </button>
        </div>
      </nav>

      {/* Enhanced Search Modal */}
      {searchBar && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/30 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSearchBar(false)}
        >
          <div
            className="w-full max-w-2xl rounded-lg shadow-2xl transition-all duration-300"
            style={{
              backgroundColor: "#f5efe2",
              animation: "fadeIn 0.3s, slideDown 0.3s",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="flex items-center justify-between p-4 border-b border-amber-800/20">
              <div className="flex items-center gap-2 text-amber-900">
                <BookOpen size={20} />
                <h3
                  className="text-lg"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Search Our Library
                </h3>
              </div>
              <button
                onClick={() => setSearchBar(false)}
                className="rounded-full p-1 hover:bg-amber-100 transition-colors"
                aria-label="Close search"
              >
                <X size={20} className="text-amber-900" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-800"
                  size={18}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for books, authors, or genres..."
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-amber-200 bg-amber-50/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-black placeholder:text-amber-800/60"
                />
              </div>

              {/* Popular Searches */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-amber-900 mb-2">
                  Popular Searches
                </h4>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-3 py-1 rounded-full text-sm bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches (could be dynamic based on user history) */}
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-amber-900">
                    Recent Searches
                  </h4>
                  <button className="text-xs text-amber-700 hover:underline">
                    Clear All
                  </button>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-amber-100/50">
                    <div className="flex items-center gap-2">
                      <Search size={14} className="text-amber-700" />
                      <span className="text-sm">The Great Gatsby</span>
                    </div>
                    <button className="text-amber-700 hover:text-amber-900">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-amber-100/50">
                    <div className="flex items-center gap-2">
                      <Search size={14} className="text-amber-700" />
                      <span className="text-sm">Jane Austen</span>
                    </div>
                    <button className="text-amber-700 hover:text-amber-900">
                      <X size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                className="w-full mt-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition-colors font-medium flex items-center justify-center gap-2"
                onClick={() => {
                  // Handle search submission
                  console.log("Searching for:", searchQuery);
                  // You could redirect to search results page here
                }}
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
