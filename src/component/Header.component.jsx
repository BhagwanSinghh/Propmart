import React from "react"
import { Component, Fragment } from "react";
// import { IMAGES_PATH } from "../constant/path"


class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return <Fragment>
            <div className="container_fluid bg_header">
                <div className="container">
                    <div className="header">
                        <div className="header_logo">
                            {/* <h1><img src={`${IMAGES_PATH}Mask group (1).png`}/></h1> */}
                            <h2><i className="fa fa-bars" aria-hidden="true" id="menu_bar"></i></h2>
                        </div>

                        <div className="menu" id="navmenu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services<i className="fa fa-chevron-down" aria-hidden="true" id="service_main"></i>
                                </a>
                                    <ul id="service_id">
                                        <li><a href="#">our services</a></li>
                                        <li><a href="#">our services</a></li>
                                        <li><a href="#">our services</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">About Us <i className="fa fa-chevron-down" aria-hidden="true" id="about_main"></i></a>
                                    <ul id="about_id">
                                        <li><a href="#">about project</a></li>
                                        <li><a href="#">about project</a></li>
                                        <li><a href="#">about project</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Projects <i className="fa fa-chevron-down" aria-hidden="true" id="project_main"></i></a>
                                    <ul id="project_id">
                                        <li><a href="#">Residential Project</a></li>
                                        <li><a href="#">Residential Project</a></li>
                                        <li><a href="#">Residential Project</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Testimonials <i className="fa fa-chevron-down" aria-hidden="true" id="testimonial_main"></i></a>
                                    <ul id="testimonial_id">
                                        <li><a href="#">testimonials project</a></li>
                                        <li><a href="#">testimonials project</a></li>
                                        <li><a href="#">testimonials project</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Contact <i className="fa fa-phone" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <script>
                jQuery('#menu_bar').click(function () {
                    jQuery('#navmenu').slideToggle()
                })
                jQuery('#service_main').click(function () {
                    jQuery('#service_id').slideToggle()
                })
                jQuery('#about_main').click(function () {
                    jQuery('#about_id').slideToggle()
                })
                jQuery('#project_main').click(function () {
                    jQuery('#project_id').slideToggle()
                })
                jQuery('#testimonial_main').click(function () {
                    jQuery('#testimonial_id').slideToggle()
                }) 
                {/* </script> */}
        </Fragment >
    }
}
export default Header