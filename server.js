const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs'); // this engine requires the fs module like we did Saturday
// make sure you change the references of madeline and hypatia to “portal”
app.engine('portal', (filePath, options, callback) => {
  // define the view engine called portal
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we’ll be more complex later
    const rendered = content
      .toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#', '<div>' + options.content + '</div>')
      .replace('#url#', options.url);
    return callback(null, rendered);
  });
});

// Set view engine
app.set('views', './views');
app.set('view engine', 'portal');

// Define Routes
app.get('/', (req, res) => {
  res.render('template2', {
    title: 'We the Best',
    message: 'Who!',
    content:'We Taking Over, Major Key Alert, Yall know who it is, All I do is win',
  });
});

app.get('/about-me', (req, res) => {
  res.render('template', {
    title: 'Hey',
    message: 'Rick Ross!',
    content: 'The most underated Rapper in the game',
    url: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
  });
});

app.get('/another-one', (req, res) => {
  res.render('template', {
    title: 'Favorite R&B Singer',
    message: 'Hmmmm!',
    content:'I like all 90s, 00s R&B Music',
    url:'https://images.unsplash.com/photo-1644831245003-e648199e3417?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDkwcyUyMHIlMjZifGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  });
});

app.get('/fourth-one', (req, res) => {
  res.render('template', {
    title: 'Whats up',
    message: 'Dinner Tonight?',
    content: 'Steak, Bake potato, broccoli',
    url: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0ZWFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  });
});

app.get('/fifth-one', (req, res) => {
  res.render('template2', {
    title: 'Party Tonight',
    message: 'Where?',
    content: 'Turks and Caicos Beach Club',
  });
  
});

app.get('/sixth-one', (req, res) => {
  res.render('template', {
    title: 'Vacation',
    message: '3 Days Left',
    content: 'Packing List',
    list:'clothes, swimwear, you know the rest!',
    url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  });
});

app.get('/seventh-one', (req, res) => {
  res.render('template2', {
    title:'Boo',
    message:'Halloween is Coming!',
    content: 'What are you going to be?',
  });
});

app.get('/eighth-one', (req, res) => {
  res.render('template', {
    title: 'Favorite holiday!',
    message: 'You already know!',
    content: 'Christmas!',
    url: 'https://images.unsplash.com/photo-1609405068355-505d41ce0780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNocmlzdG1hcyUyMGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  });
});

app.get('/nineth-one', (req, res) => {
  res.render('template2', {
    title: 'Game Time',
    message: 'The Falcons Suck',
    content: 'Who Cares, I dont watch football',
  });
});

app.get('/tenth-one', (req, res) => {
  res.render('template2', {
    title:'Software Engineer',
    message:'Day in the Life',
    content:'Follow me to see what my day consists of working as a software engineer!'
  });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
