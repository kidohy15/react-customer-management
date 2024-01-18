const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 서버 응답 테스트용
// app.get('/api/hello', (req, res) => {
//   res.send({ message: 'Hello Express!' });
// });

app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
