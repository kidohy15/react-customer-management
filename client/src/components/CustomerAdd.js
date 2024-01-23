import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { customersState } from "../atoms";

const CustomerAdd = ({}) => {
  // const [customers, setCustomers] = useRecoilState(customersState);
  const [file, setFile] = useState();
  const [customers, setCustomers] = useState({});
  const [fileName, setFileName] = useState();
  console.log("customers!!!!!", customers);
  // console.log(customer);

  // const customerList = customers.customerList;

  const handleFileChange = (event) => {
    console.log("event", event);
    console.log("event", event.target.files[0]);
    setFile(event.target.files[0]);
    setFileName(event.target.value);
  };

  // const handleValueChange = (event) => {
  //   let nextState = {};
  //   nextState[event.target.name] = event.target.value;
  //   setCustomers(...customers,nextState);
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addCustomer().then((response) => {
      console.log(response.data);
    });
  };

  const addCustomer = () => {
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
    return axios.post(url, formData, config);
  };

  return (
    <form onSubmit={(event) => handleFormSubmit(event)}>
      <h1>고객 추가</h1>
      프로필 이미지:{" "}
      <input
        type="file"
        name="file"
        file={file}
        value={fileName}
        onChange={(event) => handleFileChange(event)}
      />
      <br />
      이름:{" "}
      <input
        type="text"
        name="name"
        value={customers.name}
        onChange={(event) =>
          setCustomers({ ...customers, name: event.target.value })
        }
      />
      <br />
      생년원일:{" "}
      <input
        type="text"
        name="birthday"
        value={customers.birthday}
        // onChange={(event) => handleValueChange(event)}
        onChange={(event) =>
          setCustomers({ ...customers, birthday: event.target.value })
        }
      />
      <br />
      성별:{" "}
      <input
        type="text"
        name="gender"
        value={customers.gender}
        // onChange={(event) => handleValueChange(event)}
        onChange={(event) =>
          setCustomers({ ...customers, gender: event.target.value })
        }
      />
      <br />
      직업:{" "}
      <input
        type="text"
        name="job"
        value={customers.job}
        // onChange={(event) => handleValueChange(event)}
        onChange={(event) =>
          setCustomers({ ...customers, job: event.target.value })
        }
      />
      <br />
      <button type="submit">추가하기</button>
    </form>
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
