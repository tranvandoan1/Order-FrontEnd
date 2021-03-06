import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ListTable from "./Page/ListTable";
import Orders from "./Page/Orders";
import LayoutWeb from "./Page/Layout";
import ListCate from "./Manage/Categoris/ListCate";
import LayoutAdmin from "./Manage/LayoutAdmin";
import ListPro from "./Manage/Products/ListPro";
import ListOder from "./Manage/ListOder";
import Account from "./Manage/Account/Account";
import Signin from "./Login/Signin";
import PicturesWall from "./Login/Signup";
import AddCate from "./Manage/Categoris/AddCate";
import EditCate from "./Manage/Categoris/EditCate";
import AddPro from "./Manage/Products/AddPro";
import ListFloor from "./Manage/Floor/ListFloor";
import ListTablee from "./Manage/Table/ListTable";
import AddFloor from "./Manage/Floor/AddFloor";
import EditFloor from "./Manage/Floor/EditFloor";
import AddTable from "./Manage/Table/AddTable";
import EditTable from "./Manage/Table/EditTable";
import EditPro from "./Manage/Products/EditPro";
import ListStatistical from "./Manage/Statistical/ListStatistical";
import { useEffect, useState } from "react";
import './App.css'
function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user !== null ? <Navigate to="/floor/" /> : <Signin />}
        />
        <Route
          path="/signin"
          element={user !== null ? <Navigate to="/floor/" /> : <Signin />}
        />
        <Route
          path="/signup"
          element={user !== null ? <Navigate to="/floor/" /> : <PicturesWall />}
        />
        <Route
          path="/floor/"
          element={user == null ? <Navigate to="/signin" /> : <LayoutWeb />}
        >
          <Route
            index
            path="floor_id=:floor_id"
            element={<ListTable />}
          ></Route>
        </Route>

        <Route
          path="/floor/floor_id=:floor_id/table_id=:table_id/order"
          element={user == null ? <Navigate to="/signin" /> : <Orders />}
        />

        <Route
          path="/case-manager/"
          element={user == null ? <Navigate to="/signin" /> : <LayoutAdmin />}
        >
          {/* cate */}
          <Route path="categoris/" element={<ListCate />}></Route>
          <Route path="categoris/add" element={<AddCate />} />
          <Route path="categoris/edit=:id" element={<EditCate />} />
          {/* pro */}
          <Route path="products" element={<ListPro />} />
          <Route path="products/add" element={<AddPro />} />
          <Route path="products/edit=:id" element={<EditPro />} />
          {/* T???ng */}
          <Route path="floor" element={<ListFloor />} />
          <Route path="floor/add" element={<AddFloor />} />
          <Route path="floor/edit=:id" element={<EditFloor />} />
          {/* b??n */}
          <Route path="table" element={<ListTablee />} />
          <Route path="table/add" element={<AddTable />} />
          <Route path="table/edit=:id" element={<EditTable />} />
          {/* th???ng k?? */}
          <Route path="statistical" element={<ListStatistical />} />

          <Route path="account" element={<Account />} />
          <Route path="order" element={<ListOder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
