const moment = require('moment')
module.exports = (data) => {
  console.log("data: ",data);
  data.applicationData.map((page) => {
    console.log(page[0]);
  })
  const displayData = data.applicationData
  const today = new Date()


  const mapFunction = (array) => {
    let html = `<div>${
      array.map((item) => {
        let key = Object.keys(item)[0]
        return `<div class="item-li">
            <div class="item-title">${key}:</div>
            <div class="item-value">${item[key] != undefined ? key == "start date" ? moment(item[key]).format('MMM Do YY') : item[key] : `no answer`}</div>
          </div>`
      }).join('')
    }</div>`
    return html
  }

  return `
  <!doctype html>
     <html>
        <head>
           <meta charset="utf-8">
           <title>PDF Result Template</title>
           <style>
             .pdf-container{
               max-width: 800px;
               min-width: 800px;
               min-height: 100vh;
               margin: auto;
               padding-left: 30px;
               box-shadow: 0 0 10px rgba(0, 0, 0, .15);
               font-size: 16px;
               line-height: 24px;
               font-family: 'Helvetica Neue', 'Helvetica';
               color: #555;
               background-color: white;
               margin: 10vh auto
             }
             .header-row{
               height: fit-content;
               width: 100%;
               display: inline-block;
             }
             .unit-holder{
               margin-left: 24px;
               width: fit-content;
               display: inline-block;
               float: left;
             }
             .row-two{
               height: fit-content;
               display: block;
               width: 100%;
               padding-left: 8px;
             }
             .lesson-title{
               text-align: left;
               font-size: 32px;
               font-weight: bold;
               margin-top: 8px
             }
             .person-title{
               text-align: left;
               font-size: 20px;
               margin-top: 8px
             }
             .image{
               width:100%; max-width:156px;
               display: inline-block;
               float: left;
               margin-bottom: 12px;
             }
             .date{
               display: inline-block;
               max-width: 30%;
               float: right;
               margin-right: 10%;
             }
             .unit-title{
                 font-size: 24px
             }
             .big-column{
               display: inline-block;
               width: 50%
             }
             .very-big-column{
               display: inline-block;
               width: 80%
             }
             .small-column{
               display: inline-block;
               width: 30%;
               margin-bottom: auto;
             }
             .border{
               border: 1px solid black;
               padding-left: 4px;
             }
             .off-color{
               background-color:  #e6e6e6;
             }
             .section-title{
               font-weight: bold;
             }
             .big-title{
               font-size: 24px;
               font-weight: bold;
               margin-top: 12px
             }
             .item-li{
               margin: 0px !important;
               width: 100%;
               display: block;
             }
             .item-title{
               display: inline-block;
               font-weight: bold;
             }
             .item-value{
               display: inline-block;
             }
             .unit-overview-contents{
               position: relative;
             }
             .stay-together{
               display: block;
               width: 100%;
               position: relative;
               page-break-inside: avoid;
             }

           </style>
        </head>
        <body>
          <div class="pdf-container">
             <div class="header-row">
              <img  src="http://localhost:3000/static/media/pdfImage.86b071eb.jpg" class="image" />
              <div class="unit-holder">
                <div class="lesson-title">Application</div>
                <div class="person-title">Parent: ${data.parentName}</div>
                <div class="person-title">Student: ${data.studentName}</div>
              </div>
              <div class="date">Submit Date: ${moment(data.submitDate).format('MMM Do YY')}</div>
             </div>
             <div class="row-two">
              <div class="big-title">Application Contents</div>
              <div class="unit-overview-contents">
              ${
                displayData.map((array) => {
                  let title = array[0].sectionTitle
                  array.shift()
                  return `
                  <div class="stay-together">
                    <h3>${title}</h5>
                    <div>
                    ${mapFunction(array)}
                    </div>
                  </div>
                  `
                }).join('')
                }
                <div class="very-big-column">

                </div>

              </div>
             </div>
             </div>
        </body>
     </html>
  `;
}
