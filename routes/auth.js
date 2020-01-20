const router = require('express').Router;
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {registerValidation, loginValidation} = require('../validation');

router.post('/register', async(req, res) => {
  //Validate data before post to db
  const {error} = registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  //Checking if the user is already in the db
  const emailExist = await User.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send('Email already exists');

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.send({user: user.id});
  } catch(err) {
    res.status(400).send(err);
  };
});

router.post('/login', async(req, res) => {
  //Validate data before login to db
  const {error} = loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  //Checking if the user is already in the db
  const user = await User.findOne({email: req.body.email});
  if(!user) return res.status(400).send('Email not found');

  //Check if the password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if(!validPassword) return res.status(400).send('Invalid password');

  //Create and assign a token
  const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
  
  res.send('Logged in!')
});

module.exports = router;

