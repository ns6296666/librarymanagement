import BookData from "./components/BookData";
import { Route, Switch } from "react-router-dom";
import NewDataBase from "./components/pages/NewDatabase";
import Layout from "./components/layout/Layout";

import { useState } from "react";
import AuthForm from "./components/pages/AuthForm";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <BookData />
        </Route>
        <Route path="/authform">
          <AuthForm />
        </Route>
        <Route path="/new-database">
          {" "}
          <NewDataBase />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
