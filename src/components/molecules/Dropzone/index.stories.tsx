import { Meta, StoryFn } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import Dropzone from './index'
import Button from '@/components/atoms/Button'
import Box from '@/components/layout/Box'

export default {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '높이',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '너비',
      table: {
        type: { summary: 'number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '변형 에러 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptedFileTypes: {
      control: { type: 'select', options: ['image/png', 'image/jpeg', 'application/pdf'] },
      description: '허용되는 파일 유형',
      table: {
        type: { summary: 'string' },
      },
    },
    onDrop: {
      description: '파일 드롭 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    onChange: {
      description: '파일 선택 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof Dropzone>;


const Template: StoryFn<typeof Dropzone> = (args) => {
  const [files, setFiles] = useState<File[]>([])
  const handleDrop = (files: File[]) => {
    setFiles(files);

    if (args && args.onDrop) {
      args.onDrop(files)
    }
  }

  const fetchData = async () => {
    const res = await fetch('/images/sample/1.jpg')
    const blob = await res.blob()
    const file = new File([blob], '1.png', blob)

    setFiles([...files, file])
  }

  const clearImages = () => {
    setFiles([])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Box marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box marginBottom={1}>
        <Button onClick={fetchData}>이미지를 추가</Button>
      </Box>
      <Box marginBottom={2}>
        <Button onClick={clearImages}>모든 이미지를 클리어</Button>
      </Box>
      <Box>
        {files.map((f, i) => (
          <img
            src={URL.createObjectURL(f)}
            width="100px"
            key={i}
            alt="sample"
          />
        ))}
      </Box>
    </>
  )
}

export const WithControl = Template.bind({})
WithControl.args = {
  height: 200,
  width: '100%',
  acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
  hasError: false,
}