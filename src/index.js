const express = require('express')
const app = express()
const port = 3000

var users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      }
    ]
  },
  {
    name: "pikachu",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      }
    ]
  },
]

function get_user(user_name){
  return users.find((user) => {
    return user.name === user_name;
  });
}

app.use(express.json());

app.get('/', (req, res) => {
  let user = get_user(req.query.name.toString());
  res.send(`${user.name} have ${count_healthy_kidneys(user.kidneys)} kidneys`)
})

app.get('/users', (req, res) => {
  res.send(JSON.stringify(users));
})

app.post('/', (req, res) => {
  let { user } = req.body;
  users.push(user);
  res.send(`User added to the hospital database!`)
})

app.delete('/', (req, res) => {
  let sum_ans = sum(req.query.n);
  
  res.send(`Hello World!: Number is ${sum_ans}`)
})

app.use((err, req, res, next) => {
  res.json({
    msg: "Something is up with our server."
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})