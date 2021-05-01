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

const ContactDetails = ({ fixedHeightPaper }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} md={4}>
      <Paper className={fixedHeightPaper}>
        <Typography variant="h5">Contactos</Typography>
        <div className={classes.wrapper}>
          <div className={classes.items}>
            <Typography variant="subtitle1">Telemóvel:</Typography>
            <Typography variant="subtitle1">91* *** ***</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Emergência:</Typography>
            <Typography variant="subtitle1">92* *** ***</Typography>
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography variant="subtitle1">cliente@hotmail.com</Typography>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default ContactDetails;
