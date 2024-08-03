import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import img1 from '@/images/members/member(2).jpg'
import img2 from '@/images/members/member(1).jpg'
import head1 from '@/images/members/head(1).png'
import head2 from '@/images/members/head(2).jpg'
import head3 from '@/images/members/head(3).jpg'

import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
const faculty_head = [
  {
    name: 'Dr. Sujatha B',
    designation: 'Student Branch Counselor',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=ece&ID=5',
    image: head2,
  },
  
]

const faculty_details = [
  {
    dept: 'ECE',
    name: 'Dr. S. Sethu Selvi',
    chapter: 'SPS',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=ece&ID=2',
    image: 'https://preview.ibb.co/kt89ma/hod.jpg',
  },
  {
    dept: 'CSE',
    name: 'Dr. Parkavi A.',
    chapter: 'WIE',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=cse&ID=9',
    image: 'https://image.ibb.co/bwVi2F/AParkavi.jpg',
  },
  {
    dept: 'EEE',
    name: 'Dr. Sridhar S.',
    chapter: 'PES',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=eee&ID=5',
    image: 'https://i.ibb.co/jTksqZ7/Dr-Sridhar-S.jpg',
  },
  {
    dept: 'ETE',
    name: 'Dr. Parimala Prabhakar',
    chapter: 'APS',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=te&ID=6',
    image: 'https://image.ibb.co/dHXjWk/2017_08_29_13_09_29.jpg',
  },
  {
    dept: 'ECE',
    name: 'Dr. S. Imaculate Rosaline',
    chapter: 'APS',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=ece&ID=26',
    image: 'https://i.ibb.co/XJYf8gR/rosynew1.jpg',
  },
  {
    dept: 'CSE',
    name: 'Dr. Parkavi A.',
    chapter: 'Computer Society',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=cse&ID=9',
    image: 'https://image.ibb.co/bwVi2F/AParkavi.jpg',
  },
  {
    dept: 'ETE',
    name: 'Dr. Parimala Prabhakar',
    chapter: 'MTT-S',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=te&ID=6',
    image: 'https://image.ibb.co/dHXjWk/2017_08_29_13_09_29.jpg',
  },
]

export default function officebearers() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-32">
      <Head>
        <title>Faculty Members - IEEE | Ramaiah Institute of Technology</title>
      </Head>
      <Header />
      <section className="bg-blue-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-8">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
              Faculty Members of <span className="text-sky-800">IEEE RITB</span>
            </h2>
          </div>
          <div className="mb-6 flex flex-col items-center justify-center gap-8 md:flex-row lg:mb-16">
            {faculty_head.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-lg border border-blue-100 shadow-lg mb-4 md:mb-0 md:mr-4"
              >
                <div className="bg-white p-4">
                  <div className="flex justify-center">
                    <Image
                      className="flex-shrink-0 rounded-lg object-cover"
                      src={member.image}
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-md font-medium text-slate-800">
                      {member.designation}
                    </p>
                    <p className="text-xl font-semibold mb-3 text-gray-900">
                      {member.name}
                    </p>
                    <a href={member.link} className="text-md font-medium bg-blue-500 text-white py-2 px-3 rounded-md">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row lg:mb-16">
            {faculty_details.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-lg border border-blue-100 shadow-lg mb-4 md:mb-0 md:mr-4"
              >
                <div className="bg-white p-4 flex flex-col items-center">
                  <div className="flex justify-center w-[250px] h-[200px] md:w-[200px]">
                    <Image
                      className="flex-shrink-0 rounded-lg object-cover w-[250px] md:w-[200px]"
                      src={member.image}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </p>
                    <div className="text-md font-semibold text-gray-500">
                      {member.chapter}
                    </div>
                    <a href={member.link} className="text-md font-medium text-blue-500 underline">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}