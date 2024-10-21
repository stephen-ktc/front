import React, { useState, useEffect } from 'react'
import './textfield.scss'

type ColorOptions = 'primary' | 'secondary' | 'error' | 'success' | 'warning'
type SizeOptions = 'small' | 'medium' | 'large'
type VariantOptions = 'filled' | 'outlined' | 'standard'

interface TextFieldProps {
  color?: ColorOptions
  value?: string
  variant?: VariantOptions
  error?: boolean
  helperText?: string
  id?: string | any
  label?: string
  placeholder?: string | any
  required?: boolean | any
  size?: SizeOptions
  disabled?: boolean | any
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
  disabled,
  helperText,
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [internalValue, setInternalValue] = useState(value || '')

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const showPlaceholder = !internalValue && placeholder

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
            (isFocused || internalValue || showPlaceholder) && 'ktc-textfield-wrapper--focused',
          )}
        >
          {label && (
            <label
              htmlFor={id}
              className={getClassNames(
                `ktc-textfield-label`,
                (isFocused || internalValue || showPlaceholder) &&
                  `ktc-textfield-label-active ktc-textfield-label--${color}`,
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
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />
        </div>
        {error ? (
          <span className="ktc-textfield-error">{helperText}</span>
        ) : (
          <span className="ktc-textfield-helperText">{helperText}</span>
        )}
      </div>
    </div>
  )
}
