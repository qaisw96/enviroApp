import React, {useState} from 'react'
import '../css/contact.scss'

export default function ContactUs() {
    const [comment, setComment] = useState([])




    return (

        <div className="contactUsSection">
            <div class="commenterList list-group">
                <a class="list-group-item list-group-item-action " aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="commenterName mb-1">مالك احمد</h5>
                    <small>قبل يومين</small>
                    </div>
                    <p class="mb-1"></p>
                    <small>And some small print.</small>
                </a>
                <a class="list-group-item list-group-item-action " aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="commenterName mb-1">هاني</h5>
                    <small>منذ دقائق</small>
                    </div>
                    <p class="mb-1"></p>
                    <small>And some small print.</small>
                </a>
                <a class="list-group-item list-group-item-action " aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="commenterName mb-1">سالي محمد</h5>
                    <small>قبل ساعات</small>
                    </div>
                    <p class="mb-1"></p>
                    <small>And some small print.</small>
                </a>
            </div>

            <div className="contactForm">
                <div className="form-floating">
                    <textarea  className="contactFormControl form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label className="contactCommentLabel" htmlFor="floatingTextarea">أضف تعليق</label>
                </div>

                <button type="button" className="addCommentBtn btn btn-light">أضــف</button>

            </div>
        </div>
    )
}
