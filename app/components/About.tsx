import Image from "next/image";

const profileImage = "https://www.figma.com/api/mcp/asset/70f8000d-0446-4f25-8996-5d96ddde8e31";
const instagramIcon = "https://www.figma.com/api/mcp/asset/c69e5d98-41fe-4431-b0db-c473c008578e";
const twitterIcon = "https://www.figma.com/api/mcp/asset/3c683bc7-c637-43d6-baf2-d4d508cc6e4d";
const facebookIcon = "https://www.figma.com/api/mcp/asset/4dea8951-ece4-467e-beba-dc6d385c7425";

const socialLinks = [
  { name: "Facebook", icon: facebookIcon, href: "#" },
  { name: "Instagram", icon: instagramIcon, href: "#" },
  { name: "Twitter", icon: twitterIcon, href: "#" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-[1440px] px-20">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p 
            className="text-[30px] font-bold text-[#e2750f]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            About
          </p>
          <h2 className="mt-2 text-[30px] font-bold text-white">
            私について
          </h2>
        </div>

        {/* Content */}
        <div className="flex gap-16">
          {/* Profile Image */}
          <div className="relative h-[338px] w-[230px] shrink-0 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#1a1a1a]">
            <Image
              src={profileImage}
              alt="Ayaka"
              fill
              className="object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            {/* Name */}
            <div className="mb-4 flex items-baseline gap-3">
              <p 
                className="text-[30px] font-bold text-[#e2750f]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Ayaka
              </p>
              <p className="text-[18px] font-bold leading-[30px] text-white">
                あやか
              </p>
            </div>

            <p className="mb-6 text-[18px] font-bold leading-[30px] text-[#a0a0a0]">
              2000年生まれ　千葉県出身　ドバイ在住
            </p>

            {/* Bio */}
            <div className="mb-8 space-y-0 text-[14px] font-normal leading-[30px] text-[#a0a0a0]">
              <p>
                ビジュアル戦略デザイナー。フリーランスとしてドバイを拠点にWEB・UI/UXデザイナー、WEBディレクターとして活動中。
              </p>
              <p>
                2000年 千葉県生まれ。ドバイ在住。明治学院大学経済学部卒業。
              </p>
              <p>
                プログラミング教育会社、不動産会社、コンサルティング会社にて専属デザイナーを経験。
              </p>
              <p>
                17歳の頃LAファッション留学を経験し、ハンドメイドブランドを立ち上げ。
              </p>
              <p>
                現地で出会った方の影響から経営者になるという目標を持ち今に至る。
              </p>
              <p>
                場所や時間にとらわれない自由な生き方を体現すべく、3年間国内外でのホテル暮らしを経て、2023年夏よりドバイへ移住。
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="relative size-[50px] rounded-full border border-[#2a2a2a] bg-[#1a1a1a] p-2 transition-all hover:border-[#e2750f] hover:shadow-[0_0_15px_rgba(226,117,15,0.3)]"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="rounded-full object-contain p-2"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
