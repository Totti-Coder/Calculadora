const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

function esExpresionValida(expr) {

    if (!/^[\d+\-*/.]+$/.test(expr)){
        return false;
    }

    if (/[\+\-\*\/]{2,}/.test(expr)){
        return false;
    }

    if (/^[*/+.]|[*/+.-]$/.test(expr)){
        return false;
    }
    return true;
}

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if(boton.id === "AC"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1  || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
            pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return;
        }

        if(boton.id === "igual"){
            const expr = pantalla.textContent;

            if (!esExpresionValida(expr)) {
                pantalla.textContent = "Error!";
                return;
            }

            try {
                const resultado = eval(expr);
                if (isNaN(resultado) || !isFinite(resultado)) {
                    pantalla.textContent = "Error!";
                } else {
                    pantalla.textContent = resultado;
                }
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;

        } else {
                pantalla.textContent += botonApretado;
        }
        })
    })

        
    
        