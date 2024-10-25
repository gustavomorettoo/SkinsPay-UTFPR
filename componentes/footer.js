export const componenteFooter = function () {
    return `
    <footer class="footer bg-light">
    <div class="container">
        <div class="row d-flex justify-content-between">
            <div class="col-md-3 text-center">
                <p>&copy; 2023 - SkinsPay Ltda ME</p>
                <p>Rua Tapajós, 123, Pato Branco/PR</p>
                <p>CNPJ 66.666.666/0001-66</p>
            </div>
            <div class="col-md-3 text-center">
                <ul class="list-unstyled">
                    <li>
                        <a href="#institucional">Institucional</a>
                    </li>
                    <li>
                        <a href="#duvidas">Dúvidas</a>
                    </li>
                    <li>
                        <a href="#cartao">Cartão</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-3 text-center">
                <p>Contatos:</p>
                <p>E-mail: atendimento@skinspay.com.br</p>
                <p>Telefone: (46) 4002-8922</p>
            </div>
            <div class="col-md-3 text-center">
                <img src="img/pagamento/pagamentos.png" alt="Formas de pagamento" class="img-fluid">
            </div>
        </div>
    </div>
</footer>
    `;
};