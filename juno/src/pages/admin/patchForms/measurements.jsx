import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import StraightenIcon from "@material-ui/icons/Straighten";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import queryString from "query-string";

import { useStore } from "../../../store";

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
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typo: {
    marginBottom: 18,
  },
}));

const PatchMeasurement = ({ location }) => {
  const userId = useStore((state) => state.selectedClient);
  const { id: measurementId } = queryString.parse(location.search);
  console.log({ userId, measurementId });
  const classes = useStyles();
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
          to={`/dashboard/clients/details?id=${userId}`}
          className={classes.crumText}
        >
          Cliente em Detalhe
        </Link>
        <Link
          color="inherit"
          to={`/dashboard/clients/patch/measurement?id=${measurementId}`}
          className={classes.crumText}
        >
          Atualizar Medição
        </Link>
      </Breadcrumbs>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <StraightenIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.typo}>
            Atualizar Medição
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Atualizar
          </Button>
        </form>
      </div>
    </>
  );
};

export default PatchMeasurement;
