import "./App.css";
import { useEffect, useState } from "react";

import { Button, Grid, TextField } from "@mui/material";
import { fetchMovies } from "./services/movies_api";

import MoviesTable from "./components/MoviesTable";

function App() {
  const [movieName, setMovieName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getSelectedMoviesData("", 1);
    };

    fetchData();
  }, []);

  const getSelectedMoviesData = async (nameStr, page) => {
    const selectedData = await fetchMovies(nameStr, page);
    setCurrentPage(selectedData.page);
    setTotalPages(selectedData.total_pages);
    setMovies(selectedData.data);
  };

  const onPageChange = (newPageIndex) => {
    setCurrentPage(newPageIndex);
    getSelectedMoviesData(movieName, newPageIndex);
  };

  return (
    <div className="App">
      <Grid container spacing={2} padding={4}>
        <Grid item xs={12}>
          <h1>Movies Search</h1>
        </Grid>
        <Grid item xs={12}>
          <h3>Search for any movie you like:</h3>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            label="Movie Name"
            id="search"
            onChange={(e) => setMovieName(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            style={{ height: "100%" }}
            onClick={() => getSelectedMoviesData(movieName, 1)}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          <MoviesTable
            movies={movies}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
