import React from 'react'

export default function UploadIcon({ className, width, height }) {
  return (
    <svg
      className={className}
      fill='currentColor'
      width={width || '3.2rem'}
      height={height || '3.2rem'}
      viewBox='0 0 48 48'
      data-e2e=''
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.18 7.17A2 2 0 0 1 4 6h40a2 2 0 0 1 1.74 3l-20 35a2 2 0 0 1-3.65-.4L16.22 25 2.49 9.32a2 2 0 0 1-.31-2.15Zm18.2 17.72 4.15 13.15L40.55 10H8.41l9.98 11.41 11.71-7.2a1 1 0 0 1 1.38.32l1.04 1.7a1 1 0 0 1-.32 1.38L20.38 24.9Z'
      />
    </svg>
  )
}
