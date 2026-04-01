import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full py-8 mt-auto bg-surface border-t border-outline-variant/15 font-body text-xs uppercase tracking-widest"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-4 max-w-[1440px] mx-auto">
        <span className="text-outline/70">
          © 2024 University Laboratory Inventory Management. All rights
          reserved.
        </span>
        <div className="flex gap-8">
          <Link
            href="#"
            className="text-outline/50 hover:text-on-surface-variant transition-colors"
          >
            Support
          </Link>
          <Link
            href="#"
            className="text-outline/50 hover:text-on-surface-variant transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-outline/50 hover:text-on-surface-variant transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/ex/code.html"
            className="text-outline/50 hover:text-on-surface-variant transition-colors"
          >
            Documentation
          </Link>
        </div>
      </div>
    </footer>
  );
}
