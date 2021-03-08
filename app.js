const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const friends = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('landing', { friends: friends });
});

app.post('/addfriend', (req, res) => {
  let newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect('/');
  //   console.log(newFriend);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
