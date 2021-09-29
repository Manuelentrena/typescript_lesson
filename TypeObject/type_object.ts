// arrays
let dias: string[];
dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
// tuples
let db: [nombre: string, edad: number, pais: string, premiun: boolean];
db = ["Manuel", 33, "España", true];
// objects
type laboral = { empresa: string; sector: string };
let persona: {
  nombre: string;
  edad: number;
  pais: string;
  fecha_nac: Date;
  laboral: laboral;
};
persona = {
  nombre: "Manuel Entrena",
  edad: 30,
  pais: "España",
  fecha_nac: new Date(1990, 5, 14),
  laboral: {
    empresa: "Empresita",
    sector: "IT",
  },
};
