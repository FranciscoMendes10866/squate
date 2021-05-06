import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";

import { ClientsList } from "../../components";

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    marginBottom: 24,
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  crumText: {
    textDecoration: "inherit",
    color: "inherit",
    cursor: "pointer",
  },
}));

const data = [
  {
    id: 1,
    fullName: "Francisco Mendes",
    objective: "Ganhar Músculo",
  },
  {
    id: 2,
    fullName: "Rodrigo Mercador",
    objective: "Perder Peso",
  },
  {
    id: 3,
    fullName: "Inês Fonseca",
    objective: "Tonificar",
  },
  {
    id: 4,
    fullName: "Soraia Morais",
    objective: "Perder Peso",
  },
];

const ClientsPage = () => {
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
      </Breadcrumbs>
      <Grid item xs={12}>
        <div className={classes.demo}>
          <List dense={false}>
            {data.map((el) => {
              return <ClientsList key={el.id} el={el} />;
            })}
          </List>
        </div>
      </Grid>
    </>
  );
};

export default ClientsPage;
