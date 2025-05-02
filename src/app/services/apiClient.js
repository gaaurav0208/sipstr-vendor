import axios from 'axios';

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://sipstr-vendor.vercel.app' || 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
    },
  });
