import "./App.css";
import Customer from "./components/Customer";
import { Table, ThemeProvider, createTheme } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import CustomerAdd from "./components/CustomerAdd";
import { useRecoilState } from "recoil";
import { customersState } from "./atoms";

/*
리액트가 컴포넌트를 실행할 때의 라이프 사이클은 아래를 따른다

1) constructor() => 생성자를 불러온다
2) componentWillMount() => 컴포넌트가 마운트되기 전에 해당 함수 실행
3) render() => 컴포넌트를 화면에 그린다
4) componentDidMount() => 컴포넌트가 마운트되고 나서 해당 함수 실행

*/

/*

props or state => sholdComponentUpdate() 
=> props, state가 변경되는 경우에는 해당 함수가 실행되고 
실질적으로 다시 render 함수를 호출해서 뷰를 갱신해준다
리액트는 상태의 변화를 알아서 잘 감지해서 뷰를 다시 재구성해주기 때문에
개발자는 상태만 잘 관리해주면 된다

*/

function App() {
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
    progress: {
      margin: theme.spacing(2),
    },
  });

  // 서버 개발하면서 제거함
  // const customers = [
  //   {
  //     id: 1,
  //     // image: 'http://via.placeholder.com/60x60',
  //     image: "https://placebear.com/60/60",
  //     name: "홍길동",
  //     birthday: "961222",
  //     gender: "남자",
  //     job: "대학생",
  //   },
  //   {
  //     id: 2,
  //     // image: 'http://via.placeholder.com/60x60',
  //     image: "https://placebear.com/60/60",
  //     name: "이올린",
  //     birthday: "201223",
  //     gender: "여자",
  //     job: "대학생",
  //   },
  //   {
  //     id: 3,
  //     // image: 'http://via.placeholder.com/60x60',
  //     image: "https://placebear.com/60/60",
  //     name: "살라딘",
  //     birthday: "241012",
  //     gender: "남자",
  //     job: "대학생",
  //   },
  // ];

  // const state = {
  //   customers: ""
  // }

  // componentDidMount() {
  //   this.callApi()
  // }

  const [customers, setCustomers] = useState();
  // const [customers, setCustomers] = useRecoilState(customersState);
  const [isLoading, setIsLoading] = useState(true);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    console.log("렌더링1 🐰", isLoading);

    let timer = setInterval(() => {
      progress(completed);
      console.log("completed!!", completed);
    }, 300);

    console.log("렌더링2 🐰");

    callApi();
    // setIsLoading(false);
    clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callApi = async () => {
    console.log("렌더링3 🐰");
    const response = await fetch("/api/customers");
    const body = await response.json();
    console.log("랜더링4", body);
    console.log("랜더링4", ...body);

    // setCustomers((body) =>
    //    [...body]);
    // console.log("===");
    // console.log("랜더링6", customers);

    setCustomers(body);
    console.log("랜더링7", customers);
    return body;
  };

  const progress = (completed) => {
    setCompleted((completed) => (completed >= 100 ? 0 : completed + 5));
    console.log("렌더링22?? 🐰");
  };

  const classes = styles();
  return (
    <div>
      <ThemeProvider theme={theme}>
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
              {true ? (
                customers?.map((c, index) => {
                  console.log("1");
                  return (
                    <Customer
                      key={c.id}
                      customer={c}
                      // id={c.id}
                      // image={c.image}
                      // name={c.name}
                      // birthday={c.birthday}
                      // gender={c.gender}
                      // job={c.job}
                      onLoad={() => setIsLoading(false)}
                    />
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={"6"} align="center">
                    <CircularProgress
                      sx={classes.progress}
                      variant="determinate"
                      value={completed}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd />
      </ThemeProvider>
    </div>
  );
}

export default App;
