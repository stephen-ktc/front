import React from 'react'
import './button.css'

export interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
  backgroundColor?: string
  onClick?: () => void
}

export const Button = ({
                         primary = false,
                         size = 'medium',
                         backgroundColor,
                         label,
                         ...props
                       }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return <button
    type="button"
    className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    {...props}
  >
    {label}
  </button>
}