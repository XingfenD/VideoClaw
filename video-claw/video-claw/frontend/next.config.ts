import type { NextConfig } from "next";

const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/code/:path*',
        destination: `${backendUrl}/code/:path*`,
      },
      {
        source: '/api/sessions',
        destination: `${backendUrl}/api/sessions`,
      },
      {
        source: '/api/sessions/:path*',
        destination: `${backendUrl}/api/sessions/:path*`,
      },
      // 工作流 API
      {
        source: '/api/project/:path*',
        destination: `${backendUrl}/api/project/:path*`,
      },
      {
        source: '/api/stages',
        destination: `${backendUrl}/api/stages`,
      },
      {
        source: '/api/upload_media',
        destination: `${backendUrl}/api/upload_media`,
      },
      {
        source: '/api/models',
        destination: `${backendUrl}/api/models`,
      },
      {
        source: '/api/config',
        destination: `${backendUrl}/api/config`,
      },
      {
        source: '/api/cache/:path*',
        destination: `${backendUrl}/api/cache/:path*`,
      },
      // 一键 pipeline API
      {
        source: '/api/pipelines',
        destination: `${backendUrl}/api/pipelines`,
      },
      {
        source: '/api/pipelines/:path*',
        destination: `${backendUrl}/api/pipelines/:path*`,
      },
      {
        source: '/api/tasks',
        destination: `${backendUrl}/api/tasks`,
      },
      {
        source: '/api/tasks/:path*',
        destination: `${backendUrl}/api/tasks/:path*`,
      },
      // 临时工作台 API
      {
        source: '/api/sandbox/:path*',
        destination: `${backendUrl}/api/sandbox/:path*`,
      },
    ];
  },
};

export default nextConfig;
