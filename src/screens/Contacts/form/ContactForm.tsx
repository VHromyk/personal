'use client'
import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { validationSchema } from '@/screens/Contacts/form/formValidation'
import { InputField, TextAreaField } from '@/screens/Contacts/form/InputField'

import axios from 'axios'
import {CongratulationModal} from '@/components/Modal/CongratulationModal';
import {useOpen} from '@/hooks/useOpen';
import {useNoScroll} from '@/hooks/useNoScroll';

const form = {
  name: {
    id: 'name',
    type: 'text',
    label: 'Your name*',
    placeholder: 'Enter your name',
  },
  company: {
    id: 'company',
    type: 'text',
    label: 'Company*',
    placeholder: 'Enter your company name',
  },
  email: {
    id: 'email',
    type: 'email',
    label: 'Email*',
    placeholder: 'Enter your email',
  },
  textarea: {
    id: 'textarea',
    type: 'textarea',
    label: 'Message*',
    placeholder: 'Enter your message',
  },
}

export const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const {isOpen, onOpen, onClose} = useOpen();

  useNoScroll(isOpen)

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
      if(e instanceof Error) {
        throw e;
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
          <InputField
              label={form.name.label}
              id={form.name.id}
              type={form.name.type}
              placeholder={form.name.placeholder}
              error={errors.name}
              registerOptions={register('name', { required: true })}
          />
          <InputField
              label={form.company.label}
              id={form.company.id}
              type={form.company.type}
              placeholder={form.company.placeholder}
              error={errors.company}
              registerOptions={register('company', { required: true })}
          />
          <InputField
              label={form.email.label}
              id={form.email.id}
              type={form.email.type}
              placeholder={form.email.placeholder}
              error={errors.email}
              registerOptions={register('email', { required: true })}
          />
          <TextAreaField
              id={form.textarea.id}
              label={form.textarea.label}
              error={errors.textarea}
              placeholder={form.textarea.placeholder}
              registerOptions={register('textarea', { required: true })}
          />
          <button
              disabled={isLoading}
              type="submit"
              className="py-[9px] px-4 rounded-full bg-bgDark text-white font-medium leading-normal w-min whitespace-nowrap hover:opacity-80 ease-in duration-300"
          >
            {isLoading ? 'Sending...' : 'Send mail'}
          </button>
        </form>
        <CongratulationModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </>
  )
}
