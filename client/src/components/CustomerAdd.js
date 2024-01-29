import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const CustomerAdd = ({ stateRefresh }) => {
  const [file, setFile] = useState([]);
  const [customers, setCustomers] = useState({});
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);
  console.log("customers!!!!!", customers);
  console.log("customers!!!!!", customers.name);

  const handleFileChange = (event) => {
    event.preventDefault();
    console.log("handleFileChange customers!!!!!", customers);
    console.log("event1", event);
    console.log("event2", event.target.files[0]);
    console.log("event3", event.target.files[0].name);
    let uploadFile = event.target.files[0];
    setFile(uploadFile);
    setFileName(uploadFile.name);
    console.log("uploadFile", uploadFile);
  };

  // const handleValueChange = (event) => {
  //   let nextState = {};
  //   nextState[event.target.name] = event.target.value;
  //   setCustomers(...customers,nextState);
  // };

  const handleFormSubmit = (event) => {
    // event.preventDefault();
    addCustomer()
      .then((response) => {
        console.log("handleFormSubmit response", response.data);
      })
      .then(() => stateRefresh());
    setFile(null);
    setFileName("");
    setCustomers("image", "");
    setCustomers("name", "");
    setCustomers("birthday", "");
    setCustomers("gender", "");
    setCustomers("job", "");
    setOpen(false);
    // window.location.reload();
  };

  const addCustomer = () => {
    console.log("addCustomer customers!!!!!", customers);
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", customers.name);
    formData.append("birthday", customers.birthday);
    formData.append("gender", customers.gender);
    formData.append("job", customers.job);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const result = axios.post(url, formData, config);
    console.log("result", result);
    return result;
  };

  const handleClickOpen = () => {
    setFile(null);
    setFileName("");
    setCustomers("image", "");
    setCustomers("name", "");
    setCustomers("birthday", "");
    setCustomers("gender", "");
    setCustomers("job", "");
    setOpen(true);
  };

  const handleClose = () => {
    setCustomers();
    setOpen(false);
  };

  const styles = () => ({
    hidden: {
      // display: "none",
      backgroundColor: "red",
    },
  });

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleClickOpen();
        }}
      >
        고객 추가하기
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <DialogTitle>고객 추가</DialogTitle>
        <DialogContent>
          프로필 이미지:{" "}
          <input
            className={styles.hidden}
            accept="/image/*"
            id="raised-button-file"
            type="file"
            file={file}
            // value={fileName}
            onChange={handleFileChange}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="containef"
              color="primary"
              component="span"
              name="file"
            >
              {file === "" ? "프로필 이미지 선택" : fileName}
            </Button>
          </label>
          <br />
          <TextField
            label="이름"
            type="text"
            name="name"
            value={customers.name}
            onChange={(event) =>
              setCustomers({ ...customers, name: event.target.value })
            }
          />
          <br />
          <TextField
            label="생년월일"
            type="text"
            name="birthday"
            value={customers.birthday}
            // onChange={(event) => handleValueChange(event)}
            onChange={(event) =>
              setCustomers({ ...customers, birthday: event.target.value })
            }
          />
          <br />
          <TextField
            label="성별"
            type="text"
            name="gender"
            value={customers.gender}
            // onChange={(event) => handleValueChange(event)}
            onChange={(event) =>
              setCustomers({ ...customers, gender: event.target.value })
            }
          />
          <br />
          <TextField
            label="직업"
            type="text"
            name="job"
            value={customers.job}
            // onChange={(event) => handleValueChange(event)}
            onChange={(event) =>
              setCustomers({ ...customers, job: event.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleFormSubmit()}
          >
            추가
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClose()}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    // 기존 html 방식
    // <form onSubmit={(event) => handleFormSubmit(event)}>
    //   <h1>고객 추가</h1>
    //   프로필 이미지:{" "}
    //   <input
    //     type="file"
    //     name="file"
    //     accept=".jpg"
    //     file={file}
    //     // value={fileName}
    //     onChange={handleFileChange}
    //   />
    //   <br />
    //   이름:{" "}
    //   <input
    //     type="text"
    //     name="name"
    //     value={customers.name}
    //     onChange={(event) =>
    //       setCustomers({ ...customers, name: event.target.value })
    //     }
    //   />
    //   <br />
    //   생년원일:{" "}
    //   <input
    //     type="text"
    //     name="birthday"
    //     value={customers.birthday}
    //     // onChange={(event) => handleValueChange(event)}
    //     onChange={(event) =>
    //       setCustomers({ ...customers, birthday: event.target.value })
    //     }
    //   />
    //   <br />
    //   성별:{" "}
    //   <input
    //     type="text"
    //     name="gender"
    //     value={customers.gender}
    //     // onChange={(event) => handleValueChange(event)}
    //     onChange={(event) =>
    //       setCustomers({ ...customers, gender: event.target.value })
    //     }
    //   />
    //   <br />
    //   직업:{" "}
    //   <input
    //     type="text"
    //     name="job"
    //     value={customers.job}
    //     // onChange={(event) => handleValueChange(event)}
    //     onChange={(event) =>
    //       setCustomers({ ...customers, job: event.target.value })
    //     }
    //   />
    //   <br />
    //   <button type="submit">추가하기</button>
    // </form>
  );
};

export default CustomerAdd;

// class CustomerAdd extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: null,
//       userName: "",
//       birthday: "",
//       gender: "",
//       job: "",
//       fileName: "",
//     };
//   }
//   handleValueChange(e) {
//     let nextState = {};
//     nextState[e.target.name] = e.target.value;
//     this.setState(nextState);
//   }

//   handleFormSubmit(e) {
//     e.preventDefault();
//     this.addCustomer().then((response) => {
//       console.log(response.data);
//     });
//   }

//   addCustomer = () => {
//     const url = "/api/customers";
//     const formData = new FormData();
//     formData.append("image", this.state.file);
//     formData.append("name", this.state.name);
//     formData.append("birthday", this.state.birthday);
//     formData.append("gender", this.state.gender);
//     formData.append("job", this.state.job);
//     const config = {
//       headers: {
//         "content-type:": "multipart/form-data",
//       },
//     };
//     return axios.post(url, formData, config);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleFormSubmit}>
//         <h1>고객 추가</h1>
//         프로필 이미지:{" "}
//         <input
//           type="file"
//           name="file"
//           file={this.state.file}
//           value={this.state.fileName}
//           onChange={this.handleFileChange}
//         />
//         <br />
//         이름:{" "}
//         <input
//           type="text"
//           name="userName"
//           value={this.state.userName}
//           onChange={this.handleValueChange}
//         />
//         <br />
//         생년원일:{" "}
//         <input
//           type="text"
//           name="birthday"
//           value={this.state.birthday}
//           onChange={this.handleValueChange}
//         />
//         <br />
//         성별:{" "}
//         <input
//           type="text"
//           name="gender"
//           value={this.state.gender}
//           onChange={this.handleValueChange}
//         />
//         <br />
//         직업:{" "}
//         <input
//           type="text"
//           name="job"
//           value={this.state.job}
//           onChange={this.handleValueChange}
//         />
//         <br />
//       </form>
//     );
//   }
// }

// export default CustomerAdd;
