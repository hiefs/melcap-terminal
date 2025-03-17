"use client";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";

interface SearchItemProps {
  name: string;
  department: string;
}

const SearchItem: React.FC<SearchItemProps> = ({ name, department }) => {
  return (
    <div className=" bg-white w-full h-24 flex flex-col justify-center border-2 p-6 text-black hover:bg-neutral-300">
      <p>Name: {name}</p>
      <p>Department: {department}</p>
    </div>
  );
};

export const SearchWindow = () => {
  const employees = useAppSelector((state) => state.app.employees);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      !employee.employed &&
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex flex-col justify-center items-center w-full p-4">
        <p>Search an employee</p>
        <input
          className="input border ml-2 mb-4 mt-4 p-1 w-1/2"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name"
        />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {filteredEmployees.map((employee, index) => (
          <div key={index} className="mb-4">
            <SearchItem name={employee.name} department={employee.specialty} />
          </div>
        ))}
      </div>
    </div>
  );
};
