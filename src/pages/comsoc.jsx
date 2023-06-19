import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import {Member} from '@/components/Member'

export default function Home() {
  return (
    <>
      <Head>
        <title>COMSOC | IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="COMSOC - IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              COMSOC
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We at Ramaiah Institute of Technology, are all called to communications technology, to advance communications and networking technology for the betterment of humanity. IEEE ComSoc RITB promotes technological innovation and fosters creation and sharing of information among the global technical community.
                <br></br>
                The chapter provides services to members for their technical and professional advancement and forums for technical exchanges among professionals in academia, industry, and public institutions. To bring the world together in harmony through communications and networking technology research, application, education, and incubation of new ideas.

              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Joining an IEEE COMSOC chapter offers several benefits,
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
                  1. QUIZARDRY
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this about?</b>
                  <br></br>
                  Quizardry was altogether a 4-Quiz event which consisted of 4 rounds namely aptitude, technical affairs, pop culture and coding. Each round consisted of 20 questions on average and the cumulative scores of the 4 quizzes would be taken into consideration to decide the winner and the runner up.
                  <br></br>

                  The entire Student Branch of ComSoc was involved in the conduction of the event. We divided ourselves in 3 groups, where each group was involved in conducting a specific event being aptitude, technical affairs, or pop culture.


                </p>
                <p className="text-base text-gray-600">
                  The event lasted from 10/6/2022 to 20/6/2022.
                </p>
                
              </div>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 text-left">
                  2. WIRELESS EVOLUTION
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this about?</b>
                  <br></br>
                  This session was about the uses of evolved technologies across industries and consumers that leveraged high bandwidth, low latency, machine type communications, from smart homes, health care to Industry 4.0 to Metaverse scenarios. It also covered the history of Communications, wireless technology evolution from 1G to 5G and beyond, network architecture, use cases and applications supported.
                  <br></br>
                  This technical talk was headed by Ms. Gnanapriya Chidambaranathan.
                  <br></br>
                  Gnanapriya is the Associate Vice President, Unit Technology Officer, Global Head of Technology & Architecture Practice - Communications, Media & Entertainment, Energy, Utilities & Services Business Unit (ECS).  Priya has 28+ years of experience in Telecom & IT. She contributes to unit strategy, drives technology adoption for business solutions across varied programs globally. She has been driving Digital Transformation, Enterprise Architecture, IT roadmap, Micro Services, Cloud migration, Open-Source Adoption, 5G / Edge, 5G Use Cases & Industry solutions, emerging technologies themes like Blockchain solutions, Software Marketplaces, Data Modernization, Legacy & Technology Modernization, Innovation, guiding varied transformation & modernization programs for ECS global clients and part of org level core team.

                </p>
                               
              </div>

              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  3. SUCCESS DECK
                </h2>
                
                <p className="mt-6 text-base text-gray-600">
                <b>What is this about?</b>
                <br></br>
                  “Success Deck”- The flagship event of IEEE ComSoc, RITB is essentially a mock placement drive conducted especially for the 2nd and 3rd year engineering students to provide them with a basic idea of how college placements are conducted, the event not only helps them prepare for placements better but also gives a critical insight to all the participants in terms of improving on their technical and communication skills.
                  <br></br>
                  This event was conducted exactly like any placement drive that happens in our college; we conducted an aptitude followed by a coding round on 11th of December 2022 where they were posed with 3 medium level coding questions. We were extremely elated at the fact that more than 40 percent of the participants were scoring above 65 percent on the coding test showing that despite being in 2nd and 3rd year which showed how proficient students were at competitive coding.
                  <br></br>
                  For the technical interview round we bought in 4 astounding professionals from the tech industry who were also RIT Alumni. We shortlisted 10 candidates for the technical round and each round was approximately half an hour long judging the projects in their resume and their problem-solving capacity.
                  <br></br>
                  In the end the top or most impressive candidate was given a cash prize of 1500 INR (First Place), 1000 INR (Second Place), and 500 INR (Third Place) ; everyone was given a participation certificate. 

                </p>
              </div>




              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                

                <Member name="Tarunay Shrivastava" 
                designation="Chairperson" 
                link="https://www.linkedin.com/in/tarunay-shrivastava-98ab2919a"
                image="https://drive.google.com/uc?id=1yTodYTvBoPH_qgdENTT1fmH4CX3Q8J5U&export=view">
                </Member>

                <Member name="Shawn Daniel Rodrigues" 
                designation="Secretary" 
                link="https://www.linkedin.com/in/shawn-daniel-rodrigues-a63020205/"
                image="https://drive.google.com/uc?id=1DWuba-Z-oI-kYD2UCipOYWtGiC8JEQ73&export=view">
                </Member>

                <Member name="Katyayani Palak" 
                designation="Vice Chair" 
                link=""
                image="https://drive.google.com/uc?id=1WH6VtI1VhvecvUZYXG-tTdpNDxaEiZIU&export=view">
                </Member>


                <Member name="Roshni Roche" 
                designation="Treasurer" 
                link="https://www.linkedin.com/in/roshni-roche-641961264"
                image="https://drive.google.com/uc?id=1ZZwJeYhxVx5Cb_Ll8O1lPQhSOxH6zFhx&export=view">
                </Member>


                <Member name="Vaishnavi Dinesh" 
                designation="Execom" 
                link="https://in.linkedin.com/in/vaishnavi-dinesh-019253267"
                image="https://drive.google.com/uc?id=1GaECTmHMC540NGHK7k7BqrJloLxPIgvO&export=view">
                </Member>


                <Member name="Kaushik Gopal Gaitonde" 
                designation="Execom" 
                link="https://www.linkedin.com/in/kaushik-gaitonde-067039247/"
                image="https://drive.google.com/uc?id=1piUOHXN5zGcotcvTbpxKxQa928BEehLZ&export=view">
                </Member>


                <Member name="Dhanyath R" 
                designation="Execom" 
                link="https://www.linkedin.com/in/dhanyath-r-4a9737228"
                image="https://drive.google.com/uc?id=1VRA9zCcXn0wiO5lC0RgQAFs29RRZisz4&export=view">
                </Member>


                <Member name="N Dharshan" 
                designation="Execom" 
                link="http://www.linkedin.com/in/dharshan-5807552"
                image="https://drive.google.com/uc?id=1-D8fWgd--yaPrhn1npE4iLdKbc7ZE3Yd&export=view">
                </Member>
                  
                </div>
                  
                </p>
                
              {/* <div className="mt-10 flex items-center">
                <iframe
                  className="w-full"
                  height={1080}
                  src="https://docs.google.com/document/d/e/2PACX-1vTynj0Vv6kt0GLOBjuulOJnsyh2yEXtifc26SijHMl7W5DWaejn-7SfpzI9nJoQUg/pub?embedded=true"
                ></iframe>
              </div> */}
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
