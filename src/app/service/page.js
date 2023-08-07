import {BsTwitter} from 'react-icons/bs';
import "./styles.css";

const Service = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row my-2">
          <h2 className="mt-5"> Our Services </h2>
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

      <div className="container-fluid bg-light my-5">
        <div className='container py-5'>
          <div className="row">
            <h2 className="mt-5"> Features Products </h2>

            <p>Instead of making the whole layout a Client Component, move the interactive logic to a Client Component and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.</p>
            <p>Instead of making the whole layout a Client Component, move the interactive logic to a Client Component and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.</p>
            <p>Instead of making the whole layout a Client Component, move the interactive logic to a Client Component and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.</p>
            <p>Instead of making the whole layout a Client Component, move the interactive logic to a Client Component and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
