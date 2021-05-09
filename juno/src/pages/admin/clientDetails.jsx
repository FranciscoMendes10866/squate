import clsx from "clsx";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import queryString from "query-string";
import { useEffect } from "react";

import {
  Measurements,
  Tanita,
  HealthDetails,
  HealthDetails2,
  ClientProfile
} from "../../components/admin";
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
  const selectedClient = useStore(state => state.selectedClient)
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(() => {
    if (selectedClient !== id) {
      setSelectedClient(id)
    }
  }, [id, selectedClient, setSelectedClient]);
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
        <ClientProfile fixedHeightPaper={fixedHeightPaper} userId={id} />
        <HealthDetails fixedHeightPaper={fixedHeightPaper} />
        <HealthDetails2 fixedHeightPaper={fixedHeightPaper} />
        <Measurements />
        <Tanita />
      </Grid>
    </>
  );
};

export default ClientDetails;
