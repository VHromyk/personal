import React from 'react'
import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form'

interface IBaseField {
  label: string
  id: string
  placeholder?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  registerOptions: UseFormRegisterReturn
}

interface TInputField extends IBaseField {
  type: string
}

export const InputField = ({
  label,
  type,
  id,
  placeholder,
  error,
  registerOptions,
}: TInputField) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`py-[11px] px-3 border-[1px] border-dividerLight rounded-sm ${
          error ? 'border-[1px] border-error' : ''
        }`}
        {...registerOptions}
      />
      {typeof error?.message === 'string' && (
        <div className="absolute text-xs bottom-[-16px] text-error font-medium">
          {error.message}
        </div>
      )}
    </div>
  )
}

export const TextAreaField = ({
  id,
  label,
  placeholder,
  registerOptions,
  error,
}: IBaseField) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={`py-[11px] px-3 border-[1px] border-dividerLight rounded-sm min-h-[118px] resize-none ${
          error ? 'border-[1px] border-error' : ''
        }`}
        {...registerOptions}
      />
      {typeof error?.message === 'string' && (
        <div className="absolute text-xs bottom-[-16px] text-error font-medium">
          {error.message}
        </div>
      )}
    </div>
  )
}
