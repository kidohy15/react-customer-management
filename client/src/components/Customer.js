import React, { useEffect, useState } from "react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { customersState } from "../atoms";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";

const Customer = ({ customer }) => {
  // const [customers, setCustomers] = useRecoilState(customersState);
  // const customers = useRecoilValue(customersState);

  const [files, setFiles] = useState(customer.image);
  const [Base64s, setBase64s] = useState([]);

  // const customerList = customers.customerList[0]
  console.log("customer!!", customer);
  console.log("image!!", customer.image);
 

  const encodeFileToBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
    });
  };

  useEffect(() => {
    if (files) {
      setBase64s([]);
      Array.from(files).forEach((image) => {
        encodeFileToBase64(image).then((data) =>
          setBase64s((prev) => [...prev, { image: image, url: data }])
        );
      });
    }
  }, [files]);

  return (
    // Material UI 활용
    <TableRow>
      <TableCell>{customer.id}</TableCell>
      <TableCell>
        <img src={customer.image} alt="profile" />
      </TableCell>
      <TableCell>{customer.name}</TableCell>
      <TableCell>{customer.birthday}</TableCell>
      <TableCell>{customer.gender}</TableCell>
      <TableCell>{customer.job}</TableCell>
    </TableRow>
  );
};

export default Customer;

// class Customer extends React.Component {
//   render() {
//     return (
//       // Material UI 활용
//       <TableRow>
//         <TableCell>{this.props.id}</TableCell>
//         <TableCell>
//           <img src={this.props.image} alt="profile" />
//         </TableCell>
//         <TableCell>{this.props.name}</TableCell>
//         <TableCell>{this.props.birthday}</TableCell>
//         <TableCell>{this.props.gender}</TableCell>
//         <TableCell>{this.props.job}</TableCell>
//       </TableRow>

//       // 기존 클래스 컴포넌트 방식
//       // <div>
//       //   <CustomerProfile
//       //     id={this.props.id}
//       //     image={this.props.image}
//       //     name={this.props.name}
//       //   />
//       //   <CustomerInfo
//       //     birthday={this.props.birthday}
//       //     gender={this.props.gender}
//       //     job={this.props.job}
//       //   />
//       // </div>
//     );
//   }
// }

// 기존 클래스 컴포넌트 방식
// class CustomerProfile extends React.Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.image} alt="profile" />
//         <h2>
//           {this.props.name}({this.props.id})
//         </h2>
//       </div>
//     );
//   }
// }

// class CustomerInfo extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.birthday}</p>
//         <p>{this.props.gender}</p>
//         <p>{this.props.job}</p>
//       </div>
//     );
//   }
// }

// export default Customer;
