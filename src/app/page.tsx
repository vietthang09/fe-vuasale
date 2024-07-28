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
    <div className="container mx-auto py-12 xl:pt-16">
      <div className="flex flex-wrap justify-center xl:justify-between">
        <div>
          <div className="grid gap-y-10 xl:gap-y-10 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-[30px]">
            {allBlog &&
              allBlog.map((blog, index) => {
                return (
                  <Link
                    href={`/blog-details?blog=${blog.blog_slug}`}
                    key={index}
                  >
                    <div className="border-2 border-outline w-[270px] rounded-xl overflow-hidden hover:cursor-pointer group hover:hover:bg-violet-100 transition-all duration-700 mx-auto xl:mx-0">
                      <img
                        className="w-270 h-270 object-cover"
                        style={{ width: "270px", height: "270px" }}
                        width={270}
                        height={270}
                        src={blog.blog_image && blog.blog_image}
                        alt=""
                      />
                      <div className="p-6">
                        <h4 className="font-semibold">{blog.blog_title}</h4>
                        <p>{blog.blog_description}</p>
                      </div>
                    </div>
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
        <div className="w-full max-w-[400px] mt-10 xl:mt-0">
          <BlogForm allBlog={allBlog} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
