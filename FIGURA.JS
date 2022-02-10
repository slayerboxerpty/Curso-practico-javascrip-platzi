// cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden :" + ladoCuadrado );

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es :" + perimetroCuadrado );

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es :" + areaCuadrado );
console.groupEnd();

// triangulo

console.group("triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden:" 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm,"
    + baseTriangulo
    + "cm"
console.group();
);