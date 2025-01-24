"use strict";
var _a, _b, _c, _d;
// Funciones para realizar las operaciones matemáticas
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}
// Conexión con el DOM (interacción con la interfaz HTML)
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const resultado = document.getElementById("resultado");
(_a = document.getElementById("sumar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    resultado.textContent = `Resultado: ${sumar(Number(valor1.value), Number(valor2.value))}`;
});
(_b = document.getElementById("restar")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    resultado.textContent = `Resultado: ${restar(Number(valor1.value), Number(valor2.value))}`;
});
(_c = document.getElementById("multiplicar")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    resultado.textContent = `Resultado: ${multiplicar(Number(valor1.value), Number(valor2.value))}`;
});
(_d = document.getElementById("dividir")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    try {
        resultado.textContent = `Resultado: ${dividir(Number(valor1.value), Number(valor2.value))}`;
    }
    catch (error) {
        resultado.textContent = `Error: ${error.message}`;
    }
});
