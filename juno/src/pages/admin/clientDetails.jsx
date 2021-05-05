import clsx from "clsx";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import queryString from "query-string";
import Paper from "@material-ui/core/Paper";
import { useEffect } from "react";

import {
  LocationDetails,
  ContactDetails,
  PersonalDetails,
  MeasurementsTable,
  TanitaTable,
  HealthDetails,
  HealthDetails2,
} from "../../components";
import { useStore } from "../../store";

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    marginBottom: 24,
  },
  crumText: {
    textDecoration: "inherit",
    color: "inherit",
    cursor: "pointer",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const ClientDetails = ({ location }) => {
  const { id } = queryString.parse(location.search);
  const { setSelectedClient } = useStore();
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(() => setSelectedClient(id), [id, setSelectedClient]);
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
        <Link
          color="inherit"
          to="/dashboard/clients"
          className={classes.crumText}
        >
          Lista de Clientes
        </Link>
        <Link
          color="inherit"
          to={`/dashboard/clients/details?id=${id}`}
          className={classes.crumText}
        >
          Cliente em Detalhe
        </Link>
      </Breadcrumbs>
      <Grid container spacing={3}>
        <PersonalDetails fixedHeightPaper={fixedHeightPaper} />
        <LocationDetails fixedHeightPaper={fixedHeightPaper} />
        <ContactDetails fixedHeightPaper={fixedHeightPaper} />
        <HealthDetails fixedHeightPaper={fixedHeightPaper} />
        <HealthDetails2 fixedHeightPaper={fixedHeightPaper} />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <MeasurementsTable />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TanitaTable />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ClientDetails;
