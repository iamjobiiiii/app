require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const app = express();

// Database Connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Middleware for parsing JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for verifying JWT tokens on protected routes
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Expecting token in format 'Bearer <token>'
  
  if (!token) {
    return res.status(403).json({ message: 'Access denied, token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach user data to request object
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Login Route (POST /api/login)
app.post('/api/login', (req, res) => {
  const { userid, password } = req.body;

  // Query the database to check if the user exists
  connection.query('SELECT * FROM users WHERE userid = ?', [userid], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = results[0];

    // Compare the hashed password with the input password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // Generate JWT token with role
      const token = jwt.sign({ userid: user.userid, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Return success message with token
      return res.status(200).json({
        message: 'Login successful!',
        token: token
      });
    });
  });
});

// Register Route (POST /api/register)
app.post('/api/register', (req, res) => {
  const { userid, username, password, role } = req.body;

  // Check if the user already exists
  connection.query('SELECT * FROM users WHERE userid = ?', [userid], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: 'Userid already exists' });
    }

    // Hash the password before storing it
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error hashing password' });
      }

      // Insert the new user into the database
      connection.query('INSERT INTO users (userid, username, password, role) VALUES (?, ?, ?, ?)', [userid, username, hashedPassword, role], (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal Server Error' });
        }

        // Generate JWT token after registration
        const token = jwt.sign({ userid, role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(201).json({ message: 'User registered successfully', token });
      });
    });
  });
});

// Protected Route (GET /api/protected)
app.get('/api/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: `Hello, ${req.user.userid}! You are authorized.` });
});

// Start Server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
