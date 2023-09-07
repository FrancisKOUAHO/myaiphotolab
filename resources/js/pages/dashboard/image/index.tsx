import React, { useState } from 'react'
import Layout from '../../../layouts/layout'
import DragDrop from '../../../components/drag-drop'
import BeforeAfterSlider from '../../../components/before-after-slider'
import { Loader } from '../../../components/Loader'

import Upscaler from 'upscaler'

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [oldImage, setOldImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleImageUpload = (imageUrl: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setUploadedImage(imageUrl)
      setOldImage(imageUrl)
      setIsLoading(false)
      ImageEditing(imageUrl)
    }, 2000)
  }

  const ImageEditing = (imageUrl: string) => {
    const upscaler = new Upscaler()
    upscaler.upscale(imageUrl).then((upscaledImage) => {
      console.log(upscaledImage)
    })
  }

  return (
    <Layout>
      <DragDrop onImageUpload={handleImageUpload} />
      {isLoading ? <Loader /> : null}
      {uploadedImage && !isLoading && (
        <div className="flex justify-center">
          <div className="flex w-4/5 max-h-[720px] rounded-lg bg-black border-2 border-purple-500 border-dashed cursor-pointer dark:bg-gray-700 dark:border-gray-600">
            <BeforeAfterSlider imageUrl={uploadedImage} oldImage={oldImage} />
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Index
