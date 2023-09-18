import React from 'react'

export const InputField = ({
  label,
  type,
  id,
  placeholder,
  error,
  registerOptions,
}) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`py-[11px] px-3 border-[1px] border-dividerLight rounded-sm ${error ? 'border-[1px] border-error' : ''}`}
          {...registerOptions}
        />
        {error && <div className="absolute text-xs bottom-[-16px] text-error font-medium">{error?.message}</div>}
    </div>
  )
}

export const TextAreaField = ({ id, label, placeholder, registerOptions, error }) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={`py-[11px] px-3 border-[1px] border-dividerLight rounded-sm min-h-[118px] resize-none ${error ? 'border-[1px] border-error' : ''}`}
        {...registerOptions}
      />
        {error && <div className="absolute text-xs bottom-[-16px] text-error font-medium">{error?.message}</div>}
    </div>
  )
}
