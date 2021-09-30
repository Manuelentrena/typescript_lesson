enum DiasSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo,
}
interface CitaMedica {
  dia: DiasSemana;
}

let c: CitaMedica = {
  dia: DiasSemana.Lunes,
};
