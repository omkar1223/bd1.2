const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/distance', (req, res) => {
  let distance1 = parseInt(req.query.distance1);
  let distance2 = parseInt(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});

app.get('/total-time', (req, res) => {
  let time1 = parseInt(req.query.time1);
  let time2 = parseInt(req.query.time2);
  let time3 = parseInt(req.query.time3);

  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});

app.get('/average-speed', (req, res) => {
  let timeTaken = parseInt(req.query.timeTaken);
  let totalDistance = parseInt(req.query.totalDistance);
  let avgSpeed = totalDistance / timeTaken;
  res.send(avgSpeed.toString());
});

app.get('/calories', (req, res) => {
  let duration1 = parseInt(req.query.duration1);
  let duration2 = parseInt(req.query.duration2);

  let caloriesPerMin = req.query.caloriesPerMin;
  let totalCal = (duration1 + duration2) * caloriesPerMin;
  res.send(totalCal.toString());
});

app.get('/interest', (req, res) => {
  let principal = parseFloat(req.query.principal);
  let interestRate = parseFloat(req.query.interestRate);
  let timePeriod = parseFloat(req.query.timePeriod);

  let interestGot = (principal * interestRate * timePeriod) / 100;
  res.send(interestGot.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
