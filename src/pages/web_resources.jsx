import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

import img2 from '@/images/RoboRIT/Picture2.jpg'
import img7 from '@/images/RoboRIT/Picture7.jpg'
import img4 from '@/images/RoboRIT/Picture4.jpg'
import img5 from '@/images/RoboRIT/Picture5.jpg'
import img8 from '@/images/RoboRIT/Picture8.jpg'
import img9 from '@/images/RoboRIT/Picture9.jpg'
import img11 from '@/images/RoboRIT/Picture11.jpg'
import img12 from '@/images/RoboRIT/Picture12.jpg'
import img15 from '@/images/RoboRIT/Picture15.jpg'
import img17 from '@/images/RoboRIT/Picture17.jpg'
import img19 from '@/images/RoboRIT/Picture19.jpg'

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [
  img2,
  img4,
  img5,
  img7,
  img8,
  img9,
  img11,
  img12,
  img15,
  img17,
  img19,
]
const members = [
  {
    name: 'Davin Monteiro',
    designation: 'Webmaster',
    link: 'https://www.linkedin.com/in/davin-monteiro/',
    image:
      'https://github.com/sanjay212003/ieee-members/blob/main/Davin_1MS21CY012.jpg?raw=true',
  },
  {
      name: 'Aadil Zaheer Khan',
      designation: 'Member',
      link: 'https://www.linkedin.com/in/aadil-zaheer-khan',
      image:
        'https://github.com/sanjay212003/ieee-members/blob/main/1MS21EC001%2C%20Aadil%20Zaheer%20Khan_.jpg?raw=true',
    },
   {
    name: 'Aarthi P V',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/aarthi-prashanth-1606b0253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    image:
      'https://github.com/sanjay212003/ieee-members/blob/main/Aarthi%20P%20V_1MS22CS004.jpg?raw=true',
  },
   {
    name: 'Abhishek V K',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/abhishek-v-k-574846248/',
    image:
      'https://github.com/sanjay212003/ieee-members/blob/main/Abhishekvk_1ms22ad003.jpeg?raw=true',
  },
   {
    name: 'Mudit Sethia',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/',
    image:
      'https://github.com/sanjay212003/ieee-members/blob/main/Mudit%20Sethia_1MS22CY043.JPG?raw=true',
  },
   {
    name: 'Natasha Brito',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/natasha-brito-34292425b/',
    image:
      'https://github.com/sanjay212003/ieee-members/blob/main/Natasha%20Brito_1MS22IS086.jpg?raw=true',
  },
   {
    name: 'Shivesh Tiwari',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/',
    image:
      'https://github.com/sanjay212003/ieee-members/blob/main/Shivesh%20Tiwari_1MS23CH017.jpg?raw=true',
  },
   {
    name: 'Shobhit Srivastava',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/shobhit-srivastava-65332b288',
    image:
      'https://github.com/sanjay212003/ieee-members/blob/main/Shobhit%20Srivastava%20_1MS22CI063.jpg?raw=true',
  },
   {
    name: 'U Sanjay',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/sanjay-u-372b43286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/sanjay212003/ieee-members/blob/main/U_SANJAY_1MS22IS146.jpeg?raw=true',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Resources | IEEE RIT</title>
        <meta
          name="description"
          content="Web Resources - IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Web Resources
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are the developers behind the IEEE RIT website. We are a team
                of 9 members who are working on the website to make it more user
                friendly and interactive.
              </p>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 text-center">
                Members of Web Resources
              </h1>

              <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((member, index) => (
                  <Member
                    name={member.name}
                    designation={member.designation}
                    link={member.link}
                    image={member.image}
                  ></Member>
                ))}
              </div>

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
