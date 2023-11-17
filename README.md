# Projeto de Envio de Arquivos e Notificação via WhatsApp

Este projeto consiste em um formulário web simples para o envio de arquivos CSV. O backend, construído com Node.js e Express, processa o arquivo CSV enviado, extrai informações relevantes e utiliza a biblioteca Puppeteer para enviar notificações via WhatsApp para os destinatários correspondentes.

## Como Baixar Dependências

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu ambiente. Em seguida, siga os passos abaixo:

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/zecawuw/Automatizacao-de-Cobranca.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Automatizacao-de-Cobranca
   ```

3. Instale as dependências do Node.js:

   ```bash
   npm install
   ```
4. Gerencia as requisições, rotas e URLs, entre outra funcionalidades
   ```bash
   npm install --save express
   ```

5. Instale as dependências do Puppeteer

   ```bash
   npm install puppeteer
   ```

## Como Executar o Projeto

1. Execute o servidor Node.js:

   ```bash
   node app.js
   ```

2. Abra um navegador e acesse `http://localhost:8080` para acessar o formulário de envio de arquivos.

3. Selecione um arquivo CSV e envie-o. O backend processará o arquivo e enviará notificações via WhatsApp para os destinatários listados no arquivo.

## Estrutura do Projeto

- **HTML (index.html):** Contém o formulário web básico para upload de arquivos.
  
- **Node.js (app.js):** Backend construído com Node.js e Express. Utiliza a biblioteca Multer para lidar com o upload de arquivos e a biblioteca CSV para analisar o conteúdo do arquivo CSV.

- **Puppeteer (bot-whatsapp.js):** Utiliza o Puppeteer para automatizar a interação com o WhatsApp Web. Extrai informações do arquivo CSV processado e envia notificações personalizadas para os destinatários via WhatsApp.

# Instruções para Envio de Arquivo

Este documento descreve as regras a serem seguidas ao enviar arquivos para processamento. Certifique-se de seguir as diretrizes abaixo para garantir uma integração suave e precisa dos dados.

## Formato do Arquivo

O arquivo a ser enviado deve ser no formato CSV (Comma-Separated Values). Certifique-se de que o arquivo esteja corretamente formatado antes do envio.

## Conversão de Excel para CSV

Caso você esteja utilizando o Microsoft Excel ou outro software de planilha, certifique-se de converter o arquivo para o formato CSV antes do envio. Isso pode ser feito facilmente no Excel através da opção "Salvar Como" e escolhendo o formato CSV.

## Sequência de Colunas

O arquivo CSV enviado deve seguir a seguinte sequência de colunas:

1. **Nome**: Nome do cliente ou destinatário.
2. **Emissão**: Data de emissão do documento.
3. **Vencimento**: Data de vencimento do documento.
4. **Valor**: Valor associado ao documento.
5. **Forma de Pagamento**: Método de pagamento utilizado.
6. **Número do Pedido**: Número associado ao pedido, se aplicável.
7. **Telefone**: Número de telefone do cliente ou destinatário.
8. **Número da NF (Nota Fiscal)**: Número da Nota Fiscal associado ao documento.

Certifique-se de que as colunas estão dispostas exatamente nesta ordem para evitar problemas durante o processamento.

## Exemplo de Cabeçalho do Arquivo CSV

Um exemplo de cabeçalho correto para o arquivo CSV seria:

```csv
Nome,Emissão,Vencimento,Valor,Forma de Pagamento,Número do Pedido,Telefone,Número da NF
```

## Exemplo de Linha de Dados

Um exemplo de linha de dados no arquivo CSV seria:

```csv
João Silva,01/01/2023,02/05/2023,150.00,Cartão de Crédito,123456,5511923456789,78901234
```

Certifique-se de seguir essas instruções rigorosamente para garantir uma integração eficiente e sem erros dos dados. Se houver dúvidas ou problemas, entre em contato com a equipe responsável pelo processamento dos arquivos.

## Observações

- Certifique-se de ter as permissões necessárias para acessar o WhatsApp Web e enviar mensagens automáticas.

- O tempo de espera entre mensagens e o tempo para enviar a primeira mensagem podem ser ajustados conforme necessário.

- Este projeto é uma aplicação de exemplo e pode exigir ajustes adicionais para atender às necessidades específicas do ambiente de produção.

- Lembre-se de substituir as credenciais e informações sensíveis antes de implantar em um ambiente de produção.

O Puppeteer é uma biblioteca Node.js que fornece uma API de alto nível para controlar e interagir com navegadores Chromium ou Chrome através do protocolo DevTools. Ele é frequentemente usado para automação de testes, scraping de dados da web e automação de tarefas relacionadas ao navegador.
