import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LoginPage, ClientsPage, ClientDetails } from "./pages";
import { AdminDashboardLayout } from './layouts'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <AdminDashboardLayout>
          <Route exact path="/dashboard/clients" component={ClientsPage} />
          <Route exact path="/dashboard/clients/details" component={ClientDetails} />
        </AdminDashboardLayout>
      </Switch>
    </Router>
  );
}

export default App;
