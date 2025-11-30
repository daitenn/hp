import Image from "next/image";

const imgLaptop = "https://www.figma.com/api/mcp/asset/f4a093c0-9911-497a-89d3-19f8cc3928d3";
const imgMobile = "https://www.figma.com/api/mcp/asset/ac974e4f-1d16-429f-a64a-09a48ed1485a";
const imgDesign = "https://www.figma.com/api/mcp/asset/c703f715-ea1c-485f-a44b-89254a5b880f";
const imgLogo = "https://www.figma.com/api/mcp/asset/8bf33a6b-cccc-4a19-8ca2-2cfd902a4133";

const services = [
  {
    icon: imgLaptop,
    title: "WEB制作",
    description: "コーポレートサイト・ランディングページ・ECサイト・メディアサイト等、運営目的に応じて最適なデザインと機能を持ったウェブサイトを制作いたします。既存ウェブサイトのリニューアルやリデザイン、機能の追加やコンテンツの追加などもお気軽にご相談ください。",
    price: "30万円〜",
  },
  {
    icon: imgMobile,
    title: "UIUXデザイン",
    description: "スマホアプリやWebアプリ等、ユーザーがサービスを利用することで得られる体験から構築し、最大限の価値が得られるような心地よい見た目作りをしていきます。導線を考え、ユーザーファーストのものづくりをしています。",
    price: "要相談",
  },
  {
    icon: imgDesign,
    title: "グラフィックデザイン",
    description: "パンフレット・ポスター・パッケージ・名刺・プレゼン資料などの印刷物のデザインを承っております。体系的に分かりやすく説明したい、商品を美しく見せたいなど幅広いニーズにご対応出来る技術と実績がございます。",
    priceDetails: [
      { label: "チラシ", price: "3万円〜" },
      { label: "パンフレット", price: "3万円〜" },
      { label: "名刺", price: "1万円〜" },
    ],
  },
  {
    icon: imgLogo,
    title: "ロゴデザイン",
    description: "ブランディングとなるロゴ制作を承っております。新規立ち上げでブランディングが決まっていない方でも、ヒアリングを通し構想段階からお手伝いいたします。ブランディング全体のデザイン統一に役立つスタイルガイドも作成いたします。",
    price: "5万円〜",
  },
];

export default function Service() {
  return (
    <section id="service" className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-[1440px] px-20">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p 
            className="text-[30px] font-bold text-[#e2750f]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Service
          </p>
          <h2 className="mt-2 text-[30px] font-bold text-white">
            サービス内容
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group flex h-[349px] flex-col rounded-[20px] border border-[#2a2a2a] bg-[#1a1a1a] p-6 transition-all hover:border-[#e2750f]/50 hover:shadow-[0_0_30px_rgba(226,117,15,0.1)]"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="relative size-[100px] shrink-0 rounded-[12px] bg-[#252525] p-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="text-[32px] font-bold leading-[30px] text-[#e2750f]">
                    {service.title}
                  </h3>
                  <p className="text-[16px] font-normal leading-[30px] text-[#a0a0a0]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mt-auto flex items-end gap-6 pl-[116px]">
                <span className="text-[22px] font-bold leading-[30px] text-[#e2750f]">
                  料金
                </span>
                {service.price ? (
                  <span className="text-[40px] font-bold leading-[39px] text-white">
                    {service.price.includes("要相談") ? (
                      service.price
                    ) : (
                      <>
                        <span className="text-[40px]">{service.price.replace("万円〜", "")}</span>
                        <span className="text-[22px]">万円〜</span>
                      </>
                    )}
                  </span>
                ) : (
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-6 text-[14px] font-bold text-[#a0a0a0]">
                      {service.priceDetails?.map((detail, i) => (
                        <span key={i}>{detail.label}</span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      {service.priceDetails?.map((detail, i) => (
                        <span key={i} className="font-bold text-white">
                          <span className="text-[40px]">{detail.price.replace("万円〜", "")}</span>
                          <span className="text-[22px]">万円〜</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
