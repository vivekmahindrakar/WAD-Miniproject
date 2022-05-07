import React from 'react'
import ServiceDetails from './ServiceDetails'
import contentWriting from "./images/contentWriting.svg"
import seo from "./images/seo.svg"
import graphicDesign from "./images/graphicDesign.svg"
import mobileDevelopment from "./images/mobileDevelopment.svg"
import webDesigng from "./images/webDesign.svg"
import ecomDevelopment from "./images/ecomDevelopment.svg"
import "./componentStyle.css"

const MainService = () => {
    return (
        <div className='main-service'>

            <h1>Events</h1>
            <ServiceDetails 
            serviceContainer="lhs-service" 
            style="service1" 
            serviceHeading="Code-a-thon"
            description="We understand your needs and business objectives and gather the necessary data. With a committed team of experienced 
and educated web developers, designers, and analyzers, we ensure your Website reverberates with your Brand Psychology." 
            serviceImage={webDesigng}
            serviceImgAltText="Web-development"
            serviceId="web-development"
            Payment="Entry : ₹ 100 ph "
            />

            <ServiceDetails 
            serviceContainer="rhs-service" 
            style="service2" 
            serviceHeading="Webber"
            description="We understand your needs and business objectives and gather the necessary data. With a committed team of experienced 
and educated web developers, designers, and analyzers, we ensure your Website reverberates with your Brand Psychology." 
            serviceImage={graphicDesign}
            serviceImgAltText="graphic-design"
            serviceId="graphic-design"
            Payment="Entry : ₹ 50 ph "
            />

            <ServiceDetails 
            serviceContainer="lhs-service" 
            style="service3" 
            serviceHeading="App development"
            description="We understand your needs and business objectives and gather the necessary data. With a committed team of experienced 
and educated web developers, designers, and analyzers, we ensure your Website reverberates with your Brand Psychology." 
            serviceImage={mobileDevelopment}
            serviceImgAltText="app-development"
            serviceId="app-development"
            Payment="Entry: ₹ 90 ph "
            />
        </div>
    )
}

export default MainService
