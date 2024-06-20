import MoviesList from "@/components/movies-list";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <>
      <ScrollArea className="h-screen w-full rounded-md border p-4">
        <MoviesList />
      </ScrollArea>
    </>
  );
}
