import React from "react";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";

class Customer extends React.Component {
  render() {
    return (
      // Material UI 활용
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img src={this.props.image} alt="profile" />
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
      </TableRow>

      // 기존 클래스 컴포넌트 방식
      // <div>
      //   <CustomerProfile
      //     id={this.props.id}
      //     image={this.props.image}
      //     name={this.props.name}
      //   />
      //   <CustomerInfo
      //     birthday={this.props.birthday}
      //     gender={this.props.gender}
      //     job={this.props.job}
      //   />
      // </div>
    );
  }
}

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

export default Customer;
