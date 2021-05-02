import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(id, peitoral, quadril, cintura, coxa, braco, contraido) {
  return { id, peitoral, quadril, cintura, coxa, braco, contraido };
}

const rows = [
  createData(0, 65, 45, 60, 85, 20, 28),
  createData(1, 55, 35, 70, 75, 30, 38),
];

const useStyles = makeStyles({
  margin: {
    marginTop: 30,
  },
});

const MeasurementsTable = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5">Medições</Typography>
      <Table size="small" className={classes.margin}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Peitoral (cm)</TableCell>
            <TableCell align="center">Quadril (cm)</TableCell>
            <TableCell align="center">Cintura (cm)</TableCell>
            <TableCell align="center">Coxa (cm)</TableCell>
            <TableCell align="center">Braço (cm)</TableCell>
            <TableCell align="center">Braço Contraído (cm)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.peitoral}</TableCell>
              <TableCell align="center">{row.quadril}</TableCell>
              <TableCell align="center">{row.cintura}</TableCell>
              <TableCell align="center">{row.coxa}</TableCell>
              <TableCell align="center">{row.braco}</TableCell>
              <TableCell align="center">{row.contraido}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default MeasurementsTable;
