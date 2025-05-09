"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";

interface Tag {
  id: number;
  name: string;
}

interface TocItem {
  level: string;
  text: string;
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  published_date: string;
  author_name: string;
  author_bio: string;
  author_photo?: string;
  category: string;
  thumbnail?: string;
  tags: Tag[];
}

function escapeHTML(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function convertPlainTextToHTML(text: string): string {
  const lines = text.split("\n");
  let html = "";
  let inList = false;

  for (let line of lines) {
    line = line.trim();
    if (!line) {
      if (inList) {
        html += "</ul>\n";
        inList = false;
      }
      continue;
    }

    if (line.startsWith("\ud83d\udcd8")) {
      if (inList) {
        html += "</ul>\n";
        inList = false;
      }
      const heading = escapeHTML(line.substring(2).trim());
      html += `<h2 class="mt-12 mb-4 text-3xl font-bold text-gray-800">${heading}</h2>\n`;
    } else if (/^[A-Z][\w\s&]{2,60}$/.test(line) && !line.includes(":") && !line.includes(".")) {
      if (inList) {
        html += "</ul>\n";
        inList = false;
      }
      html += `<h3 class="mt-8 mb-2 text-xl font-semibold text-gray-700">${escapeHTML(line)}</h3>\n`;
    } else if (/^[\u2022*-]\s/.test(line)) {
      if (!inList) {
        html += "<ul class='list-disc pl-6 space-y-2 mb-4 mt-2 text-gray-600'>\n";
        inList = true;
      }
      html += `<li>${escapeHTML(line.replace(/^[\u2022*-]\s?/, ""))}</li>\n`;
    } else {
      if (inList) {
        html += "</ul>\n";
        inList = false;
      }
      html += `<p class="mt-3 text-gray-700 leading-relaxed">${escapeHTML(line)}</p>\n`;
    }
  }

  if (inList) {
    html += "</ul>\n";
  }

  return html;
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
  const [moreBlogs, setMoreBlogs] = useState<BlogPost[]>([]);

  const injectAnchors = (html: string) => {
    let processed = html.replace(/<h2[^>]*>(.*?)<\/h2>/g, (_, heading) => {
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      return `<h2 id="${id}" class="mt-12 mb-4 text-3xl font-bold text-gray-800">${heading}</h2>`;
    });

    processed = processed.replace(/<h3[^>]*>(.*?)<\/h3>/g, (_, heading) => {
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      return `<h3 id="${id}" class="mt-8 mb-2 text-xl font-semibold text-gray-700">${heading}</h3>`;
    });

    return processed;
  };
  
  // Improved Image Component with better loading and error handling
  const ImageComponent = ({ src, alt, className }: { src: string, alt: string, className: string }) => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    // Check if the URL is valid on component mount
    useEffect(() => {
      if (!src || src === "") {
        console.log("ImageComponent received invalid src:", src);
        setIsError(true);
        setIsLoading(false);
      } else {
        console.log("ImageComponent attempting to load:", src);
        setIsError(false);
        setIsLoading(true);
      }
    }, [src]);
    
    // Create a simple SVG placeholder that works inline without external resources
    const renderPlaceholder = () => {
      console.log("Rendering placeholder for:", src);
      return (
        <div className={`${className} bg-gray-200 flex items-center justify-center overflow-hidden`}>
          <svg 
            width="100"
            height="100"
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
            style={{ maxWidth: '60%', maxHeight: '60%' }}
          >
            <rect x="10" y="10" width="80" height="80" fill="#f0f0f0" stroke="#ccc" strokeWidth="2" />
            <circle cx="35" cy="35" r="8" fill="#ccc" />
            <path d="M85 75 L65 55 L45 75 L25 60 L15 70" stroke="#ccc" strokeWidth="2" fill="none" />
          </svg>
        </div>
      );
    };
    
    // If no source or error occurred, just show placeholder
    if (!src || src === "" || isError) {
      return renderPlaceholder();
    }
    
    // Return the image with error handling
    return (
      <>
        {isLoading && renderPlaceholder()}
        <img 
          src={src}
          alt={alt || "Blog image"} 
          className={`${className} ${isLoading ? 'hidden' : ''}`}
          onError={(e) => {
            console.error("Image failed to load:", src, e);
            setIsError(true);
            setIsLoading(false);
          }}
          onLoad={() => {
            console.log("Image loaded successfully:", src);
            setIsLoading(false);
          }}
        />
      </>
    );
  };

  // Function to extract headings from blog content
  const extractHeadings = (content: string): TocItem[] => {
    const headings: TocItem[] = [];
    const lines = content.split("\n");
    
    for (let line of lines) {
      line = line.trim();
      
      // Match h2 headings (lines starting with 📘)
      if (line.startsWith("\ud83d\udcd8")) {
        const heading = line.substring(2).trim();
        headings.push({ level: "h2", text: heading });
      } 
      // Match h3 headings (lines with capital letters, no colon, no period)
      else if (/^[A-Z][\w\s&]{2,60}$/.test(line) && !line.includes(":") && !line.includes(".")) {
        headings.push({ level: "h3", text: line });
      }
    }
    
    return headings;
  };

  const [allBlogHeadings, setAllBlogHeadings] = useState<BlogPost[]>([]);
  
  // Helper function to ensure image URLs are properly formatted
  const formatImageUrl = (url: string | undefined): string | null => {
    // Debug the incoming URL
    console.log("Processing URL:", url);
    
    if (!url) {
      console.log("URL is empty or undefined");
      return null;
    }
    
    if (url === "") {
      console.log("URL is an empty string");
      return null;
    }
    
    // Django typically returns a relative URL starting with /media/
    if (url.startsWith('/media/')) {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
      const fullUrl = `${baseUrl}${url}`;
      console.log("Formatted Django media URL:", fullUrl);
      return fullUrl;
    }
    
    // If it's already a full URL, return it
    if (url.startsWith('http://') || url.startsWith('https://')) {
      console.log("URL is already absolute:", url);
      return url;
    }
    
    // For any other format of URL, assume it's relative to the API root
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const fullUrl = `${baseUrl}/media/${url}`;
    console.log("Constructed URL for relative path:", fullUrl);
    return fullUrl;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
        const res = await fetch(`${apiBaseUrl}/api/blogs/${slug}/`);
        const blogListRes = await fetch(`${apiBaseUrl}/api/blogs/`);

        if (!res.ok || !blogListRes.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        const allBlogs = await blogListRes.json();
        const blogList = allBlogs.results || allBlogs;
        
        // Debug logging
        console.log("Blog data:", data);
        console.log("Original thumbnail URL:", data.thumbnail);
        
        // Format thumbnail URL
        if (data.thumbnail) {
          data.thumbnail = formatImageUrl(data.thumbnail);
          console.log("Formatted thumbnail URL:", data.thumbnail);
        }
        
        // Format thumbnails for all blogs
        const formattedBlogList = blogList.map((blog: BlogPost) => {
          const formattedBlog = {
            ...blog,
            thumbnail: formatImageUrl(blog.thumbnail)
          };
          console.log(`Blog "${blog.title}" thumbnail:`, blog.thumbnail, "→", formattedBlog.thumbnail);
          return formattedBlog;
        });

        setPost(data);
        
        // Extract table of contents from blog content
        const extractedToc = extractHeadings(data.content);
        setToc(extractedToc);

        // Set all blogs for Table of Contents sidebar
        setAllBlogHeadings(formattedBlogList);

        const filtered = formattedBlogList.filter((b: BlogPost) => b.slug !== slug);
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        setRelatedBlogs(shuffled.slice(0, 2));
        setMoreBlogs(shuffled.slice(2, 5)); // Get 3 blogs for "More Articles" section
      } catch (err: any) {
        console.error("Error fetching blog:", err);
        setError(err.message || "Error fetching blog");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchData();
  }, [slug]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!post) return <div className="text-center py-20 text-red-500">Blog not found.</div>;

  return (
    <main className="flex flex-col">
      {/* Header section with heading */}
      <section className="pt-20 pb-10 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade">
            <Link href="/blog" className="inline-flex items-center text-primary font-medium mb-4 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <div className="text-gray-600 text-sm">
              {new Date(post.published_date).toDateString()} • By {post.author_name}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-6">
        <div className="container mx-auto px-4">
          {/* Main image - full width */}
          {post.thumbnail ? (
            <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-10 relative">
              <ImageComponent
                src={post.thumbnail}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-10 relative bg-gray-200 flex items-center justify-center">
              <svg 
                width="120"
                height="120"
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
              >
                <rect x="10" y="10" width="80" height="80" fill="#f0f0f0" stroke="#ccc" strokeWidth="2" />
                <circle cx="35" cy="35" r="8" fill="#ccc" />
                <path d="M85 75 L65 55 L45 75 L25 60 L15 70" stroke="#ccc" strokeWidth="2" fill="none" />
              </svg>
            </div>
          )}

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main content - 3/4 width */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: injectAnchors(convertPlainTextToHTML(post.content)) }} />
              </article>

              <div className="mt-12">
                <h3 className="text-lg font-bold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag.id} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - 1/4 width */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 h-fit">
              {/* Table of Contents */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <div className="space-y-2 text-sm">
                  {allBlogHeadings && allBlogHeadings.length > 0 ? (
                    allBlogHeadings.map((blog) => (
                      <Link 
                        key={blog.id} 
                        href={`/blog/${blog.slug}`}
                        className={`block py-1 text-gray-600 hover:text-primary ${blog.slug === slug ? 'font-bold text-primary' : ''}`}
                      >
                        {blog.title}
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500">Loading blogs...</p>
                  )}
                </div>
              </div>

              {/* Related Articles */}
              <div>
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedBlogs.map((item) => (
                    <Link key={item.id} href={`/blog/${item.slug}`} className="flex items-center space-x-4 hover:text-primary">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                        {item.thumbnail ? (
                          <ImageComponent
                            src={item.thumbnail}
                            alt={item.title}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <svg 
                              viewBox="0 0 100 100" 
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-10 h-10 text-gray-400"
                            >
                              <rect x="10" y="10" width="80" height="80" fill="#f0f0f0" stroke="#ccc" strokeWidth="2" />
                              <circle cx="35" cy="35" r="8" fill="#ccc" />
                              <path d="M85 75 L65 55 L45 75 L25 60 L15 70" stroke="#ccc" strokeWidth="2" fill="none" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-700 leading-tight line-clamp-3">{item.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* More Articles section - full width */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">More Articles You Might Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {moreBlogs.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/blog/${item.slug}`} 
                  className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <div className="w-full h-52 overflow-hidden relative">
                    {item.thumbnail ? (
                      <ImageComponent
                        src={item.thumbnail}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg 
                          viewBox="0 0 100 100" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 text-gray-400"
                        >
                          <rect x="10" y="10" width="80" height="80" fill="#f0f0f0" stroke="#ccc" strokeWidth="2" />
                          <circle cx="35" cy="35" r="8" fill="#ccc" />
                          <path d="M85 75 L65 55 L45 75 L25 60 L15 70" stroke="#ccc" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gray-800 leading-snug">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}