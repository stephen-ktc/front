import React from 'react'
import './button.css'

export interface ButtonProps {
  disabled?: boolean
  loading?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  href?: string
  label: string
  onClick?: () => void
}

export const Button = ({
                        disabled = false,
                        loading = false,
                        size = 'medium',
                        variant = 'contained',
                        color = 'primary',
                        label,
                        onClick,
                        ...props
                       }: ButtonProps) => {
  return <button
    disabled={disabled}
    type="button"
    className={['storybook-button', `storybook-button--${size}`, `storybook-button--${variant}`].join(' ')}
    onClick={onClick}
    {...props}
  >
    {label}
  </button>
}