import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "media.istockphoto.com",
      "t4.ftcdn.net",
      "img-cdn.inc.com",
      "www.phoneworld.com.pk",
      "cms-assets.themuse.com",
      "online.hbs.edu",
      "media.licdn.com",
      "media.gettyimages.com",
      "plus.unsplash.com",
       "z-m-static.xx.fbcdn.net",  
      "upload.wikimedia.org",      
      "static.vecteezy.com",       
      "storage.googleapis.com",
    ],
  },
};

export default nextConfig;
