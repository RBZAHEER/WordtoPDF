```markdown
# Word to PDF Converter

This project is a web application that allows users to convert Word documents (.doc, .docx) to PDF format online. It is built using React for the frontend and Node.js with Express for the backend. File uploads are managed using `multer`, and the conversion from Word to PDF is handled by `docx-pdf`.

## Features

- **File Upload:** Users can upload a Word document from their local system.
- **Conversion:** The uploaded Word document is converted to a PDF file.
- **Download:** The converted PDF file is available for download.

## Technologies Used

### Frontend

- React
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express
- Multer
- docx-pdf
- CORS

## Setup and Installation

### Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/word-to-pdf-converter.git
   cd word-to-pdf-converter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the backend server:**

   Navigate to the `backend` directory and run:

   ```bash
   node server.js
   ```

4. **Start the frontend development server:**

   Navigate to the `frontend` directory and run:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:5173`.

## Usage

1. Navigate to the homepage.
2. Click on the "Choose File" button and select a Word document.
3. Click on the "Convert to PDF" button.
4. Once the file is converted, it will be automatically downloaded.

## Project Structure

### Frontend

- `src/components/Home.jsx`: The main component handling the file upload and conversion.
- `src/components/Navbar.jsx`: Component for the navigation bar.
- `src/components/Footer.jsx`: Component for the footer.

### Backend

- `server.js`: The main server file handling file uploads and conversion.

## Error Handling

- If no file is selected, a message will prompt the user to select a file.
- If there is an error during the conversion process, an error message will be displayed.

## Known Issues

- The conversion may fail for very large files.
- The application currently supports only .doc and .docx files.

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the License.

```
