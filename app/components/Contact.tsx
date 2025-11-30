"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] py-20">
      <div className="mx-auto max-w-[1440px] px-20">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p 
            className="text-[30px] font-bold text-[#e2750f]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Contact
          </p>
          <h2 className="mt-2 text-[30px] font-bold text-white">
            お問い合わせ
          </h2>
        </div>

        {/* Form Card */}
        <div className="mx-auto max-w-[830px] rounded-[30px] border border-[#2a2a2a] bg-[#141414] px-[116px] py-16 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[16px] font-bold leading-[30px] text-white">
                  お名前
                </label>
                <span className="rounded bg-[#e2750f] px-1.5 py-0.5 text-[12px] font-bold text-white">
                  必須
                </span>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="例）山田　太郎　"
                className="h-[52px] w-full rounded-[5px] border border-[#2a2a2a] bg-[#1a1a1a] px-5 text-[16px] text-white placeholder:text-[#505050] focus:border-[#e2750f] focus:outline-none focus:ring-1 focus:ring-[#e2750f]/30"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[16px] font-bold leading-[30px] text-white">
                  電話番号
                </label>
                <span className="rounded bg-[#e2750f] px-1.5 py-0.5 text-[12px] font-bold text-white">
                  必須
                </span>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="例）0120-200-177"
                className="h-[52px] w-full rounded-[5px] border border-[#2a2a2a] bg-[#1a1a1a] px-5 text-[16px] text-white placeholder:text-[#505050] focus:border-[#e2750f] focus:outline-none focus:ring-1 focus:ring-[#e2750f]/30"
                required
              />
            </div>

            {/* Email */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[16px] font-bold leading-[30px] text-white">
                  メールアドレス
                </label>
                <span className="rounded bg-[#e2750f] px-1.5 py-0.5 text-[12px] font-bold text-white">
                  必須
                </span>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="例）sample@xxx.com"
                className="h-[52px] w-full rounded-[5px] border border-[#2a2a2a] bg-[#1a1a1a] px-5 text-[16px] text-white placeholder:text-[#505050] focus:border-[#e2750f] focus:outline-none focus:ring-1 focus:ring-[#e2750f]/30"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[16px] font-bold leading-[30px] text-white">
                  お問い合わせタイトル
                </label>
                <span className="rounded bg-[#e2750f] px-1.5 py-0.5 text-[12px] font-bold text-white">
                  必須
                </span>
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="お見積もりについて"
                className="h-[52px] w-full rounded-[5px] border border-[#2a2a2a] bg-[#1a1a1a] px-5 text-[16px] text-white placeholder:text-[#505050] focus:border-[#e2750f] focus:outline-none focus:ring-1 focus:ring-[#e2750f]/30"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-[16px] font-bold leading-[30px] text-white">
                お問い合わせ内容
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="こちらにご記入ください。"
                rows={6}
                className="min-h-[200px] w-full resize-none rounded-[5px] border border-[#2a2a2a] bg-[#1a1a1a] px-5 py-4 text-[16px] text-white placeholder:text-[#505050] focus:border-[#e2750f] focus:outline-none focus:ring-1 focus:ring-[#e2750f]/30"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 h-[60px] w-full rounded-full bg-gradient-to-r from-[#e2750f] to-[#f58320] text-[18px] font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(226,117,15,0.5)]"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
