import React from "react"
import { Component,Fragment } from "react"

class Popular_projects extends Component {
    constructor() {
        super()
    }
    render() {
        return <Fragment>
            <div className="container_fluid">
                <div className="container">
                    <div className=" newproject ">
                        <div className="popular">
                            <h2 className="border_head"><span>Popular Properties</span></h2>
                            <p>We take pride in developing aesthetic spaces of superior quality at unmatched value propositions
                            </p>
                        </div>
                        <div className="project_section">
                            <div className="innerproject"><img src="images/project_4.png" alt="" /></div>
                            <div className="innerproject"><img src="images/project_5.png" alt="" /></div>
                            <div className="innerproject"><img src="images/project_6.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}
export default Popular_projects