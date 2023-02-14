import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => {
  const trackingTitle = title.replace(/\s/g, '').toLowerCase()
  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <Link
          className={`umami--click--${trackingTitle}-card`}
          href={href}
          aria-label={`Link to ${title}`}
        >
          <div className="relative h-48 bg-white">
            <Image alt={title} src={imgSrc} fill={true} className="object-scale-down" />
          </div>
        </Link>
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            <Link
              className={`umami--click--${trackingTitle}-card`}
              href={href}
              aria-label={`Link to ${title}`}
            >
              {title}
            </Link>
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <Link
            href={href}
            className={`umami--click--${trackingTitle}-card text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400`}
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
