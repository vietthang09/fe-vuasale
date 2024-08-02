"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                <div className="font-semibold hover:underline pb-2">
                  <Link
                    href={`/blog-details?blog=${blog.blog_slug}`}
                    key={index}
                  >
                    {blog.blog_title}
                  </Link>
                </div>
              );
            })}
      </CardContent>
    </Card>
  );
}
