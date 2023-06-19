import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import {Member} from '@/components/Member'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          IEEE SENSOR COUNCIL | IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE SENSOR COUNCIL- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE SENSOR COUNCIL
              </h1>
              <p className="mt-6 text-justify text-lg leading-8 text-gray-600">
                Welcome to the IEEE Sensor Student Chapter at RIT. We are a
                vibrant and enthusiastic community of engineering students
                passionate about the field of sensors and its applications. Our
                chapter provides a platform for students to delve into the world
                of sensor technologies, ranging from MEMS to IoT devices. <br />
                <br />
                <br />
                Through workshops, guest lectures, and hands-on projects, we aim
                to enhance understanding and foster innovation in the field.
                Join us to explore the fascinating realm of sensing, data
                acquisition, and signal processing, and unlock endless
                possibilities in the realm of sensing technology.
                <br></br>
              </p>


              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="Adya S" 
                designation="Chair" 
                link="https://www.linkedin.com/in/adya-samantray-84215a200"
                image="https://drive.google.com/uc?id=19TsuI_Dud9wXH_lEi68jumWEdWN3eRfs&export=view">
    </Member>
    
    <Member name="Varsha J" 
                designation="Secretary" 
                link="https://www.linkedin.com/in/varsha-j-173124254"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Vyoma Bharadwaj" 
                designation="Treasurer" 
                link="https://www.linkedin.com/in/vyomaa-bharadwaj-666aba212"
                image="https://drive.google.com/uc?id=1aUFlkQmTKSSlQg1UaeEJeFijdHf5bPBp&export=view">
    </Member>
    </div></p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
