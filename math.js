function heronFormula(a,b,c){
    let area = (1/4)*(Math.sqrt((4*a**2*b**2)-(a**2+b**2+c**2)**2));
    return area;
}

function ambiguousCase(alpha, a,b){
    let result = document.getElementById("result");
    let h = b*Math.sin(alpha);
    if(alpha<45){
        if (a<h){
            result.innerHTML = "no triangle"
        }
        else if (a==h){
            result.innerHTML = "right triangle"
        }   
        else if (h<a && a<b){
            result.innerHTML = "two triangles"
        }
    } else if(alpha>45){
        if(a<b || a==h) {
            result.innerHTML = "no triangle"
        }
        else if(a>b){ 
            result.innerHTML = "one triangle"
        }
    }
    return result.innerHTML;
}
function newtonsMethod(g){
    x0=g;
    let iterations = 0;
    while(iterations<10){
        let fx = 6*x0**4-13*x0**3-18*x0**2+7*x0+6;
        let fx_derivative = 24*x0**3-39*x0**2-36*x0+7;
        x0 = x0-fx/fx_derivative;
        iterations++;
        console.log(x0);
    }  
    return x0;
}
function polynomialEquation(Coefficients,Exponents,xValue){
    let equation = "";
    for(let i = 0; i < Coefficients.length; i++){
        equation+=coefficients[i];
        equation+=Exponents[i];
    }
    return equation;
}
function polynomialEvaluation(Coefficients,Exponents,xValue){
    let result = 0;
    for(let i = 0; i < Coefficients.length; i++){
        result+=Coefficients[i]*Math.pow(xValue,Exponents[i]);
    }
    return result;
}
newtonsMethod(142420);