import React from "react"
import { Component,Fragment } from "react"


class Testimonials_project extends Component {
    constructor() {
        super()
    }
    render() {
        return <Fragment>
            <div className="testimonials">
                <div className="test">
                    <h2 className="border_head"><span>Testimonials</span></h2>
                    <h3>What Client Says About Us</h3>
                </div>
                <div className="innertest"><img src="images/Mask group.png" alt="" /></div>
                <p>“ I am satisfied with my apartment and the complex as a whole, infrastructure has been promised by the
                    government authorities which will be provided soon. ”</p>
            </div>
            <div className="my">
                <h4>John Mark</h4>
                <h5>Indian group</h5>
            </div>
            <div className="house1">
                <div className="container">
                    <div className="inner_house1">
                        <div className="customer">
                            <p>Are you looking for a House or Property Customer?</p>
                        </div>
                        <div className="subscribe">
                            <button>Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}
export default Testimonials_project