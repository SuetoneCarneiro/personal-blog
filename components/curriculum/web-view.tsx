import { CvData } from "@/types/cv";

export function WebView({ data }: Readonly<{ data: CvData }>) {
  return (
    <div className="bg-white p-8 shadow-xl rounded-xl border border-gray-100 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b pb-8 mb-8 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase tracking-tight">{data.header.name}</h1>
        <p className="text-xl text-blue-600 font-medium mt-2">{data.header.role}</p>
        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
          <span>{data.header.email}</span>
          <span>•</span>
          <span>{data.header.location}</span>
          <span>•</span>
          <a href={`https://${data.header.github}`} className="hover:text-blue-600 hover:underline">GitHub</a>
          <span>•</span>
          <a href={`https://${data.header.linkedin}`} className="hover:text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Column */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">{data.labels.summary}</h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">{data.labels.experience}</h2>
            <div className="space-y-6">
              {data.experience.map((job, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="text-lg font-bold text-gray-900">{job.role}</h3>
                    <span className="text-sm text-gray-500">{job.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium text-sm mb-2">{job.company}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">{data.labels.extra}</h2>
            <div className="space-y-6">
              {data.extra.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <span className="text-sm text-gray-500">{item.period}</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">{data.labels.skills}</h2>
            <ul className="space-y-2">
              {data.skills.map((skill, i) => (
                <li key={i} className="text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">{data.labels.education}</h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <h3 className="font-bold text-gray-900">{edu.course}</h3>
                <p className="text-gray-700 text-sm">{edu.institution}</p>
                <p className="text-gray-500 text-xs mt-1">{edu.period}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">{data.labels.languages}</h2>
            <ul className="space-y-2">
              {data.languages.map((lang, i) => (
                <li key={i} className="text-gray-700 text-sm flex justify-between">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-gray-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}