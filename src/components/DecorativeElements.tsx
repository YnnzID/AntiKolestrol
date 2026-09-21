export function GridDots({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="120" height="120" fill="none" viewBox="0 0 120 120">
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="2" fill="currentColor" />
      </pattern>
      <rect x="0" y="0" width="120" height="120" fill="url(#dots)" />
    </svg>
  );
}
export function VerticalStripes({ className = '' }: { className?: string }) {
  return (
    <div className={`w-[2px] bg-currentColor ${className}`} />
  );
}
