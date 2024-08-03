import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'
import sc1 from '@/images/slider_event_images/sc/sc1.jpg'
import sc2 from '@/images/slider_event_images/sc/sc2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Controller,
} from 'swiper'
import Image from 'next/image'
const images = [sc1, sc2]

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-16">
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
              <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE SENSOR COUNCIL
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
                      className="lg:h-128 h-96 w-full object-cover"
                      src={image}
                      alt={index}
                      width={1795}
                      height={850}
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
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

              <h1 className="mb-10 mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <Member
                  name="Souhadra Shrivastava"
                  designation="Chair"
                  link="https://www.linkedin.com/in/souhadra-shrivastava/"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Souhadra_1MS21ET053.jpg?raw=true"
                ></Member>

                <Member
                  name="Tanisha P Hegde"
                  designation="Secretary"
                  link="https://www.linkedin.com/in/tanisha-p-hegde-510036230"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Tanisha%20P%20Hegde_1MS21ET056.jpg?raw=true"
                ></Member>

                <Member
                  name="Shashwat Agarwal"
                  designation="Treasurer"
                  link="https://www.linkedin.com/in/archisman-hazra-197767298/ "
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Archisman%20Hazra_1MS23EI016.jpg?raw=true"
                ></Member>

                <Member
                  name="Arpitha M Marali"
                  designation="Vice-chair"
                  link="https://www.linkedin.com/in/"
                  image="https://github.com/"
                ></Member>
                
                <Member
                  name="Nisarga M"
                  designation="Vice-Secretary"
                  link=" "
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/NISARGA%20M_1MS22ET067.jpg?raw=true"
                ></Member>

                <Member
                  name="Anshu Prakash"
                  designation="Vice-Treasurer"
                  link=" "
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Anshu%20Prakash%20Hindoyar_1MS22ET003.jpg?raw=true"
                ></Member>

                <Member
                  name="Chinmay Jindal"
                  designation="Member"
                  link="https://www.linkedin.com/in/chinmay-jindal-49a76024a/"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Chinmay%20Jindal-1MS22AD020.jpg?raw=true"
                ></Member>

                <Member
                  name="Aruna Arunachalam"
                  designation="Member"
                  link="https://www.linkedin.com/in/aruna-arunachalam-7bb5002b3/"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Aruna%20Arunachalam_1MS22EC024.jpg?raw=true"
                ></Member>

                <Member
                  name="Suhas B S"
                  designation="Member"
                  link="https://www.linkedin.com/in/suhaas-b-s-7817262a7/"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Suhaas%20B%20S_1MS21ET054.JPG?raw=true"
                ></Member>

                <Member
                  name="Siddharth Lunawat"
                  designation="Member"
                  link="https://www.linkedin.com/in/siddharth-lunawat-326146233 "
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Siddharth%20Lunawat_1MS22IS134.jpg?raw=true"
                ></Member>

                <Member
                  name="Adithi Purushothama"
                  designation="Member"
                  link="https://www.linkedin.com/in/adithi-purushothama-3652b92b3/"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Adithi%20Purushothama_1MS22EC008.jpg?raw=true"
                ></Member>

                <Member
                  name="Shree Lakshmi S Shekar"
                  designation="Member"
                  link="https://www.linkedin.com/in/shree-lakshmi-s-shekar-760738266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Shree%20Lakshmi%20S%20Shekar%201MS22CS166.jpg?raw=true"
                ></Member>

                <Member
                  name="Likhitha C A"
                  designation="Member"
                  link="https://www.linkedin.com/in/likhitha-ca7813042b3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Likhitha%20C%20A_1MS22EC067.jpg?raw=true"
                ></Member>

                <Member
                  name="Kaustubh Kumar"
                  designation="Member"
                  link="https://www.linkedin.com/in/kaustubh-kumar-274265242/"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Kaustubh%20kumar%201ms22ad030.jpg?raw=true"
                ></Member>

                <Member
                  name="Archisman Hazra"
                  designation="Member"
                  link="https://www.linkedin.com/in/archisman-hazra-197767298/ "
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Archisman%20Hazra_1MS23EI016.jpg?raw=true"
                ></Member>


                <Member
                  name="Sree Gowri C S"
                  designation="Member"
                  link=" "
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Sree%20Gowri%20C%20S%20_1MS22ET050.jpg?raw=true"
                ></Member>

                <Member
                  name="P Janani Karthika"
                  designation="Member"
                  link=" "
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/P_Janani_karthika_1MS22ET031.jpg?raw=true"
                ></Member>

                <Member
                  name="Mohammed Rayan"
                  designation="Member"
                  link=" "
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Mohammed%20rayan%20(1MS23EI032).jpg?raw=true"
                ></Member>

                <Member
                  name="Piyush Kumar"
                  designation="Member"
                  link=" "
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/Sensor%20Council/Piyush%20Kumar%20Dubey%20%201MS22ET032.jpg?raw=true"
                ></Member>
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
    </section>
  )
}
