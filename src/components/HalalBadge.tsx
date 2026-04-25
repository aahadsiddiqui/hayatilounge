type HalalBadgeProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizeClass: Record<NonNullable<HalalBadgeProps["size"]>, string> = {
  sm: "h-12 w-auto sm:h-14 max-w-[min(90vw,300px)]",
  md: "h-[5.5rem] w-auto sm:h-24 md:h-32 max-w-[min(95vw,36rem)]",
};

/**
 * Official-style halal mark (Arabic + HALAL + accents). Image: bronze on black.
 */
export function HalalBadge({ className = "", size = "md" }: HalalBadgeProps) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src="/halal-mark.png"
        alt="Halal — حلال"
        className={`object-contain object-center ${sizeClass[size]}`}
        width={400}
        height={160}
      />
    </div>
  );
}
