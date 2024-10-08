import React from 'react'
import Home from '../components/home/index'
import type { Metadata } from "next";  

const Page = () => {
  return <Home />;
};

export default Page;

export const metadata: Metadata = {
  title: "Algoscope",
  description: "DSA visualizer",
};