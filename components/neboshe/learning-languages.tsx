import { NeboshLogo, PlayIcon } from './icons'

const VIDEOS = [
  { language: 'English' },
  { language: 'Arabic' },
  { language: 'Francis' },
  { language: 'Arabic' },
]

export function LearningLanguages() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
      <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
        Learning In Your Language
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map((video, i) => (
          <article
            key={i}
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          >
            <div className="relative aspect-video">
              <img
                src="/images/video-presenter.png"
                alt={`${video.language} learning video presenter at a whiteboard`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/10" aria-hidden="true" />

              <div className="absolute left-2 top-2 flex items-center gap-1 text-primary-foreground">
                <NeboshLogo className="h-7 w-7 text-navy" />
                <span className="text-[10px] font-bold">Neboshe</span>
              </div>

              <button
                type="button"
                aria-label={`Play ${video.language} video`}
                className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-navy/85 transition hover:bg-navy"
              >
                <PlayIcon className="h-5 w-5 translate-x-0.5 text-primary-foreground" />
              </button>

              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-xs font-medium text-primary-foreground">
                Developing Our Potential
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-navy">
                {video.language}
              </h3>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="rounded-md bg-navy px-10 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-navy-dark"
        >
          View All Videos
        </button>
      </div>
    </section>
  )
}
