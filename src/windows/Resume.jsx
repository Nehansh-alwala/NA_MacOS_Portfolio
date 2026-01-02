import React, { useState } from 'react'
import WindowWrapper from '#hoc/WindowWrapper'
import { Download } from 'lucide-react'
import WindowControls from '#components/WindowControls'
import { pdfjs, Document, Page } from 'react-pdf'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const Resume = () => {
  const [numPages, setNumPages] = useState(null)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume"/>
        <h2>Resume.pdf</h2>

        <a href="files/resume.pdf" download className="cursor-pointer" title='Download Resume'>
          <Download className='icon'/>
        </a>
      </div>

      <div className="pdf-container h-180 overflow-y-auto p-2">
        <Document file="/files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer renderAnnotationLayer />
          ))}
        </Document>
      </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow
