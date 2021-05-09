import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  LoginPage,
  ClientsPage,
  ClientDetails,
  HealthForm,
  MeasurementsForm,
  TanitaForm,
  AddClientForm,
  PatchMeasurement,
  PatchProfile
} from "./pages";
import { AdminDashboardLayout } from "./layouts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <AdminDashboardLayout>
          <Route exact path="/dashboard/clients" component={ClientsPage} />
          <Route
            exact
            path="/dashboard/clients/details"
            component={ClientDetails}
          />
          <Route
            exact
            path="/dashboard/clients/health"
            component={HealthForm}
          />
          <Route
            exact
            path="/dashboard/clients/measurements"
            component={MeasurementsForm}
          />
          <Route
            exact
            path="/dashboard/clients/tanita"
            component={TanitaForm}
          />
          <Route
            exact
            path="/dashboard/clients/new-client"
            component={AddClientForm}
          />
          <Route
            exact
            path="/dashboard/clients/patch/measurement"
            component={PatchMeasurement}
          />
          <Route
            exact
            path="/dashboard/clients/patch/profile"
            component={PatchProfile}
          />
        </AdminDashboardLayout>
      </Switch>
    </Router>
  );
}

export default App;
