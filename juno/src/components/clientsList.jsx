import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { deepPurple, blue, lime, deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  crumText: {
    textDecoration: "inherit",
    color: "inherit",
    cursor: "pointer",
  },
  avatar: {
    backgroundColor: (el) => {
      if (
        el.fullName[0].toUpperCase() >= "A" &&
        el.fullName[0].toUpperCase() <= "F"
      ) {
        return deepPurple[500];
      }
      if (
        el.fullName[0].toUpperCase() >= "G" &&
        el.fullName[0].toUpperCase() <= "L"
      ) {
        return deepOrange[500];
      }
      if (
        el.fullName[0].toUpperCase() >= "M" &&
        el.fullName[0].toUpperCase() <= "R"
      ) {
        return blue["A400"];
      }
      if (
        el.fullName[0].toUpperCase() >= "S" &&
        el.fullName[0].toUpperCase() <= "Z"
      ) {
        return lime["A400"];
      }
    },
    color: (el) => {
      if (
        el.fullName[0].toUpperCase() >= "A" &&
        el.fullName[0].toUpperCase() <= "F"
      ) {
        return theme.palette.getContrastText(deepPurple[500]);
      }
      if (
        el.fullName[0].toUpperCase() >= "G" &&
        el.fullName[0].toUpperCase() <= "L"
      ) {
        return theme.palette.getContrastText(deepOrange[500]);
      }
      if (
        el.fullName[0].toUpperCase() >= "M" &&
        el.fullName[0].toUpperCase() <= "R"
      ) {
        return theme.palette.getContrastText(blue["A400"]);
      }
      if (
        el.fullName[0].toUpperCase() >= "S" &&
        el.fullName[0].toUpperCase() <= "Z"
      ) {
        return theme.palette.getContrastText(lime["A400"]);
      }
    },
  },
}));

const ClientsPage = ({ el }) => {
  const classes = useStyles(el);
  const history = useHistory();
  const handleSelectClient = (id) => {
    history.push(`/dashboard/clients/details?id=${id}`);
  };
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {el.fullName[0].toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={el.fullName} secondary={el.objective} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <VisibilityIcon onClick={() => handleSelectClient(el.id)} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ClientsPage;
