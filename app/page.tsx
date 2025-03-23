import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  TruckIcon,
  CreditCard,
  LifeBuoy,
} from "lucide-react";
import BookCard from "@/components/book-card";
import CategoryCard from "@/components/category-card";
import { benefits, books, categories, testimonials } from "@/lib/db";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Books on shelves"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl text-white">
            <h1
              className="text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Discover Your Next Literary Adventure
            </h1>
            <p className="text-lg mb-8 text-amber-100">
              Explore our vast collection of books across all genres, from
              timeless classics to the latest bestsellers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalog" className="btn-primary">
                Browse Catalog
              </Link>
              <Link href="/new" className="btn-secondary">
                New Releases
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="container mx-auto px-4 py-16 ">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Featured Books</h2>
          <Link
            href="/catalog"
            className="text-amber-800 hover:text-amber-900 flex items-center gap-1 font-medium"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <div className="w-full text-center">
            <h2 className="section-title  mx-auto">Why Choose BookHaven</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit) => (
              <div
                id={benefit.id}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-12 h-12 text-white bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon === "BookOpen" && <BookOpen size={24} />}
                  {benefit.icon === "Truck" && <TruckIcon size={24} />}
                  {benefit.icon === "CreditCard" && <CreditCard size={24} />}
                  {benefit.icon === "LifeBuoy" && <LifeBuoy size={24} />}
                </div>
                <h3
                  className="font-semibold text-xl mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">New Releases</h2>
          <Link
            href="/new"
            className="text-amber-800 hover:text-amber-900 flex items-center gap-1 font-medium"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.slice(-4).map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Browse by Genre</h2>
          <Link
            href="/genre"
            className="text-amber-800 hover:text-amber-900 flex items-center gap-1 font-medium"
          >
            All Genres <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} {...category} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-amber-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Join Our Literary Community
          </h2>
          <p className="text-amber-100 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter and be the first to know about new
            releases, exclusive offers, and literary events.
          </p>

          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-l-md w-full focus:outline-none bg-white text-amber-900"
            />
            <button className="bg-amber-900 hover:bg-amber-950 px-6 py-3 rounded-r-md transition-colors font-medium cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="w-full text-center">
          <h2 className="section-title mx-auto">What Our Readers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill={i < testimonial.rating ? "#d97706" : "none"}
                          stroke={
                            i < testimonial.rating ? "#d97706" : "#d1d5db"
                          }
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{testimonial.text}</p>
                <p className="text-xs text-gray-500">{testimonial.date}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
