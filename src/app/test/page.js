import React from 'react'
import {BsTwitter} from 'react-icons/bs';
import "./styles.css";

const page = () => {
  return (
      <div className="container my-5">
        <div className="row my-2">
          <h2 className="section-heading"> Our Services </h2>
        </div>

        <div className="row my-5">

          <div className="col-lg-4 col-sm-6 mb-3">
            <div className="card">
              <div className="icon-wrapper">
                <BsTwitter width={60} height={60} className="bi" />
              </div>
              <h3>Service Heading</h3>
              <p>Instead of making the whole layout a Client Component</p>
            </div>
          </div>
          
          <div className="col-lg-4 col-sm-6 mb-3">
            <div className="card">
              <div className="icon-wrapper">
                <BsTwitter width={60} height={60} className="bi" />
              </div>
              <h3>Service Heading</h3>
              <p>Instead of making the whole layout a Client Component</p>

            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-3">
            <div className="card">
              <div className="icon-wrapper">
                <BsTwitter width={60} height={60} className="bi" />
              </div>
              <h3>Service Heading</h3>
              <p>Instead of making the whole layout a Client Component</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-3">
            <div className="card">
              <div className="icon-wrapper">
                <BsTwitter width={60} height={60} className="bi" />
              </div>
              <h3>Service Heading</h3>
              <p>Instead of making the whole layout a Client Component</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-3">
            <div className="card">
              <div className="icon-wrapper">
                <BsTwitter width={60} height={60} className="bi" />
              </div>
              <h3>Service Heading</h3>
              <p>Instead of making the whole layout a Client Component</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-3">
            <div className="card">
              <div className="icon-wrapper">
                <BsTwitter width={60} height={60} className="bi" />
              </div>
              <h3>Service Heading</h3>
              <p>Instead of making the whole layout a Client Component</p>
            </div>
          </div>

        </div>
      </div>
  )
}

export default page