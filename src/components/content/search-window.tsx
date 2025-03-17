"use client";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";

interface SearchItemProps {
  name: string;
  department: string;
}

const SearchItem: React.FC<SearchItemProps> = ({ name, department }) => {
  return (
    <div className=" bg-white w-full h-18 flex flex-col justify-center border-2 p-6 text-black">
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

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col h-full overflow-auto">
      <div className="flex flex-col justify-center items-center m-auto w-full">
        <p>Search an employee</p>
        <input
          className="input border ml-2 mb-4 mt-4 p-1 w-1/2"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name"
        />
      </div>

      {filteredEmployees.map((employee, index) => (
        <div key={index} className="mb-4">
          <SearchItem name={employee.name} department={employee.specialty} />
        </div>
      ))}
    </div>
  );
};
