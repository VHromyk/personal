import { string, z } from 'zod'

export const validationSchema = z.object({
  name: string().nonempty('Name is required'),
  company: string().nonempty('Company name is required'),
  email: string({ required_error: 'Email is required' })
    .email({
      message: 'Should be a valid Email',
    })
    .refine(
      (value) => /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value),
      'Invalid email pattern',
    ),
  textarea: string().nonempty('Message is required'),
})
