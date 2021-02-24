
module.exports = (data) => {
  console.log(data);
  const today = new Date()
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
               padding: 30px;
               border: 1px solid #eee;
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
             }
             .unit-holder{
               margin-left: 24px;
               width: fit-content;
               display: inline-block;
               float: left;
             }
             .row-two{
               height: fit-content;
               display: inline-block;
               width: 85%;
               border: 1px solid black;
               padding-left: 8px;
             }
             .lesson-title{
               text-align: left;
               font-size: 32px;
               font-weight: bold;
               margin-top: 8px
             }
             .image{
               width:100%; max-width:156px;
               display: inline-block;
               float: left;
               margin-bottom: 12px;
             }
             .date{
               margin-left: 150px;
               display: inline-block;
               max-width: 30%;

             }
             .unit-title{
                 font-size: 24px
             }
             .big-column{
               display: inline-block;
               width: 50%
             }
             .small-column{
               display: inline-block;
               width: 30%;
               margin-bottom: auto;
             }
             .border{
               border: 1px solid black;
               padding: 4px;
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

           </style>
        </head>
        <body>
          <div class="pdf-container">
             <div class="header-row">
              <img  src="http://localhost:3000/static/media/pdfImage.86b071eb.jpg" class="image" />
              <div class="unit-holder">
                <div class="lesson-title">Unit 3</div>
                <div class="lesson-title">Lesson 26</div>
              </div>
              <div class="date">Download Date: ${today}</div>
             </div>
             <div class="row-two">
              <div class="big-title">Unit 3 Overview</div>
              <div class="unit-overview-contents">
                <div class="big-column">
                  <h5>Summary</h5>
                  <p>Arbitror id cernantur aut possumus fore offendit arbitror. Cillum a offendit ubi export ne do appellat an eiusmod quo hic ullamco distinguantur id quo do quorum duis duis.</p>
                </div>
                <div class="small-column">
                  <h5>Unit Grammar Goals</h5>
                  <ul>
                    <li>objective</li>
                    <li>objective</li>
                    <li>objective</li>
                    <li>objective</li>
                  </ul>
                </div>
              </div>
             </div>
             <div class="row-two">
              <div class="big-title">Lesson 26</div>
              <div class="unit-overview-contents">
                <div class="small-column">
                  <div class="section-title">Vocabulary Reviewed</div>
                  <ul>
                    <li>Dog</li>
                    <li>Cat</li>
                    <li>Bird</li>
                    <li>Fish</li>
                  </ul>
                  <div class="section-title">New Vocabulary</div>
                  <ul>
                    <li>Horse</li>
                    <li>Cow</li>
                    <li>Chicken</li>
                    <li>Duck</li>
                  </ul>
                  <div class="section-title">Grammar topics</div>
                  <ul>
                    <li>Present Continuous</li>
                    <li>Declarative (It's a...)</li>
                  </ul>
                </div>
                <div class="small-column">
                  <div>Lesson Order</div>
                  <div class="border">
                    <div class="section-title">Review</div>
                    <div class="off-color">1: (Speaking) Picture</div>
                    <div>2: (Game) Name Vocabulary</div>
                    <div class="off-color">3: (Game) Make Sentences</div>
                  </div>
                  <div class="border">
                    <div class="section-title">New Learning</div>
                    <div class="off-color">4: (Speaking) Learn Word Pronunciation</div>
                    <div>5: (Game) Integrate Word Meaning</div>
                    <div class="off-color">6: (Game) Integrate Word Meaning</div>
                  </div>
                  <div class="border">
                    <div class="section-title">Dynmaic Learning</div>
                    <div class="off-color">7: (Speaking) Describe With New Vocabulary</div>
                    <div>8: (Speaking) Stores With New Vocabulary</div>
                    <div class="off-color">9: (Game) Create With New Vocabulary</div>
                  </div>
                </div>
              </div>
             </div>
          </div>
        </body>
     </html>
  `;
}
