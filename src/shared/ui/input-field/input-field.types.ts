import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from 'react-hook-form'

export interface IBaseField {
  label: string
  id: string
  placeholder?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  registerOptions: UseFormRegisterReturn
}

export interface IInputField extends IBaseField {
  category: 'input'
  type: 'text' | 'number' | 'tel' | 'email' | 'url'
}

export interface ITextAreaField extends IBaseField {
  category: 'textarea'
}

export type TField = IInputField | ITextAreaField
