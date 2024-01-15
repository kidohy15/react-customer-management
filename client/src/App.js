import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";
import { Table, ThemeProvider, createTheme } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { Paper } from "@mui/material";

// const theme = createTheme();

// theme.spacing(2); // `${8 * 2}px` = '16px'
// const root = {
//   width: "100%",
//   marginTop: theme.spacing(3),
//   overflowX: 'auto',
//   // bgcolor: "red",
// }
// const table = {
//   minWidth: 1080,
//   // color: "red",
// }

const theme = createTheme();

const styles = () => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    // image: 'http://via.placeholder.com/60x60',
    image: "https://placebear.com/60/60",
    name: "홍길동",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    // image: 'http://via.placeholder.com/60x60',
    image: "https://placebear.com/60/60",
    name: "이올린",
    birthday: "201223",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 3,
    // image: 'http://via.placeholder.com/60x60',
    image: "https://placebear.com/60/60",
    name: "살라딘",
    birthday: "241012",
    gender: "남자",
    job: "대학생",
  },
];

function App() {
  const classes = styles();

  return (
    // <ThemeProvider theme={theme}>
    <Paper sx={classes.root}>
      <Table sx={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    // </ThemeProvider>
  );
}

export default App;
