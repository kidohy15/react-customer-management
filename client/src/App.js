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

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

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

  const theme = createTheme();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    minWidth: 1080,
    // marginTop: theme.spacing(3),
    // overflowX: "auto",
  }));

  const Menu = styled("div")(({ theme }) => ({
    // width: 17,
    // height: 17,
    // backgroundColor: "red",
    // marginTop: theme.spacing(0, 2),
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
  }));

  const styles = () => ({
    root: {
      width: "100%",
      minWidth: 1080,
      backgroundColor: "red",
      // marginTop: theme.spacing(3),
      // overflowX: "auto",
    },
    // table: {
    //   minWidth: 1080,
    // },

    paper: {
      marginLeft: 8,
      marginRight: 8,
    },
    tableHead: {
      fontSize: "1.0rem",
    },

    progress: {
      margin: theme.spacing(2),
    },
  });

  const [customers, setCustomers] = useState();
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
    clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stateRefresh = () => {
    callApi();
  };

  const callApi = async () => {
    console.log("렌더링3 🐰");
    const response = await fetch("/api/customers");
    const body = await response.json();

    setCustomers(body);
    return body;
  };

  const progress = (completed) => {
    setCompleted((completed) => (completed >= 100 ? 0 : completed + 5));
    console.log("렌더링22?? 🐰");
  };

  const classes = styles();
  const cellList = [
    "번호",
    "이미지",
    "이름",
    "생년월일",
    "성별",
    "직업",
    "설정",
  ];
  return (
    // <div sx={classes.root}>
    <Root>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
        <Menu>
          <CustomerAdd stateRefresh={stateRefresh} />
        </Menu>
        <Paper sx={classes.paper}>
          <Table sx={classes.table}>
            <TableHead>
              <TableRow>
                {cellList.map((cell, i) => {
                  return (
                    <TableCell key={i} sx={classes.tableHead}>
                      {cell}
                    </TableCell>
                  );
                })}
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
                      stateRefresh={stateRefresh}
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
      </ThemeProvider>
    </Root>
  );
}

export default App;
