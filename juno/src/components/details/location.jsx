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

const LocationDetails = ({ fixedHeightPaper, data }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} md={4}>
      <Paper className={fixedHeightPaper}>
        <Typography variant="h6" color="primary">Localização</Typography>
        <div className={classes.wrapper}>
          <div className={classes.items}>
            <Typography variant="subtitle1">Morada:</Typography>
            <Typography variant="subtitle1">{data.address}</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Código-Postal:</Typography>
            <Typography variant="subtitle1">{data.zipCode}</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Naturalidade:</Typography>
            <Typography variant="subtitle1">{data.city}</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Nacionalidade:</Typography>
            <Typography variant="subtitle1">{data.nationality}</Typography>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default LocationDetails;
