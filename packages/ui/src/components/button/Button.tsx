import React, { useState } from 'react'
import './button.scss'

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  disabled?: boolean
  href?: string
  label: string
  loading?: boolean
  variant?: 'contained' | 'outlined' | 'text'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

export const Button = ({  
                        color = 'primary',
                        disabled = false,
                        href,
                        label,
                        loading = false,
                        variant = 'contained',
                        size = 'medium',
                        onClick,
                        ...props
                       }: ButtonProps) => {
                         
  return(
    loading? 
      <button 
        type='button'
        className={['loading-button', `storybook-button--${size}`, `storybook-button-spin-${variant}`].join(' ')} 
        disabled={true}
      >
        <span className={[`loader-${variant}`].join(' ')}></span>
      </button>
    :
      <button
        type='button'
        disabled={disabled}
        className={['storybook-button', `storybook-button--${size}`, `storybook-button-${color}-${variant}`].join(' ')}
        onClick={href ? () => (window.location.href = href) : onClick}
        {...props}
      >
        {label}
      </button>
  )  
}