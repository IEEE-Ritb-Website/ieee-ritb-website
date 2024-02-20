import Link from 'next/link'

export function Member(props) {
  return (
    <div className="relative transform overflow-hidden rounded-lg shadow-lg transition duration-300 hover:shadow-2xl lg:hover:-translate-y-2">
      <img
        className="h-72 w-full object-cover md:h-48 lg:h-72"
        src={props.image}
        alt={props.name + ' image'}
      />
      <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-75 px-5 py-4 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <p className="mb-1 text-lg font-bold text-gray-100">{props.name}</p>
        <p className="mb-4 text-sm text-gray-100">{props.designation}</p>

        <div className="flex items-center justify-center space-x-3">
          <Link
            href={props.link}
            passHref
            className="hover:text-teal-accent-400 text-white transition-colors duration-300">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>

          </Link>
        </div>
      </div>
    </div>
  );
}