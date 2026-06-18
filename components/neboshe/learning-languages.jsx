'use client'

import { useState } from 'react'
import { NEBOSHENGLANDLogo, PlayIcon } from './icons'

const VIDEOS = [
  {
    language: 'Arabic',
    title: 'NEBOSHENGLAND Course in Arabic - Saudi Arabia',
    youtubeId: 'qS8Wv0yvy8M',
  },
  {
    language: 'English',
    title: 'NEBOSHENGLAND Health and Safety Training',
    youtubeId: 'P4GPVLin7HQ',
  },
  {
    language: 'French',
    title: 'NEBOSHENGLAND Health and Safety Training in French',
    youtubeId: '8HeaemNau2g',
  },
  {
    language: 'Urdu',
    title: 'NEBOSHENGLAND Safety Training for Saudi Workplace',
    youtubeId: 'KKsEBsbUJZg',
  },
]

export function LearningLanguages() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section
      id="learning-in-your-language"
      className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:py-20"
    >
      <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
        Learning In Your Language
      </h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map((video) => (
          <article
            key={video.youtubeId}
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              role="button"
              tabIndex={0}
              aria-label={`Play ${video.title}`}
              onClick={() => setActiveVideo(video)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveVideo(video)
                }
              }}
              className="group relative m-2 block aspect-[16/11] w-[calc(100%-1rem)] cursor-pointer overflow-hidden rounded-lg bg-black text-left"
            >
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute left-2 top-2 flex flex-col items-center">
                <NEBOSHENGLANDLogo className="h-8 w-8 text-white" />
                <span className="mt-0.5 text-[8px] font-semibold leading-none text-white">
                  NEBOSHENGLAND
                </span>
              </div>

              <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-navy shadow-lg transition group-hover:scale-105">
                <PlayIcon className="h-6 w-6 translate-x-0.5 text-white" />
              </span>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 py-3">
                <span className="text-xs font-medium text-white">
                  Developing Our Potential
                </span>
              </div>
            </div>

            <div className="px-3 pb-4 pt-1">
              <h3 className="text-xl font-medium text-[#00358E]">
                {video.language}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {video.title}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="min-w-[220px] rounded-md bg-[#00358E] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#002b72]"
        >
          View All Videos
        </button>
      </div> */}

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-4xl overflow-hidden rounded-xl bg-white">
            <div className="flex items-center justify-between px-4 py-3">
              <h3 className="text-sm font-semibold text-navy sm:text-base">
                {activeVideo.title}
              </h3>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full px-3 py-1 text-xl leading-none text-navy transition hover:bg-muted"
                aria-label="Close video"
              >
                ×
              </button>
            </div>

            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}