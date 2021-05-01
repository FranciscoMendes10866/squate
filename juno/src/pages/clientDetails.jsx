import clsx from "clsx";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import queryString from "query-string";

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    marginBottom: 24
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
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
        <Link color="inherit" to="/dashboard/clients">
          Lista de Clientes
        </Link>
        <Typography color="textPrimary">Cliente em Detalhe</Typography>
      </Breadcrumbs>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <h1>ID</h1>
            <p>{id}</p>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <h1>Hello</h1>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Hello</h1>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ClientDetails;
