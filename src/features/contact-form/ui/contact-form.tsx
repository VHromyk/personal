'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'

import {
  IInputField,
  ITextAreaField,
  InputField,
  useNoScroll,
  useOpen,
} from '@/shared'

import { validationSchema } from '../model'

const CongratulationModal = dynamic(() =>
  import('@/shared/ui/congratulation-modal/congratulation-modal').then(
    (item) => item.CongratulationModal,
  ),
)

export const ContactForm = () => {
  const [isLoading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useOpen()

  useNoScroll(isOpen, 1024)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(validationSchema),
    shouldFocusError: false,
    defaultValues: {
      name: '',
      company: '',
      email: '',
      textarea: '',
    },
  })

  const onSubmitForm = async (data: any) => {
    setLoading(true)
    try {
      const response = await axios.post('api/send', data)

      if (response?.data?.status === 200) {
        onOpen()
      }
    } catch (e) {
      if (e instanceof Error) {
        throw e
      }
    } finally {
      reset()
      setLoading(false)
    }
  }

  return (
    <>
      <form
        className="mt-10 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <InputField<IInputField>
          label="Your name*"
          id="name"
          type="text"
          placeholder="Enter your name"
          error={errors.name}
          registerOptions={register('name', { required: true })}
          category="input"
        />
        <InputField<IInputField>
          label="Company*"
          id="company"
          type="text"
          placeholder="Enter your company name"
          error={errors.company}
          registerOptions={register('company', { required: true })}
          category="input"
        />
        <InputField<IInputField>
          label="Email*"
          id="email"
          type="email"
          placeholder="'Enter your email',"
          error={errors.email}
          registerOptions={register('email', { required: true })}
          category="input"
        />
        <InputField<ITextAreaField>
          label="Message*"
          id="textarea"
          placeholder="Enter your message"
          error={errors.textarea}
          registerOptions={register('textarea', { required: true })}
          category="textarea"
        />
        <button
          disabled={isLoading}
          type="submit"
          className="py-[9px] px-4 disabled:opacity-50 rounded-full bg-bgDark text-white font-medium leading-normal w-min whitespace-nowrap hover:opacity-80 ease-in duration-300"
        >
          {isLoading ? 'Sending...' : 'Send mail'}
        </button>
      </form>
      {isOpen && <CongratulationModal isOpen={isOpen} onClose={onClose} />}
    </>
  )
}
