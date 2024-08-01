import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-16">
      <Head>
        <title>
          IEEE PR AND SPONSORSHIP| IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE PR AND SPONSORSHIP- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE PR AND SPONSORSHIP
              </h1>
              <div>
                <h1 className="mt-10 text-lg font-semibold tracking-tight text-gray-900">
                  Q. What does your chapter do?
                </h1>
                <h2 className="mt-10 text-lg tracking-tight text-gray-900">
                  Ans. The Public Relations and Sponsorship chapter of IEEE at
                  RITB plays a dual role. We are responsible for promoting IEEE
                  events and ensuring maximum participation through effective
                  public relations strategies. Additionally, we actively seek
                  and secure sponsorships from companies to support and enhance
                  our events.
                </h2>
                <h1 className="mt-10 text-lg font-semibold tracking-tight text-gray-900">
                  Q. What are your chapter’s present year goals?
                </h1>
                <h2 className="mt-10 text-lg tracking-tight text-gray-900">
                  Ans. Our chapter’s present year goals involve two key areas.
                  Firstly, we aim to strengthen our public relations efforts by
                  increasing awareness and engagement among students through
                  targeted promotional campaigns. Secondly, we strive to
                  establish strategic partnerships with companies to secure
                  sponsorships that enhance the quality and reach of our events.
                </h2>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
  {/* Public Relations Head */}
  <Member
    name="Shireen Dash"
    designation="Public Relations Head"
    link="https://www.linkedin.com/in/shireen-dash-300b96278/"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Shireen%20Dash_1ms21ei052.jpeg?raw=true">
  </Member>

  {/* Public Relations Co-Head */}
  <Member
    name="Nidhi Bishnoi"
    designation="Public Relations Co-Head"
    link="https://www.linkedin.com/in/nidhi-bishnoi12"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Nidhi%20%20Bishnoi_1MS21EI035.jpg?raw=true">
  </Member>

  {/* Sponsorship Head */}
  <Member
    name="Prutvi Prakash Shetty"
    designation="Sponsorship Head"
    link="https://www.linkedin.com/in/prutvi-shetty-631420240"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Prutvi%20Shetty%20-%201MS21CS103.PNG?raw=true">
  </Member>

  {/* Public Relations Vice-Head */}
  <Member
    name="Ranjana Rajesh"
    designation="Public Relations Vice-Head"
    link="https://www.linkedin.com/in/ranjana-rajesh-454b91278"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Ranjana%20Mallya_1MS22MD029.jpg?raw=true">
  </Member>

  {/* Members */}
  <Member
    name="Shobhit Srivastava"
    link="https://www.linkedin.com/in/shobhit-srivastava-65332b288"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Shobhit%20Srivastava%20_1MS22CI063.jpg?raw=true">

  </Member>

  <Member
    name="Annliya Biju"
    link="https://www.linkedin.com/in/annliya-b-317920284"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Annliya%20Biju_1MS22BT005_.jpg?raw=true">

  </Member>

  <Member
    name="Aditya Sarkar"
    link="https://www.linkedin.com/in/annliya-b-317920284"
    image="https://github.com/aarthipv/profileimages/blob/main/Aditya%20sarkar%201MS23EI067-T.jpg?raw=true">

  </Member>
  <Member
    name="Siddharth Lunawat"
    link="http://paul-www.linkedin.com/in/megha-paul-2757b921a"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Siddharth%20Lunawat_1MS22IS134.jpg?raw=true">

  </Member>

  <Member
    name="Megha Paul"
    link="http://paul-www.linkedin.com/in/megha-paul-2757b921a"
    image="https://github.com/aarthipv/profileimages/blob/main/Megha%20Paul.png">

  </Member>

  <Member
    name="Diyaa Prasad"
    link="https://www.linkedin.com/in/diyaa-prasad-b132a6299"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Diyaa%20Prasad_1MS22EC045.jpg?raw=true">

  </Member>

  <Member
    name="Abhiraj Paralkar"
    link="https://www.linkedin.com/in/abhiraj-paralkar-64613a2a6/"
    image="https://github.com/aarthipv/profileimages/blob/main/Abhiraj%20P%201MS22CH004.jpg">

  </Member>

  <Member
    name="Tausif Malek"
    link="https://www.linkedin.com/in/tausif-malek-1469a3293/"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Tausif%20Malek_1MS22BT055.JPG?raw=true">

  </Member>

  <Member
    name="Abhishek Manoj"
    link="http://www.linkedin.com/in/abhishek-manoj-4383512b2"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Abhishek%20Manoj_1MS22BT001%20.jpg?raw=true">

  </Member>

  <Member
    name="Zayaan Hussain"
    link="https://www.linkedin.com/in/zayaan-hussain-21a9472b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Zayaan%20Hussain%20_1MS22BT063.jpg?raw=true">

  </Member>

  <Member
    name="Trisha N Iyer"
    link="https://www.linkedin.com/in/trisha-n-iyer-b506192b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Trisha%20N%20Iyer_1MS23CS200.jpg?raw=true">

  </Member>

  <Member
    name="Aditya Sarkar"
    link=""//not uploaded
    image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/PR%20AND%20SP%20/Aditya%20sarkar%201MS23EI067-T.jpg?raw=true">

  </Member>
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
