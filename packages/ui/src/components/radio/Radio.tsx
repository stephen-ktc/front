import React from 'react'
import './radio.css'
import '../../styles/ktcTheme.scss'

export interface RadioProps {
  name: string
  value: string
  size?: 's' | 'm'
  label: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Radio = ({ name, value, size, label, ...props }: RadioProps) => {
  return (
    <div>
      <input type="radio" name={name} value={value} className={`ktc-radio-button-size-${size}`} />
      <label style={{ fontSize: `var(--ktc-font-size-${size})` }}>{label}</label>
    </div>
  )
}
