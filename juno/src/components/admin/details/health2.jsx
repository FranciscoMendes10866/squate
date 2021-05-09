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

const HealthDetails2 = ({ fixedHeightPaper }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Paper className={fixedHeightPaper}>
        <div className={classes.wrapper}>
          <div className={classes.items}>
            <Typography variant="subtitle1">
              Tem problemas ósseos ou articulares que possam piorar com o início
              de um Programa de Atividade Física?
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
              Está a tomar algum medicamento para controlar a pressão arterial?
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
              Conhece alguma outra razão pela qual não deveria praticar
              exercício físico?
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
              Qual o objetivo que o cliente pretende alcançar com a minha
              supersivão?
            </Typography>
            <Chip
              color="secondary"
              variant="outlined"
              label="Sim"
              icon={<SentimentVeryDissatisfiedIcon />}
            />
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default HealthDetails2;
