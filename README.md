# Movie Search Application

This is a movie search web application built using React.js as part of a job interview assignment. The application allows users to search for movies by title and displays the results in a paginated table. It also provides sorting functionality by movie title and release year.

## Setup Instructions

1. **Clone the Repository**

  git clone https://github.com/arkadiklika/search-movies-app-venn.git

2. **Install Dependencies**

  cd search-movies-app-venn
  npm install

3. **Set Environment Variables**
- Create a `.env` file in the root directory of the project.
- Add the following line to the `.env` file:
  ```
  REACT_APP_MOVIES_API=https://jsonmock.hackerrank.com/api/movies
  ```

4. **Run the Application**

  npm start


5. **Open in Browser**
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Functionality

- **Search Movies**: Users can search for movies by entering the movie name in the search bar and clicking on the "Search" button.
- **Pagination**: Displays a paginated table of search results with navigation buttons to go to the previous or next page.
- **Sorting**: Users can sort the displayed movies by movie title or release year by clicking on the respective column headers.

## `fetchMovies` Function

The `fetchMovies` function is responsible for fetching movie data from an external API. It is located in `src/services/movies_api.js`. Here's how it works:

- It is an asynchronous function that takes two parameters: `title` (the title of the movie to search for) and `page` (the page number of the search results).
- It uses Axios to make an HTTP GET request to the specified API endpoint constructed using template literals.
- Upon successful response from the API, it returns the data received.
- If an error occurs during the request, it logs the error to the console and re-throws the error to be handled by the caller.

## Environment Variables

Ensure you have set the environment variable `REACT_APP_MOVIES_API` containing the base URL of the movies API. In this project, it should be set to `https://jsonmock.hackerrank.com/api/movies`.

## Additional Notes

- This application fetches movie data from an external API. Make sure you have a stable internet connection to fetch the data.
- The sorting functionality only sorts the displayed movies. It does not affect the actual data fetched from the API.

Feel free to reach out with any questions or feedback. Thank you for reviewing my code!
