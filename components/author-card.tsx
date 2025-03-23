import Image from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  id: string;
  name: string;
  image: string;
  bookCount: number;
}

export default function AuthorCard({
  id,
  name,
  image,
  bookCount,
}: AuthorCardProps) {
  return (
    <Link href={`/author/${id}`} className="block group">
      <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center">
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="font-playfair font-medium text-lg group-hover:text-amber-800 transition-colors">
          {name}
        </h3>
        <p className="text-amber-700 text-sm">{bookCount} Books</p>
      </div>
    </Link>
  );
}
