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

const LocationDetails = ({ fixedHeightPaper }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} md={4}>
      <Paper className={fixedHeightPaper}>
        <Typography variant="h5">Localização</Typography>
        <div className={classes.wrapper}>
          <div className={classes.items}>
            <Typography variant="subtitle1">Morada:</Typography>
            <Typography variant="subtitle1">Cantanhede</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Código-Postal:</Typography>
            <Typography variant="subtitle1">3060-106</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Naturalidade:</Typography>
            <Typography variant="subtitle1">Coimbra</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Nacionalidade:</Typography>
            <Typography variant="subtitle1">Portuguesa</Typography>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default LocationDetails;
