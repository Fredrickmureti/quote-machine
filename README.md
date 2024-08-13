```markdown
# Quote Generator

A simple React application that fetches quotes from an API and displays them with options to tweet or post them on Tumblr. The background color changes with each new quote. This project also integrates FontAwesome icons for social media links.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a copy of the project up and running on your local machine, follow these simple steps.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **npm or yarn**: This project uses npm as its package manager, but you can use yarn as well.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Fredrickmureti/quote-generator.git
   cd quote-generator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   or if you're using yarn:

   ```bash
   yarn start
   ```

   This will start the development server and open the application in your default browser.

## Usage

- **New Quote**: Click the "New Quote" button to fetch a new quote.
- **Share on Twitter or Tumblr**: Use the Twitter or Tumblr icons to share the quote directly on your social media.
- **Dynamic Background**: The background color of the app changes with each new quote generated.

## Features

- **Random Quote Generation**: Fetch quotes from an API and display them with each click.
- **Social Media Integration**: Share your favorite quotes on Twitter and Tumblr with ease.
- **Dynamic Background Colors**: The background color changes every time a new quote is displayed.
- **FontAwesome Integration**: Utilize FontAwesome for beautiful social media icons.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **FontAwesome**: Icon library to include social media icons.
- **CSS**: For styling the components.

### FontAwesome Integration

This project uses FontAwesome icons for the social media buttons. If the icons are not displaying correctly, ensure the following:

- **CDN Method**: Ensure you have an active internet connection and the following line is included in the `<head>` section of your `index.html`:

  ```html
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  ```

- **npm Installation**: If you installed FontAwesome via npm, ensure you've imported it in your `index.js` or `App.js`:

  ```javascript
  import '@fortawesome/fontawesome-free/css/all.min.css';
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```
