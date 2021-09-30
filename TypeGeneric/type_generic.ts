interface Respuesta<Mensaje, Extra> {
  type: string;
  success: boolean;
  msg: Mensaje;
  whatever: Extra;
}

let payload: Respuesta<string, number> = {
  type: "post",
  success: true,
  msg: "mensage de exito",
  whatever: 6,
};

let payload2: Respuesta<boolean, object> = {
  type: "error",
  success: true,
  msg: false,
  whatever: {},
};
