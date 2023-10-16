import React from "react"
import { Component,Fragment } from "react"


class Footer extends Component {
    constructor() {
        super()
    }
    render() {
        return <Fragment>
            <div className="footer">
                <div className="container">
                    <div className="footer_area">
                        <div className="link1">
                            <div className="area1">
                                <div className="tag"><img src="images/Mask group (1).png" alt="" /></div>
                                <p>Risus commodo congue augue phas ellus morbi hymenaeos ante tincidu eu orci dictum bibe ndum
                                    lacus
                                    pla
                                    tea
                                    primis mi lacinia</p>
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                <i className="fa fa-google-plus-official" aria-hidden="true"></i>
                                <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                            </div>
                            <div className="area2">
                                <h2>Contact info</h2>
                                <ul>
                                    <li><i className="fa fa-circle" aria-hidden="true"></i> Unicoder Design Agency 301The
                                        Greenhouse, Custard Factory,</li>
                                    <li><i className="fa fa-circle" aria-hidden="true"></i> +1 246-345-0695</li>
                                    <li><i className="fa fa-circle" aria-hidden="true"></i>helpline@homex.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="link">
                            <div className="area3">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li> <i className="fa fa-circle" aria-hidden="true"></i>Our Services</li>
                                    <li><i className="fa fa-circle" aria-hidden="true"></i>Investment Solution</li>
                                    <li><i className="fa fa-circle" aria-hidden="true"></i>Frequenly Ask Question</li>
                                    <li><i className="fa fa-circle" aria-hidden="true"></i>How it Work</li>
                                    <li><i className="fa fa-circle" aria-hidden="true"></i>Become a Member</li>
                                </ul>
                            </div>
                            <div className="area4">
                                <h2>Appointment</h2>
                                <p>Litora ligula dapibus scelerisque vitae, fermentum aenean gravida lobortis mus pulvinar magna
                                    turient
                                    primis.</p>
                                <div className="name">
                                    <button>Register Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my_1">
                <div className="container">
                    <div className="privacy">
                        <p>© 2022 Uniland All right reserved</p>
                        <p>Privacy & Policy | Site map</p>
                    </div>
                </div>
            </div>

            <div className="whatsapp_logo">
                <a href="https://www.skyconsultantgroup.com/"><i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
            </div>
        </Fragment>
    }
}
export default Footer