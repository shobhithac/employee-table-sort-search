import axios from "axios";
import { getEmployees } from "./getEmployees";

jest.mock("axios");

describe("getEmployees", () => {
  test("fetches employees successfully", async () => {
    const mockResponse = {
      data: [
        {
          address: "46965 Thackeray Way",
          dob: "07/12/1992",
          email: "aatter0@ustream.tv",
          first_name: "Ardenia",
          gender: "Female",
          id: "96f6a051-329c-465e-b5ff-ffd7d495ac50",
          last_name: "Atter",
          salary: "$3092.98",
        },
      ],
    };

    axios.get.mockResolvedValue(mockResponse);

    const response = await getEmployees();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://mocki.io/v1/4b8fe8d1-24d0-49f4-8214-66ea2fd3e5ea"
    );
    expect(response).toEqual(mockResponse);
  });

  test("handles error when fetching employees", async () => {
    const mockError = new Error("Network Error");

    axios.get.mockRejectedValue(mockError);

    await expect(getEmployees()).rejects.toThrow(mockError);
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(
      "https://mocki.io/v1/4b8fe8d1-24d0-49f4-8214-66ea2fd3e5ea"
    );
  });
});
