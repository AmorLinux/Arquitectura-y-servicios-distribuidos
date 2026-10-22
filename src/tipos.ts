// tipos de datos

const negocio: string = "Repuestos Moreira";
const iva: number = 0.15;

const validacion: Boolean = true;

// interfaces
interface Producto{
    sku: string;
    nombre: string;
    precio: number;
    stock: number;
    categoria?: string;
}

// arreglo

const catalogo: Producto[] = [
    {sku: "123", nombre: "monitores", precio: 150, stock: 10},
    {sku: "502", nombre: "mouse", precio: 40, stock: 15},
    {sku: "120", nombre: "parlantes", precio: 250, stock: 8, categoria: "musica"},

];

function buscar (sku:String): Producto | undefined{
    return catalogo.find((producto)=> producto.sku===sku);

    
};
// una funcion del valor con iva
function valorConIva(producto: Producto): number {
  return producto.precio * (1 + iva);
}

// 


//
const disponible = catalogo.filter((p)=>p.stock > 0);


const nombres = disponible.map((p)=>p.nombre);

const monitor = buscar("123");

if (monitor) {
  console.log("Precio del producto con IVA:", monitor.nombre, valorConIva(monitor));
}

console.log("negocio",negocio);
console.log("disponible", disponible);
console.log("nombres", nombres);





// ejercicio o consulta de la funcion valorconiva y de buscar
// compilen suban el compilado a la plataforma


