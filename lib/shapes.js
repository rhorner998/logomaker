
class Circle {
  constructor(color) {
    this.color = color;
  }

  generateSVG(text, textColor) {
    // Center text in the circle
    const centerX = 150; // Circle's center X
    const centerY = 100; // Circle's center Y
    const textX = centerX; // Assuming text anchor at the middle
    const textY = centerY + 5; // Adjust for vertical alignment

    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="300" height="200">
              <circle cx="${centerX}" cy="${centerY}" r="90" fill="${this.color}"></circle>
              <text x="${textX}" y="${textY}" fill="${textColor}" font-size="20" font-family="Arial" text-anchor="middle" dominant-baseline="middle">${text}</text>
            </svg>`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  generateSVG(text, textColor) {
    // Center text in the square
    const squareSize = 140;
    const squareX = 30;
    const squareY = 30;
    const textX = squareX + squareSize / 2;
    const textY = squareY + squareSize / 2 + 5; // Adjust for vertical alignment

    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="300" height="200">
              <rect x="${squareX}" y="${squareY}" width="${squareSize}" height="${squareSize}" fill="${this.color}"></rect>
              <text x="${textX}" y="${textY}" fill="${textColor}" font-size="20" font-family="Arial" text-anchor="middle" dominant-baseline="middle">${text}</text>
            </svg>`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  generateSVG(text, textColor) {
    // Approximate centering for triangle
    const textX = 150; // Horizontal center
    const textY = 140; // Adjusted for vertical alignment

    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="300" height="200">
              <polygon points="150,10 250,190 50,190" fill="${this.color}"></polygon>
              <text x="${textX}" y="${textY}" fill="${textColor}" font-size="20" font-family="Arial" text-anchor="middle" dominant-baseline="middle">${text}</text>
            </svg>`;
  }
}

module.exports = { Circle, Square, Triangle };
