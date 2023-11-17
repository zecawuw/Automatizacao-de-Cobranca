# Projeto de Envio de Arquivos e Notificação via WhatsApp

Este projeto consiste em um formulário web simples para o envio de arquivos CSV. O backend, construído com Node.js e Express, processa o arquivo CSV enviado, extrai informações relevantes e utiliza a biblioteca Puppeteer para enviar notificações via WhatsApp para os destinatários correspondentes.

## Como Baixar Dependências

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu ambiente. Em seguida, siga os passos abaixo:

1. Clone o repositório para sua máquina local:

   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/zecawuw/Automatizacao-de-Cobranca.git)
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências do Node.js:

   ```bash
   npm install
   ```

## Como Executar o Projeto

1. Execute o servidor Node.js:

   ```bash
   node nome-do-arquivo-node.js
   ```

   Certifique-se de substituir `nome-do-arquivo-node.js` pelo nome do seu arquivo Node.js, se necessário.

2. Abra um navegador e acesse `http://localhost:8080` para acessar o formulário de envio de arquivos.

3. Selecione um arquivo CSV e envie-o. O backend processará o arquivo e enviará notificações via WhatsApp para os destinatários listados no arquivo.

## Estrutura do Projeto

- **HTML (index.html):** Contém o formulário web básico para upload de arquivos.
  
- **Node.js (nome-do-arquivo-node.js):** Backend construído com Node.js e Express. Utiliza a biblioteca Multer para lidar com o upload de arquivos e a biblioteca CSV para analisar o conteúdo do arquivo CSV.

- **Puppeteer (bot-whatsapp.js):** Utiliza o Puppeteer para automatizar a interação com o WhatsApp Web. Extrai informações do arquivo CSV processado e envia notificações personalizadas para os destinatários via WhatsApp.

## Observações

- Certifique-se de ter as permissões necessárias para acessar o WhatsApp Web e enviar mensagens automáticas.

- O tempo de espera entre mensagens e o tempo para enviar a primeira mensagem podem ser ajustados conforme necessário.

- Este projeto é uma aplicação de exemplo e pode exigir ajustes adicionais para atender às necessidades específicas do ambiente de produção.

- Lembre-se de substituir as credenciais e informações sensíveis antes de implantar em um ambiente de produção.
