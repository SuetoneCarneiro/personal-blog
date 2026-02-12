import { getDictionary } from "@/lib/get-dictionary";
import { WebView } from "@/components/curriculum/web-view";
import { DownloadCvButton } from "@/components/curriculum/download-button";
import { CvData } from "@/types/cv";

export default async function Curriculo({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // We cast the data to our interface to ensure type safety
  const cvData = dict.cv as CvData;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        
        {/* Render the Web Version */}
        <WebView data={cvData} />

        {/* Render the PDF Download Button */}
        <DownloadCvButton data={cvData} />
        
      </div>
    </main>
  );
}