import Link from 'next/link'

export function Footer() {
  return (
    <footer class="footerbg relative z-10 overflow-x-hidden pb-5 pl-3 pt-6 lg:py-2 lg:pl-0">
      <div class="container mx-auto text-white">
        <div class="mx-auto grid max-w-4xl pt-10 sm:grid-cols-1 md:grid-cols-3">
          <div class="w-full items-center px-3">
            <div class="mb-3 flex w-full lg:justify-center">
              <a href="/" class="inline-block rounded-md bg-white p-2">
                <img
                  src="https://avatars.githubusercontent.com/u/133042598?s=200&v=4"
                  alt="IEEE Logo"
                  class="max-w-full"
                  height={100}
                  width={100}
                />
              </a>
            </div>
          </div>
          <div class="w-full px-3 pt-3 md:pt-0">
            <div class="mb-10 w-full">
              <h4 class="text-dark mb-5 text-lg font-semibold">Quick Links</h4>
              <ul className="block justify-center">
                <li>
                  <Link
                    href="/faculty"
                    className="rounded-lg px-2 py-1 leading-loose text-white hover:bg-slate-100 hover:text-slate-900">
                    
                      Faculty
                    
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="rounded-lg px-2 py-1 leading-loose text-white hover:bg-slate-100 hover:text-slate-900">
                    
                      Gallery
                    
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactus"
                    className="rounded-lg px-2 py-1 leading-loose text-white hover:bg-slate-100 hover:text-slate-900">
                    
                      Contact Us
                    
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-3">
            <div class="mb-10 w-full">
              <h4 class="text-dark mb-5 text-lg font-semibold">Follow Us On</h4>
              <div class="mb-6 flex items-center">
                <a
                  href="https://instagram.com/ieeeritb"
                  class="
                     text-dark
                     hover:bg-primary
                     hover:border-primary
                     mr-3
                     flex
                     h-8
                     w-8 items-center
                     justify-center
                     rounded-lg border border-[#E5E5E5]
                     hover:text-white
                     sm:mr-4
                     lg:mr-3
                     xl:mr-4
                     "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/ieee-rit/"
                  class="
                      text-dark
                      hover:bg-primary
                      hover:border-primary
                      mr-3
                      flex
                      h-8
                      w-8 items-center
                      justify-center
                      rounded-lg border border-[#E5E5E5]
                      hover:text-white
                      sm:mr-4
                      lg:mr-3
                      xl:mr-4
                      "
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    class="fill-current"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/ieeeritb"
                  class="
                     text-dark
                     hover:bg-primary
                     hover:border-primary
                     mr-3
                     flex
                     h-8
                     w-8 items-center
                     justify-center
                     rounded-lg border border-[#E5E5E5]
                     hover:text-white
                     sm:mr-4
                     lg:mr-3
                     xl:mr-4
                     "
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    class="fill-current"
                  >
                    <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/ieeeritb"
                  class="
                     text-dark
                     hover:bg-primary
                     hover:border-primary
                     mr-3
                     flex
                     h-8
                     w-8 items-center
                     justify-center
                     rounded-lg border border-[#E5E5E5]
                     hover:text-white
                     sm:mr-4
                     lg:mr-3
                     xl:mr-4
                     "
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    class="fill-current"
                  >
                    <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                  </svg>
                </a>
              </div>
              <p class="text-dark mt-5 flex items-center text-sm font-medium">
                <span class="text-primary mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="21"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </span>
                <span>
                  <a href="mailto:ieeeritb@gmail.com">ieeeritb@gmail.com</a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-100 pt-6">
          <p class="text-center text-xs/relaxed text-gray-200">
            &copy; Copyright 2023 IEEE - All rights reserved.
            <br />
            Created with ❤️ by the Web Resource Team IEEE RITB.
          </p>
        </div>
      </div>
      <div>
        <span class="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.08" />
                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
}
