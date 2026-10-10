type HalalBadgeProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizeClass: Record<NonNullable<HalalBadgeProps["size"]>, string> = {
  sm: "h-14 sm:h-16",
  md: "h-24 sm:h-28",
};

/**
 * Halal mark (Arabic + HALAL). The source image is a padded square on near-black,
 * so it is cropped to its artwork and blended so the black drops out on marble.
 */
export function HalalBadge({ className = "", size = "md" }: HalalBadgeProps) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src="/halal-mark.png"
        alt="Halal — حلال"
        className={`aspect-[2.4/1] w-auto object-cover object-center mix-blend-lighten ${sizeClass[size]}`}
        width={240}
        height={100}
      />
    </div>
  );
}
