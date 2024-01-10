import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import QZone from '../QZone/QZone';
import bg1 from "../../../assets/bg1.png"
const RightNav = () => {
    return (
        <div>
            <div className='my-3'>
                <div className='d-flex row gy-1 my-2'>
                    <h4>Login With</h4>
                    <Button variant="outline-primary"> <FcGoogle /> Login with Google</Button>
                    <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
                </div>
                <div className='d-flex row gy-1'>
                    <h4>Find us on</h4>
                    <Button variant="outline-primary"> <FaFacebookF /> Facebook</Button>
                    <Button variant="outline-info"> <TiSocialTwitter /> Twitter</Button>
                    <Button variant="outline-danger"> <FaInstagram /> Instagram</Button>
                </div>
            </div>
            <div>
                <QZone />
            </div>
            <div className='position-relative my-3'>
                <img src={bg1} className='img-fluid' style={{ width: "100vw" }} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle text-center'>
                    <h2 className='text-center text-white text-bold'>Create an Amazing Newspaper</h2>
                    <p className='text-center text-white'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;