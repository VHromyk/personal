import React from 'react'

import Image from 'next/image'

import { ContactForm } from '@/features'
import HI_IMG from '@/public/assets/images/hi.png'
import { ContactsList } from '@/widgets'

import { socialList } from '../config'

export const Contacts = () => {
  return (
    <section className="mt-[46px] pb-[100px] md:mt-[104px] flex flex-col gap-[70px] md:flex-row md:gap-20 leading-normal">
      <div className="flex-1">
        <h1 className="font-medium leading-normal text-4xl">Contact me</h1>
        <span className="inline-block mt-3 text-textGray">Get in Touch 😉</span>
        <ContactForm />
      </div>
      <div className="flex-1 bg-lightBlue rounded py-6 px-4 pb-0 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-medium leading-normal capitalize">
            Contact information
          </h2>
          <span className="block mt-2 text-textGray">
            Please complete the form provided or reach out to me using the
            contact method that is most convenient for you.
          </span>
          <ContactsList />
          <div>
            <h3 className="uppercase font-medium leading-normal mt-8 text-textDark">
              Social Network
            </h3>
            <ul className="flex max-w-[256px] justify-between mt-3">
              {socialList.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="nofollow"
                    className="font-medium flex items-center gap-1 hover:opacity-60 ease-in duration-300"
                  >
                    <span>{item.icon}</span>
                    <span className="capitalize text-textDarkGreen font-semibold text-sm underlined">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          <Image
            src="/assets/images/hi.png"
            alt="image"
            width={385}
            height={222}
          />
        </div>
      </div>
    </section>
  )
}
