import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation, EffectFade, Zoom } from 'swiper'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import img1 from '@/images/home/p1.png'
import img2 from '@/images/home/p2.png'
import img4 from '@/images/home/p4.png'
import img3 from '@/images/home/p3.png'

const images = [img1, img2, img3, img4]

const routs = [
  {
    name: 'Creativity',
    link: '/creativity',
  },
  {
    name: 'APS',
    link: '/aps',
  },
  {
    name: 'Computer Society',
    link: '/computersociety',
  },
  {
    name: 'PR Sponsorship',
    link: '/pr_sponsorship',
  },
  {
    name: 'Documentation',
    link: '/documentation',
  },
  {
    name: 'RoboRIT',
    link: '/roborit',
  },
  {
    name: 'XTREME',
    link: '/xtreme',
  },
  {
    name: 'Digital Design',
    link: '/digitaldesign',
  },
  {
    name: 'Sensor Council',
    link: '/sensor_council',
  },
  {
    name: 'WIE',
    link: '/wie',
  },
  {
    name: 'MTTS',
    link: '/mtts'

  },
  {
    name: 'PES',
    link: '/pes',
  },
  {
    name: 'SPS',
    link:'/sps',
  }
]

export function Hero() {
  return (
    <section className="text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 pt-10 text-center  md:px-10 md:pt-10 lg:px-10 ">
        <h1 className="text-3xl font-bold leading-none sm:text-4xl">
          IEEE <span className="text-pri">Ramaiah Institute Of Technology</span>
        </h1>
        <p className="mt-1 text-lg text-red-600">
          Advancing Technology For Humanity
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoHeight={true}
        centeredSlides={true}
        style={{objectFit:"cover", zoom:0.57, width:1920, height:1080}}
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
              src={image}
              alt={index}
              style={{objectFit:"cover", zoom:"0.4 !important", width:1080, height:"auto"}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Container className="pt-5 pb-16 text-justify lg:pt-8">
        <p class="text-md mx-auto mt-5 max-w-3xl rounded-xl bg-slate-100 p-3 tracking-tight text-slate-800 lg:text-xl">
          <b>IEEE-RIT Student Branch</b> was inaugurated in RIT in November
          2003. The branch endeavors to enrich the students of RIT with the
          latest developments in various fields of technology and research and
          ensure that their competency levels meet all the required standards in
          today’s industry and participation in a kaleidoscope of technical
          events throughout the year, implicitly emphasizing on extra-curricular
          activities in a student’s life.
        </p>
        <div className="flex flex-wrap justify-center">
          <ButtonLink
            href="https://site.ieee.org/sb-ritb/about-ieee/ieee-ramaiah/"
            className="text-md mt-10 rounded bg-sky-900 px-4 py-1.5 font-semibold text-gray-50"
          >
            Know more
          </ButtonLink>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 pt-5 md:grid md:grid-rows-3">
          <h1 className="flex flex-wrap justify-center">
            Here is the list of all the societies and councils under IEEE-RIT
          </h1>
          {routs.map((rout, index) => (
            <ButtonLink
              key={index}
              href={rout.link}
              className="mt-5 w-auto rounded-lg py-2"
            >
              {rout.name}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  )
}
