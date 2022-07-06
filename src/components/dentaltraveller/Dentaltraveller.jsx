import React from 'react'
import './dentaltraveller.css'
import logo from './Personal goals-amico.svg'
import log from './Smiley face-amico.svg'
import picture from './Online Doctor-rafiki.svg'
import image from './About us page-bro.svg'
export default function Dentaltraveller() {
    return (
        <div className="dentaltraveller">
            <h1>Dental Tourism</h1>
            <Card2 back={`https://media.istockphoto.com/photos/flat-lay-with-tooth-model-stethoscope-and-sterile-dental-instruments-picture-id1066945916?k=20&m=1066945916&s=612x612&w=0&h=L0X_YkOtocQwb77QoAIDwHH7ttolnavdNyl-AjAKdyo=`} img={logo} heading={'Our Mission'} contents={`Our mission is to enable patients to get best in class medical treatments from highest accredited clinics across
                            the world at fraction of the cost as compared to their home country and focus on excellent pre and post treatment services.`}></Card2>
            <Card1 back={`https://glomoderndental.com/wp-content/uploads/2021/08/benefits-of-removing-a-tooth.jpg`} img={log} heading={'Our Vision'} contents={`Our Vision is to create a network of healthcare providers on a digital platform who can cater to
                            patients from across the world.`}></Card1>
            <Card2 back={`https://media.istockphoto.com/photos/flat-lay-with-tooth-model-stethoscope-and-sterile-dental-instruments-picture-id1066945916?k=20&m=1066945916&s=612x612&w=0&h=L0X_YkOtocQwb77QoAIDwHH7ttolnavdNyl-AjAKdyo=`} img={picture} heading={'Who We Are ?'} contents={`Traveling to another country for Dental/medical services can include planning many details, such as choosing the right clinic, appointments booking and scheduling, doctors' opinions about the problem you have, cost of the treatment etc.
                            To make all these things easy Dental Travellers works only with the best doctors and top-rated Dental clinics/ hospitals in India, through our website we help patients find, compare and book the right clinics for them,
                             we provide free dental quotations from various clinics which helps to compare
                             the cost of the treatment. Before traveling to foriegn country we arrange a pre travel consultation between doctor and patient, this helps you to save time and money both and also it builds rapport with the doctor.`}></Card2>
            <Card1 back={`https://glomoderndental.com/wp-content/uploads/2021/08/benefits-of-removing-a-tooth.jpg`} img={image} heading={'About Our Company'} contents={`We are a healthcare company which creates tech portals for individuals to connect with providers across the world. We have started our journey with dental travellers which focusses on dental tourism and will be soon launching our wellness portal as well.
                            After years of experience in the medical domain Dr.Swapnil Jain started Vidality Global Health Services to help patients across the world get the best possible medical and dental care in 2020. His dedication and efforts towards creating a seamless platform which can change the way the medical and dental tourism works has led to 
                            early launching of our very first portal Dental Travellers.`}></Card1>
            <div className="link">
                <p>For More Visit Our Website</p>
                <a href='https://www.dentaltravellers.com/about.html' target={'_blank'} rel="noreferrer" >Dental Traveller</a>
            </div>
        </div>
    )
}
function Card1(props) {
    return (
        <div className="card">
            <div className="image slideleft">
                <img src={props.img} alt='' />
            </div>
            <div className="content slideright" style={{ backgroundImage: `url(${props.back})` }}>
                <div className="main1">
                    <h1>{props.heading}</h1>
                    <p>{props.contents}</p>
                </div>
            </div>
        </div>

    )
}
function Card2(props) {
    return (
        <div className="card">

            <div className="content slideleft" style={{ backgroundImage: `url(${props.back}` }}>
                <div className="main2">
                    <h1>{props.heading}</h1>
                    <p>{props.contents}</p>
                </div>
            </div>
            <div className="image slideright">
                <img src={props.img} alt='' />
            </div>
        </div>

    )
}


