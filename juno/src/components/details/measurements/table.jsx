import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

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
    marginBottom: 30,
  },
  space: {
    marginLeft: 2
  }
});

const MeasurementsTable = () => {
  const classes = useStyles();
  return (
    <>
      <Table size="small" className={classes.margin}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Peitoral (cm)</TableCell>
            <TableCell align="center">Quadril (cm)</TableCell>
            <TableCell align="center">Cintura (cm)</TableCell>
            <TableCell align="center">Coxa (cm)</TableCell>
            <TableCell align="center">Braço (cm)</TableCell>
            <TableCell align="center">Braço Contraído (cm)</TableCell>
            <TableCell align="center">Selecione Ação</TableCell>
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
              <TableCell align="center">
                <IconButton
                  color="secondary"
                  size="small"
                  component="span"
                  onClick={() => console.log(`Eliminar ${row.id}`)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  size="small"
                  component="span"
                  className={classes.space}
                  onClick={() => console.log(`Editar ${row.id}`)}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default MeasurementsTable;
