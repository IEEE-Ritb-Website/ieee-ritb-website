import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import { Member } from '@/components/Member'

import img1 from '@/images/ComputerSociety/Picture1.png'
import img2 from '@/images/ComputerSociety/Picture2.png'
import img3 from '@/images/ComputerSociety/Picture3.png'
import img4 from '@/images/ComputerSociety/Picture4.png'
import img5 from '@/images/ComputerSociety/Picture5.png'
import img6 from '@/images/ComputerSociety/Picture6.png'
import img7 from '@/images/ComputerSociety/Picture7.png'
import cs1 from '@/images/slider_event_images/cs/cs1.jpg'
import cs2 from '@/images/slider_event_images/cs/cs2.jpg'
import cs3 from '@/images/slider_event_images/cs/cs3.jpg'
import cs4 from '@/images/slider_event_images/cs/cs4.jpg'
import cs5 from '@/images/slider_event_images/cs/cs5.jpg'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [img1, img2, img3, img4, img5, img6, cs1, cs2, cs3, cs4, cs5]

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-16">
      <Head>
        <title>
          IEEE Computer Society| IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE Computer Society- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE Computer Society
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
                      width={1745}
                      height={800}
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We IEEE Computer Society team are a dynamic community of
                technology enthusiasts, innovators, and professionals who share
                a passion for all things computer science. Our club is dedicated
                to fostering an environment where members can expand their
                knowledge, engage in collaborative projects, and explore the
                ever-evolving world of computing.
                <br></br>
                From organizing engaging events, workshops, and competitions to
                providing valuable resources and networking opportunities, we
                strive to empower our members to excel in their careers and make
                a lasting impact in the field of computer science. Join us on
                this exciting journey as we push the boundaries of technology
                and shape the future of computing!
              </p>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Past events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  1. Webinar on topic “Augmented and Virtual Reality” :
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  The webinar was titled “Augmented and Virtual Reality”
                  presented by Mr. Prateek M Naik, Project Lead and Automation
                  Engineer at RGBSI. The agenda of the webinar was to introduce
                  the latest technologies of the future, Augmented and Virtual
                  Reality.
                </p>
              </div>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  2. WORKSHOP ON AI AND ML FOR POLYTECHNIC FINAL YEAR :
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  The workshop was conducted by 7th semester students who taught
                  students of Polytechnic preliminaries of Computer Science. It
                  was alluded as an Activity for the Activity points for the 7th
                  sem students. The Polytechnic Students enjoyed learning about
                  the importance of computer science and various of its
                  practical implementations. The workshop was a huge success as
                  the Polytechnic students loved it and the engineering students
                  loved teaching them and sharing a part of their knowledge.
                </p>
              </div>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  3. WORKSHOP ON BASICS OF COMPUTER SCIENCE FOR SCHOOL STUDENTS
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  The workshop was conducted by 7th semester students who taught
                  students of 8th and 9th grades preliminaries of Computer
                  Science. It was alluded as an Activity for the Activity points
                  for the 7th sem students. The High Schoolers enjoyed learning
                  about the importance of computer science and various of its
                  practical implementations .
                </p>
              </div>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  4. DATABASE INTERNALS: A DEEP DIVE INTO HOW DISTRIBUTED DATA
                  SYSTEMS WORK :
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  The session opened with Mr Arjun introducing us to the speaker
                  Mr Ravish Neelakanthappa and offered him a warm welcome. The
                  speaker started off the session by giving us an introduction
                  to the database module. He also emphasised on the transitions
                  in the old and new technologies that are used to store and
                  process data. Later he briefly explained to us the different
                  types of databases currently used and their evolving trends.
                  He also briefed us about database architecture using various
                  creative visuals
                </p>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Upcoming Events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  1. 2 day workshop on the topic cyber security . <br />
                  <br />
                  <br />
                  2. SATARK : A talk on Cyber Security topic
                </h2>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <Member
                  name="Neeraj D. Phadke "
                  designation="Chair"
                  link="https://www.linkedin.com/in/neeraj-phadke13/"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Neeraj%20Phadek_1MS21CS082.jpg?raw=true"
                ></Member>

                <Member
                  name="Hari Chandan"
                  designation="Secretary"
                  link="https://www.linkedin.com/in/s-sai-hari-chandan-93288922b"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Hari%20Chandan%201MS21CY051.jpg?raw=true"
                ></Member>

                <Member
                  name="Abhay Bhandarkar"
                  designation="Vice-Chair"
                  link="https://www.linkedin.com/in/abhaybhandarkar/"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Abhay%20Bhandarkar_1MS22CS005.jpg?raw=true"
                ></Member>

                <Member
                  name="Dhanraj Rateria"
                  designation="Treasurer"
                  link="https://www.linkedin.com/in/dhanrajrateria/"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Dhanraj%20Rateria_1MS22CY020.jpg?raw=true"
                ></Member>

                <Member
                  name="Nikith Ganga"
                  designation="Member"
                  link="https://www.linkedin.com/in/nikith-ganga/"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/NikithGanga_1MS21CS084.jpeg"//not uploaded
                ></Member>

                <Member
                  name="Shraddha Vinod Prabhu"
                  designation="Member"
                  link="https://www.linkedin.com/in/shraddha-prabhu-9b1663230"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Shraddha_Prabhu_1MS21CS118.jpg"//not uploaded
                ></Member>

                <Member
                  name="Karthik Deshmukh"
                  designation="Member"
                  link="https://www.linkedin.com/in/karthik-deshmukh/"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Karthik%20Deshmukh_1MS21AI027.jpg?raw=true"
                ></Member>

                <Member
                  name="Mohammed Yasin Zuhayr"
                  designation="Member"
                  link="https://www.linkedin.com/in/mohammed-yasin-zuhayr-249158157/"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Mohammed%20Yasin%20Zuhayr_1MS22IS077.jpg?raw=true"
                ></Member>

                <Member
                  name="Amogh Kalasapura "
                  designation="Member"
                  link="https://www.linkedin.com/in/amogh-kalasapura-992a51206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Amogh%20Kalasapura_1MS22CS022.jpg?raw=true"
                ></Member>

                <Member
                  name="Aishwarya R Dongal"
                  designation="Member"
                  link="https://www.linkedin.com/in/aishwarya-r-dongal-a69a90271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Aishwarya%20Dongal.jpeg"//not uploaded
                ></Member>

                <Member
                  name="Navya Shree B M"
                  designation="Member"
                  link="https://www.linkedin.com/in/navya-shree-b-m-5b81b22b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Navya_shree_1MS22IS087.jpg?raw=true"
                ></Member>

                <Member
                  name="Riya Kumari"
                  designation="Member"
                  link="https://www.linkedin.com/in/riya-kumari-58a923257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Riya%20Kumari_1MS22IS110.jpg"//not uploaded
                ></Member>

                <Member
                  name="Chinmayi S R"
                  designation="Member"
                  link="https://www.linkedin.com/in/chinmayi-s-r-9232b6256"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Chinmayi%20S%20R_1MS22IS033.png?raw=true"
                ></Member>
                <Member
                  name="Dhavala T S "
                  designation="Member"
                  link="https://www.linkedin.com/in/dhavala-t-s-781b5a1b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/DhavalaTS_1MS22AD021.jpg?raw=true"
                ></Member>
                <Member
                  name="Shreyaan Kapoor"
                  designation="Member"
                  link="https://www.linkedin.com/in/shreyaan-kapoor-47845427b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Shreyaan%20Kapoor_1MS22IS132.heic"//not uplaoded
                ></Member>
                <Member
                name="Bhuvan Agrawal"
                designation="Member"
                link="https://www.linkedin.com/in/shraddha-prabhu-9b1663230"//not found
                image="https://github.com/aarthipv/profileimages/blob/main/cs/Bhuvan%20Agrawal_1MS23CI143-T.jpg?raw=true"
              ></Member>
              <Member
                  name="Nabhanyu B M"
                  designation="Member"
                  link="https://www.linkedin.com/in/nabhanyu-bhatmurge/"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Nabhanyu%20B%20M_1MS23IS064-T.png?raw=true"
                ></Member>
                <Member
                  name="Pranav M K"
                  designation="Member"
                  link="www.linkedin.com/in/pranav-m-k-186b15291"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Pranav%20M%20K%20_%201MS23IS080-T.jpg"//not uploaded
                ></Member>
                <Member
                  name="Shantanu Pandey"
                  designation="Member"
                  link="https://www.linkedin.com/in/shantanu-pandey-rit?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://github.com/aarthipv/profileimages/blob/main/cs/Shantanu%20Pandey_1MS22CS129.jpg"//not uploaded
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
