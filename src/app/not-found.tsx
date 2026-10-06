import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 text-slate-100 text-center relative overflow-hidden">
      <div className="max-w-md space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
          <Cpu className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">404 — Page Not Found</h1>
        <p className="text-sm text-slate-400">
          The node or path you are looking for does not exist on this server.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
