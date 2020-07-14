import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class PostProject extends Component {
    state = {  }
    render() { 
        return (
        <div className="container py-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Post a project | tripaider.in</title>
            </Helmet>
            <h2 className="text-center mb-5">Tell us what you need done</h2>
            <p>Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</p>

            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Choose a name for your project</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="e.g. Build a website for my retail business"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">From</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="e.g. Build a website for my retail business"/>
                    <small id="emailHelp" className="form-text text-muted">Remember to include the goal, the timelines, any special requirements and any other details that could help.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Destinantion</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="e.g. Build a website for my retail business"/>
                    <small id="emailHelp" className="form-text text-muted">Remember to include the goal, the timelines, any special requirements and any other details that could help.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Start date</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="e.g. Build a website for my retail business"/>
                    <small id="emailHelp" className="form-text text-muted">Remember to include the goal, the timelines, any special requirements and any other details that could help.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">How many days</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="e.g. Build a website for my retail business"/>
                    <small id="emailHelp" className="form-text text-muted">Remember to include the goal, the timelines, any special requirements and any other details that could help.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">How many heads</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="e.g. Build a website for my retail business"/>
                    <small id="emailHelp" className="form-text text-muted">Remember to include the goal, the timelines, any special requirements and any other details that could help.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Tell us more about your trip</label>
                    <textarea aria-describedby="emailHelp" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Start with the task you need done..."></textarea>
                    <small id="emailHelp" className="form-text text-muted">Remember to include the goal, the timelines, any special requirements and any other details that could help.</small>
                </div>
                <button type="submit" className="btn btn-primary">Create requirement</button>
            </form>
        </div>
        );
    }
}
 
export default PostProject;