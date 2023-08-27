import { Spin } from 'antd'
import React from 'react'
import { createPortal } from 'react-dom'
import './Loading.scss'

export default function Loading() {
  return createPortal(
    <div className='loading'>
        <Spin size="large"/>
    </div>
  ,document.body)
}
