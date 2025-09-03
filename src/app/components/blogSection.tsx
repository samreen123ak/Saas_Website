// app/components/BlogSection.tsx
"use client";

import React from "react";
import Image from "next/image";

interface BlogPost {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image:
      "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
    subtitle: "Technology",
    title: "The Future of AI in Web Development",
    author: "John Doe",
    date: "Aug 20, 2025",
  },
  {
    id: 2,
    image:
      "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_537311951_100178.jpg",
    subtitle: "Design",
    title: "Minimalism in UI: Why Less is More",
    author: "Jane Smith",
    date: "Aug 22, 2025",
  },
  {
    id: 3,
    image:
      "https://www.phoneworld.com.pk/wp-content/uploads/2019/12/how-to-start-a-business-featured-web-final.jpg",
    subtitle: "Startup",
    title: "How to Bootstrap Your Startup",
    author: "Mike Johnson",
    date: "Aug 25, 2025",
  },
  {
    id: 4,
    image:
      "https://cms-assets.themuse.com/media/lead/01212022-1047259374-coding-classes_scanrail.jpg",
    subtitle: "Coding",
    title: "10 JavaScript Tricks You Should Know",
    author: "Sarah Lee",
    date: "Aug 26, 2025",
  },
  {
    id: 5,
    image:
      "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630",
    subtitle: "Business",
    title: "Remote Work: The New Normal",
    author: "David Kim",
    date: "Aug 28, 2025",
  },
  {
    id: 6,
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQGC8DLi1bTxTw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1715018366766?e=2147483647&v=beta&t=cFOdk966mr7RQ3NxiAt7Q3F8id4y2tHZnmCBn3MKe7o",
    subtitle: "Cloud",
    title: "Why Cloud Computing is the Future",
    author: "Emily Carter",
    date: "Aug 30, 2025",
  },
];

const BlogSection = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-b from-blue-200 to-blue-50 py-16 px-6 text-center rounded m-10 shadow transition hover:shadow-lg"
        data-aos="fade-up"
      >
        <button className="bg-white text-xs px-4 py-1 rounded-full font-bold mb-4">
          Our Blog
        </button>
        <h1 className="text-4xl font-bold text-black mb-2">
          Resources for makers &<br /> creative to learn, sell & grow
        </h1>
        <p className="text-gray-600 mb-6">
          The only corporate card and spend management platform designed to help
          you spend less
        </p>
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer">
            Search
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10"
        data-aos="fade-up"
      >
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-blue-600 font-medium mb-1">{post.subtitle}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {post.title}
              </h3>
              <div className="flex justify-between text-xs text-gray-500">
                <span>by {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
