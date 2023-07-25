import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About =() => {
    return(
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4">
                    ใส่เนื้อหาอะไรก็ได้ !!!
                </p>
                <h4 className="text-success">จาก Saint</h4>
            </div>


            <Footer company="Ku" email="wachirawitwalairat@gmail.com"/>
        </div>
    )
}

export default About;