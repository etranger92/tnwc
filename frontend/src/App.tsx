import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cover from "./component/ElementsHTML/cover/Cover";
import Footer from "./component/Footer/Footer";
import Course from "./pages/course/Course";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  const [loaderIndice, setLoader] = useState(false);
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoader(true);
    });
  }, []);
  return (
    <BrowserRouter>
      <Cover loader={loaderIndice} />
      {/*  <Navigation />*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={Course} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
