### api-learning

# O que é API ? 🌐
    - Uma interface de comunicação entre sistemas
    - Serve para comunicar softwares
    
# Tipos de APIs: 🌐

## Rest: 
    - Mais usada aualmente
    - baseada em HTTP
    - usa métodos como: 'GET, POST, PUT, DELETE' 

## WebSocket: 
    - Conexão bidirecional em tempo real entre cliente e servidor
    - Mantém a conexão aberta para troca rápida de dados
    - Por conta da sua baixa latêcia é ideal para apps que precisam de atualização instantânea


# Conceitos de Comunicação ? 👨‍💻
    - Requisição e resposta (Request e Response)
    - Métodos HTTP:
        GET: Pegar dados.
        POST: Enviar/criar dados.
        PUT: Atualizar dados.
        DELETE: Apagar dados.
        PATCH: Atualizar parcialmente

# Formato de dados: 🎲
    - Json (Estruturado em chaves e valores.)
    - XML (Formato mais antigo, estrtuturado em Tags)
    - CSV (Dados separados por vírgulas ou ponto-e-vírgula.)

# Código de status HTTP: ‼️
    - Informam por meio de códigos numéricos, se a requisição feita a uma api ou página web foi bem sucedida
    - Exemplos comuns:
        200 → Sucesso
        404 → Recurso não encontrado
        500 → Erro no servidor

# Bibliotecas para consumo de API: 📚
    - Fetch e Axios, XMLHttpRequest, Request

## 🔹Exemplo usando Feth
```javascript
fetch("URL_DA_API")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## 🔹Exemplo usando Axios
```javascript
axios.get("URL_DA_API")
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```









