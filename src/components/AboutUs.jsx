import React from 'react'
import '../css/aboutUs.scss'
import {Paper} from '@material-ui/core'

export default function AboutUs() {
    return (
        <section className="aboutUsWrapper">
           <div class="card border-light mb-3" >
                <div class="card-header">عن سماد</div>
                <div class="card-body">
                    <h5 class="card-title">Light card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

           <div class="card border-light mb-3" >
                <div class="card-header">رسالتنا </div>
                <div class="card-body">
                    <h5 class="card-title">Light card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>


        </section>
    )
}
