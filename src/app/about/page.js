
export const metadata = {
  title:{
    absolute: "About Page",
  },
  description: 'This is about',
};

export default function About(){
  return (
    <>
      <div className="container py-5">
        <h1>About Me</h1>
        <button type="button" className="btn btn-primary btn-sm py-2 px-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Backdrop modal
        </button>
      </div>


      {/* Modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Welcome
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

