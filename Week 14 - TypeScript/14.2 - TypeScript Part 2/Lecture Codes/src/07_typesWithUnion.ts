// interface Employee {
//     name: string;
//     startDate: Date;
// }



type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee | Manager; // Union(|) of Employee and Manager

let emp: Employee = {
    name: "Bharat",
    startDate: "09-09-2022"
};

let manager: Manager = {
    name: "Raj",
    department: "IT"
};

let teamLead: TeamLead = {
    name: "Harkirat",
    startDate: "01-01-2019",
    department: "HR"
};