// Funciones para realizar las operaciones matemáticas
function sumar(a: number, b: number): number {
    return a + b;
}

function restar(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}

// Conexión con el DOM (interacción con la interfaz HTML)
const valor1 = document.getElementById("valor1") as HTMLInputElement;
const valor2 = document.getElementById("valor2") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLElement;

document.getElementById("sumar")?.addEventListener("click", () => {
    resultado.textContent = `Resultado: ${sumar(Number(valor1.value), Number(valor2.value))}`;
});

document.getElementById("restar")?.addEventListener("click", () => {
    resultado.textContent = `Resultado: ${restar(Number(valor1.value), Number(valor2.value))}`;
});

document.getElementById("multiplicar")?.addEventListener("click", () => {
    resultado.textContent = `Resultado: ${multiplicar(Number(valor1.value), Number(valor2.value))}`;
});

document.getElementById("dividir")?.addEventListener("click", () => {
    try {
        resultado.textContent = `Resultado: ${dividir(Number(valor1.value), Number(valor2.value))}`;
    } catch (error) {
        resultado.textContent = `Error: ${(error as Error).message}`;
    }
});
