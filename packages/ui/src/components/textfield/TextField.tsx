import React, { useState, useEffect } from 'react'
import './textField.scss'

interface TextFieldProps {
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning'
  value?: string
  variant?: 'filled' | 'outlined' | 'standard'
  error?: boolean
  helperText?: string
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
  id,
  label,
  placeholder,
  required = false,
  size = 'medium',
  onChange,
  error = false,
  helperText,
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
  const getClassNames = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(' ')

  return (
    <div className="ktc-textfield-root">
      <div
        className={getClassNames(
          `ktc-textfield-${size}`,
          `ktc-textfield-${variant}`,
          error && 'ktc-textfield-error',
        )}
      >
        <div
          className={getClassNames(
            'ktc-textfield-wrapper',
            (isFocused || internalValue) && 'ktc-textfield-wrapper--focused',
          )}
        >
          {label && (
            <label
              htmlFor={id}
              className={getClassNames(
                `ktc-textfield-label`,
                `ktc-textfield-label--${color}`,
                (isFocused || internalValue) && 'ktc-textfield-label-active',
              )}
            >
              {label}
            </label>
          )}
          <input
            type="text"
            id={id}
            value={internalValue}
            className={getClassNames(`ktc-textfield-input`, `ktc-textfield-input--${color}`)}
            placeholder={showPlaceholder ? placeholder : ''}
            required={required}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
        </div>
        {(error || helperText) && <span className="ktc-textfield-error">{helperText}</span>}
      </div>
    </div>
  )
}
