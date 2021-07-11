import React from 'react'
import '../css/footer.scss'

export default function Footer() {
    return (
        <footer className="footerWrapper">
            <section className="container footer">
                <div className="row">
                    <div className="col-3">
                        عن سماد
                    </div>
                    <div className="col">
                        فرص التطوع
                    </div>
                    <div id="contactUs" className="col">
                        اتصل بنا
                    </div>
                </div>
            </section>
        </footer>
    )
}
