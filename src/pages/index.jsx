import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
// import img1 from '@/images/home/p1.png'
// import img2 from '@/images/home/p2.png'
// import img3 from '@/images/home/p3.png'
// import img4 from '@/images/home/p4.png'
// import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
// import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react'

// const images = [img1, img2,img3,img4]

export default function Home() {
  return (  
    <>
      <Head>
        <title>
          IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="Home - IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
