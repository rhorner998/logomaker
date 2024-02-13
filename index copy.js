
// index.js
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Create an Express server
const express = require('express');
const app = express();
const port = 3000;

// Route to generate SVG for a circle
app.get('/circle-svg', (req, res) => {
  const circle = new Circle('green');
  const svgContent = circle.generateSVG('Hello SVG!', 'white');

  res.set('Content-Type', 'image/svg+xml'); // Set response header to indicate SVG content
  res.send(svgContent); // Send the SVG content as the response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter your text:'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What is the color of your text:'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Provide the shape:',
    choices: ['circle', 'square', 'triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What is the shape color:'
  }
];

// Ask questions and generate the SVG file based on user input
inquirer.prompt(questions).then(function (answers) {
  createSVGFile(answers.text, answers.textColor, answers.shape, answers.shapeColor);
});

// Function to create an SVG file based on user input
function createSVGFile(text, textColor, shapeType, shapeColor) {
  let shape;

  switch (shapeType) {
    case 'circle':
      shape = new Circle(shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(shapeColor);
      break;
    case 'square':
      shape = new Square(shapeColor);
      break;
    default:
      console.log('Invalid shape choice');
      return;
  }

  const svgContent = shape.generateSVG(text, textColor);
  fs.writeFileSync('examples/logo.svg', svgContent);
  console.log('Generated logo.svg');
}
