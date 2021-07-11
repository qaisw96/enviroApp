import React from 'react'
import '../css/initiatives.scss'


export default function Initiatives() {
    const initiatives = [
        {name: 'مبادرة 1', image: 'https://images.unsplash.com/photo-1581578017426-04fbc2b0511e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="img-fluid rounded-start'},
        {name: 'مبادرة 2', image: 'https://images.unsplash.com/photo-1622254936966-4a3c4def576f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'},
        {name: 'مبادرة 3', image: 'https://images.unsplash.com/photo-1616791151653-a84311a1ae75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'}
    ]
    return (
        <div className="initiativesSection">
            {initiatives.map(elm => {
               return (
                    <div key={elm.name} class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={elm.image} class="initiativeImage img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{elm.name}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                    </div>

               )

            })}
        </div>
    )
}
