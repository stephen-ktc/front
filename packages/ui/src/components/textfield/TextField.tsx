import React, { useState, useEffect } from 'react'
import './textField.css'

interface TextFieldProps {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  value?: string
  variant?: 'filled' | 'outlined' | 'standard'
  error?: boolean
  id?: string
  label?: string
  placeholder?: string
  required?: boolean
  size?: 'small' | 'medium' | 'large'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = ({
  color = 'primary',
  value = '',
  variant = 'outlined',
  error = false,
  id,
  label,
  placeholder,
  required = false,
  size = 'medium',
  onChange,
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [internalValue, setInternalValue] = useState(value || '')

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const showPlaceholder = !label && !value

  useEffect(() => {
    setInternalValue(value || '')
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value)
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className={`textfield--${size} textfield--${variant} ${error ? 'textfield--error' : ''}`}>
      <div
        className={`textfield__wrapper ${isFocused || internalValue ? 'textfield__wrapper--focused' : ''}`}
      >
        {label && (
          <label
            htmlFor={id}
            className={`textfield__label textfield__label--${color} ${isFocused || internalValue ? 'textfield__label--active' : ''}`}
          >
            {label}
          </label>
        )}
        <input
          type="text"
          id={id}
          value={internalValue}
          className={`textfield__input textfield__input--${color}`}
          placeholder={showPlaceholder ? placeholder : ''}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
      </div>
      {error && <span className="textfield__error">Error</span>}
    </div>
  )
}
