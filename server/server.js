const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:room', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
