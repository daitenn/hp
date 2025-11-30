import Image from "next/image";
import Link from "next/link";

const imgAdobeStock209906015 = "https://www.figma.com/api/mcp/asset/0c227d51-3f7d-45d4-a096-969c80fcc34a";
const imgAdobeStock209906016 = "https://www.figma.com/api/mcp/asset/bc33a2cb-f51f-42f3-9f5a-e49327e80463";
const imgAdobeStock209906017 = "https://www.figma.com/api/mcp/asset/34c8b771-41ed-4967-8c1d-b660fea2947c";

const blogs = [
  {
    image: imgAdobeStock209906015,
    tag: "お知らせ",
    title: "8/15-8/20まで夏季休暇をいただきます。",
    date: "2024.8.10",
  },
  {
    image: imgAdobeStock209906016,
    tag: "お知らせ",
    title: "8/15-8/20まで夏季休暇をいただきます。",
    date: "2024.8.10",
  },
  {
    image: imgAdobeStock209906017,
    tag: "お知らせ",
    title: "8/15-8/20まで夏季休暇をいただきます。",
    date: "2024.8.10",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-[#141414] py-20">
      <div className="mx-auto max-w-[1440px] px-20">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p 
            className="text-[30px] font-bold text-[#e2750f]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Blog
          </p>
          <h2 className="mt-2 text-[30px] font-bold text-white">
            ブログ
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="flex justify-center gap-8">
          {blogs.map((blog, index) => (
            <article 
              key={index}
              className="group w-[360px] cursor-pointer overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#1a1a1a] transition-all hover:border-[#e2750f]/50 hover:shadow-[0_0_30px_rgba(226,117,15,0.1)]"
            >
              {/* Image */}
              <div className="relative h-[210px] w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-2 p-6">
                <span className="inline-flex w-fit items-center justify-center rounded-[8px] border border-[#e2750f]/30 bg-[#1f1510] px-3 py-0 text-[16px] font-normal leading-[30px] text-[#e2750f]">
                  {blog.tag}
                </span>
                <h3 className="text-[16px] font-bold leading-[20px] text-white">
                  {blog.title}
                </h3>
                <time 
                  className="text-[16px] font-normal leading-[20px] text-[#a0a0a0]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {blog.date}
                </time>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="size-[10px] rounded-full bg-[#e2750f]" />
          <span className="size-[10px] rounded-full bg-[#2a2a2a]" />
          <span className="size-[10px] rounded-full bg-[#2a2a2a]" />
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="flex h-[53px] w-[220px] items-center justify-center rounded-full border border-[#e2750f] bg-transparent text-[16px] font-bold text-[#e2750f] transition-all hover:bg-[#e2750f] hover:text-white hover:shadow-[0_0_20px_rgba(226,117,15,0.4)]"
          >
            ブログ一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
