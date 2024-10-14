import React from 'react'
import './checkbox.css'
import '../../styles/ktcTheme.scss'

export interface CheckboxProps {
  name?: string
  value?: string
  size?: 's' | 'm'
  label?: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ name, value, size, label, ...props }: CheckboxProps) => {
  return (
    <div>
      <input type="checkbox" name={name} value={value} className={`ktc-checkbox-size-${size}`} />
      <label style={{ fontSize: `var(--ktc-font-size-${size})` }}>{label}</label>
    </div>
  )
}
