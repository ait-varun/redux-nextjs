import ShowsList from "@/components/shows-list";
import SearchMovie from "@/components/search-movie";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <>
      <SearchMovie />
      <ScrollArea className="h-screen w-full rounded-md border p-4">
        <ShowsList />
      </ScrollArea>
    </>
  );
}
