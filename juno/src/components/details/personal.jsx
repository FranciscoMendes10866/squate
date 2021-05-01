import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
});

const PersonalDetails = ({ fixedHeightPaper }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
      <Paper className={fixedHeightPaper}>
        <Typography variant="h5">Dados Pessoais</Typography>
        <div className={classes.wrapper}>
          <div className={classes.items}>
            <Typography variant="subtitle1">Nome Completo:</Typography>
            <Typography variant="subtitle1">Cliente Antunes</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Nascimento:</Typography>
            <Typography variant="subtitle1">12-12-2012</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Sexo:</Typography>
            <Typography variant="subtitle1">Masculino</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Peso (kg):</Typography>
            <Typography variant="subtitle1">74</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Altura (cm):</Typography>
            <Typography variant="subtitle1">178</Typography>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default PersonalDetails;
