import React from "react"
import { Component,Fragment } from "react"


class Button_triger extends Component {
    constructor() {
        super()
    }
    render() {
        return <Fragment>
            <div className="container_fluid">
                <div className="container">
                    <div className="ourproject" id="residential">
                        <div className="ourproject_section"><img src="images/project_8.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                        <div className="ourproject_section"><img src="images/project_9.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                        <div className="ourproject_section"><img src="images/project_10.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                    </div>
                    <div className="ourproject" id="commercial">
                        <div className="ourproject_section"><img src="images/project_8.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                        <div className="ourproject_section"><img src="images/project_9.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                        <div className="ourproject_section"><img src="images/project_8.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                    </div>
                    <div className="ourproject" id="ongoing">
                        <div className="ourproject_section"><img src="images/project_8.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>

                        <div className="ourproject_section"><img src="images/project_8.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                        <div className="ourproject_section"><img src="images/project_8.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                    </div>
                    <div className="ourproject" id="delivered">

                        <div className="ourproject_section"><img src="images/project_9.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                        <div className="ourproject_section"><img src="images/project_8.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                        <div className="ourproject_section"><img src="images/project_8.png" alt="" />
                            <h6><span>Faridabad,sec 15</span></h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* <script>
                jQuery('.ourproject').hide()
                jQuery('#residential').show()
                jQuery('.project4 ul li a').click(function () {
                    jQuery('.ourproject').hide()
                jQuery('.project4 ul li a').removeClass('selected')
                jQuery(this).addClass('selected')
                var currentSeelcted = jQuery(this).attr('href')
                jQuery(currentSeelcted).show()
                return false
                })
            </script> */}
        </Fragment>
    }
}

export  default Button_triger