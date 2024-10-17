import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'
import { Args } from '@storybook/csf'

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
      control: { type: 'select', options: ['primary', 'secondary', 'error', 'success', 'warning'] },
    },
    size: {
      description: 'Text Field 크기를 설정합니다.',
      control: { type: 'select', options: ['medium', 'small', 'large'] },
    },
    variant: {
      description: 'Text Field 유형을 설정합니다.',
      control: { type: 'select', options: ['filled', 'outlined', 'standard'] },
    },
    label: {
      description: 'Text Field 의 Label 을 설정합니다.',
      control: 'text',
    },
    value: {
      description: 'Text Field 의 값을 설정합니다.',
      control: 'text',
    },
    placeholder: {
      description: 'Text Field 의 Placeholder 를 설정합니다.',
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
  render: (args: Args) => {
    return (
      <>
        <div
          style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', margin: '40px' }}
        >
          <TextField label={'standard'} variant={'standard'} />
          <TextField label={'filled'} variant={'filled'} />
        </div>
      </>
    )
  },
}

export const Color: Story = {
  render: (args: Args) => {
    return (
      <>
        <div
          style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', margin: '40px' }}
        >
          <TextField label={'primary'} color={'primary'} />
          <TextField label={'secondary'} color={'secondary'} />
          <TextField label={'success'} color={'success'} />
          <TextField label={'warning'} color={'warning'} />
          <TextField label={'error'} color={'error'} />
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', margin: '40px' }}
        >
          <TextField label={'primary'} color={'primary'} variant={'standard'} />
          <TextField label={'secondary'} color={'secondary'} variant={'standard'} />
          <TextField label={'success'} color={'success'} variant={'standard'} />
          <TextField label={'warning'} color={'warning'} variant={'standard'} />
          <TextField label={'error'} color={'error'} variant={'standard'} />
        </div>
      </>
    )
  },
}

export const Size: Story = {
  render: (args: Args) => {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <TextField label={'outlined'} size={'small'} />
          <TextField label={'outlined'} size={'medium'} />
          <TextField label={'outlined'} size={'large'} />
        </div>
      </>
    )
  },
}
