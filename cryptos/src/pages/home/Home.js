import React from "react";
import Homegif from "../../assat/top_img.png";
import aboutimg from "../../assat/about2.png";
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="home-main">
                <div className="hero">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="hero-img col-lg-6 col-md-6 col-sm-12">
                                <img src={Homegif} alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 hero-content">
                                <h2> Progress Your Bitcoin Money Success </h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                <div>
                                    <button type="button" className="btn btn-primary"> Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="boxes py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                                <div className="boxes-content p-5">
                                    <h4> ONLINE WALLET </h4>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                                <div className="boxes-content p-5">
                                    <h4> SEND COINS </h4>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                                <div className="boxes-content p-5">
                                    <h4> MOBILE APP </h4>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                                <div className="boxes-content p-5">
                                    <h4> COIN MINING </h4>
                                    <p>It is a long established fact that a reader will be distracted by</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about py-5">
                    <div className="container about-border">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-6 col-sm-12 hero-content">
                                <h2> About Us </h2>
                                <p>It is a long established fact that a reader will be distracted bIt is a long established fact that a reader will be distracted by y It is a long established fact that a reader will be distracted by It is a long established fact that a reader will be distracted by</p>
                                <div>
                                    <button className="about-btn">Read More</button>
                                </div>
                            </div>

                            <div className="hero-img col-lg-4 col-md-6 col-sm-12">
                                <img src={aboutimg} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer">
                    <footer className="text-center text-lg-start p-5">
                        
                        <section className="">
                            <div className="container text-center text-md-start mt-5">
                                <div className="row mt-3">
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Company name
                                        </h6>
                                        <p>
                                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                                            dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                    </div>

                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Products
                                        </h6>
                                        <p>
                                            <a href="#!" className="text-reset">Angular</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">React</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Vue</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Laravel</a>
                                        </p>
                                    </div>

                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Useful links
                                        </h6>
                                        <p>
                                            <a href="#!" className="text-reset">Pricing</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Settings</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Orders</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-reset">Help</a>
                                        </p>
                                    </div>

                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Contact
                                        </h6>
                                        <p>New York, NY 10012, US</p>
                                        <p>
                                            info@example.com
                                        </p>
                                        <p> + 01 234 567 88</p>
                                        <p> + 01 234 567 89</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="text-center p-4"  >
                            © 2022 Copyright by Rakshit
                        </div>
                    </footer>
                </div>
            </div>
        </>);

};

export default Home;
