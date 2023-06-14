import React, { FC } from "react";
import { Employee } from "../types/employees";

interface ITableBody {
  tableData: Employee[];
  columns: any;
}
const TableBody: FC<ITableBody> = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.length === 0 ? (
        <tr>
          <td colSpan={columns.length}>No data available</td>
        </tr>
      ) : (
        tableData.map((empDetail: Employee) => (
          <tr key={empDetail.id} data-testid="employee-info-row">
            {columns.map(({ key }: any) => {
              const tData = empDetail[key as keyof Employee]
                ? empDetail[key as keyof Employee]
                : "——";
              return <td key={key}>{tData}</td>;
            })}
          </tr>
        ))
      )}
    </tbody>
  );
};
export default TableBody;
