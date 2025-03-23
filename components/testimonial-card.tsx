import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export default function TestimonialCard({
  name,
  avatar,
  rating,
  text,
  date,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-2">{text}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
}
