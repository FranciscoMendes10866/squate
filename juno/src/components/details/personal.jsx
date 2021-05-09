import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
  },
  items: {
    display: "flex",
    justifyContent: "space-between",
  },
  space: {
    marginLeft: 2,
  },
});

const PersonalDetails = ({ fixedHeightPaper, data }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
      <Paper className={fixedHeightPaper}>
        <div className={classes.items}>
          <Typography variant="h6" color="primary">
            Perfil
          </Typography>
          <IconButton
            color="secondary"
            size="small"
            component="span"
            className={classes.space}
          >
            <EditIcon />
          </IconButton>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.items}>
            <Typography variant="subtitle1">Nome Completo:</Typography>
            <Typography variant="subtitle1">{data.fullName}</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Nascimento:</Typography>
            <Typography variant="subtitle1">{data.birthday}</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Sexo:</Typography>
            <Typography variant="subtitle1">{data.gender}</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Peso (kg):</Typography>
            <Typography variant="subtitle1">{data.weight}</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Altura (cm):</Typography>
            <Typography variant="subtitle1">{data.height}</Typography>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default PersonalDetails;
