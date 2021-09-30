interface IGeometrica {
  lados: number;
  pintar(): void;
}

interface ITriangulo extends IGeometrica {
  base: number;
  altura: number;
}

interface ICuadrado extends IGeometrica {
  base: number;
}

function esGeometrica(x: any): x is IGeometrica {
  return x.lados && x.pintar;
}

function esCuadrado(x: any): x is ICuadrado {
  return esGeometrica(x) && (x as any).lados == 4 && (x as any).base;
}

function esTrinangulo(x: any): x is ITriangulo {
  return (
    esGeometrica(x) &&
    (x as any).lados == 3 &&
    (x as any).base &&
    (x as any).altura
  );
}

function procesar(g: IGeometrica) {
  //Castear sin guardas
  /* if (g.lados == 4) {
    let cuadrado = g as ICuadrado;
    cuadrado.base;
  } else if (g.lados == 3) {
    let triangulo = g as ITriangulo;
    triangulo.altura;
  } */
  //Como castear con guardas
  if (esCuadrado(g)) {
    g.base;
  } else if (esTrinangulo(g)) {
    g.altura;
  }
}
