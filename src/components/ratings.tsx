import { HiMiniStar } from "react-icons/hi2";

interface RatingsProps {
  rating: number;
  color: string;
  size: number;
}

export default function Ratings({ rating, color, size }: RatingsProps) {
  const star = Array.from({ length: rating }, (_: any, i: number) => i + 1).map((el) => (
    <span key={el} className="inline-block">
      <HiMiniStar color={`${color}`} size={size} />
    </span>
  ));
  return <>{star}</>;
}
