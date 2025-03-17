export const Homeworlds = {
  elcor: "Dekuuna",
  human: "Earth",
  vorcha: "Heshtok",
  volus: "Irune",
  hanar: "Kahje",
  batarian: "Khar'shan",
  turian: "Palaven",
  drell: "Rakhana",
  quarian: "Rannoch",
  salarian: "Sur'Kesh",
  asari: "Thessia",
  krogan: "Tuchanka",
};

interface Careers {
  department: string;
  positions: string[];
}

export const Specialty: Careers[] = [
  {
    department: "Agriculture, Outdoor, and Construction",
    positions: [
      "Hydroponic Researcher",
      "Presidium Irrigation Technician",
      "Air Quality Control Specialist",
      "Recipe Developer",
      "Facility Maintenance Technician",
    ],
  },
  {
    department: "Art & Humanities",
    positions: [
      "Media Analyst",
      "Camera Operator",
      "Copy Editor",
      "Athletics & Aquatics Coordinator",
    ],
  },
  {
    department: "Business",
    positions: [
      "Galactic Business Reporter",
      "Auditor",
      "Supply Chain Technician",
    ],
  },
  {
    department: "Criminal justice",
    positions: ["C-Sec Junior Officer", "C-Sec Detective"],
  },
  {
    department: "Education",
    positions: ["Curriculum Developer"],
  },
  {
    department: "Engineering, Science & Mathematics",
    positions: ["Materials Scientist"],
  },
  {
    department: "Medicine & Health",
    positions: [
      "Omni-Gel Researcher",
      "Biotics, Implants, and Prosthetics Researcher",
    ],
  },
  {
    department: "Information Technologies",
    positions: [
      "Extranet and Cybersecurity Specialist",
      "Quantum Entanglement Communications Researcher",
      "Omni-Tool Developer",
    ],
  },
  {
    department: "Law & Politics",
    positions: ["Legal Assistant", "Representative Assistant"],
  },
  {
    department: "Social Sciences",
    positions: ["Crime Analyst", "Cultural Anthropologist"],
  },
  {
    department: "Other",
    positions: ["Presidium Tour Guide"],
  },
];

// https://blog.collegevine.com/list-of-college-majors/
