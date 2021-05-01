import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LoginPage, ClientsPage } from "./pages";
import DashboardLayout from './layouts/dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <DashboardLayout>
          <Route exact path="/dashboard" component={ClientsPage} />
        </DashboardLayout>
      </Switch>
    </Router>
  );
}

export default App;
