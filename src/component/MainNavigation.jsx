import React from "react";
import { Route, Routes } from "react-router-dom";
import { BookListing } from "../pages/book-listing";
import Register from "../pages/register/Register";
import { RoutePaths } from "../utils/enum";
import Login from "../pages/login/login";
import EditBook from "../pages/book/editBook";
import Book from "../pages/book";
import UpdateProfile from "../pages/update-profile/index";
import User from "../pages/user/index";
import EditUser from "../pages/user/editUser";
import Category from "../pages/category";
import EditCategory from "../pages/category/editCategory";
import Cart from "../pages/cart";

export const MainNavigation = () => {
  return (
    <>
      <Routes>
        <Route path={RoutePaths.Register} element={<Register />}></Route>
        <Route path={RoutePaths.Login} element={<Login />}></Route>
        <Route path={RoutePaths.BookListing} element={<BookListing />}></Route>
        <Route path={RoutePaths.Book} element={<Book />}></Route>
        <Route path={RoutePaths.EditBook} element={<EditBook />}></Route>
        <Route path={RoutePaths.AddBook} element={<EditBook />}></Route>
        <Route path={RoutePaths.User} element={<User />}></Route> 
        <Route path={RoutePaths.EditUser} element={<EditUser  />}></Route>
        <Route path={RoutePaths.Category} element={<Category  />}></Route>
        <Route path={RoutePaths.EditCategory} element={<EditCategory  />}></Route>
        <Route path={RoutePaths.AddCategory} element={<EditCategory  />}></Route> 
        <Route path={RoutePaths.UpdateProfile} element={<UpdateProfile  />}></Route> 
        <Route path={RoutePaths.Cart} element={<Cart/>}></Route> 
      </Routes>
    </>
  );
};
