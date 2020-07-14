import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="py-5 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md">
              <img
                className="mb-2"
                src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                alt=""
                width="24"
                height="24"
              />
              <small className="d-block mb-3 text-light">&copy; 2019</small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-light" href="#">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-light" href="#">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-light" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
