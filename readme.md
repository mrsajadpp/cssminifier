# CSS Minifier API

This API allows you to minify CSS code. It uses the `clean-css` library to perform the minification. The API is built with Express.js and includes middleware for parsing user-agent strings.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Minify CSS](#minify-css)
- [Example Request](#example-request)
- [Error Handling](#error-handling)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mrsajadpp/cssminifier.git
   cd cssminifier
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node app.js
   ```

## Usage

### Minify CSS

- **Endpoint**: `/minify`
- **Method**: `POST`
- **Content-Type**: `application/json`

#### Request Body

```json
{
  "css": "your_css_code_here"
}
```

- `css` (string): The CSS code you want to minify.

#### Response

- `200 OK`: Returns the minified CSS.
  
  ```json
  {
    "minifiedCSS": "minified_css_code_here"
  }
  ```

- `400 Bad Request`: If no CSS code is provided.

  ```json
  {
    "error": "Bad Request: No CSS provided"
  }
  ```

- `500 Internal Server Error`: If minification fails.

  ```json
  {
    "error": "Internal Server Error: Minification failed",
    "details": ["error_details_here"]
  }
  ```

## Example Request

```bash
curl -X POST http://127.0.0.1:3000/minify \
-H "Content-Type: application/json" \
-d '{"css": "body { margin: 0; padding: 0; }"}'
```

#### Response:

```json
{
  "minifiedCSS": "body{margin:0;padding:0;}"
}
```

## Error Handling

The API handles errors for invalid or missing input, as well as internal issues during CSS minification.

## License

This project is licensed under the MIT License.