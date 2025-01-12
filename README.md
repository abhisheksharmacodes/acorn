# Acorn Project

## Overview

This project is a React application that displays posts with various functionalities such as search, notifications, and more.

## File Structure

```
src/
|-- assets/
|   |-- icons/
|   |   |-- all.svg
|   |   |-- brightness.svg
|   |   |-- home.svg
|   |   |-- message.svg
|   |   |-- more.svg
|   |   |-- notify.svg
|   |   |-- notify_gray.svg
|   |   |-- popular.svg
|   |   |-- search.svg
|   |   |-- share.svg
|   |-- user.png
|   |-- logo.png
|   |-- thumbnail.jpg
|-- components/
|   |-- Header.jsx
|   |-- contentarea/
|       |-- ContentArea.jsx
|       |-- comps/
|           |-- Post.jsx
|-- context/
|-- App.jsx
|-- App.css
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/acorn.git
    ```
2. Navigate to the project directory:
    ```sh
    cd acorn
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### Header

The `Header` component contains the navigation bar with links to different sections and a search bar.

### ContentArea

The `ContentArea` component displays the main content of the application, including posts.

### Post

The `Post` component represents an individual post with details such as title, author, time, comments, and shares.

## Context

The application uses React Context to manage the search state across components.

## Styling

The application uses Tailwind CSS for styling. Custom styles are defined in `App.css`.

## License

This project is licensed under the MIT License.
