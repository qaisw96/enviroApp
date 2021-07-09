import React from 'react'
import '../css/aboutUs.scss'
import {Paper} from '@material-ui/core'

export default function AboutUs() {
    return (
        <section className="aboutUsWrapper">
            <div className="aboutUs">
                <div className="ourPurpose lines">
                    <h3>رسالتنا</h3>
                    <p><span>” </span> أن نؤثر بشكل فعال على المجتمع المدني وجميع الشركاء
                    والجهات ذات العلاقة وذلك من خلال العمل الخيري والمسؤولية المجتمعية. <span>“</span> </p>
                </div>

                <div className="whoAreWe lines">
                    <h3>عن نحن</h3>
                    <p><span>” </span> أُطلقت منصة "نَحْنُ" بالشراكة بين "نوى" ومنظمة الأمم المتحدة للطفولة "يونيسف" بالشراكة مع مؤسسة ولي العهد وبالتعاون مع وزارة الشباب. وقد تأسست "نَحْنُ" لتكون الأولى من نوعها وذلك بهدف تشجيع العمل التطوعي والمشاركة الشبابية لإحداث التغيير الإيجابي في مجتمعاتهم من خلال منصة الكترونية تضم فرص تطوعية من مختلف مؤسسات المجتمع المدني والشركات الخاصة والقطاع العام.
                    <span>“</span> </p>
                    

                </div>

            </div>
        </section>
    )
}
