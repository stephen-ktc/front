import { useState, useEffect, ReactNode, ChangeEvent, MouseEventHandler } from 'react'
import './select.scss'
import { ChevronSmallDownIcon, ArrowSolidDownIcon } from '@storybook/icons'

export interface IMenuList {
  [key: string]: any
}

interface SelectProps {
  value: any
  menuList: IMenuList[]
  variant?: 'outlined' | 'standard'
  size?: 'small' | 'medium'
  error?: boolean
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  multiple?: boolean
  placeholder?: string
  helperText?: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  id?: string
  label?: ReactNode
  labelAlign?: 'vertical' | 'horizontal'
}

export const Select = ({
  value,
  menuList = ['apple', 'banana', 'watermelon'],
  variant = 'outlined',
  size = 'small',
  labelAlign = 'vertical',
  error = false,
  required = false,
  disabled = false,
  readOnly = false,
  multiple = false,
  placeholder,
  helperText,
  onChange,
  id,
  label,
  ...props
}: SelectProps) => {
  // useEffect(() => {
  //   setInternalValue(value || '')
  // }, [value])
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInternalValue(e.target.value)
  //   if (onChange) {
  //     onChange(e)
  //   }
  // }
  // const getClassNames = (...classes: Array<string | false | null | undefined>) =>
  //   classes.filter(Boolean).join(' ')

  const [isFocused, setIsFocused] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value)
  const handleClick = () => {
    setIsOpened(!isOpened)
  }
  const handleFocus = () => {
    setIsFocused(true)
    setIsOpened(!isOpened)
  }
  const handleBlur = () => {
    // setIsFocused(false)
  }
  const handleSelectItem = (item: any) => () => {
    setSelectedValue(item)
    setIsOpened(false)
  }
  console.log(isFocused)
  return (
    <div className={`ktc-select-wrapper-${labelAlign}`}>
      <div className="ktc-select-label">{label}</div>
      <div
        className={`ktc-select-controlBox ktc-select-controlBox-${variant} ktc-select-controlBox-${size}`}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <div>{selectedValue ? selectedValue : placeholder}</div>
        <ChevronSmallDownIcon />
        {isOpened && (
          <div className="ktc-select-menuList">
            {menuList.map((item: any) => (
              <div key={item} className={'ktc-select-menuItem'} onClick={handleSelectItem(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
