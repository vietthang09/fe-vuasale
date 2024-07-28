"use client";

import Link from "next/link";
import { BookUser, Home, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 xl:pt-12 bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between text-center xl:flex-row place-items-center">
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61563079413460&tabs=timeline&width=340&height=70&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=391514680358503"
              width="340"
              height="160"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            <div>
              <span className="font-semibold mb-5 border-b-2 border-yellow-600">QUY ĐỊNH CHUNG</span>
              <ul className="mt-4 space-y-6">
                <li>
                  <Link
                    href="/terms-of-contract"
                    className="hover:text-[#8A3EAF]"
                  >
                    Điều khoản hợp đồng
                  </Link>
                </li>
                <li>
                  <Link href="/introduction" className="hover:text-[#8A3EAF]">
                    Giới thiệu công ty
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#8A3EAF]">
                    Chính sách riêng tư
                  </Link>
                </li>
                <li>
                  <Link
                    href="/payment-process"
                    className="hover:text-[#8A3EAF]"
                  >
                    Quy trình thanh toán
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="font-semibold mb-5 border-b-2 border-yellow-600">LIÊN HỆ</span>
              <ul className="mt-4 space-y-6 text">
                <li className="flex flex-row justify-center">
                  <Home size={18} className="mr-2" />
                  Địa chỉ: Lầu 1, 19/1/3 Đường Cô Bắc, Q. Phú Nhuận, TP. HCM
                </li>
                <li className="flex flex-row justify-center">
                  <Mail size={18} className="mr-2" />
                  Hỗ trợ kỹ thuật / khách hàng - support@fbuid.com
                </li>
                <li className="flex flex-row justify-center">
                  <Phone size={18} className="mr-2" />
                  0336877888
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
