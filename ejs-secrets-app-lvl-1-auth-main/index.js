import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'secrets',
  password: 'Nveurvtjh147',
  port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  const checkResult = await db.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);

  try {
    if (checkResult.rows.length > 0) {
      console.log(checkResult.rows);
      res.send('Email Alredy in use, try to logging...');
    } else {
      const result = await db.query(
        'INSERT INTO users (email, password) VALUES ($1, $2)',
        [email, password]
      );
      console.log(result);
      res.render('./secrets.ejs');
    }
  } catch (error) {
    console.log(err);
    res.send('error catched:' + err)
  }
});

app.post("/login", async (req, res) => {
  const userEmail = req.body.username
  const userPassword = req.body.password

  try {
    const loginResult = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [userEmail]);
    if (loginResult.rows.length > 0) {
      const { password } = loginResult.rows[0]
      if (password === userPassword) {
        res.render('./secrets.ejs')
      } else {
        res.send('Incorrect Password')
      }
    } else {
      res.send('User not found')
    }
  } catch (error) {

  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
