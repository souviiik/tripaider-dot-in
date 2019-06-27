import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./Landing";
import HowItWorks from "./components/HowItWorks";
import BrowseJobs from "./components/BrowseJobs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/PrivatePages/Dashboard";
import Logout from "./components/Logout";
import Inbox from "./components/PrivatePages/Inbox";
import Profile from "./components/PrivatePages/Profile";
import PageNotFound from "./components/PageNotFound";
import PostProject from "./components/PostProject";
import Verification from "./components/Verification";
import ChangeCurrentPassword from "./components/PrivatePages/ChangeCurrentPassword";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>        
        <Route exact path="/" component={Landing} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/browse-jobs" component={BrowseJobs} />
        <Route path="/post-project" component={PostProject} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/dashboard/inbox" component={Inbox} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/logout" component={Logout} />
        <Route path="/verification/:email" component={Verification} />
        <Route path="/change-password" component={ChangeCurrentPassword} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AllRoutes;
