import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const { nickname } = useParams()
  return <h1>{nickname}</h1>
}
