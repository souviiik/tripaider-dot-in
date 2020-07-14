import React from "react";

export default class FavouriteProviders extends React.Component {
  render() {
    return (
      <div className="container py-5">
        <h2 className="text-center mb-5">Favourite providers</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
