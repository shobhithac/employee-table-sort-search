import React, { FC, useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { Employee } from "../types/employees";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { useSelector } from "react-redux";

const columns = [
  { label: "First Name", key: "first_name", sortable: true },
  { label: "Last Name", key: "last_name", sortable: true },
  { label: "Email", key: "email", sortable: false },
  { label: "Date of Birth", key: "dob", sortable: false },
  { label: "Address", key: "address", sortable: false },
  { label: "Salary", key: "salary", sortable: false },
];

const EmployeeTable = () => {
  const employeesReducerData = useSelector(
    (state: any) => state.empDetailsReducers.employees
  );
  const [employeesList, setEmployeesList] = useState<Employee[]>([]);
  const [paginated, setPaginated] = useState<Employee[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(10);

  const startCount = currentPage === 0 ? 1 : currentPage * perPage + 1;
  const endCount = currentPage === 0 ? perPage : (currentPage + 1) * perPage;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const paginatedData = employeesList.slice(
      perPage * pageNumber,
      perPage * pageNumber + perPage
    );
    setPaginated(paginatedData);
  };

  const handleSorting = (sortField: keyof Employee, sortOrder: string) => {
    if (sortField) {
      const sorted = [...paginated].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setPaginated(sorted);
    }
  };

  const handleSalaryChange = (value: any) => {
    let minSalary = 0;
    let maxSalary = Infinity;
    const paginatedData = employeesList.slice(
      perPage * currentPage,
      perPage * currentPage + perPage
    );
    if (value === "all") {
      setPaginated(paginatedData);
    } else {
      if (value === "10000") {
        maxSalary = 10000;
      } else if (value === "20000") {
        minSalary = 10000;
        maxSalary = 20000;
      } else if (value === "30000") {
        minSalary = 20000;
        maxSalary = 30000;
      }
      const filtered = paginatedData.filter((employee) => {
        const salary = parseFloat(
          employee.salary.replace("$", "").replace(",", "")
        );
        return salary >= minSalary && salary <= maxSalary;
      });
      setPaginated(filtered);
    }
  };

  const handleNameSearch = (event: any) => {
    const input = event.target.value.toLowerCase();
    const paginatedData = employeesList.slice(
      perPage * currentPage,
      perPage * currentPage + perPage
    );
    const nameFiltered = paginatedData.filter((person) => {
      const personFirstName = person.first_name.toLowerCase();
      const personLastName = person.last_name.toLowerCase();

      return personFirstName.includes(input) || personLastName.includes(input);
    });
    setPaginated(nameFiltered);
  };

  useEffect(() => {
    if (employeesReducerData.length) {
      setEmployeesList(employeesReducerData);
    }
  }, [employeesReducerData]);

  useEffect(() => {
    setCurrentPage(0);
    setPaginated(employeesList.slice(0, perPage));
  }, [employeesList]);

  return (
    <Container fluid aria-label="employee-table-container">
      <Row style={{ alignItems: "center", justifyContent: "flex-end" }}>
        <Col xs="6">
          <Form.Control
            type="text"
            placeholder="Search by first name/last name"
            onChange={(e) => handleNameSearch(e)}
          />
        </Col>
        <Col xs="6" style={{ display: "flex", justifyContent: "flex-end" }}>
          <Dropdown onSelect={handleSalaryChange}>
            <Dropdown.Toggle id="dropdown-basic">
              Filter by Salary
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="all">All</Dropdown.Item>
              <Dropdown.Item eventKey="10000">Less than $10,000</Dropdown.Item>
              <Dropdown.Item eventKey="20000">$10,000 - $20,000</Dropdown.Item>
              <Dropdown.Item eventKey="30000">$20,000 - $30,000</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Table className="table" responsive striped>
            <TableHeader columns={columns} handleSorting={handleSorting} />

            <TableBody columns={columns} tableData={paginated} />
          </Table>
        </Col>
      </Row>

      <Row style={{ alignItems: "center", justifyContent: "flex-end" }}>
        <Col xs="6">
          <p>
            Showing {startCount}-{endCount} of {employeesList.length} entries
          </p>
        </Col>
        <Col xs="6" style={{ display: "flex", justifyContent: "flex-end" }}>
          <ButtonGroup aria-label="pagination">
            <Button
              variant="primary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              {"<"}
            </Button>
            <Button
              variant="primary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage + 1 === Math.floor(employeesList.length / perPage)
              }
            >
              {">"}
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeTable;
