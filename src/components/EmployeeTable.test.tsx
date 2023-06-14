import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import EmployeeTable from "./EmployeeTable";
import { Store, AnyAction } from "redux";

const mockData = [
  {
    first_name: "Ardenia",
    last_name: "Atter",
    email: "aatter0@ustream.tv",
    gender: "Female",
    dob: "07/12/1992",
    address: "46965 Thackeray Way",
    salary: "$3092.98",
    id: "96f6a051-329c-465e-b5ff-ffd7d495ac50",
  },
  {
    first_name: "Sabine",
    last_name: "Sebert",
    email: "ssebert1@marketwatch.com",
    gender: "Female",
    dob: "09/20/1999",
    address: "518 Ridge Oak Street",
    salary: "$19368.98",
    id: "c25695e3-89cc-4057-8e05-33c6226f8672",
  },
  {
    first_name: "Fraze",
    last_name: "Straun",
    email: "fstraun2@goodreads.com",
    gender: "Male",
    dob: "05/16/1994",
    address: "58538 Memorial Road",
    salary: "$22506.99",
    id: "8fc1ca8d-deb2-457f-b15e-1085990f2a69",
  },
  {
    first_name: "Carce",
    last_name: "Gresty",
    email: "cgresty3@newsvine.com",
    gender: "Male",
    dob: "12/17/1993",
    address: "53515 Browning Park",
    salary: "$55984.99",
    id: "fa4a1c16-08a9-41b7-b76b-b118d20641d8",
  },
  {
    first_name: "Thorsten",
    last_name: "Suermeiers",
    email: "tsuermeiers4@gnu.org",
    gender: "Male",
    dob: "12/07/1996",
    address: "21 Golf Course Place",
    salary: "$82576.98",
    id: "98891b99-b94e-4de0-a851-35adf735e3c2",
  },
  {
    first_name: "Tabby",
    last_name: "Berntsson",
    email: "tberntsson5@usa.gov",
    gender: "Male",
    dob: "07/15/1998",
    address: "7664 Debra Crossing",
    salary: "$74411.04",
    id: "ab961e27-a0a3-4d74-9761-790d83ff8dfc",
  },
  {
    first_name: "Terrell",
    last_name: "Spikings",
    email: "tspikings6@yellowbook.com",
    gender: "Male",
    dob: "01/06/1998",
    address: "60351 Steensland Parkway",
    salary: "$47365.03",
    id: "bd0f8295-8ed6-488c-a58d-144c5a444d6c",
  },
  {
    first_name: "Dory",
    last_name: "Sleicht",
    email: "dsleicht7@ucoz.com",
    gender: "Male",
    dob: "10/11/1998",
    address: "8 Farmco Park",
    salary: "$65094.87",
    id: "d6138935-ee78-435b-b9b0-bb52da3d0c98",
  },
  {
    first_name: "Barrett",
    last_name: "Nice",
    email: "bnice8@facebook.com",
    gender: "Male",
    dob: "10/03/1998",
    address: "4 Homewood Alley",
    salary: "$62802.73",
    id: "e96ae7bf-531e-4931-8719-9b45298762cc",
  },
  {
    first_name: "Marilin",
    last_name: "Harborow",
    email: "mharborow9@altervista.org",
    gender: "Female",
    dob: "08/12/1998",
    address: "5690 Sutherland Road",
    salary: "$65957.31",
    id: "78acd3c8-1f72-405a-b529-b98cae4508c3",
  },
  {
    first_name: "Karlis",
    last_name: "Rigbye",
    email: "krigbyea@cdc.gov",
    gender: "Male",
    dob: "09/06/1992",
    address: "91 5th Hill",
    salary: "$51824.89",
    id: "dd063c04-9d2d-4de6-b30a-b7c7663bb79d",
  },
  {
    first_name: "Marta",
    last_name: "Tarn",
    email: "mtarnb@taobao.com",
    gender: "Female",
    dob: "09/20/1995",
    address: "7 Muir Pass",
    salary: "$86537.22",
    id: "5be9d1c1-8096-4b21-8d32-4b7c8f85f2e8",
  },
  {
    first_name: "Raimondo",
    last_name: "Ilden",
    email: "rildenc@businesswire.com",
    gender: "Male",
    dob: "04/19/2000",
    address: "21568 High Crossing Hill",
    salary: "$96028.03",
    id: "6ac176f6-a79e-4dc2-a6f3-a8d003631285",
  },
  {
    first_name: "Doralia",
    last_name: "Bakhrushkin",
    email: "dbakhrushkind@usatoday.com",
    gender: "Female",
    dob: "03/10/1995",
    address: "8640 Brown Way",
    salary: "$92500.15",
    id: "5d55cbc0-1309-4f6c-9471-2590e221823b",
  },
  {
    first_name: "Wyatan",
    last_name: "Hebson",
    email: "whebsone@barnesandnoble.com",
    gender: "Male",
    dob: "01/18/1999",
    address: "7 Steensland Avenue",
    salary: "$48435.89",
    id: "8ab5625f-6cbe-4cbe-a96a-0f650129002e",
  },
  {
    first_name: "Rosemonde",
    last_name: "Bough",
    email: "rboughf@ox.ac.uk",
    gender: "Agender",
    dob: "10/24/1991",
    address: "04 Veith Place",
    salary: "$12840.57",
    id: "38529bb5-aaab-4997-b574-e032d509d144",
  },
  {
    first_name: "Ryan",
    last_name: "Spirit",
    email: "rspiritg@ihg.com",
    gender: "Male",
    dob: "08/23/1994",
    address: "8448 Superior Circle",
    salary: "$81254.93",
    id: "ce5495c0-8d5e-4177-b2db-c2350c9b6af9",
  },
  {
    first_name: "Hesther",
    last_name: "Yerlett",
    email: "hyerletth@webeden.co.uk",
    gender: "Female",
    dob: "11/15/1992",
    address: "27156 Cordelia Road",
    salary: "$94045.03",
    id: "500f78ac-19c6-4030-acae-667b7099dd68",
  },
  {
    first_name: "Zackariah",
    last_name: "Tegeller",
    email: "ztegelleri@nature.com",
    gender: "Male",
    dob: "06/14/1994",
    address: "9227 Norway Maple Lane",
    salary: "$11542.03",
    id: "da33930d-3402-467d-b95e-5c00548f7073",
  },
  {
    first_name: "Belvia",
    last_name: "Hanaford",
    email: "bhanafordj@census.gov",
    gender: "Female",
    dob: "09/05/1995",
    address: "04 Spaight Junction",
    salary: "$37580.45",
    id: "d5705a60-8d64-40b9-92cc-0c5445980bfa",
  },
  {
    first_name: "Marsiella",
    last_name: "Huster",
    email: "mhusterk@w3.org",
    gender: "Female",
    dob: "11/23/1997",
    address: "1550 Artisan Plaza",
    salary: "$97415.27",
    id: "17f42b6f-5896-437d-8a8e-ba2c191736ec",
  },
  {
    first_name: "Michel",
    last_name: "Heaker",
    email: "mheakerl@go.com",
    gender: "Male",
    dob: "07/25/1998",
    address: "8117 Butterfield Plaza",
    salary: "$93125.63",
    id: "950cc5d2-7a76-4c86-a599-d1604a2f99f0",
  },
  {
    first_name: "Geoffry",
    last_name: "Giraudo",
    email: "ggiraudom@dagondesign.com",
    gender: "Male",
    dob: "01/20/1999",
    address: "0 Lighthouse Bay Plaza",
    salary: "$69709.16",
    id: "41e0c12d-ff19-4b2c-aa74-eca8e406e24f",
  },
];

describe("EmployeeTable", () => {
  const mockStore = configureStore([]);
  const initialState = {
    empDetailsReducers: {
      employees: mockData,
    },
  };
  let store: Store<unknown, AnyAction>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("renders employee table", () => {
    render(
      <Provider store={store}>
        <EmployeeTable />
      </Provider>
    );
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Date of Birth")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Salary")).toBeInTheDocument();
  });

  test("searches employees by name", () => {
    render(
      <Provider store={store}>
        <EmployeeTable />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search by first name/last name"
    );
    fireEvent.change(searchInput, { target: { value: "Sabine" } });

    expect(screen.getByText("Sabine")).toBeInTheDocument();
  });

  test("sorts employees by first name in ascending order", () => {
    render(
      <Provider store={store}>
        <EmployeeTable />
      </Provider>
    );

    const firstNameHeader = screen.getByText("First Name");
    fireEvent.click(firstNameHeader);

    const sortedEmployees = screen
      .getAllByTestId("employee-info-row")
      .map((row) => row.querySelector("td:first-child").textContent);
    const expectedOrder =  ["Ardenia", "Barrett", "Belvia", "Carce", "Doralia", "Dory", "Fraze", "Geoffry", "Hesther", "Karlis", "Marilin", "Marsiella", "Marta", "Michel", "Raimondo", "Rosemonde", "Ryan", "Sabine", "Tabby", "Terrell", "Thorsten", "Wyatan", "Zackariah"];
    expect(sortedEmployees).toEqual(expectedOrder);
  });

  test("sorts employees by last name in descending order", () => {
    render(
      <Provider store={store}>
        <EmployeeTable />
      </Provider>
    );

    const lastNameHeader = screen.getByText("Last Name");
    fireEvent.click(lastNameHeader);
    fireEvent.click(lastNameHeader);

    const sortedEmployees = screen
      .getAllByTestId("employee-info-row")
      .map((row) => row.querySelector("td:nth-child(2)").textContent);
    const expectedOrder =  ["Yerlett", "Tegeller", "Tarn", "Suermeiers", "Straun", "Spirit", "Spikings", "Sleicht", "Sebert", "Rigbye", "Nice", "Ilden", "Huster", "Hebson", "Heaker", "Harborow", "Hanaford", "Gresty", "Giraudo", "Bough", "Berntsson", "Bakhrushkin", "Atter"];
    expect(sortedEmployees).toEqual(expectedOrder);
  });

  test("filters employees by salary when a salary option is selected less than 25k", () => {
    render(
      <Provider store={store}>
        <EmployeeTable />
      </Provider>
    );

    const dropdownToggle = screen.getByText("Filter by Salary");
    fireEvent.click(dropdownToggle);

    const dropdownItem = screen.getByText("Less than $25,000");
    fireEvent.click(dropdownItem);

    const lessThan10k = screen.getAllByTestId("employee-info-row");
    expect(lessThan10k.length).toBe(5);
  });
  test("filters employees by salary when a salary option is selected  25k - 50k", () => {
    render(
      <Provider store={store}>
        <EmployeeTable />
      </Provider>
    );

    const dropdownToggle = screen.getByText("Filter by Salary");
    fireEvent.click(dropdownToggle);

    const dropdownItem = screen.getByText("$25,000 - $50,000");
    fireEvent.click(dropdownItem);

    const lessThan10k = screen.getAllByTestId("employee-info-row");
    expect(lessThan10k.length).toBe(3);
  });
  test("filters employees by salary when a salary option is selected  50k - 100k", () => {
    render(
      <Provider store={store}>
        <EmployeeTable />
      </Provider>
    );

    const dropdownToggle = screen.getByText("Filter by Salary");
    fireEvent.click(dropdownToggle);

    const dropdownItem = screen.getByText("$50,000 - $100,000");
    fireEvent.click(dropdownItem);

    const lessThan10k = screen.getAllByTestId("employee-info-row");
    expect(lessThan10k.length).toBe(15);
  });
});
