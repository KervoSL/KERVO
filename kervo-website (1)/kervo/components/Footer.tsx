import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor" className="text-white">
                <path d="M140 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32z" />
                <path d="M249.4 236.6 388.9 96.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L214.1 181.3c-11.9 11.9-11.9 31.2 0 43.1L343.6 354c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L249.4 236.6z" />
              </svg>
              <span className="text-sm font-semibold tracking-wordmark uppercase text-white">Kervo</span>
            </div>
            <p className="mt-4 text-sm text-neutral-500 max-w-xs">Software That Empowers.</p>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3 text-sm">
            <a href="#products" className="text-neutral-400 hover:text-white transition-colors">Products</a>
            <a href="#principles" className="text-neutral-400 hover:text-white transition-colors">Principles</a>
            <a href="#careers" className="text-neutral-400 hover:text-white transition-colors">Careers</a>
            <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a>
            <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms</Link>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} KERVO. All rights reserved.</p>
          <p className="text-xs text-neutral-600">Designed and built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
