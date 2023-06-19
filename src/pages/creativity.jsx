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
        IEEE CREATIVITY || IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE CREATIVITY- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              IEEE CREATIVITY
              </h1>
              <div>
                <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                We facilitate “unmistakably IEEE” quality creative work while saving the organisation time and money.
                </h1>
                
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="Medha Kulkarni" 
                designation="Head" 
                link="https://www.linkedin.com/in/medha-kulkarni-28a483210"
                image="https://drive.google.com/uc?id=1xZ7PT2KJSswCq9X-PAHZb3wyQtoj4kMY&export=view">
    </Member>
    
    <Member name="N Sudharshan Reddy" 
                designation="Vice-Head" 
                link="https://www.linkedin.com/in/n-sudharshan-reddy-422303228/"
                image="https://drive.google.com/uc?id=1oaQ-Y_UkTe6P8xlx0CQVkyfLTl_BW3ZQ&export=view">
    </Member>
    
    <Member name="Prapti Bopanna" 
                designation="Member" 
                link="https://www.linkedin.com/in/prapti-bopana/"
                image="https://drive.google.com/uc?id=1fSyCA_bbL4xCP91fPdDE0rJx1PAZQBM0&export=view">
    </Member>
    
    <Member name="Ayush Sharma" 
                designation="Member" 
                link="https://www.linkedin.com/in/ayush-sharma-789246233"
                image="https://drive.google.com/uc?id=1ogTv-8qmhyjGrLCM-wrCaxy1r-2L035A&export=view">
    </Member>
    
    <Member name="Shaina Patel" 
                designation="Member" 
                link="https://www.linkedin.com/in/shaina-patel-1b4750215"
                image="https://drive.google.com/uc?id=1uDijhTflSA6ChwGq1h3SFi4SHtteQ_5T&export=view">
    </Member>
    
    <Member name="Nirmitha S Reddy" 
                designation="Member" 
                link="https://www.linkedin.com/in/nirmitha-s-reddy-a5714a234"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Chinmay Gowda" 
                designation="Member" 
                link="https://www.linkedin.com/in/chinmay-b-gowda-aa73ba279"
                image="https://drive.google.com/uc?id=1-0GMyJRuLS2jgY3tuqxSFNn2zw7vnJI_&export=view">
    </Member>
    
    <Member name="Khushi Rautela" 
                designation="Member" 
                link="https://www.linkedin.com/in/khushi-rautela-b0b773231/"
                image="https://drive.google.com/uc?id=1VFM-yYYRlg0UQ-6KpqAE0vWOcAyGbGM4&export=view">
    </Member>
    
    <Member name="M Shraddha Rao" 
                designation="Member" 
                link="https://www.linkedin.com/in/khushi-rautela-b0b773231/"
                image="https://drive.google.com/uc?id=1trd50PHI1G_V937sHyxKB89-LNiJrT_b&export=view">
    </Member>
    
    <Member name="Anirudh Bantwal Baliga" 
                designation="Member" 
                link="https://www.linkedin.com/in/anirudh-baliga-30b7b3219/"
                image="https://drive.google.com/uc?id=1H10foKWxcROwSfPzSm4cTzjHASqkSAFk&export=view">
    </Member>
    
    <Member name="Dhanraj Rateria" 
                designation="Member" 
                link="https://www.linkedin.com/in/dhanrajrateria"
                image="https://drive.google.com/uc?id=1P__rOfY4ik__wmjTU6_p9Wj587B9gJMr&export=view">
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
