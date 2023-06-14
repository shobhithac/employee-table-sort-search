import React, { useEffect } from "react";
import "./App.css";
import EmployeeTable from "../components/EmployeeTable";
import { getEmployees } from "../api/getEmployees";
import { useDispatch } from "react-redux";

const EmployeeGrid = () => {
  const dispatch = useDispatch();

  const getEmployeesList = () => {
    getEmployees()
      .then(({ data }) => {
        dispatch({ type: "ADD_EMPLOYEES", payload: data.employees });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getEmployeesList();
  }, []);

  return <EmployeeTable />;
};

export default EmployeeGrid;
