import { React, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TableFooter,
  Select,
  MenuItem,
} from "@mui/material";

export default function MoviesTable({
  movies,
  totalPages,
  currentPage,
  onPageChange,
}) {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortDirection("asc");
    }
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortColumn === "Title") {
      return sortDirection === "asc"
        ? a.Title.localeCompare(b.Title)
        : b.Title.localeCompare(a.Title);
    } else if (sortColumn === "Year") {
      return sortDirection === "asc" ? a.Year - b.Year : b.Year - a.Year;
    }
    return 0;
  });

  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handlePageChange = (event) => {
    const selectedPage = parseInt(event.target.value);
    onPageChange(selectedPage);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Button onClick={() => handleSort("Title")}>
                MOVIE NAME{" "}
                {sortColumn === "Title" && (
                  <span>{sortDirection === "asc" ? "▲" : "▼"}</span>
                )}
              </Button>
            </TableCell>
            <TableCell align="center">
              <Button onClick={() => handleSort("Year")}>
                YEAR{" "}
                {sortColumn === "Year" && (
                  <span>{sortDirection === "asc" ? "▲" : "▼"}</span>
                )}
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedMovies.map((movie) => (
            <TableRow
              key={movie.imdbID}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ width: "90%" }}>
                {movie.Title}
              </TableCell>
              <TableCell align="center" sx={{ width: "10%" }}>
                {movie.Year}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} align="right">
              <Button
                variant="contained"
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
              >
                Next
              </Button>
            </TableCell>
            <TableCell>
              Page {currentPage} of {totalPages}
            </TableCell>
            <TableCell>
              <Select
                value={currentPage}
                onChange={handlePageChange}
                displayEmpty
              >
                {[...Array(totalPages).keys()].map((page) => (
                  <MenuItem key={page + 1} value={page + 1}>
                    {page + 1}
                  </MenuItem>
                ))}
              </Select>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
