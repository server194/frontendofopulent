"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function BlogPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  type BlogPost = {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    thumbnail: string;
    category: string;
    published_date: string;
    author_name: string;
    tags: { id: number; name: string }[];
  };

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/blogs/");
        const data = await res.json();
        setBlogPosts(data);
      } catch (err) {
        console.error("Failed to fetch:", err);
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Textile Industry Insights
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Stay updated with the latest trends, innovations, and expert
              perspectives in the textile industry
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 mb-4 text-center">
              <p>{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <ScrollAnimation
                  key={post.slug}
                  animation="slide-up"
                  delay={index * 0.1}
                >
                  <article className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={post.thumbnail || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                        unoptimized={post.thumbnail?.startsWith("http")}
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category || "Uncategorized"}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-4">
                        <div className="text-gray-500 text-sm mb-2">
                          {post.published_date
                            ? new Date(post.published_date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )
                            : "Unknown Date"}{" "}
                          • {post.author_name || "Anonymous"}
                        </div>
                        <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>

                        <p className="text-gray-600">
                          {post.excerpt.split(" ").slice(0, 25).join(" ")}...
                        </p>
                      </div>
                      <div className="mt-auto pt-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags?.slice(0, 3).map((tag) => (
                            <span
                              key={tag.id}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              #{tag.name}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-block mt-4 text-primary font-medium hover:underline"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Stay informed about the latest trends, insights, and updates in
                the textile industry by subscribing to our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}

//==============================================================================================================================================================================================
