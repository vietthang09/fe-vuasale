"use client";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function BlogForm(props: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bài viết nổi bật</CardTitle>
      </CardHeader>
      <CardContent>
        {props.allBlog &&
          props.allBlog
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((blog: any, index: number) => {
              return (
                <div className="w-full">
                  <Link
                    href={`/blog-details?blog=${blog.blog_slug}`}
                    key={index}
                  >
                    <Button variant="link">{blog.blog_title}</Button>
                  </Link>
                </div>
              );
            })}
      </CardContent>
    </Card>
    // <motion.div
    //     variants={fadeIn('left', 0.1)}
    //     initial='hidden'
    //     whileInView={'show'}
    //     viewport={{once: false, amount: 0.4}}
    //     className='w-full bg-white shadow-lg max-h-max flex flex-col border border-outline rounded-[20px] p-10'>
    //     <div className='mb-[20px]'>
    //         <Label htmlFor='name'>Họ và tên</Label>
    //         <div>
    //             <Input id='name'/>
    //         </div>
    //     </div>
    //     <div className='mb-[20px]'>
    //         <Label htmlFor='phone'>Số điện thoại</Label>
    //         <div>
    //             <Input id='phone'/>
    //         </div>
    //     </div>
    //     <div className='mb-[20px]'>
    //         <Label htmlFor='request'>Yêu cầu</Label>
    //         <div>
    //             <Input id='request'/>
    //         </div>
    //     </div>
    //     <Button size='lg'>
    //         Submit
    //     </Button>
    // </motion.div>
  );
}
