import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  slug: string;
}

export default function CategoryCard({
  title,
  image,
  count,
  slug,
}: CategoryCardProps) {
  return (
    <Link href={`/genre/${slug}`} className="block group">
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3
            className="text-white text-xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h3>
          <p className="text-amber-200 text-sm">{count} Books</p>
        </div>
      </div>
    </Link>
  );
}
