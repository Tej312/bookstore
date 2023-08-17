import React, { useEffect, useState } from "react";
import { productStyle } from "./style";
import { defaultFilter, RecordsPerPage } from "../../constant/constant";
import { useNavigate } from "react-router-dom";
import { Typography} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import bookService from "../../service/book.service";
import { toast } from "react-toastify";
import categoryService from "../../service/category.service";
import Shared from "../../utils/shared";
import ConfirmationDialog from "../../component/ConfirmationDialog";

const Book = () => {
  const classes = productStyle();
  const [filters, setFilters] = useState(defaultFilter);
  const [bookRecords, setBookRecords] = useState({
    pageIndex: 0,
    pageSize: 10,
    totalPages: 1,
    items: [],
    totalItems: 0,
  });
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    await categoryService.getAll().then((res) => {
      if (res) {
        setCategories(res);
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filters.keyword === "") delete filters.keyword;
      searchAllBooks({ ...filters });
    }, 500);
    return () => clearTimeout(timer);
  }, [filters]);

  const searchAllBooks = (filters) => {
    bookService.getAll(filters).then((res) => {
      setBookRecords(res);
    });
  };

  const columns = [
    { id: "name", label: "Book Name", minWidth: 100 },
    { id: "price", label: "Price", minWidth: 100 },
    { id: "category", label: "Category", minWidth: 100 },
  ];

  const onConfirmDelete = () => {
    bookService
      .deleteBook(selectedId)
      .then((res) => {
        toast.success(Shared.messages.DELETE_SUCCESS);
        setOpen(false);
        setFilters({ ...filters, pageIndex: 1 });
      })
      .catch((e) => toast.error(Shared.messages.DELETE_FAIL));
  };

  return (
    <div className={classes.productWrapper}>
      <div className="container">
        <h1 className="bookHead">Book Page</h1>

        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookRecords?.items?.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    {categories.find((c) => c.id === row.categoryId)?.name}
                  </TableCell>
                  <TableCell>
                    <Button
                      type="button"
                      className="green-btn btn"
                      variant="contained"
                      color="primary"
                      disableElevation
                      onClick={() => {
                        navigate(`/edit-book/${row.id}`);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      type="button"
                      className="btn pink-btn"
                      variant="contained"
                      color="primary"
                      disableElevation
                      onClick={() => {
                        setOpen(true);
                        setSelectedId(row.id ?? 0);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {!bookRecords.items.length && (
                <TableRow className="TableRow">
                  <TableCell colSpan={5} className="TableCell">
                    <Typography align="center" className="noDataText">
                      No Books
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="btn-wrapper">
          <Button
            type="button"
            className="btn pink-btn"
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => navigate("/add-book")}
          >
            Add New Book
          </Button>
          <TablePagination
            rowsPerPageOptions={RecordsPerPage}
            component="div"
            className="raw-per-page"
            count={bookRecords.totalItems}
            rowsPerPage={filters.pageSize || 0}
            page={filters.pageIndex - 1}
            onPageChange={(e, newPage) => {
              setFilters({ ...filters, pageIndex: newPage + 1 });
            }}
            onRowsPerPageChange={(e) => {
              setFilters({
                ...filters,
                pageIndex: 1,
                pageSize: Number(e.target.value),
              });
            }}
          />
        </div>
        <ConfirmationDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => onConfirmDelete()}
          title="Delete book"
          description="Are you sure you want to delete this book?"
        />
      </div>
    </div>
  );
};

export default Book;
