import { cloneElement } from "react";
import { useHistory, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

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

function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

const ClientsPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleSelectClient = (id) => {
    history.push(`/dashboard/clients/details?id=${id}`);
  };
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
            {generate(
              <>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>N</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Nome do cliente"
                    secondary="Objectivo do Cliente"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <VisibilityIcon onClick={() => handleSelectClient(22)} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            )}
          </List>
        </div>
      </Grid>
    </>
  );
};

export default ClientsPage;
