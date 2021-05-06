import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(
  id,
  gordura,
  muscular,
  ossea,
  imc,
  basal,
  idade,
  agua,
  visceral
) {
  return { id, gordura, muscular, ossea, imc, basal, idade, agua, visceral };
}

const rows = [
  createData(0, 14, 60, 10, 8, 45, 25, 50, 12),
  createData(1, 14, 60, 10, 8, 45, 25, 50, 12),
];

const useStyles = makeStyles({
  margin: {
    marginTop: 30,
    marginBottom: 30
  },
});

const TanitaTable = () => {
  const classes = useStyles();
  return (
    <>
      <Table size="small" className={classes.margin}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Gordura Corporal (%)</TableCell>
            <TableCell align="center">Massa Muscular (kg)</TableCell>
            <TableCell align="center">Massa Óssea (kg)</TableCell>
            <TableCell align="center">IMC (%)</TableCell>
            <TableCell align="center">Metabolismo Basal</TableCell>
            <TableCell align="center">Idade Metabólica</TableCell>
            <TableCell align="center">Água (%)</TableCell>
            <TableCell align="center">Gordura Visceral (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.gordura}</TableCell>
              <TableCell align="center">{row.muscular}</TableCell>
              <TableCell align="center">{row.ossea}</TableCell>
              <TableCell align="center">{row.imc}</TableCell>
              <TableCell align="center">{row.basal}</TableCell>
              <TableCell align="center">{row.idade}</TableCell>
              <TableCell align="center">{row.agua}</TableCell>
              <TableCell align="center">{row.visceral}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TanitaTable;
