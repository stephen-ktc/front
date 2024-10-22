import type { StoryObj } from '@storybook/react'
import { Select } from './Select'
import { Args } from '@storybook/csf'
import { stringify } from 'node:querystring'

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
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    label: {
      description: 'Select의 라벨을 설정합니다.',
    },
    labelAlign: {
      description: 'Select의 라벨 위치를 설정합니다.',
    },
    value: {
      description: '선택된 값을 정의합니다.',
      // control: { type: 'select', options: ['primary', 'secondary', 'error', 'success', 'warning'] },
    },
    menuList: {
      description: '선택 가능한 메뉴 목록을 설정합니다.',
      // control: { type: 'select', options: ['medium', 'small', 'large'] },
    },
    variant: {
      description: 'Select 유형을 설정합니다.',
      // control: { type: 'select', options: ['filled', 'outlined', 'standard'] },
    },
    size: {
      description: 'Select Label을 설정합니다.',
      // control: 'text',
    },
    error: {
      description: 'Select의 Error 여부를 설정합니다..',
      control: 'boolean',
    },
    required: {
      description: '필수 선택 여부를 설정합니다.',
      control: 'text',
    },
    disabled: {
      description:
        'Text Field 의 Error 여부를 설정합니다. 사용자 Feedback 을 위한 helperText 가 사용될 수 있습니다.',
      control: 'boolean',
    },
    readOnly: {
      description: 'Select의 읽기 전용 여부를 설정합니다.',
      control: 'text',
    },
    multiple: {
      description: 'Select의 다중 선택 여부를 설정합니다..',
      control: 'boolean',
    },
    placeholder: {
      description: 'Select의 placeholder를 설정합니다.',
      action: 'string',
    },
    helperText: {
      description: 'Select의 HelperText를 설정합니다.',
      action: 'string',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label 이름',
    placeholder: '선택해주세요',
    variant: 'outlined',
    size: 'small',
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
          <Select label={args.label} value={''} options={['사과', '바나나', '수박']} />
        </div>
      </>
    )
  },
}
