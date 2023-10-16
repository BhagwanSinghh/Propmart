import React from "react";
import { Component } from "react";
import '../assets/index.css'
import Header from "../component/Header.component";
import Main_dropdown from "../component/Main_dropdown.component";
import Our_projects from "../component/Our_projects.component";
import Popular_projects from "../component/Popular_projects.component";
import Own_township from "../component/Own_township.component";
import Button_triger from "../component/button_triger.component";
import Testimonials_project from "../component/Testimonials_project.component";
import Footer from "../component/Footer.component";

class Application extends Component {
    constructor() {
        super()
        // this.state = 
        // {
        //     data : []
        // }
    }

    render() {
        return <div>
            <Header />
            <Main_dropdown />
            <Our_projects />
            <Popular_projects />
            <Own_township />
            <Button_triger />
            <Testimonials_project />
            <Footer />
        </div>
    }
}
export default Application

