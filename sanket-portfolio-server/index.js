const express = require("express");

const PORT = process.env.PORT || 3001;

var cors = require("cors");

var mysql = require('mysql');


const app = express();

app.use(cors());
app.use(express.json());

const { HOST, DB_PORT, USER, PASSWORD, DATABASE } = require('./config');

var connection = mysql.createConnection({
  host: HOST,
  port: DB_PORT,
  user: USER,
  password: PASSWORD,
  database: DATABASE
})

// app.post('/createTestimonial', (req, res) => {
//   const query = "INSERT INTO TESTIMONIALS(`name`, `role`, `testimonial`) VALUES (?)"
//   const values = [
//     req.body.name,
//     req.body.role,
//     req.body.testimonial
//   ]
//   connection.query(query, [values], (err, data) => {
//     if(err) return res.json(err);
//     return res.json("Inserted successfully!");
//   })
// })

// app.get('/getTestimonials', (req, res) => {
//   const query = "SELECT * FROM TESTIMONIALS ORDER BY id DESC"
//   connection.query(query, (err, data) => {
//     if(err) return res.json(err)
//     return res.json(data)
//   })
// })

app.use('/', (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});