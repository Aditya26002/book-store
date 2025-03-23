import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              BookHaven
            </h3>
            <p className="text-amber-200 mb-4">
              Your journey through the world of books begins here.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/catalog"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/new"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  New Releases
                </Link>
              </li>
              <li>
                <Link
                  href="/genre"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Genres
                </Link>
              </li>
              <li>
                <Link
                  href="/popular"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Authors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-amber-200 mb-4">
              Subscribe to receive updates on new arrivals and special
              promotions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="johndoe@email.com"
                className="px-2 py-2 rounded-l-md w-full focus:outline-none text-sm bg-white text-amber-900"
              />
              <button className="bg-amber-700 hover:bg-amber-600 px-2 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-6 text-center text-amber-300">
          <p>
            &copy; {new Date().getFullYear()} BookHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
