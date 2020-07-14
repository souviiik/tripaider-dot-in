import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container py-5">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Page not found | tripaider.in</title>
                </Helmet>
                <div className="alert alert-danger">
                    <h2 className="text-center mb-2">404 - Page not found</h2>
                    <p className="text-center">Sorry, the content you were looking for cannot be found.</p>
                </div>

                <h2>Here are some of our recent projects:</h2>
            </div>
         );
    }
}
 
export default PageNotFound;