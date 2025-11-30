"use client";

import Link from "next/link";

const navItems = [
  { label: "私について", href: "#about" },
  { label: "制作実績", href: "#works" },
  { label: "サービス内容", href: "#service" },
  { label: "お知らせ", href: "#blog" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-[#2a2a2a] bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-10">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-[30px] font-bold text-white transition-colors hover:text-[#e2750f]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          AYA Design
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[16px] font-bold text-[#a0a0a0] transition-colors hover:text-[#e2750f]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Contact Button */}
          <Link
            href="#contact"
            className="ml-4 flex h-[53px] w-[170px] items-center justify-center rounded-full bg-[#e2750f] text-[16px] font-bold text-white transition-all hover:bg-[#f58320] hover:shadow-[0_0_20px_rgba(226,117,15,0.4)]"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
