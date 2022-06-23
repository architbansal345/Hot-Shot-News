import React from 'react'

export default function About() {
  return (
    <div className='container' style={{color:'#212529' , marginTop:'130px'}}>
        <h2>About US</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>HOTSHOT-News App</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <i>This app is very helpful to get Breaking News! , If user want to read News in different category , then User can Click on that category and Read News.</i>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <i>This App is free to use , Day to day user can use and get daily News by each category like Entertainment , Business , Sports , Health and so on.</i>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <i>This Software is compatible with all major web browsers, including Chrome, Firefox, Internet Explorer, and Opera.</i>
                </div>
                </div>
            </div>
         </div>
         <footer class="bg-light text-center text-lg-start my-5">
            <div class="text-center p-3" style={{backgroundColor: 'rgb(133 68 15)',color: '#c6d11e'}}>
                <b>Created By Archit Bansal</b>
            </div>
        </footer>
    </div>
  )
}