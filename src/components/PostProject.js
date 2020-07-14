import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class PostProject extends Component {
    state = {  };

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
                    <input type="text" className="form-control" placeholder="Choose a name for your project"/>
                </div>
                <div className="form-group">
                    <label>Start city</label>
                    <input type="text" className="form-control" placeholder="Start city"/>                    
                </div>
                <div className="form-group">
                    <label>Destinantion</label>
                    <input type="text" className="form-control" placeholder="Destinantion"/>                    
                </div>
                <div className="form-group">
                    <label>Start date</label>
                    <input type="text" className="form-control" placeholder="Start date"/>                    
                </div>
                <div className="form-group">
                    <label>For how many days</label>
                    <input type="text" className="form-control" placeholder="For how many days"/>                    
                </div>
                <div className="form-group">
                    <label>How many people</label>
                    <input type="text" className="form-control" placeholder="How many people"/>                    
                </div>
                <div className="form-group">
                    <label>Tell us more about your trip</label>
                    <textarea className="form-control" rows="3" placeholder="Tell us more about your trip..."></textarea>                    
                </div>
                <button type="submit" className="btn btn-primary">Create requirement</button>
            </form>
        </div>
        );
    }
}
 
export default PostProject;