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
  unemployed: boolean;
}

// Inbox Interfaces
export interface Mail {
  id?: string;
  created_at?: string;
  date: Date;
  sender: string;
  subject: string;
  message: string;
}

// Files Interfaces
export interface File {
  id?: string;
  created_at?: string;
  title: string;
  img: string;
}

// News Interfaces
export interface News {
  id?: string;
  created_at?: string;
  date_posted: Date;
  network: string;
  title: string;
  author: string;
  article: string;
  img?: string;
}

export interface Stats {
  cooperation: boolean;
  whimsy: boolean;
  failure: boolean;
}
