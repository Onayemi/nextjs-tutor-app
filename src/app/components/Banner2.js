import React from 'react'
import "./style.css";

const Banner2 = () => {
  return (
    <>
        {/* <div id="hero-banner" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner c-item">
                <div className="carousel-item active">
                    <img src="./banner/1.png" className="d-block w-100 c-img" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src="./banner/2.png" className="d-block w-100" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img src="./banner/3.png" className="d-block w-100" alt="Third slide" />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#hero-banner" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#hero-banner" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> */}

        <div id="hero-banner" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#hero-banner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#hero-banner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#hero-banner" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner c-item">
                <div className="carousel-item active">
                    <img src="./banner/1.png" className="d-block w-100 c-img" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src="./banner/2.png" className="d-block w-100 c-img" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src="./banner/3.png" className="d-block w-100 c-img" alt="First slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#hero-banner" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#hero-banner" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </>
  )
}

export default Banner2