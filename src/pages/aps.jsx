import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import {Member} from '@/components/Member'

import img1 from '@/images/heroimages/img1.png'
import img2 from '@/images/heroimages/img1.png'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [
  {
    link: img1,
  },
  {
    link: img2,
  },
]


export default function Home() {
  return (
    <>
      <Head>
        <title>IEEE APS CHAPTER || IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="IEEE APS CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE APS CHAPTER
              </h1>
              <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoHeight={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className="lg:h-128 h-96 w-full object-fill"
              src={image.link}
              alt={index}
              width={1745}
              height={636}
              objectFit="cover"
              border-radius="10px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
              <div>

                <h1 className="mt-10 text-justify text-2xl tracking-tight text-gray-900">
                  Welcome to the IEEE Antennas and Propagation Society (APS)
                  Student Chapter at RIT. We are a dynamic community of
                  passionate engineering students dedicated to advancing the
                  field of antennas and propagation. Through a variety of
                  engaging activities, workshops, and seminars, we foster an
                  environment that encourages learning, collaboration, and
                  innovation. Join us as we explore the exciting world of
                  electromagnetic waves, antenna design, wireless
                  communications, and cutting-edge technologies. Whether you're
                  a beginner or an expert, our chapter offers a platform to
                  expand your knowledge, develop skills, and connect with
                  like-minded individuals.
                </h1>
              </div>


              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="Mohammed Ibrahim" 
                designation="Chair" 
                link="https://www.linkedin.com/in/mohammedibrahim22"
                image="https://drive.google.com/uc?id=10SKIGnOhzWAdg8Z1QlxNR-zA4QAYLnBu&export=view">
    </Member>
    
    <Member name="Varsha J" 
                designation="Vice Chair" 
                link="https://www.linkedin.com/in/varsha-j-173124254"
                image="https://drive.google.com/uc?id=19UG3IJRZf7QOcsRnz1jrXMSw7TN5ZqMP&export=view">
    </Member>
    
    <Member name="Poojitha Singh" 
                designation="Secretary" 
                link="https://www.linkedin.com/in/poojitha-singh-840bb6229"
                image="https://drive.google.com/uc?id=1-oK71eC2oPF6ad1cixbf0v_pl7iGVi5L&export=view">
    </Member>
    
    <Member name="Preethi K" 
                designation="Co- Secretary" 
                link="https://www.linkedin.com/in/poojitha-singh-840bb6229"
                image="https://drive.google.com/uc?id=1z3bFQVO8zTBe8gtMdUygVkuelL38QLwP&export=view">
    </Member>
    
    <Member name="Madhumitha R" 
                designation="Co - Secretary" 
                link="https://www.linkedin.com/in/madhumitha-ramaswamy-399103220"
                image="https://drive.google.com/uc?id=1p22I8o2lZBStHVAmuoyUbohYPcVNwPr_&export=view">
    </Member>
    
    <Member name="Banuprasad" 
                designation="�Treasurer" 
                link="https://www.linkedin.com/in/banu-prasad-m-925558270"
                image="https://drive.google.com/uc?id=1WW1FXoE47iehfz5zv07bmE8_Fh9LrPz2&export=view">
    </Member>
    
    <Member name="Kokila" 
                designation="Co - Treasurer" 
                link="https://www.linkedin.com/in/kokila-s-642161252"
                image="https://drive.google.com/uc?id=1bMUfnLGZK07XeXVVeaeGSutxpSgVOmQt&export=view">
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
