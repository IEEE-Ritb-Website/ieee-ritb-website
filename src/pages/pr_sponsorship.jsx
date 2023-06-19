import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import {Member} from '@/components/Member'

export default function Home() {
  return (
    <>
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
                <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  Q. What does your chapter do?
                </h1>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  Ans. The Public Relations and Sponsorship chapter of IEEE at
                  RITB plays a dual role. We are responsible for promoting IEEE
                  events and ensuring maximum participation through effective
                  public relations strategies. Additionally, we actively seek
                  and secure sponsorships from companies to support and enhance
                  our events.
                </h2>
                <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  Q. What are your chapter’s present year goals?
                </h1>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Ans. Our chapter’s present year goals involve two key areas. Firstly, we aim to strengthen our public relations efforts by increasing awareness and engagement among students through targeted promotional campaigns. Secondly, we strive to establish strategic partnerships with companies to secure sponsorships that enhance the quality and reach of our events.
                </h2>
              </div>


              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="Natasha Robin" 
                designation="PR-Chair" 
                link="https://www.linkedin.com/in/natasha-robin-b374b8210"
                image="https://drive.google.com/uc?id=1TlKSfSu8tilK9uTGj7tEfccWrpLv4oXE&export=view">
    </Member>
    
    <Member name="Ridhiman Singh" 
                designation="Sponsorship-Chair" 
                link="https://www.linkedin.com/in/ridhiman-singh-b09241215"
                image="https://drive.google.com/uc?id=1Kby0YT1-UMR2MF_jv6rVlFOHZv1Eed_L&export=view">
    </Member>
    
    <Member name="Anuj Damani" 
                designation="PR- Co-Head" 
                link="https://www.linkedin.com/in/anuj-damani-17449a210"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Shireen Dash" 
                designation="PR Vice Chair" 
                link="https://www.linkedin.com/in/shireen-dash-300b96278/"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Nidhi Bishnoi" 
                designation="Sponsorship-Vice Chair" 
                link="https://www.linkedin.com/in/nidhi-bishnoi12"
                image="https://drive.google.com/uc?id=1dZbSBmTHf2MNu4BnCcoQYeVGv9gvbgbS&export=view">
    </Member>
    
    <Member name="Siddharth Thokne" 
                designation="Member" 
                link="None"
                image="https://drive.google.com/uc?id=1k94NIVU18JTZXdd3Ou3ze8svfPaym8NE&export=view">
    </Member>
    
    <Member name="Harshini Murthy" 
                designation="Member" 
                link="https://www.linkedin.com/in/nidhi-bishnoi12"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Siddharth Kannan" 
                designation="Member" 
                link="None"
                image="https://drive.google.com/uc?id=1i0JcABy-o6n_osVDrL8fsyDtuh9kxHSS&export=view">
    </Member>
    
    <Member name="Sanjana Raj N" 
                designation="Member" 
                link="https://www.linkedin.com/in/sanjana-raj-nataraj-750448261"
                image="https://drive.google.com/uc?id=1Vneg1O8BmBcZIJUAF9GJVo5-XxKZS4SY&export=view">
    </Member>
    
    <Member name="Mohd Asif Baliyan" 
                designation="Member" 
                link="None"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Khushi Rautela" 
                designation="Member" 
                link="https://www.linkedin.com/in/khushi-rautela-b0b773231"
                image="https://drive.google.com/uc?id=1VIpgeoGeQl5f-OZMVWNQEyjZqSd45Ud6&export=view">
    </Member>
    
    <Member name="Advika Gupta" 
                designation="Member" 
                link="https://www.linkedin.com/in/advika-gupta-606496226"
                image="https://drive.google.com/uc?id=17GBLW1FZurGKFcAdQOFKUF2aPFsQ1hHF&export=view">
    </Member>
    
    <Member name="Anushka Jain" 
                designation="Member" 
                link="https://www.linkedin.com/in/anushka-jain-a90278279"
                image="https://drive.google.com/uc?id=1EcOyqGCdTyBX2WE1ByU8-tTpXLZnTs1_&export=view">
    </Member>
    
    <Member name="Ranjana Rajesh" 
                designation="Member" 
                link="https://www.linkedin.com/in/ranjana-rajesh-454b91278"
                image="https://drive.google.com/uc?id=16-xNXqYNDVTtcPph5CNV001j0fFlBoOV&export=view">
    </Member>
    
    <Member name="Prutvi Prakash Shetty" 
                designation="Member" 
                link="https://www.linkedin.com/in/prutvi-shetty-631420240"
                image="https://drive.google.com/uc?id=1_3J_fBpnMKkZI9r-ckgjJ1EOEWP6FrvJ&export=view">
    </Member>
    
    <Member name="Varsha J" 
                designation="Member" 
                link="https://www.linkedin.com/in/varsha-j-173124254"
                image="https://drive.google.com/uc?id=19XN8suc5N1Ky2yY_6rCqpB9zYchYvblW&export=view">
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
