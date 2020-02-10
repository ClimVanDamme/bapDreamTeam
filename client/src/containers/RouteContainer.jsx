import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Uitleg from "../components/Uitleg";

const RouteContainer = ({ routes, path }) => {
  return (
    <>
      {routes.map((route, index) => {
        if (route.component === "uitleg") {
          return (
            <>
              <Route key={index} strict exact path={path}>
                <Uitleg
                  path={path}
                  titel={route.titel}
                  uitleg={route.uitleg}
                  buttons={route.buttons}
                />
                <Helmet>
                  <title>{route.titel}</title>
                  <meta name="description" content={route.description} />
                </Helmet>
              </Route>
            </>
          );
        } else {
          return (
            <>
              <Route key={index} strict exact path={`${path}/${route.path}`}>
                {route.component}
                <Helmet>
                  <title>{route.titel}</title>
                  <meta name="description" content={route.description} />
                </Helmet>
              </Route>
            </>
          );
        }
      })}
    </>
  );
};

export default RouteContainer;
