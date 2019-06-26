import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

export default class HowItWorks extends React.Component {
  render() {
    return (
      <div className="container py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>How it works | tripaider.in</title>
        </Helmet>
        <h2 className="text-center mb-5">How it works</h2>
        <h3>What kind of work can I get done?</h3>
<p>How does "anything you want" sound? We have experts representing every technical, professional, and creative field.</p>
<Link to="/post-project" className="btn btn-primary">Post a project</Link>
<hr />
        <p>
        Just give us the details about the travel plan you need estimation for, and our member travel agents will get it done faster, better, and cheaper than you could possibly imagine.
        </p>

        <h3>Post a project</h3>
        <p>
It's always free to post your project. You'll automatically begin to receive bids from our freelancers. Alternatively, you can browse through the talent available on our site, and make a direct offer to a freelancer instead.
</p>


<h3>Choose the perfect freelancer</h3>
<ol>
<li>Browse freelancer profiles</li>
<li>Chat in real-time</li>
<li>Compare proposals and select the best one</li>
<li>Award your project and your freelancer goes to work</li>
</ol>

<h3>Pay when you are satisfied!</h3>
<p>Pay safely using our Milestone Payment system - release payments according to a schedule of goals you set, or pay only upon completion. You are in control, so you get to make decisions.</p>

<Link to="/post-project" className="btn btn-primary">Post a project</Link>

<hr />

<h3>Be in Control. Keep in Contact.</h3>
<p>Use our Desktop App to track progress, monitor hours, communicate, share, and do much more. Always know what's going on with your project, what is getting done, and what still needs doing.</p>

<p>Use our mobile app for easy on-the-go messaging. Stay in touch with your freelancer or client whenever you have questions, updates, or have something to share.</p>

<p>Control the completion of projects, and payments. Only release your payment when benchmarks are met, or when a project is completed to your satisfaction.</p>

<h3>Safe and Secure.</h3>
<p>Freelancer.com is a community that values your trust and safety as our number one priority:</p>
<ul>
<li>State-of-the-art security for your funds. All transactions are secured with DigiCert 4096-bit SSL encryption.</li>
<li>Request for Milestone Payments from your clients to make sure that your hard earned money gets to you safely.</li>
<li>Our representatives are available 24/7 to assist you with any issues.</li>
</ul>
<hr />

<h2>So what are you waiting for?</h2>
<p>Post a project today and get bids from talented freelancers.</p>

<Link to="/post-project" className="btn btn-primary">Post a project</Link>
<hr />
<h2>Still not convinced? Check out the results!</h2>
<p>Here are just some of the things you could get done on Freelancer.com. For more completed projects, visit our Project Showcase.</p>
<div className="row">
  <div className="col-md-4 p-2">
    <div className="card">
      <img src="https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/post-project" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>
  <div className="col-md-4 p-2">
    <div className="card">
      <img src="https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/post-project" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>
  <div className="col-md-4 p-2">
    <div className="card">
      <img src="https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/post-project" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col-md-4 p-2">
    <div className="card">
      <img src="https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/post-project" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>
  <div className="col-md-4 p-2">
    <div className="card">
      <img src="https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/post-project" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>
  <div className="col-md-4 p-2">
    <div className="card">
      <img src="https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/post-project" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>
</div>
<Link to="/showcase" className="btn btn-primary">Browse more projects</Link>
<hr />

<h2>Additional Help</h2>
<p>Not sure where to start? Check out the links below:</p>
<ul>
<li>How to Hire with Freelancer.com</li>
<li>Tips for posting projects</li>
<li>How to Select the Right Bidder</li>
<li>Milestone Payments</li>
</ul>
      </div>
    );
  }
}
