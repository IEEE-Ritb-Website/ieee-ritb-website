import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import {Member} from '@/components/Member'

export default function Home() {
    return (
        <>
            <Head>
                <title>IEEE SPS CHAPTER || IEEE Ramaiah Institute of Technology</title>
                <meta
                    name="description"
                    content="IEEE SPS CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
                />
            </Head>
            <Header />
            <main>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
                        <div className="">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                IEEE SPS CHAPTER
                            </h1>
                            <div>
                                <h1 className="mt-10 text-justify text-2xl tracking-tight text-gray-900">
                                    Signal processing is the enabling technology for the generation, transformation, extraction, and interpretation of information. It comprises the theory, algorithms with associated architectures and implementations, and applications related to processing information contained in many different formats broadly designated as signals. Signal processing uses mathematical, statistical, computational, heuristic, and/or linguistic representations, formalisms, modeling techniques and algorithms for generating, transforming, transmitting, and learning from signals.

                                    The Signal Processing Society is an international organization whose purpose is to: advance and disseminate state-of-the-art scientific information and resources; educate the signal processing community; and provide a venue for people to interact and exchange ideas. SPS RIT tries its best to maintain the high-quality standards of the International Signal Processing Society

                                </h1>
                            </div>


                            <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>
                
                <p className="mt-6 text-base text-gray-600">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member name="S Rohit" 
                designation="Chair" 
                link="http://linkedin.com/in/s-rohit-a6617b26b"
                image="https://drive.google.com/uc?id=1eMhQrBEkJ14fLdDp6C7z_nRQfNWVdnoS&export=view">
    </Member>
    
    <Member name="Sahil Tarun Agarwal" 
                designation="Secretary" 
                link="https://www.linkedin.com/in/sahil-tarun-agarwal-9a44ba210"
                image="https://drive.google.com/uc?id=1S-d6YzDkuW7-aH-lSspawkmCGhjHBtUO&export=view">
    </Member>
    
    <Member name="Rohit N M" 
                designation="Vice-Chair" 
                link="https://www.linkedin.com/in/rohit-nm-292ab5246"
                image="https://drive.google.com/uc?id=1PCWWVDUDysGS0-0tw9hXUpDGwsH4P9Ec&export=view">
    </Member>
    
    <Member name="Prathvin R Shetty" 
                designation="Member" 
                link="None"
                image="https://drive.google.com/uc?id=1eeiqxNo-QTS-s1NwObRL3RBP2L_eyNzz&export=view">
    </Member>
    
    <Member name="M S Dhanyavan" 
                designation="Member" 
                link="https://www.linkedin.com/in/m-s-dhanyavan-32b49b220"
                image="https://drive.google.com/uc?id=1qmAo1iDUqhZAat1yrDqly_e-6EcaL2PV&export=view">
    </Member>
    
    <Member name="Aishwarrya" 
                designation="Member" 
                link="https://www.linkedin.com/in/aishwarrya-vp-38b9b8214"
                image="https://drive.google.com/uc?id=1YCM3yv4RMkxGA7YKTXVc-hO5XeqHzsL6&export=view">
    </Member>
    
    <Member name="G Rohit Raju" 
                designation="Member" 
                link="https://www.linkedin.com/in/rohit-r-1220b1279"
                image="https://drive.google.com/uc?id=14qEEvOQUsmGRlF0SX9k0k0DRt1sahRba&export=view">
    </Member>
    
    <Member name="Harsha Yadav H V" 
                designation="Member" 
                link="https://www.linkedin.com/in/harsha-yadav-h-v-4b6172246"
                image="https://drive.google.com/uc?id=1K2uRTdq5zIYWLs5Y8ZcOLCNg_UrKpl7p&export=view">
    </Member>
    
    <Member name="Neha C" 
                designation="Member" 
                link="https://www.linkedin.com/in/neha-channaiah-5620a524b"
                image="https://drive.google.com/uc?id=1RndAYjvFootlti2UeICM1NM9ZBrGMiSO&export=view">
    </Member>
    
    <Member name="M. Naga Sarvani" 
                designation="Member" 
                link="None"
                image="https://drive.google.com/uc?id=1MAuLqW1_4aDBadEwgaTyt2zMifrlDd0D&export=view">
    </Member>
    
    <Member name="Shreyas Bhat" 
                designation="Member" 
                link="None"
                image="https://drive.google.com/uc?id=1aWzxNKK28IxefOZmk4i9t0B2GNIbusqf&export=view">
    </Member>
    
    <Member name="Srivalli P" 
                designation="Member" 
                link="https://www.linkedin.com/in/srivalli-p-aab40a247"
                image="https://drive.google.com/uc?id=1UTIBeTIQi37isrS0Adh6Uikjd7o2zIYA&export=view">
    </Member>
    
    <Member name="Nidhi Patil" 
                designation="Member" 
                link="https://www.linkedin.com/in/nidhi-patil-3a9980214"
                image="https://drive.google.com/uc?id=14gcMhPDS-7szmFNZfYUOKLdlwxkQWFWo&export=view">
    </Member>
    
    <Member name="Sarvani" 
                designation="Member" 
                link="https://www.linkedin.com/in/mogallapalli-naga-sarvani-4b5238279/"
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