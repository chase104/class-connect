import React, {useRef, useEffect} from 'react'
import myPdf from '../../assets/docs/application.pdf'


const PdfPage = () => {
  return (
    <div style={{position: "absolute", width: "100%", height: "100%", zIndex: "1"}}>
      <object
        data={myPdf}
        type="application/pdf"
        width="100%"
        height="100%"
      >

      </object>
    </div>
  )
}

export default PdfPage
