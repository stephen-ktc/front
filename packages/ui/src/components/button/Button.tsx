import React from 'react'
import './button.css'

export interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'ktc-color-text-primary' : 'ktc-color-text-secondary'
  return (
    <button
      className={mode}
    >
      button
    </button>
  )
}
