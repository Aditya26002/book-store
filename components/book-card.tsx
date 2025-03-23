import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  originalPrice?: number | null; // Modified to allow null
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function BookCard({
  id,
  title,
  author,
  coverImage,
  price,
  originalPrice,
  isNew = false,
  isBestseller = false,
}: BookCardProps) {
  return (
    <div className="book-card group">
      <div className="book-cover">
        <Image
          src={coverImage || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {isNew && (
          <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
            New
          </div>
        )}

        {isBestseller && (
          <div className="absolute top-2 left-2 bg-amber-900 text-white text-xs px-2 py-1 rounded-full">
            Bestseller
          </div>
        )}

        <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors">
          <Heart size={16} className="text-amber-900" />
        </button>

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link
            href={`/book/${id}`}
            className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition-colors transform translate-y-4 group-hover:translate-y-0 "
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="p-4">
        <h3
          className="font-medium text-lg line-clamp-1 group-hover:text-amber-800 transition-colors"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h3>
        <p className="text-amber-700 text-sm mb-2">{author}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="text-xs bg-amber-100 text-amber-900 px-2 py-1 rounded hover:bg-amber-200 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
