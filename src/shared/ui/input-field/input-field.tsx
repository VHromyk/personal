import React from 'react'

import { TField } from './input-field.types'

export const InputField = <T extends TField>(props: T) => {
  const { error, category, label, placeholder, registerOptions, id } = props

  const errorMessageRender = typeof error?.message === 'string' && (
    <div className="absolute text-xs bottom-[-16px] text-error font-medium">
      {error.message}
    </div>
  )

  const labelRender = (
    <label htmlFor={id} className="font-medium">
      {label}
    </label>
  )

  const inputRender =
    category === 'input' ? (
      <input
        type={props.type}
        id={id}
        placeholder={placeholder}
        className={`py-[11px] px-3 border-[1px] border-dividerLight rounded-sm ${
          error ? 'border-[1px] border-error' : ''
        }`}
        {...registerOptions}
      />
    ) : (
      <textarea
        id={id}
        placeholder={placeholder}
        className={`py-[11px] px-3 border-[1px] border-dividerLight rounded-sm min-h-[118px] resize-none ${
          error ? 'border-[1px] border-error' : ''
        }`}
        {...registerOptions}
      />
    )

  return (
    <div className="flex flex-col gap-1 relative">
      {labelRender}
      {inputRender}
      {errorMessageRender}
    </div>
  )
}
