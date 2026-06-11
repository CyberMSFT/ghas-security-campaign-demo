// DEMO: Vulnerable JavaScript Code Examples for GHAS Security Campaign
// These examples are intentionally vulnerable to demonstrate GHAS capabilities

const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const { exec } = require('child_process');

// ❌ Hardcoded Credentials in Environment
const API_KEY = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";
const DB_PASSWORD = "admin123!@#";
const SLACK_WEBHOOK = "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX";
const AWS_SECRET = "AKIAIOSFODNN7EXAMPLE";

// ❌ SQL Injection Vulnerability
app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  const db = new sqlite3.Database(':memory:');
  
  // Vulnerable: Direct string concatenation
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  
  db.all(query, (err, rows) => {
    res.json(rows);
  });
});

// ❌ Cross-Site Scripting (XSS) Vulnerability
app.get('/comment/:id', (req, res) => {
  const comment = req.params.id;
  // Unsanitized user input directly rendered
  res.send(`<div>${comment}</div>`);
});

// ❌ Path Traversal Vulnerability
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  // No validation - allows directory traversal attacks
  const filepath = `/uploads/${filename}`;
  res.sendFile(filepath);
});

// ❌ Command Injection Vulnerability
app.post('/execute', (req, res) => {
  const command = req.body.command;
  // Executing untrusted command - vulnerable to injection
  exec(command, (err, stdout) => {
    res.json({ output: stdout });
  });
});

// ❌ Insecure Deserialization
app.post('/deserialize', (req, res) => {
  const data = req.body.data;
  // Using eval or Function constructor on untrusted data
  const result = eval(data);
  res.json({ result });
});

// ❌ Weak Cryptography
const crypto = require('crypto');

function hashPassword(password) {
  // MD5 is cryptographically broken
  return crypto.createHash('md5').update(password).digest('hex');
}

function encryptData(data) {
  // Using DES which is deprecated and weak
  const cipher = crypto.createCipher('des', 'secret');
  return cipher.update(data, 'utf8', 'hex');
}

// ❌ Hardcoded Secrets in String
const connectionString = "Server=myserver.com;User=admin;Password=SuperSecret123!;Database=mydb";

// ❌ Missing Input Validation
app.post('/upload', (req, res) => {
  const filesize = req.body.size;
  // No validation - could be exploited
  const buffer = Buffer.alloc(filesize);
  res.json({ status: 'uploaded' });
});

// ❌ CORS Misconfiguration
app.use((req, res, next) => {
  // Overly permissive CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// ❌ Missing Security Headers
app.get('/page', (req, res) => {
  // No security headers like CSP, X-Frame-Options, etc.
  res.send('<html><body>Vulnerable Page</body></html>');
});

// ❌ TODO: Remove before production
// Database credentials: user=admin, pass=P@ssw0rd123, host=db.internal.company.com

module.exports = app;
