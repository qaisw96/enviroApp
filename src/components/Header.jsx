import React from 'react'
import '../css/header.scss'

export default function Header() {
    return (
        <div className="headerWrapper">
            <header className="header">
                <div className="logo">
                    <h3 className="webName">السماد العضوي</h3>
                </div>

                <div className="categories">
                    <ul>
                        <li> <a href="">الصفحة الرئيسية </a> </li>
                        <li> <a href="">مبادرات </a> </li>
                        <li> <a href="">تواصل معنا</a> </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
