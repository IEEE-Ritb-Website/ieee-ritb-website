import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import {Member} from '@/components/Member'

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

const images = [img2,img4,img5,img7, img8, img9, img11, img12, img15, img17, img19]

export default function Home() {
  return (
    <>
      <Head>
        <title>RoboRIT | IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="RoboRIT - IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                RoboRIT
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
                      height={850}
                      objectFit="cover"
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The IEEE RoBoRIT is a professional society under the umbrella of
                the Ramaiah Institue Of Technology. It focuses on promoting the
                theory and practice of robotics and its application across
                various fields of engineering and science.
                <br></br>
                IEEE RoBoRIT chapters organize events, conferences, workshops,
                and technical activities to foster knowledge exchange,
                collaboration, and advancement in the field. We provide a
                platform for researchers, engineers, and students to share their
                work, discuss emerging trends, and explore new ideas in robotics
                and its application.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Joining an IEEE ROBORIT chapter offers several benefits,
                including:
              </p>
              <ul class="ml-4 list-decimal">
                <li>
                  Learning Opportunities: Attend workshops, seminars, and
                  conferences organized by the chapter to learn from experts and
                  stay updated with the latest advancements in the field.
                </li>
                <li>
                  Collaboration: Find opportunities for collaborative research
                  and projects by interacting with like-minded individuals.
                </li>
                <li>
                  Leadership Development: Volunteer for chapter activities and
                  gain valuable leadership and organizational skills.
                </li>
                <li>
                  Recognition: Contribute to the chapter's initiatives and get
                  recognition for your involvement and contributions in the
                  field of robotics and automation.
                </li>
              </ul>
              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Past events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  1. Hardware hackathon
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  Firefighting robots also known as vision guided robots, are
                  capable of detecting the fire and extinguishing it. Through
                  this hands-on workshop, you will learn to build your very own
                  fire fighting robot that uses digital IR sensors to detect the
                  fire and move in that direction to put it off using a DC fan.
                  To ease the programming learning experience, the course is
                  also equipped with scratch based block programming modules
                  that make programming the robot super easy even for beginners.
                </p>
                <p className="mt-6 text-lg">Phase 1:</p>
                <p className="text-base text-gray-600">
                  The registrations opened on 1/10/22 for the teams to register.
                  The Rule Book of the event was also published.
                </p>
                <p className="mt-6 text-lg">Phase 2:</p>
                <p className="text-base text-gray-600">
                  The teams were given a time duration of more than 10 days to
                  decide Problem statement and procure the hard ware components
                  for the competition.
                </p>
                <p className="mt-6 text-lg">Day of Event:</p>
                <p className="text-base text-gray-600">
                  The event started at 9am on 15/10/2022 with inauguration from
                  HOD of EC and IEEE teacher coordinator.
                </p>
                <ul class="ml-4 list-disc">
                  <li>
                    <b>Round 1:</b> The Core RoboRIT team invigilated all the
                    teams before the start of the competition to assess the
                    problem statement and check for prebuilt projects/models.
                  </li>
                  <li>
                    <b>Round 2:</b> The CoreTeam along with the sponsorer of the
                    event started the Round 2 judging by seeing the working
                    models and the presentations of the teams to shortlist the
                    top 10 teams among 20.
                  </li>
                  <li>
                    <b>Final round:</b> The judges judged the top 10 teams again
                    based on various criteria and made the final decision.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 text-left">
                  2. Hands-on workshop of Firefighting Robot
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  Firefighting robots also known as vision guided robots, are
                  capable of detecting the fire and extinguishing it. Through
                  this hands-on workshop, you will learn to build your very own
                  fire fighting robot that uses digital IR sensors to detect the
                  fire and move in that direction to put it off using a DC fan.
                  To ease the programming learning experience, the course is
                  also equipped with scratch based block programming modules
                  that make programming the robot super easy even for beginners.
                </p>
                <p className="mt-6 text-lg">Course Outcomes</p>
                <p className="text-base text-gray-600">
                  <ul className="ml-4 list-disc">
                    <li>Introduction to Robotics systems & Microcontroller</li>
                    <li>Introduction to Arduino Architecture</li>
                    <li>Understanding the Electronics involved in the robot</li>
                    <li>Digital IR sensors working & calibration</li>
                    <li>Programming the robot</li>
                    <li>Understand Arduino Architecture and its Programming</li>
                    <li>
                      Hands-on experience on block based programming on Arduino
                    </li>
                  </ul>
                </p>
                <p className="mt-6 text-lg">Course Structure</p>
                <p className="text-base text-gray-600">
                  <ul className="ml-4 list-disc">
                    <li>Lecture Session - 1 hours</li>
                    <li>Fabrication Session - 4 hours</li>
                    <li>Programming Session - 2 hours</li>
                    <li>Testing Session - 1 hour</li>
                  </ul>
                </p>
                <p className="mt-6 text-lg">Topics Covered</p>
                <p className="text-base text-gray-600">
                  <ul className="ml-4 list-disc">
                    <li>Robotics: Concepts and Applications</li>
                    <li>DC Motors: Working and Control</li>
                    <li>Arduino Architecture & its programming</li>
                    <li>Fabrication of Fire Fighting Robot</li>
                    <li>Scratch based block programming</li>
                    <li>Calibration of IR sensors</li>
                  </ul>
                </p>
              </div>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  3. Proteus workshop
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>
                    Workshop was organized to help students gain knowledge on
                    simulation and PCB Design of the circuit. The students will
                    get exposure towards Proteus software printed circuit board
                    (PCB) and 3D visualizer of circuit
                  </b>
                </p>
              </div>
              
              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="Abhinav Benagi" 
                designation="Chair" 
                link="https://www.linkedin.com/in/abhinav-benagi-878aa7208"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Pavan Kumar K" 
                designation="Vice-Chair" 
                link="https://www.linkedin.com/in/pavan-kumar-k-036a85202/"
                image="https://drive.google.com/uc?id=1X-_2Cm1RW2D799UqmcVIlshkAqg-K3Jc&export=view">
    </Member>
    
    <Member name="Vinit V Shenvi" 
                designation="Secretary" 
                link="None"
                image="https://drive.google.com/uc?id=1f_B2nxgnEjdIgpO2t1owLxEl5SRyR4Xk&export=view">
    </Member>
    
    <Member name="Sheik Mohammed Maaz" 
                designation="Member" 
                link="None"
                image="https://drive.google.com/uc?id=1hQx-suzNPqigjLV2UYhV3J_Z96eXOTBA&export=view">
    </Member>
    
    <Member name="Jeeva M" 
                designation="Member" 
                link="https://www.linkedin.com/in/jeeva-m-82b66322a"
                image="https://drive.google.com/uc?id=1l47pvLR-mQTp-t376GHXErVnC37ClCK_&export=view">
    </Member>
    
    <Member name="Suhas Y" 
                designation="Member" 
                link="https://www.linkedin.com/in/suhas-y-9a477021b/"
                image="https://drive.google.com/uc?id=1DDrxS9zGUXCrwOMQdIsKY3BjdVWkzA02&export=view">
    </Member>
    
    <Member name="S Meena Kumari" 
                designation="Member" 
                link="https://www.linkedin.com/mwlite/in/meena-kumari-subramanyam-b28b56229"
                image="https://drive.google.com/uc?id=1Zi2Su7aLO8HmBbSjr5APka8rzMnPzsTx&export=view">
    </Member>
    
    <Member name="Mohammad Sarmuddin T" 
                designation="Member" 
                link="None"
                image="https://drive.google.com/uc?id=1U1JaLOFVTQB8MPy9mWkA4s_L5Qf2uCHz&export=view">
    </Member>
    
    <Member name="Sathvik Rao" 
                designation="Member" 
                link="http://linkedin.com/in/sathvik-rao-2aa803259"
                image="https://drive.google.com/uc?id=1KgNvR3I49MaK6Hk7kmqXsGCPNkk6itZD&export=view">
    </Member>
    
    <Member name="Sharu U" 
                designation="Member" 
                link="https://www.linkedin.com/in/shaaru-u-514976227"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Hemanth Kumar NVS" 
                designation="Member" 
                link="None"
                image="https://drive.google.com/uc?id=1KJALa7viNXLSlm2NZy3ScIirkXmWw1LS&export=view">
    </Member>
    
    <Member name="Priyanshu bhojwani" 
                designation="Member" 
                link="https://www.linkedin.com/in/priyanshu-bhojwani-b01a6826b"
                image="https://drive.google.com/uc?id=13m4OGT5iP88oMQZqlt4NSDmtkH6Woiz1&export=view">
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
