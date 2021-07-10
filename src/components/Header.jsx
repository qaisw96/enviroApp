import React , {useEffect, useState}  from 'react'
import '../css/header.scss'


export default function Header() {

    const [onScroll, setOnScroll] = useState(false)
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
            setOnScroll(window.pageYOffset > 100)
            );
        }
    }, []);
    
    console.log(onScroll);
    return (
        <div className="headerWrapper">
            <nav className= {onScroll ? "scroll navbar  navbar-expand-sm navbar-light bg-light fixed-top" : "navbar navbar-expand-sm navbar-light bg-light fixed-top"} >
                <div className="container">
                    <a className="navbar-brand" href="#">سماد</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">الرئيسية</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">مبادرات</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">تواصل معنا</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
