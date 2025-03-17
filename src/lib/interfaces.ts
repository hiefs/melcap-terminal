// Employee Interfaces
export interface Employee {
  id?: string;
  created_at?: string;
  employee_id: string;
  name: string;
  race: string;
  age: number;
  specialty: string;
  position: string;
  pin: string;
  banned: boolean;
}

export interface EmployeeLogin {
  employee_id: string;
  pin: string;
}

export interface EmployeeRegister {
  name: string;
  specialty: string;
  position: string;
  employed: boolean;
}
