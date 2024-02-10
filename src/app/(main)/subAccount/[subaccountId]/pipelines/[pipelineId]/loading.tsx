import React from 'react'
import LoadingPage from '@/components/global/loading-page'
type Props = {}

const loading = (props: Props) => {
  return (
      <div className='-mt-8 h-screen'>
          <LoadingPage/>
    </div>
  )
}

export default loading