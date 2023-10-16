import React from "react"
import { Component, Fragment } from "react";
// import { IMAGES_PATH } from "../constant/path"



class Main_dropdown extends Component {
    constructor() {
        super()
    }
    render() {
        return <Fragment>
            <div className="main">
                {/* <img src={`${IMAGES_PATH}project11.png`} alt="" /> */}
                <div className="image_content">
                    <div className="container">
                        <div className="content">
                            <h2>Your Future Home Is Right Here</h2>
                            <p>We Have Over Million Properties For You</p>
                        </div>
                    </div>
                </div>
                <div className="main_form">
                    <div className="container">
                        <div className="form_search">
                            <ul>
                                <li>LOCATION
                                    <p>Enter an address, state, city, area or zip code</p>
                                </li>
                                <li>TYPE
                                    <p>Property type <i className="fa fa-angle-down" aria-hidden="true" id="pop_up"></i></p>
                                    <ul id="open" className="dropdown">
                                        <li><i className="fa fa-circle" aria-hidden="true"></i>Property</li>
                                        <li><i className="fa fa-circle" aria-hidden="true"></i>Property</li>
                                        <li><i className="fa fa-circle" aria-hidden="true"></i>Property</li>
                                        <li><i className="fa fa-circle" aria-hidden="true"></i>Property</li>
                                    </ul>
                                </li>

                                <li>CATEGORY
                                    <p>Property categry <i className="fa fa-angle-down" aria-hidden="true" id="abc"></i>
                                    </p>
                                    <ul id="kajal" className="circle">
                                        <li><i className="fa fa-circle" aria-hidden="true"></i>category</li>
                                        <li><i className="fa fa-circle" aria-hidden="true"></i>category</li>
                                        <li><i className="fa fa-circle" aria-hidden="true"></i>category</li>
                                        <li><i className="fa fa-circle" aria-hidden="true"></i>category</li>
                                    </ul>
                                </li>
                                <li><button>CATEGORY <i className="fa fa-search" aria-hidden="true"></i></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <script>
                jQuery('#open').hide()
                jQuery('#pop_up').click(function () {
                    jQuery('#open').slideToggle()
                })
                jQuery('#kajal').hide()
                jQuery('#abc').click(function () {
                    jQuery('#kajal').slideToggle()
                })
            </script> */}
        </Fragment>
    }
}
export default Main_dropdown