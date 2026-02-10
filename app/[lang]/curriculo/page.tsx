import { WorkInProgress } from "@/components/work-in-progress/work-in-progress"; // Adjust path if needed
import { getDictionary } from "@/lib/get-dictionary";

export default async function Curriculo({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="py-12">
      <WorkInProgress 
        title={dict.work_in_progress.title}
        description={dict.work_in_progress.description}
        buttonText={dict.work_in_progress.cta}
        backLink={`/${lang}`} 
      />
    </main>
  );
}