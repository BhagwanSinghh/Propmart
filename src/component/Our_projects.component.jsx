import React from "react"
import { Component, Fragment } from "react";


class Our_projects extends Component {
    constructor() {
        super()
    }
    render() {
        return <Fragment>
            <div className="container_fluid">
                <div className="container">
                    <div className="project">
                        <div className="text">
                            <h2 className="border_head"><span>Our Projects </span></h2>
                            <p>we take pride in developing aesthetic spaces of superior quality at unmatched value propositions
                                we
                                take
                                pride in developing aesthetic spaces of superior </p>
                        </div>
                        <div className="row">
                            <div className="inner"><img src="images/project_1.png" alt="" />
                                <h6>Large Investment Option</h6>
                            </div>
                            <div className="inner"><img src="images/project_1.png" alt="" />
                                <h6>New Launches</h6>
                            </div>
                            <div className="inner"><img src="images/project_1.png" alt="" />
                                <h6>Large Investment plan</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}
export default  Our_projects