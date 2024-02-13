const fs = require('fs');
const inquirer = require('inquirer');
const express = require('express');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Create an Express server
const app = express();
const port = process.env.PORT || 3000;

// Ensure the 'examples' directory exists
const outputDir = './examples';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Route to generate SVG for a circle
app.get('/circle-svg', async (req, res) => {
  try {
    const circle = new Circle('green');
    const svgContent = circle.generateSVG('Hello SVG!', 'white');
    res.set('Content-Type', 'image/svg+xml');
    res.send(svgContent);
  } catch (error) {
    console.error('Error generating SVG:', error);
    res.status(500).send('Error generating SVG');
  }
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
inquirer.prompt(questions).then(answers => {
  try {
    createSVGFile(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  } catch (error) {
    console.error('Error creating SVG file:', error);
  }
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
  fs.writeFileSync(`${outputDir}/logo.svg`, svgContent);
  console.log('Generated logo.svg');
}
