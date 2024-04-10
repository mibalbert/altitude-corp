"use client"

import React from 'react'
import { Button } from '../ui/button'
import { UploadButton, UploadDropzone } from '@/lib/utils'

const FileResource = ({ resourceId, isEditable }) => {
  return (
    <>
      {
        isEditable ?
          <div>
          </div>

          :
          <Button>
            Download
          </Button>
      }
    </>
  )
}

export default FileResource
