import Image from 'next/image'


export const Member = (props) => {
    return (
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={props.image}
                    alt="Member" />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                        {props.name}
                    </p>
                    <p className="mb-4 text-xs text-gray-100">{props.designation}</p>
                    
                    <div className="flex items-center justify-center space-x-3">
                        <a
                            href={props.link}
                            target="_blank"
                            className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>

                        </a>
                        
                    </div>
                </div>
            </div>
    )

    }