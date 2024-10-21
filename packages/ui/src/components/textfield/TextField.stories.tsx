import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'
import StoryContainer from '@ktcloud-front/ui/common/StoryContainer'

const colorOptions = ['primary', 'secondary', 'error', 'success', 'warning'] as const
const sizeOptions = ['small', 'medium', 'large'] as const
const variantOptions = ['filled', 'outlined', 'standard'] as const

interface IMeta {
  title: string
  component: object
  parameters?: any
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    color: {
      description: 'Text Field 색상을 설정합니다.',
      control: { type: 'select', options: colorOptions },
    },
    size: {
      description: 'Text Field 크기를 설정합니다.',
      control: { type: 'select', options: sizeOptions },
    },
    variant: {
      description: 'Text Field 유형을 설정합니다.',
      control: { type: 'select', options: variantOptions },
    },
    label: {
      description: 'Text Field 의 label 을 설정합니다.',
      control: 'text',
    },
    value: {
      description: 'Text Field 의 값을 설정합니다.',
      control: 'text',
    },
    placeholder: {
      description: 'Text Field 의 placeholder 를 설정합니다.',
      control: 'text',
    },
    error: {
      description:
        'Text Field 의 Error 여부를 설정합니다. 사용자 Feedback 을 위한 helperText 가 사용될 수 있습니다.',
      control: 'boolean',
    },
    helperText: {
      description: 'Text Field 의 helperText 를 설정합니다.',
      control: 'text',
    },
    required: {
      description: 'Text Field 의 필수 여부를 설정합니다.',
      control: 'boolean',
    },
    disabled: {
      description: 'Text Field 의 disabled 속성을 설정합니다.',
      control: 'boolean',
    },
    onChange: {
      description: 'Text Field 의 onChange event 를 설정합니다.',
      action: 'changed',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'label',
    placeholder: 'Enter placeholder',
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    required: true,
    value: '',
  },
}

export const Variant: Story = {
  render: () => {
    const variantGroup = variantOptions.map((variant) => (
      <TextField variant={variant} label={variant} />
    ))
    return <StoryContainer items={variantGroup} />
  },
  parameters: {
    docs: {
      source: {
        code: `
          <TextField variant={variant} />
        `,
      },
    },
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = variantOptions.map((variant) => (
      <StoryContainer
        key={variant}
        items={colorOptions.map((color) => (
          <TextField
            key={`${color}-${variant}`}
            label={color}
            color={color}
            variant={variant}
            placeholder={color}
          />
        ))}
      />
    ))
    return <>{colorGroup}</>
  },
  parameters: {
    docs: {
      source: {
        code: `
          <TextField color={color} variant={variant} />
        `,
      },
    },
  },
}

export const Size: Story = {
  render: () => {
    const sizeGroup = sizeOptions.map((size) => <TextField label={size} size={size} />)
    return <StoryContainer items={sizeGroup} />
  },
  parameters: {
    docs: {
      source: {
        code: `
          <TextField size={size} />
        `,
      },
    },
  },
}
