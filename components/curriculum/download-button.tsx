"use client";

import dynamic from "next/dynamic";
import { CvData } from "@/types/cv";

// Dynamically import the content component with SSR disabled
const DownloadButtonContent = dynamic(
  () => import("./download-button-content"),
  { 
    ssr: false,
    loading: () => <p className="text-center text-gray-400 mt-8">Loading PDF generator...</p>
  }
);

export function DownloadCvButton({ data }: Readonly<{ data: CvData }>) {
  return <DownloadButtonContent data={data} />;
}