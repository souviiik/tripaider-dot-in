import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import ControlledCarousel from "./components/ControlledCarousel";
import Introduction from "./components/Introduction";
import FavouriteDestinations from "./components/FavouriteDestinations";
import FavouriteProviders from "./components/FavouriteProviders";

const Landing = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome | tripaider.in</title>
      </Helmet>
      <ControlledCarousel />
      <Introduction />
      {/* <FavouriteDestinations /> */}
      {/* <FavouriteProviders /> */}
    </Fragment>
  );
};

export default Landing;
