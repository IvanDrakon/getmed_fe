import { Star } from "lucide-react";

interface ProfessionalRating {
  rating: number;
  size: number;
}

const ProfessionalRating = ({ rating, size }: ProfessionalRating) => {
  return (
    <span className="flex gap-1">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Star
            key={i}
            size={size}
            className={`${
              i < rating
                ? "text-[#2E7042] fill-[#2E7042]"
                : "text-[#A1A1A1] fill-[#A1A1A1]"
            }`}
          ></Star>
        ))}
    </span>
  );
};

export default ProfessionalRating;
