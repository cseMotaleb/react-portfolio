import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import bannerImg from'../../assets/images/motaleb.png';

const bannerSubtitle ='WELCOME TO MY WORLD';
const bannerTitle ='Hello! My Name is Motaleb Hossain.\nI am Professional Front end, WordPress & Laravel Developer.';
    


const Banner = () => {
    
    return (
        <section className='banner-wrapper'>
            <Container>
            <div style={{height: '100vh'}} className='row d-flex align-items-center justify-content-start'>
                <div className='col-md-7'>
                        <div className='banner-content'>
                            <div className='banner-text'>
                                <p>{bannerSubtitle}</p>
                                <h2>{bannerTitle}</h2>  
                            </div>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className='banner-image text-center'>
                        <img src={bannerImg} alt="motaleb hossain" />
                    </div>
                </div>
            </div>
                </Container>
        </section>
    )
}

export default Banner
    

