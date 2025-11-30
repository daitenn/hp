import Image from "next/image";
import Link from "next/link";

const instagramIcon = "https://www.figma.com/api/mcp/asset/8006512c-cb9b-4596-8b20-690b054f8136";

const navItems = [
  { label: "私について", href: "#about" },
  { label: "制作実績", href: "#works" },
  { label: "サービス内容", href: "#service" },
  { label: "お知らせ", href: "#blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a] py-12">
      <div className="mx-auto max-w-[1440px] px-20">
        <div className="flex justify-between">
          {/* Left Side */}
          <div>
            {/* Logo */}
            <h2 
              className="mb-4 text-[42px] font-bold text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AYA Design
            </h2>
            
            {/* Tagline */}
            <p className="mb-6 text-[16px] font-bold leading-[25px] text-[#a0a0a0]">
              自由と成長のきっかけを提供し、
              <br />
              共に新しい可能性を切り拓く。
            </p>

            {/* Social */}
            <a
              href="#"
              className="relative block size-[30px] rounded-full transition-opacity hover:opacity-80"
            >
              <Image
                src={instagramIcon}
                alt="Instagram"
                fill
                className="object-contain"
              />
            </a>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-end gap-6">
            {/* Navigation */}
            <nav>
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
            </nav>

            {/* Contact Button */}
            <Link
              href="#contact"
              className="flex h-[53px] w-[220px] items-center justify-center rounded-full bg-gradient-to-r from-[#e2750f] to-[#f58320] text-[16px] font-bold text-white transition-all hover:shadow-[0_0_20px_rgba(226,117,15,0.4)]"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p 
          className="mt-12 text-center text-[11px] font-normal text-[#505050]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          © 2025 AYA Design, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
