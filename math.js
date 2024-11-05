function heronFormula() {
    let a = parseFloat(document.getElementById("heronA").value);
    let b = parseFloat(document.getElementById("heronB").value);
    let c = parseFloat(document.getElementById("heronC").value);

    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    document.getElementById("heronResult").value = area;
}

function ambiguousCase() {
    let alpha = parseFloat(document.getElementById("ambiguousAlpha").value) * (Math.PI / 180); // Convert to radians
    let a = parseFloat(document.getElementById("ambiguousA").value);
    let b = parseFloat(document.getElementById("ambiguousB").value);
    let h = b * Math.sin(alpha);

    let result = "";
    if (alpha < Math.PI / 4) { // equivalent to 45 degrees
        if (a < h) {
            result = "no triangle";
        } else if (a === h) {
            result = "right triangle";
        } else if (h < a && a < b) {
            result = "two triangles";
        }
    } else if (alpha > Math.PI / 4) {
        if (a < b || a === h) {
            result = "no triangle";
        } else if (a > b) {
            result = "one triangle";
        }
    }

    document.getElementById("ambiguousResult").value = result;
    return result;
}

function newtonsMethod() {
    let x0 = parseFloat(document.getElementById("newtonGuess").value);
    let iterations = 0;

    while (iterations < 10) {
        let fx = 6 * x0 ** 4 - 13 * x0 ** 3 - 18 * x0 ** 2 + 7 * x0 + 6;
        let fx_derivative = 24 * x0 ** 3 - 39 * x0 ** 2 - 36 * x0 + 7;

        x0 = x0 - fx / fx_derivative;
        iterations++;
    }
    document.getElementById("newtonResult").value = x0;
    return x0;
}

function polynomialEquation() {
    let equation = "";
    let coefficients = document.getElementById("polyCoefficients").value.trim().split(' ');
    let exponents = document.getElementById("polyExponents").value.trim().split(' ');

    for (let i = 0; i < coefficients.length; i++) {
        equation += coefficients[i];
        if (i != coefficients.length - 1) {
            equation += "x^";
        }
        equation += exponents[i];
        if (i < coefficients.length - 1) {
            if (coefficients[i + 1] < 0) {
                equation += " ";
            } else {
                equation += " + ";
            }
            equation += "";
        }
    }
    document.getElementById("polyFunction").value = equation;
    return equation;
}

function polynomialEvaluation(Coefficients, Exponents, xValue) {
    let result = 0;
    let coefficients = document.getElementById("polyCoefficients").value.trim().split(' ');
    let exponents = document.getElementById("polyExponents").value.trim().split(' ');
    let x = parseFloat(document.getElementById("polyXValue").value);

    for (let i = 0; i < coefficients.length; i++) {
        result += coefficients[i] * x ** exponents[i];
    }
    document.getElementById("polyEvaluation").value = result;
    return equation;
}

function calculatePolynomial() {
    let coefficients = document.getElementById("polyCoefficients").value.split(',').map(Number);
    let exponents = document.getElementById("polyExponents").value.split(',').map(Number);
    let xValue = parseFloat(document.getElementById("polyXValue").value);
    let equation = polynomialEquation(coefficients, exponents);
    let evaluation = polynomialEvaluation(coefficients, exponents, xValue);

    document.getElementById("polyFunction").value = equation;
    document.getElementById("polyEvaluation").value = evaluation;
}
