

function outrosservicos() {
    let out = window.document.getElementById("outrosservicos")
    outrosservicos.style.transform = 'translateY(5px)';
}

function move() {
    let log = window.document.getElementById("button")
    move.style.transform = 'translateY(5px)';
}

function verificar() {
    const usuarioInput = document.getElementById("txtn1").value;
    const senhaInput = document.getElementById("txtn2").value;

    const usuario = "usuario"; 
    const senha = "senha123"; 

    if (usuarioInput === usuario && senhaInput === senha) {
       window.location.href = "../html/portal.html";
    
    } else {
        Swal.fire({
            title: "ERRO!",
            text: "Usuário ou senha inválidos",
            icon: "error",
            confirmButtonColor: "#007BFF"  // Cor azul em formato hexadecimal
        });
    }
}

