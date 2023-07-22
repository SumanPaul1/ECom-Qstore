import React from 'react'
import "./Footer.scss"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit natus molestias perferen</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <div className="icons">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <GoogleIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className="left">
                <span className="logo">QSTORE</span>
                <span className="copyright">@ Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
                <img src='/images/payment.png'/>
            </div>
        </div>

    </div>
  )
}

export default Footer