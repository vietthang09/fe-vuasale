"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const features = [
  {
    image: "/image/feature-1.png",
    content:
      "Bạn chi quá nhiều tiền quảng cáo nhưng vẫn không có khách hàng gọi chốt đơn?",
    delay: 0.5,
  },
  {
    image: "/image/feature-2.png",
    content:
      'Mỗi lần nhân viên marketing nghỉ, face "bão" chết camp, test camp mới,... đều tốn cả đống chi phí, thời gian?',
    delay: 0.1,
  },
  {
    image: "/image/feature-3.png",
    content: "Chat, nhắn tin với khách nhưng mãi không có sđt để chốt đơn?",
    delay: 0.1,
  },
  {
    image: "/image/feature-4.png",
    content:
      "Việc quản lý, lưu trữ thông tin khách hàng khó khăn, quản lý nhân viên phức tạp?",
    delay: 0.5,
  },
];
export default function Feature() {
  return (
    <section id="feature" className="py-12 xl:pt-16">
      <div className="container mx-auto">
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="text-[#42495b] xl:text-[40px] text-3xl font-bold text-center pb-14"
        >
          CÓ PHẢI BẠN ĐANG GẶP KHÓ KHĂN ?
        </motion.p>
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-y-3 gap-x-3">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", feature.delay)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
                className="p-5 rounded-lg mr-5 hover:bg-violet-100 text-center"
              >
                <div className="flex justify-center">
                  <Image
                    className="w-[150px]"
                    src={feature.image}
                    alt="picture"
                    width={150}
                    height={150}
                  />
                </div> 
                <p className="my-8 mx-auto xl:mx-0 text-center">
                  {feature.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
