"use client";
import parse from "html-react-parser";

import { useEffect, useState } from "react";
import { baseURL } from "@/lib/constants";
import { useSearchParams } from "next/navigation";
import CommentForm from "@/components/CommentForm";
import Comment from "@/components/Comment";
import BlogForm from "@/components/BlogForm";

const BlogDetailPage = () => {
  const [blog, setBlog] = useState<any>({});
  const [slug, setSlug] = useState("");
  const searchParam = useSearchParams();

  const [allBlog, setAllBlog] = useState<any[]>([]);

  const getAllBlog = async () => {
    const response = await fetch(`${baseURL}/blog?Domain=vuasale`);
    if (response.ok) {
      const body = await response.json();
      setAllBlog(body.data);
    }
  };

  async function getBlog() {
    const response = await fetch(`${baseURL}/blog/${slug}`);
    if (response.ok) {
      const body = await response.json();
      setBlog(body.data);
    }
  }

  useEffect(() => {
    getAllBlog();
  }, []);

  useEffect(() => {
    if (searchParam) {
      setSlug(searchParam.get("blog") || "");
    }
  }, [searchParam]);

  useEffect(() => {
    if (slug.length > 0) {
      getBlog();
    }
  }, [slug]);

  return (
    <div className="container mx-auto py-12 xl:pt-16">
      <div className="flex flex-wrap justify-center xl:justify-between">
        {blog && (
          <div className="max-w-[800px]">
            <h1 className="font-bold text-3xl">{blog?.blog_title}</h1>
            <div className="my-12 xl:mt-16 text-justify text-xl">
              <p className="mt-3">
                {blog.blog_description && parse(blog.blog_description)}
              </p>
            </div>
            <div>
              <CommentForm />
              <div className="mt-8">
                <Comment />
              </div>
            </div>
          </div>
        )}
        <div className="w-full max-w-[400px] mt-10 xl:mt-0">
          <BlogForm allBlog={allBlog} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
