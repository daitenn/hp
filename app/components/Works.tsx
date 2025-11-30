import Image from "next/image";

const imgImage = "https://www.figma.com/api/mcp/asset/46701b76-c804-4933-ae19-d042b781ec9e";
const imgImage1 = "https://www.figma.com/api/mcp/asset/08772317-d30e-4eb0-8007-143361b92771";
const imgWorksMiladya = "https://www.figma.com/api/mcp/asset/d294d509-d32a-4cd7-9b26-18f55418872d";

const works = [
  {
    image: imgImage,
    client: "株式会社ABC様",
    title: "美容サロンHP制作",
    tag: "HP",
  },
  {
    image: imgImage1,
    client: "株式会社ABC様",
    title: "ウェディングフォトサービスLP",
    tag: "LP",
  },
  {
    image: imgWorksMiladya,
    client: "株式会社ABC様",
    title: "Instagram用投稿作成・運用",
    tag: "SNS",
  },
];

export default function Works() {
  return (
    <section id="works" className="bg-[#141414] py-20">
      <div className="mx-auto max-w-[1440px] px-20">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p 
            className="text-[30px] font-bold text-[#e2750f]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Works
          </p>
          <h2 className="mt-2 text-[30px] font-bold text-white">
            制作実績
          </h2>
        </div>

        {/* Works Grid */}
        <div className="flex justify-center gap-8">
          {works.map((work, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative mb-4 size-[360px] overflow-hidden rounded-[20px] border border-[#2a2a2a]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              
              {/* Info */}
              <div className="flex flex-col gap-2">
                <p className="text-[16px] font-normal leading-[20px] text-[#a0a0a0]">
                  {work.client}
                </p>
                <p className="text-[16px] font-bold leading-[20px] text-white">
                  {work.title}
                </p>
                <span className="inline-flex w-fit items-center justify-center rounded-[8px] border border-[#e2750f]/30 bg-[#1f1510] px-3 py-0 text-[16px] font-normal leading-[30px] text-[#e2750f]">
                  {work.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
