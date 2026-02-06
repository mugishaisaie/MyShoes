// components/SkeletonCard.tsx
export function SkeletonCard() {
  return (
    <div className="bg-gray-200 dark:bg-slate-700 rounded-lg overflow-hidden animate-pulse">
      <div className="aspect-square bg-gray-300 dark:bg-slate-600" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-3/4" />
        <div className="h-3 bg-gray-300 dark:bg-slate-600 rounded w-1/2" />
        <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-1/3" />
      </div>
    </div>
  );
}
