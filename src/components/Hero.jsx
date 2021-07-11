import React from 'react'
import '../css/hero.scss'



export default function Hero() {
    return (

        <div className="hero-image" >
            <div class="card mb-3">
                <img src="https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">تفاصيل الصورة</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

        </div>
    )
}
