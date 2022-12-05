const campos = document.querySelectorAll("[required]")

function customValidation(event) {
    const campo = event.target
    
    function verifyErrors(){
        let acharErro = false
        for(let erro in campo.validity){
            if(erro != "customError" && campo.validity[erro]){
                acharErro = erro
            }
        }
        return acharErro
    }
    const erro = verifyErrors()
    console.log("Error Exists: ", erro)
    if(erro){
        campo.setCustomValidity("Esse campo é obrigatorio!")
    } else {
        campo.setCustomValidity("")
    }
    
}

for (let campo of campos){campo.addEventListener("invalid", customValidation)}

document.querySelector("form").addEventListener("submit", event => {
    alert("Formulário Enviando")
    event.preventDefault()
} ) 