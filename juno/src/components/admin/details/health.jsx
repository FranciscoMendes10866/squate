import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  items: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
  },
});

const HealthDetails = ({ fixedHeightPaper }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Paper className={fixedHeightPaper}>
        <div className={classes.wrapper}>
          <div className={classes.items}>
            <Typography variant="subtitle1">
              Tem antecedentes familiares com problemas de saúde?
            </Typography>
            <Chip
              color="primary"
              variant="outlined"
              label="Não"
              icon={<InsertEmoticonIcon />}
            />
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">
              Tinha complicações cardiovasculares?
            </Typography>
            <Chip
              color="secondary"
              variant="outlined"
              label="Sim"
              icon={<SentimentVeryDissatisfiedIcon />}
            />
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">
              Alguma vez sentiu dores no peito durante a atividade física?
            </Typography>
            <Chip
              color="primary"
              variant="outlined"
              label="Não"
              icon={<InsertEmoticonIcon />}
            />
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">
              Durante o último mês, alguma vez teve dores no peito?
            </Typography>
            <Chip
              color="secondary"
              variant="outlined"
              label="Sim"
              icon={<SentimentVeryDissatisfiedIcon />}
            />
          </div>
          <div className={classes.items}>
            <Typography variant="subtitle1">
              Alguma vez perdeu o equilíbrio devido a tonturas ou alguma vez
              perdeu a consciência?
            </Typography>
            <Chip
              color="primary"
              variant="outlined"
              label="Não"
              icon={<InsertEmoticonIcon />}
            />
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default HealthDetails;
