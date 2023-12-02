const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// MongoDB Connection URI (replace with your MongoDB URI)
const mongoURI = 'mongodb+srv://aryantiwari4451:resourcify123@cluster0.isspnxp.mongodb.net/Resourcify?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(express.static(path.join(__dirname, 'build')));

// Serve the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const userSchema = new mongoose.Schema({
    name: String,
    branch: String,
    year: String,
    phoneNumber: String,
    email: String,
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.post('/signup', async (req, res) => {
    console.log("please work")
    try {
      const newUser = new User({
        name: req.body.username,
        branch: req.body.branch,
        year: req.body.year,
        phoneNumber: req.body.phno,
        email: req.body.email,
        password: req.body.password,
      });
  
      await newUser.save();
      console.log(newUser);
      
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
  });

  app.post('/login', async (req, res) => {
    console.log(req.body);
    try {
      const { name, password } = req.body;
  
      // Check if the user exists in the database
      const user = await User.findOne({ name });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Here you would typically compare passwords more securely (e.g., using bcrypt)
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Login successful
      return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      return res.status(500).json({ message: 'Login failed', error: error.message });
    }
  });
  // app.get('/user', async (req, res) => {
  //   try {
  //     const { username } = req.session; 
  //     // Assuming the username is stored in the session
  //     print(req.session);
  //     const user = await User.findOne({ username });
  
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  
  //     const { name, branch, year, phoneNumber } = user;
  //     return res.status(200).json({ name, branch, year, phoneNumber });
  //   } catch (error) {
  //     return res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
  //   }
  // });

  // GET request to fetch user data
  app.get('/user/:username', async (req, res) => {
    const { username } = req.params;
  
    try {
      // Assuming 'nameFieldInDatabase' is the field where username is stored
      const userData = await User.findOne({ name: username });
  
      if (userData) {
        // Respond with the user data if found
        res.status(200).json(userData);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.put('/user/:username', async (req, res) => {
    const { username } = req.params;
    const updatedUserData = req.body;
  
    try {
      // Find the user by username and update the details
      await User.findOneAndUpdate({ name: username }, updatedUserData);
  
      res.status(200).json({ message: 'User data updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Start the server on a specified port (e.g., 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

