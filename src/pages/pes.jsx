import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import {Member} from '@/components/Member'

export default function Home() {
    return (
        <>
            <Head>
                <title>IEEE PES CHAPTER || IEEE Ramaiah Institute of Technology</title>
                <meta
                    name="description"
                    content="IEEE PES CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
                />
            </Head>
            <Header />
            <main>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
                        <div className="">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                IEEE PES CHAPTER
                            </h1>
                            <div>
                                <h1 className="mt-10 text-justify text-2xl tracking-tight text-gray-900">
                                    IEEE Power and Energy Society Chapter is a professional society for electrical engineers who work in the power and energy industry. It provides members with access to educational resources, networking opportunities, and professional development opportunities.
                                    The IEEE Power and Energy Society (PES) is a leading non-profit organization driven by volunteers worldwide. Its mission is to be the leading provider of scientific and engineering information on electric power and energy for the betterment of society. A PES Chapter is a technical sub-unit of one or more IEEE Sections and consists of PES members who share technical interests and geographical proximity. Chapters provide PES members with the opportunity to meet and learn from fellow IEEE members. As of January 2023, PES has 800+ global chapters made up of Professional Chapters and Student Branch Chapters.
                                </h1>
                            </div>


                            <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="Yogin Reddy" 
                designation="Chairperson" 
                link="https://www.linkedin.com/in/charu-sharma-40b483210"
                image="https://drive.google.com/uc?id=1RFlWqR9tLBvRbaP3q7AAXW1A5S_BWL9c&export=view">
    </Member>
    
    <Member name="Affan Ahamed B" 
                designation="Co-Chair" 
                link="https://www.linkedin.com/in/affan-ahamed-b-1890b9279"
                image="https://drive.google.com/uc?id=1vSw9Kts-58nblpZK4jfNplPTLkLw4y2M&export=view">
    </Member>
    
    <Member name="Ruhi Muskan" 
                designation="Vice-Chair" 
                link="https://www.linkedin.com/in/ruhi-muskan-3b4484258"
                image="https://drive.google.com/uc?id=1javkDs4YZiWsy26tw5m37Xi4qAFjFtqQ&export=view">
    </Member>
    
    <Member name="Abhivridhi Sunil" 
                designation="Co-Vice Chair" 
                link="None"
                image="https://drive.google.com/uc?id=1XMBx7NHo8i2gTqD7nJiYOgKDmYXdb2y-&export=view">
    </Member>
    
    <Member name="Tarunika S K" 
                designation="Secretary" 
                link="https://www.linkedin.com/in/tarunika-s-k-380504210"
                image="https://drive.google.com/uc?id=142_I5XHWKDcdOBlpqjTek7Nx9MJKFXmS&export=view">
    </Member>
    
    <Member name="Vishal Singh Patel" 
                designation="Web Master" 
                link="https://www.linkedin.com/in/vishal-singh-patel-b1a8bb230/"
                image="https://drive.google.com/uc?id=12DvjiD0a73p7EDKu77wBi7FpYTRBMdcH&export=view">
    </Member>
    
    <Member name="Charu Sharma" 
                designation="Treasurer" 
                link="https://www.linkedin.com/in/charu-sharma-40b483210"
                image="https://drive.google.com/uc?id=1kDvCKB3JZ6cHsHlCnYMQWY7bp9W5OGOI&export=view">
    </Member>
    
    <Member name="Anusha L" 
                designation="PRO" 
                link="https://www.linkedin.com/in/anusha-l-3049a321b"
                image="https://drive.google.com/uc?id=1mZ-qVrA7b4Nz52zTUtWf4VNVO8Cpy49e&export=view">
    </Member>
    
    <Member name="Vyshanav . V. Naik" 
                designation="Event Manager" 
                link="https://www.linkedin.com/in/vyshanav-naik-542359230"
                image="https://drive.google.com/uc?id=1XMBx7NHo8i2gTqD7nJiYOgKDmYXdb2y-&export=view">
    </Member>
    
    <Member name="Nidhi Nilesh Naik" 
                designation="Member" 
                link="https://www.linkedin.com/in/nidhi-naik-8309aa237"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>
    
    <Member name="Bhavesh" 
                designation="Member" 
                link="https://www.linkedin.com/in/bhavesh-jadhav-ab8b71254"
                image="https://drive.google.com/uc?id=1ki-cVIiV-97HugjiL1aGvUKIjjf0pPSZ&export=download">
    </Member>
    
    <Member name="Shaik Raiyan" 
                designation="Member" 
                link="https://www.linkedin.com/in/shaik-raiyan-117ab026b"
                image="https://drive.google.com/uc?id=1r4qsR1bPIPqp4-Q-oAIY4LqO5JV24JsH&export=view">
    </Member>
    
    <Member name="Setu Rama K R" 
                designation="Member" 
                link="https://www.linkedin.com/in/sathvik-sethu-b492b9279"
                image="https://drive.google.com/uc?id=1r3WSW7QQVSdPqQuIul2PCZvtpuzVKlbf&export=view">
    </Member>
    
    <Member name="Divya Naidu K" 
                designation="Member" 
                link="https://www.linkedin.com/in/divya-naidu-11489b244"
                image="https://drive.google.com/uc?id=1DcBvq0XtOql7euT6JONzz9btTJcdG33Z&export=view">
    </Member>
    
    <Member name="Bhagyashri Rasal" 
                designation="Member" 
                link="https://www.linkedin.com/in/bhagyashri-rasal-a7622525b"
                image="https://drive.google.com/uc?id=1-5pcYWQRLsTxLRO7XHurXMWn293b_ZRf&export=view">
    </Member>
    
    <Member name="Sanajana Raj Nataraj" 
                designation="Member" 
                link="https://www.linkedin.com/in/sanjana-raj-nataraj-750448261"
                image="https://drive.google.com/uc?id=1z4CFVm2WBv32dcRjVzvIHNo2n3BZS2z-&export=view">
    </Member>
    
    <Member name="Vishal Singh Patel" 
                designation="Member" 
                link="None"
                image="https://drive.google.com/uc?id=12DvjiD0a73p7EDKu77wBi7FpYTRBMdcH&export=view">
    </Member>
    
    <Member name="M Subiksha" 
                designation="Member" 
                link="https://www.linkedin.com/in/m-subiksha-377305279"
                image="https://drive.google.com/uc?id=1n0frbBEDoM6QewkY8Iiu3TJ3GCqHrjyj&export=view">
    </Member>
    
    <Member name="Manjunath" 
                designation="Member" 
                link="https://www.linkedin.com/in/manjunath-gandigudi-6717a41b5"
                image="https://i.ibb.co/m8zY1VP/unknown.jpg">
    </Member>

    </div>
    </p>

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