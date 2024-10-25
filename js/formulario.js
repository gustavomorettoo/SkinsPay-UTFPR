const form = document.querySelector('#my-form');

const inputs = document.querySelectorAll('.required');

const spanError = document.querySelectorAll('.error-message');

const messages = {
    emptyfield: "Preencha o campo {field}",
    shortName: "O campo nome deve ter no mínimo 2 caracteres",
    invalidEmail: "Informe um endereço de email válido. "
}

function validateInput(input, spanError) {
    let error = false;
    let message;
    if (input.value.trim() === '') {
        error = true;
        message = messages.emptyfield.replace('{field}', input.name);
    } else if (input.name === 'nome' && input.value.length < 2) {
        error = true;
        message = messages.shortName;
    } else if (input.name === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
        error = true;
        message = messages.invalidEmail;
    }

    if (error) {
        spanError.textContent = message;
        spanError.style.display = 'block';
        spanError.classList.add('errofont');
        input.classList.add('erroinput');
    } else {
        spanError.textContent = '';
        spanError.style.display = 'none';
        input.classList.remove('erroinput');
    }
    return error;

}

function cadastrar() {
    // Realizar a validação dos campos
    let isValid = true;
    inputs.forEach(function (input, index) {
        const errorMessage = spanError[index];
        validateInput(input, errorMessage);
        if (errorMessage.textContent !== '') {
            isValid = false;
        }
    });

    if (isValid) {


            var apelido = document.getElementById("apelido").value;
            var nome = document.getElementById("nome").value;
            var cpf = document.getElementById("cpf").value;
            var dataNascimento = document.getElementById("data-nascimento").value;
            var genero = document.getElementById("genero").value;
            var telefones = document.getElementById("telefones").value;
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;
            var confirmarSenha = document.getElementById("confirmar-senha").value;
            var rua = document.getElementById("rua").value;
            var numero = document.getElementById("numero").value;
            var bairro = document.getElementById("bairro").value;
            var cidade = document.getElementById("cidade").value;
            var estado = document.getElementById("estado").value;
            var cep = document.getElementById("cep").value;

            // Crie um objeto com os dados do formulário
            var formData = {
                apelido: apelido,
                nome: nome,
                cpf: cpf,
                dataNascimento: dataNascimento,
                genero: genero,
                telefones: telefones,
                email: email,
                senha: senha,
                confirmarSenha: confirmarSenha,
                rua: rua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                cep: cep
            };

            localStorage.setItem("cadastroData", JSON.stringify(formData));

        // Exibir mensagem de sucesso
        Swal.fire({
            title: "Cadastro realizado!",
            text: "O cadastro foi realizado com sucesso.",
            icon: "success"
        }).then(function() {
            // Redirecionar para a página inicial
            window.location.href = "index.html";
        });
    }
}

function cancelarCadastro() {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Não!'

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cancelado!',
          'Seu cadastro foi cancelado.',
          'success'
        ).then(() => {
          // Redirecionar para a página inicial após o cancelamento
          window.location.href = "index.html";
        });
      }
    });
  }

form.addEventListener('submit', function (e) {
    e.preventDefault();

    inputs.forEach(function (input, index) {
        const errorMessage = spanError[index];
        validateInput(input, errorMessage);
    })
})

inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
        const errorMessage = input.nextElementSibling;
        validateInput(input, errorMessage);
    });
});

function carregarDadosSalvos() {
    var cadastroData = localStorage.getItem("cadastroData");
    if (cadastroData) {
        var formData = JSON.parse(cadastroData);

        document.getElementById("apelido").value = formData.apelido;
        document.getElementById("nome").value = formData.nome;
        document.getElementById("cpf").value = formData.cpf;
        document.getElementById("data-nascimento").value = formData.dataNascimento;
        document.getElementById("genero").value = formData.genero;
        document.getElementById("telefones").value = formData.telefones;
        document.getElementById("email").value = formData.email;
        document.getElementById("senha").value = formData.senha;
        document.getElementById("confirmar-senha").value = formData.confirmarSenha;
        document.getElementById("rua").value = formData.rua;
        document.getElementById("numero").value = formData.numero;
        document.getElementById("bairro").value = formData.bairro;
        document.getElementById("cidade").value = formData.cidade;
        document.getElementById("estado").value = formData.estado;
        document.getElementById("cep").value = formData.cep;
    }
}

// Chame a função para carregar os dados salvos quando a página carregar

