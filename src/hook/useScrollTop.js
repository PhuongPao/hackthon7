import React from 'react'
import { useEffect } from 'react'
import { CustomService } from '../services/custom.service'

export default function useScrollTop(dependency=[]) {
    useEffect(()=>{
        CustomService.scrollToTop();
    },dependency)
}
