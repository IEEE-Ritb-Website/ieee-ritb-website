import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import {Member} from '@/components/Member'

import img1 from '@/images/MTTS/Picture1.png'
import img2 from '@/images/MTTS/Picture4.jpg'
import img3 from '@/images/MTTS/Picture5.jpg'
import img4 from '@/images/MTTS/Picture6.jpg'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [img1, img2,img3,img4]


export default function Home() {
    return (
        <>
            <Head>
                <title>IEEE MTTS CHAPTER || IEEE Ramaiah Institute of Technology</title>
                <meta
                    name="description"
                    content="IEEE MTTS CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
                />
            </Head>
            <Header />
            <main>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
                        <div className="">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                IEEE MTTS CHAPTER
                            </h1>


                            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoHeight={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
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
                      src={image}
                      alt={index}
                      width={1795}
                      height={800}
                      objectFit="cover"
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

                            <div>
                                <h1 className="mt-10 text-justify text-2xl tracking-tight text-gray-900">
                                    The IEEE  Microwave Theory and Technology Society at RITB is dedicated to advance the professional standing of its members and enhance the quality of life for all people through the development and application of microwave technology. This is an all-volunteer society, driven to excellence by its leadership and with the active participation of all its members. The activities sponsored by the MTT-S include a broad spectrum of conferences, workshops, tutorials, technical committees, chapter meetings, publications and professional education programs.We also provide a forum for members to share their knowledge and expertise with the wider technical community.

                                </h1>
                            </div>



                            <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="Meenakshi Kshetija N" 
                designation="Chair" 
                link="https://www.linkedin.com/in/meenakshi-n-776866220"
                image="https://drive.google.com/uc?id=1u9AhZl-vhDk8-ohWHeFL-sOMgMFEv7Qa&export=view">
    </Member>
    
    <Member name="Prajana B" 
                designation="Vice-Chair" 
                link="https://www.linkedin.com/in/prajana-b-47b3b0279"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Neha Kantikar" 
                designation="Secretary" 
                link="https://www.linkedin.com/in/neha-kantikar"
                image="https://drive.google.com/uc?id=1PSs67kde0XeTJflrn_khZRCaF5PFDBxH&export=view">
    </Member>
    
    <Member name="Prince Kumar Jha" 
                designation="Co-Secretary" 
                link="https://www.linkedin.com/in/prince-kumar-jha-2a0929101"
                image="https://drive.google.com/uc?id=1cMkkGqKNJO6w_CFhS2BUMNXeBWP9nIJj&export=view">
    </Member>
    
    <Member name="Amit Yadav" 
                designation="Treasurer" 
                link="https://www.linkedin.com/in/amit-yadav-09949b205?trk=contact-info"
                image="https://drive.google.com/uc?id=1d9JfiD58rPgdx07F6EaqY9G18mMtLyon&export=view">
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

}

