const express = require('express');
const employees = require('./employee.json');

const app = express();
const PORT = 4000;

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/:employeeID', (req, res) => {
  const employeeID = req.params.employeeID;
  const employee = employees.find((employee) => employee.employeeID === Number(employeeID));

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});