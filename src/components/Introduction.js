import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Need work done?</h2>
            <p>
              It's easy. Simply post a job you need completed and receive
              competitive bids from freelancers within minutes.
            </p>

            <p>
              Whatever your needs, there will be a freelancer to get it done:
              from web design, mobile app development, virtual assistants,
              product manufacturing, and graphic design (and a whole lot more).
            </p>

            <p>
              With secure payments and thousands of reviewed professionals to
              choose from, tripaider.in is the simplest and safest way to get
              work done online.
            </p>

            <h3>What's great about it?</h3>
            <ul>
              <li>
                You only have to pay for work when it has been completed and
                you're 100% satisfied.
              </li>

              <li>
                You'll receive free bids from our talented freelancers within
                seconds.
              </li>

              <li>
                We're always here to help. Our support consists of real people
                who are available 24/7.{" "}
              </li>

              <li>
                You can live chat with your freelancers to get constant updates
                on the progress of your work.{" "}
              </li>

              <li>
                Keep up-to-date and on-the-go with our time tracker, and mobile
                app.{" "}
              </li>

              <li>
                Find professionals you can trust by browsing their samples of
                previous work and reading their profile reviews.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <video width="320" height="240" muted="" autoPlay="" loop="">
              <source
                src="https://www.f-cdn.com/assets/video/homepage/homepage-de21e73d.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.f-cdn.com/assets/video/homepage/homepage-de21e73d.mp4"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }
}
