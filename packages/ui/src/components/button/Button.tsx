import React, { useState } from 'react'
import './button.scss'

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
                        href,
                        label,
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
        // disabled={disabled}
        className={['storybook-button', `storybook-button--${size}`, `storybook-button-${color}-${variant}`].join(' ')}
        onClick={href ? () => (window.location.href = href) : onClick}
        {...props}
      >
        {label}
      </button>
  )  
}