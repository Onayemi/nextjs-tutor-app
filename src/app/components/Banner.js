"use client"
// import "./style.css";
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    <>
        {/* <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active c-item">
                    <img src="./banner/1.png" className="d-block w-100 c-img" alt="banner 1" />
                </div>
                <div className="carousel-item c-item">
                    <img src="./banner/2.png" className="d-block w-100 c-img" alt="banner 2" />
                </div>
                <div className="carousel-item c-item">
                    <img src="./banner/3.png" className="d-block w-100 c-img" alt="banner 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> */}

    <Carousel data-bs-theme="dark">
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="./banner/1.png"
          alt="First slide"
        />
        <Carousel.Caption className='top-0 py-5 mt-5'>
          <h5 className='display-1 mt-5 text-light'>First slide label</h5>
          <p className='fs-4'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="./banner/2.png"
          alt="Second slide"
        />
        <Carousel.Caption className='top-0 py-5 mt-5'>
          <h5 className='display-1 mt-5 text-light'>Second slide label</h5>
          <p className='fs-4'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="./banner/3.png"
          alt="Third slide"
        />
        <Carousel.Caption className='top-0 py-5 mt-5'>
          <h5 className='display-1 mt-5 text-light'>Third slide label</h5>
          <p className='fs-4'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default Banner