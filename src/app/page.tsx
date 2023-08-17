import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-600 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-300"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              ANIVERSÁRIO
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Daiyl Mix 4
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Aniver Funk
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hits da Internet
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Song´s Taylor Swift
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Travel
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hits Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Sertanejão
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Tops Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              As mais tocadas do Alok
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon!</h1>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/10">Daily Mix 6</div>
            <div className="bg-white/10">Top Brasil</div>
            <div className="bg-white/10">Daily Mix 3</div>
            <div className="bg-white/10">Release Radar</div>
            <div className="bg-white/10">Today Top Hits</div>
            <div className="bg-white/10">Daily Mix 5</div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-600 p-6">
        footer
      </footer>
    </div>
  );
}
