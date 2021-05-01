import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LoginPage, ClientsPage, ClientDetails } from "./pages";
import DashboardLayout from './layouts/dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <DashboardLayout>
          <Route exact path="/dashboard/clients" component={ClientsPage} />
          <Route exact path="/dashboard/clients/details" component={ClientDetails} />
        </DashboardLayout>
      </Switch>
    </Router>
  );
}

export default App;
