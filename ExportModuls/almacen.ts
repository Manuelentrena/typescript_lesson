export type Producto = {
  sku: string;
  nombre: string;
  descripcion: string;
  precio: number;
  urlFoto: string;
};

type Almancen = {
  [sku: string]: {
    stock: number;
    ultimaEntrega: Date;
  };
};

export let sumarTotal: (productos: Producto[]) => number;

sumarTotal = (productos) => {
  let precio = 0;
  for (let producto of productos) {
    precio += producto.precio;
  }
  return precio;
};
