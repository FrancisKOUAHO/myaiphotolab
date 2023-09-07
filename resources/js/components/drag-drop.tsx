import React, { useState } from 'react'

const DragDrop = ({ onImageUpload }) => {
  const [image, setImage] = useState(null)

  const handleFileChange = (event: { target: any }) => {
    const fileInput = event.target
    const selectedFile = fileInput.files[0]

    if (selectedFile) {
      console.log('Nom du fichier:', selectedFile.name)
      console.log('Type de fichier:', selectedFile.type)

      const imageUrl = URL.createObjectURL(selectedFile)
      setImage(imageUrl)

      onImageUpload(imageUrl)
    }
  }
  return (
    <div className="flex justify-center mt-4 mb-3">
      <div className="w-4/5">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-purple-500 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Cliquez pour télécharger</span> ou par glisser-déposer
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG ou GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
    </div>
  )
}

export default DragDrop
