import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import {Member} from '@/components/Member'

import img1 from '@/images/WIE/Picture1.jpg'
import img2 from '@/images/WIE/Picture2.png'
import img3 from '@/images/WIE/Picture3.png'
import img4 from '@/images/WIE/Picture4.png'
import img6 from '@/images/WIE/Picture6.png'
import img7 from '@/images/WIE/Picture7.png'
import img8 from '@/images/WIE/Picture8.png'

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [img1, img2,img3,img4,img6,img7,img8]


export default function Home() {
    return (
        <>
            <Head>
                <title>IEEE WIE CHAPTER || IEEE Ramaiah Institute of Technology</title>
                <meta
                    name="description"
                    content="IEEE WIE CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
                />
            </Head>
            <Header />
            <main>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
                        <div className="">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                IEEE WIE CHAPTER
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
                      width={1745}
                      height={800}
                      objectFit="cover"
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

                            <div>
                                <h1 className="mt-10 text-justify text-2xl tracking-tight text-gray-900">
                                    IEEE RIT-B Women in Engineering (IEEE RIT-B WIE) is a local chapter of IEEE RIT-B that was established in 2016. Our primary objective is to empower and engage women in the technical field by organizing a variety of webinars, workshops, events, and panel discussions. Through these activities, we strive to enhance their knowledge, showcase their technical skills, and foster their professional growth.
                                    At IEEE RIT-B WIE, we are committed to raising awareness about the unique challenges faced by women in the world of technology, as well as in other areas such as health. By addressing these challenges and providing a platform for open discussions, we aim to create a supportive and inclusive environment that encourages women to overcome barriers and succeed in their chosen fields.

                                </h1>
                            </div>

                            <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="Anagha Kalyani" 
                designation="Chair" 
                link="https://www.linkedin.com/in/anagha-kalyani-b294b8210"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Diya James" 
                designation="Secretary" 
                link="https://www.linkedin.com/in/diyajames"
                image="https://drive.google.com/uc?id=1OpgR36UfgTYTzn__kjEIkGzoU2Nw7ieG&export=view">
    </Member>
    
    <Member name="Smruthi D Sharma" 
                designation="Vice Chair" 
                link="https://www.linkedin.com/in/smruthi-d-sharma-22913b279"
                image="https://drive.google.com/uc?id=1qv7-uRi-hfNyqPop-ncHwZKWvwXWuStT&export=view">
    </Member>
    
    <Member name="Vidhi Rastogi" 
                designation="Member" 
                link="https://www.linkedin.com/in/vidhi-rastogi-408a54220"
                image="https://drive.google.com/uc?id=1V609IGibJMs6wUqSgzGfA1pndeeIaZr3&export=view">
    </Member>
    
    <Member name="Snehal Vats" 
                designation="Member" 
                link="https://www.linkedin.com/in/snehal-vats-77652a1b9"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Joshitha Darsi" 
                designation="Member" 
                link="https://www.linkedin.com/in/joshitha-darsi-571172239"
                image="https://drive.google.com/uc?id=1DKi_MYNsREBDz2tGpd1S8I3O9iFwqfrf&export=view">
    </Member>
    
    <Member name="Malla Rajeswari" 
                designation="Member" 
                link="https://www.linkedin.com/in/rajeswari-malla-61045623a"
                image="https://drive.google.com/uc?id=1OW7BM8oIbjMRWkmKJ1-NSXVm7DiNT2Vp&export=view">
    </Member>
    
    <Member name="Shreeya R" 
                designation="Member" 
                link="https://www.linkedin.com/in/shreeya-r-b62703270"
                image="https://drive.google.com/uc?id=1mKC1cH2j396VRoyL8VybdGZjSLIfrxIM&export=view">
    </Member>
    
    <Member name="Jayashree" 
                designation="Member" 
                link="https://www.linkedin.com/in/jayshree-v-j-a1471b23b"
                image="https://drive.google.com/uc?id=1xku28mlyl7DdnpCwPV6ykvkjksscc15N&export=view">
    </Member>
    
    <Member name="Aditi Kataria" 
                designation="Member" 
                link="https://www.linkedin.com/in/aditi-kataria-9502b3279"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Harini N" 
                designation="Member" 
                link="https://www.linkedin.com/in/harini-n-844817263"
                image="https://drive.google.com/uc?id=1LrZK7M12z7WF8fWM-YaL04h6N2p8M5Tw&export=view">
    </Member>
    
    <Member name="Aiman Naqvi" 
                designation="Member" 
                link="https://www.linkedin.com/in/aiman-n-896240279/"
                image="https://drive.google.com/uc?id=1d4n-wt5Q-P3sovIsaRDXO8mVtfMqv6Oo&export=view">
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

