import React from "react"
import { Component,Fragment } from "react"

class Own_township extends Component {
    constructor() {
        super()
    }
    render() {
        return <Fragment>
            <div className="container_fluid">
                <div className="container">
                    <div className="project2">
                        <div className="new">
                            <h2 className="border_head"><span>Our Township</span></h2>
                            <p>Explore the range of our residential and commercial properties spread across the NCR</p>
                        </div>
                        <div className="project3">
                            <div className="innerproject3"><img src="images/project_7.png" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="newupcomingproject">
                    <div className="project4">
                        <h2 className="border_head"><span>Upcoming Projects</span></h2>
                        <p>We take pride in developing aesthetic spaces of superior quality at unmatched value propositions</p>
                        <ul>
                            <li><a className="selected" href="#residential">Residential</a></li>
                            <li><a href="#commercial">Commercial</a></li>
                            <li><a href="#ongoing">Ongoing</a></li>
                            <li><a href="#delivered">Delivered</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}
export default Own_township