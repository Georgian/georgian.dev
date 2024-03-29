import siteMetadata from '@/data/siteMetadata'

export default function SocialBar() {
  return (
    <>
      <div className="flex flex-wrap gap-3 pt-3 text-center">
        <a
          className="umami--click--linkedin-button focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
          href={siteMetadata.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
        <a
          className="umami--click--github-button focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-gray-500/10 transition selection:bg-white/30 hover:bg-gray-500/80 hover:shadow-gray-500/5 focus:ring-gray-500/40 dark:bg-gray-400 dark:text-zinc-900 dark:shadow-gray-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-gray-400/80 dark:hover:shadow-gray-400/5 dark:focus:ring-gray-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
          href={siteMetadata.github}
          rel="noreferrer"
          target="_blank"
        >
          <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
        <a
          className="umami--click--stackoverflow-button focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-stackoverflow-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-stackoverflow-500/10 transition selection:bg-white/30 hover:bg-stackoverflow-500/80 hover:shadow-stackoverflow-500/5 focus:ring-stackoverflow-500/40 dark:bg-stackoverflow-400 dark:text-zinc-900 dark:shadow-stackoverflow-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-stackoverflow-400/80 dark:hover:shadow-stackoverflow-400/5 dark:focus:ring-stackoverflow-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
          href={siteMetadata.stackoverflow}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="-135 22 32 38"
            fill="currentColor"
          >
            <g>
              <polygon points="-108.5,56.2 -108.5,46.3 -105.2,46.3 -105.2,59.5 -135,59.5 -135,46.3 -131.7,46.3 -131.7,56.2       " />
              <path d="M-128,45.4l16.2,3.4l0.7-3.2l-16.2-3.4L-128,45.4z M-125.9,37.6l15,7l1.4-3l-15-7L-125.9,37.6z     M-121.7,30.2l12.7,10.6l2.1-2.5l-12.7-10.6L-121.7,30.2z M-113.5,22.4l-2.7,2l9.9,13.3l2.7-2L-113.5,22.4z M-128.4,52.9h16.6    v-3.3h-16.6V52.9z" />
            </g>
          </svg>
        </a>
        <a
          className="umami--click--strava-button focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-strava-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-strava-500/10 transition selection:bg-white/30 hover:bg-strava-500/80 hover:shadow-strava-500/5 focus:ring-strava-500/40 dark:bg-strava-400 dark:text-zinc-900 dark:shadow-strava-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-strava-400/80 dark:hover:shadow-strava-400/5 dark:focus:ring-strava-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
          href={siteMetadata.strava}
        >
          <svg
            viewBox="2 2 12 12"
            height="24"
            role="presentation"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path
                clipRule="evenodd"
                d="M6.9 8.8l2.5 4.5 2.4-4.5h-1.5l-.9 1.7-1-1.7z"
                opacity=".6"
              />
              <path clipRule="evenodd" d="M7.2 2.5l3.1 6.3H4zm0 3.8l1.2 2.5H5.9z" />
            </g>
          </svg>
        </a>
        <a
          className="umami--click--email-button focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-lime-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
          href={`mailto:${siteMetadata.email}`}
        >
          <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </>
  )
}
