"use client";
import Image from "next/image";
import PaginationCard from "@/components/PaginationCard";
import BlogForm from "@/components/BlogForm";
import Link from "next/link";
import { useEffect, useState } from "react";
import { baseURL } from "@/lib/constants";
import parse from "html-react-parser";

const BlogPage = () => {
  const [allBlog, setAllBlog] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const getAllBlog = async () => {
    const response = await fetch(
      `${baseURL}/blog?Domain=vuasale&Page=${currentPage}&Limit=18`
    );
    if (response.ok) {
      const body = await response.json();
      setAllBlog(body.data);
      setTotalPage(body.pageTotal);
    }
  };
  useEffect(() => {
    getAllBlog();
  }, [currentPage]);

  return (
    <div className="container mx-auto py-12 xl:pt-16 space-y-16">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Bài viết mới nhất</h1>
        <div className="grid grid-cols-12 gap-8">
          {allBlog &&
            allBlog
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((blog, index) => {
                return (
                  <Link
                    className="col-span-4 bg-white border rounded-xl space-y-2"
                    href={`/blog-details?blog=${blog.blog_slug}`}
                    key={index}
                  >
                    <div>
                      <img
                        className="w-full object-cover"
                        src={blog.blog_image && blog.blog_image}
                        alt=""
                      />
                      <h4 className="p-6 text-xl font-semibold line-clamp-2">
                        {blog.blog_title}
                      </h4>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Phổ biến</h1>
        <div>
          <div className="grid grid-cols-12 gap-4">
            {allBlog &&
              allBlog.map((blog, index) => {
                return (
                  <Link
                    className="col-span-6 grid grid-cols-12 flex bg-white border-2 border-outline rounded-xl overflow-hidden hover:cursor-pointer group hover:hover:bg-violet-100 transition-all duration-700"
                    href={`/blog-details?blog=${blog.blog_slug}`}
                    key={index}
                  >
                    <div className="col-span-8">
                      <h4 className="p-4 font-semibold line-clamp-2">
                        {blog.blog_title}
                      </h4>
                    </div>
                    <img
                      className="p-4 col-span-4 w-full object-cover"
                      src={blog.blog_image && blog.blog_image}
                      alt=""
                    />
                  </Link>
                );
              })}
          </div>
          <div className="mt-2">
            <PaginationCard
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
