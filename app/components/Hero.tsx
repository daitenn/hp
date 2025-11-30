import Image from "next/image";
import Link from "next/link";

const heroImage = "https://www.figma.com/api/mcp/asset/70f8000d-0446-4f25-8996-5d96ddde8e31";

export default function Hero() {
  return (
    <section className="relative h-[800px] w-full overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-20">
        {/* Main Copy */}
        <h1 
          className="text-[60px] font-bold leading-tight text-white"
          style={{ textShadow: "0px 4px 24px rgba(0, 0, 0, 0.5)" }}
        >
          自由と成長のきっかけを提供し、
          <br />
          共に新しい可能性を切り拓く。
        </h1>

        {/* Sub Copy */}
        <p 
          className="mt-6 text-[20px] font-medium leading-relaxed text-[#a0a0a0]"
          style={{ 
            fontFamily: "Montserrat, sans-serif",
            textShadow: "0px 4px 24px rgba(0, 0, 0, 0.5)"
          }}
        >
          Fostering opportunities for freedom and growth,
          <br />
          together forging new possibilities.
        </p>
      </div>

      {/* CTA Card */}
      <div className="absolute right-0 top-[497px] flex h-[182px] w-[310px] flex-col items-center justify-center rounded-bl-[60px] rounded-tl-[60px] bg-gradient-to-r from-[#e2750f] to-[#f58320] px-6 shadow-[0_0_40px_rgba(226,117,15,0.3)]">
        <p 
          className="mb-4 text-[20px] font-medium text-white"
          style={{ fontFamily: "Montserrat, Noto Sans JP, sans-serif" }}
        >
          無料相談受付中！
        </p>
        <Link
          href="#contact"
          className="flex h-[53px] w-[220px] items-center justify-center rounded-full bg-white text-[16px] font-bold text-[#e2750f] transition-all hover:bg-[#0a0a0a] hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}
