import React, { FC, useState } from "react";
import { Employee } from "../types/employees";
interface ITableHead {
  columns: any;
  handleSorting: (columnKey: keyof Employee, sortOrder: string) => void;
}
const TableHeader: FC<ITableHead> = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor: keyof Employee) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, key, sortable }: any) => {
          const cl = sortable
            ? sortField === key && order === "asc"
              ? "up"
              : sortField === key && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              key={label}
              className={cl}
              onClick={
                sortable
                  ? () => handleSortingChange(key as keyof Employee)
                  : () => {}
              }
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
