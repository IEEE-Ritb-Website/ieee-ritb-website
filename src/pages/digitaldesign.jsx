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
          IEEE Digital Design | IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE Digital Design- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              IEEE Digital Design
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                IEEE Digital Design Team is a creative group within the IEEE
                club dedicated to designing eye-catching visuals for events and
                various design projects.
                <br></br>
                We are a team of talented designers who combine our passion for
                creativity with technological expertise. Our focus is on
                producing impactful designs that effectively communicate
                messages and engage audiences.
              </p>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Past events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  1. Brand It!
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  "Brand It" is an online event where each team will be given an
                  imaginary brand and must build a brand identity and design all
                  assets for the brand. Design assets like Logos, Favicons,
                  Colour Palette, Typefaces and so on.
                </p>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Upcoming Events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  NFTify:
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  This event is divided into two phases - a design contest, and a workshop.
Participants are required to build a piece of design from scratch which will then be turned into an
NFT. The design phase will be followed by a workshop where participants will be taken through
the process of turning any piece of art into an NFT - starting with setting up their Cryptocurrency
wallets and making an account. Participants will learn how to mint their first NFT and upload it
on the market for sale.
The best designs will be rewarded.

                </p>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="Adya S" 
                designation="Head" 
                link="https://www.linkedin.com/in/adya-samantray-84215a200"
                image="https://drive.google.com/uc?id=1AH1RFug2NIkK82PQVcIm_QvmEzVwc5iY&export=download">
    </Member>
    
    <Member name="Adhiraj Kar" 
                designation="Co-Head" 
                link="https://www.linkedin.com/in/adhiraj-kar/"
                image="https://drive.google.com/uc?id=1aY2HHxMgEJnEH2I1BnrlxMmnKkTm8bSs&export=download">
    </Member>
    
    <Member name="Prithvi Kumar" 
                designation="Vice-Head" 
                link="www.linkedin.com/in/prithvi---krr"
                image="https://drive.google.com/uc?id=1IaDswDug8jy4RXAludYs7ro-3QvmhVV-&export=download">
    </Member>
    
    <Member name="Ayush Jain" 
                designation="Member" 
                link="https://www.linkedin.com/in/ayush---jain"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Abhishek K" 
                designation="Member" 
                link="www.linkedin.com/in/abhishek-kaushik-0a6a16243/"
                image="https://drive.google.com/uc?id=1zJgSyRY2lrN7YeN0jOgmwBQ8R36ptcxk&export=download">
    </Member>
    
    <Member name="Aditi Kulkarni" 
                designation="Member" 
                link="https://www.linkedin.com/in/aditi-kulkarni-816ab622a"
                image="https://drive.google.com/uc?id=1_3s3klO6INyl6ttPBCohpWsWu-9UoTEi&export=download">
    </Member>
    
    <Member name="Tamanna Goel" 
                designation="Member" 
                link="https://www.linkedin.com/in/tamanna-goel-831108270"
                image="https://drive.google.com/uc?id=1qO4B0fSVGEkTYt--WxMxCB3DJwlKrlwP&export=download">
    </Member>
    
    <Member name="M Shraddha Rao" 
                designation="Member" 
                link="https://www.linkedin.com/mwlite/in/shraddha-rao-214801241"
                image="https://drive.google.com/uc?id=1tsOHARJL45hckuF3JpPQb49zgi2u1cbk&export=download">
    </Member>
    
    <Member name="Anant Sharma" 
                designation="Member" 
                link="https://www.linkedin.com/in/anant-sharma-937660198"
                image="https://drive.google.com/uc?id=1Nc9Iu43NCQP0zXQ0ooLtRXjXkTI57wqB&export=download">
    </Member>
    
    <Member name="Rajat Tripathi" 
                designation="Member" 
                link="https://www.linkedin.com/in/rajat-tripathi-173234248"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
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
