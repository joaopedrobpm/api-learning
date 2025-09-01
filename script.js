function buscarcep(){

    let meucep = document.querySelector('#meucep').value.trim();

    if (meucep.length !== 8){
        alert('INSIRA UM CEP VÁLIDO')
        return;
    };

    let cep = document.querySelector('#cep');
    let localidade = document.querySelector('#localidade');
    let logradouro = document.querySelector('#logradouro');
    let estado = document.querySelector('#estado');

    cep.textContent = "CEP: ";
    localidade.textContent = "CIDADE: ";
    logradouro.textContent = "BAIRRO: ";
    estado.textContent = "ESTADO: ";

    fetch(`https://viacep.com.br/ws/${meucep}/json/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        cep.textContent += data.cep
        localidade.textContent += data.localidade
        logradouro.textContent += data.logradouro
        estado.textContent += data.estado
    })

    .catch(error => console.error('ERRO:', error));

}