import React from 'react'
import ImageViewer from './ImageViewer'

const ProductOverview = ({singleBag}) => {
    
  return (
    <div className='w-full flex gap-0'>
   <ImageViewer singleBag = {singleBag}/>

    </div>
  )
}

export default ProductOverview