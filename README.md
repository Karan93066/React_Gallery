# React Gallery

This project is a simple and elegant image gallery built with React.js, Vite, and Tailwind CSS. The application fetches images from the Pixabay API and displays them in a grid format. Users can search for images by category, view image details such as downloads, likes, and tags, and enjoy a responsive and modern UI.

## Features

- **Image Grid**: Display a grid of images fetched from the Pixabay API.
- **Search Functionality**: Search for images by specific categories.
- **Image Details**: View details like image downloads, likes, tags, etc.
- **Responsive Design**: Built with Tailwind CSS for a responsive and visually appealing UI.
- **Vite Powered**: Fast and efficient development environment using Vite.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for custom designs.
- **Pixabay API**: A free API for high-quality images.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react_gallery.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react_gallery
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

- **Search Images**: Use the search bar to filter images by category.
- **View Details**: Click on an image to view more details like downloads, likes, and tags.

## Project Structure

```bash
├── public/
│   └── index.html
├── src/
│   ├── component/
│   │   ├── Image_Card.jsx
│   │   ├── Search.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js
```
## API Integration

This project uses the Pixabay API to fetch images. The API data is looped through to extract only the necessary fields like:

- **Image URL**
- **Image Downloads**
- **Likes**
- **Tags**

## Screenshots 

<img width="1710" alt="Screenshot 2024-08-14 at 11 37 52 PM" src="https://github.com/user-attachments/assets/613c16b3-fbe8-4f76-bbcd-073255887c05">


<img width="1710" alt="Screenshot 2024-08-14 at 11 41 00 PM" src="https://github.com/user-attachments/assets/67aef6c4-39cf-4683-97c8-bcd6911cf10c">

