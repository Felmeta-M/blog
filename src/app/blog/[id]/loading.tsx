import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <article className="container max-w-3xl py-12 md:py-24 lg:py-32">
      <div className="space-y-4">
        <Skeleton className="h-8 w-24" />

        <Skeleton className="h-12 w-full" />

        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>

        <div className="space-y-6 pt-8">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-4/5" />

          <div className="space-y-4 pt-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
      </div>
    </article>
  );
}
