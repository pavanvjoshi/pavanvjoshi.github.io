import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-surface px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="select-none font-heading text-lg font-bold">
          <span className="text-accent">PJ</span>
          <span className="font-mono text-sm text-muted">.dev</span>
        </div>
        <div className="font-mono text-sm text-faint">
          {profile.firstName} {profile.lastName} · <span className="text-accent">{year}</span>
        </div>
        <div className="text-sm text-faint">AI Backend Engineer · {profile.location}</div>
      </div>
    </footer>
  );
}
