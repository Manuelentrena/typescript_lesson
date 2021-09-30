interface Post {
  id: number;
}

interface Nota extends Post {
  mensaje: string;
}

interface NotaColorida extends Nota {
  color: string;
}

interface Foto extends Post {
  url: string;
}

interface Video extends Foto {
  duracion: number;
}

/* type Nota = { mensaje: string };
type NotaColorida = Nota & { type: "color"; color: string };
type Foto = { type: "photo"; url: string };
type Video = Foto & { duracion: number }; */

//HTTP POST /upload

function upload<Publicacion extends Post, Extra>(
  p: Publicacion,
  e?: Extra
): Publicacion {
  return p;
}

/* let x = upload<Nota>({ mensaje: "hola mundo" }); */
let post: NotaColorida = { id: 0, mensaje: "Hola Mundo", color: "red" };
let y = upload(post, "hola");
/* let y = upload(5); */
