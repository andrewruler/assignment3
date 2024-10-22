function heronFormula(a,b,c){
    let area = 1/4(Math.sqrt((4*a**2*b**2)-(a**2+b**2+c**2)**2));
    return area;
}

function ambiguousCase(alpha, a,b){
    let result = document.getElementById("result");
    let h = b*Math.sin(alpha);
    if(alpha<45){
        switch(alpha){
            case a<h:
                result = "no triangle"
                break;
            case a=h:
                result = "right triangle"
                break;
            case h<a && a<b:
                result = "two triangles"
                break;
        }
    } else if(alpha>45){
        switch(alpha){
            case a<b || a==h:
                result = "no triangle"
                break;
            case a>b:
                result = "one triangle"
                break;
        }
    }
    return result;
}
function newtonsMethod(g){
    x0=g;
    let iterations = 0;
    while(iterations<10){
        fx = 6*x0**4-13*x0**3-18*x0**2+7*x0+6;
        fx_derivative = 24*x0**3-39*x0**2-36*x0+7;
        x0 = x0-fx/fx_derivative;
        iterations++;
        console.log(x0);
    }  
    return x0;
}
newtonsMethod(1);