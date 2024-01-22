import { atom } from "recoil";

// export const mapState = atom({
//   key: "map",
//   default: null,
//   dangerouslyAllowMutability: true,
// });

export const customersState = atom({
  key: "customers",
  default: [{
    id: null,
    image: "",
    name: "",
    birthday: "",
    gender: "",
    job: "",
  }],
});
