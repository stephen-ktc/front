import React from 'react'

interface InputProps {
  size?: 'small' | 'large'
  label?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({ size = 'small', label, value, onChange }) => {
  const inputSize = size === 'large' ? 'input-large' : 'input-small'

  return (
    <div className={`input-wrapper ${inputSize}`}>
      {label && <label>{label}</label>}
      <input value={value} onChange={onChange} />
    </div>
  )
}
