import React from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import HomePage from "../../features/home/HomePage";
import { Route, useLocation } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

function App() {
  const location = useLocation();
  return (
    <>
      <Route exact path="/" component={HomePage}></Route>
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route
                exact
                path="/activities"
                component={ActivityDashboard}
              ></Route>
              <Route path="/activity/:id" component={ActivityDetails}></Route>
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
              ></Route>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
