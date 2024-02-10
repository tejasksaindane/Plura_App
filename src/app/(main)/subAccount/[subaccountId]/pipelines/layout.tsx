import React from 'react'
import BlurPage from '@/components/global/blur-page'

type Props = {}

const PipelinesLayout = ({children}: {children:React.ReactNode}) => {
  return (
      <BlurPage>{children}</BlurPage>
  )
}

export default PipelinesLayout