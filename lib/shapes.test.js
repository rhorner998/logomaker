
const { Circle, Triangle, Square } = require('./shapes'); // Import the Circle, Triangle, and Square classes

describe('Circle class', () => {
  test('Generate SVG for circle with text', () => {
    const mycircle = new Circle('red');
    const svgContent = mycircle.generateSVG('Hello', 'blue');
    console.log(svgContent);
    // Example assertions for Circle
    expect(svgContent).toContain('<circle');
    expect(svgContent).toContain('<text');
    expect(svgContent).toContain('Hello');
    expect(svgContent).toContain('fill="red"');
    expect(svgContent).toContain('fill="blue"');
  });

  // Add more test cases for Circle
});

describe('Square class', () => {
  test('Generate SVG for square with text', () => {
    const square = new Square('green'); // Assuming Square class also takes color parameter
    const svgContent = square.generateSVG('World', 'yellow');

    // Example assertions for Square
    expect(svgContent).toContain('<rect');
    expect(svgContent).toContain('<text');
    expect(svgContent).toContain('World');
    expect(svgContent).toContain('fill="green"');
    expect(svgContent).toContain('fill="yellow"');
  });

  // Add more test cases for Square
});

describe('Triangle class', () => {
  test('Generate SVG for triangle with text', () => {
    const triangle = new Triangle('orange'); // Assuming Triangle class also takes color parameter
    const svgContent = triangle.generateSVG('Bonjour', 'purple');

    // Example assertions for Triangle
    expect(svgContent).toContain('<polygon');
    expect(svgContent).toContain('<text');
    expect(svgContent).toContain('Bonjour');
    expect(svgContent).toContain('fill="orange"');
    expect(svgContent).toContain('fill="purple"');
  });

  // Add more test cases for Triangle
});