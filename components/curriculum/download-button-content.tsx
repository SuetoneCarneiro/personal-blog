"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { CvPdfDocument } from "./pdf-document";
import { CvData } from "@/types/cv";

export default function DownloadButtonContent({ data }: Readonly<{ data: CvData }>) {
  return (
    <div className="mt-8 flex justify-center">
      <PDFDownloadLink
        document={<CvPdfDocument data={data} />}
        fileName={`CV_${data.header.name.replace(" ", "_")}.pdf`}
        className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white shadow-md transition-colors hover:bg-blue-700 flex items-center gap-2"
      >
        {/* We use a render prop here to handle loading state text */}
        {({ loading }) => (loading ? "Generating PDF..." : data.labels.download)}
      </PDFDownloadLink>
    </div>
  );
}