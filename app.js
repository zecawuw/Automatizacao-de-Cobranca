const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const csv = require('csv');
const app = express();
let dadosLinhaGlobal;
var arraysVariavel = [];

// Configurar o multer para armazenar os arquivos na pasta 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Lidar com solicitações GET na raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Lidar com solicitações POST na rota /upload
app.post('/upload', upload.single('file'), (req, res) => {
    // O arquivo será salvo na pasta 'uploads'
    const arquivoCSV = path.join(__dirname, 'uploads', req.file.filename);

    fs.createReadStream(arquivoCSV)
    .pipe(csv.parse({ columns: false, delimiter: ',' }))
    .on('data', async (dadosLinha) => {
        dadosLinhaGlobal = dadosLinha;
        arraysVariavel.push(dadosLinhaGlobal);
    })
    .on('end', () => {
        res.send('Upload e processamento do arquivo concluídos com sucesso.');
    }); 
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});

// BOT
setTimeout(function() {  
        
    const puppeteer = require('puppeteer');

    (async ()=>{
        
        var dados = arraysVariavel;
        var phone = [];
        var nome = []
        var nf = [];
        var valor = []
        var vencimento = []
        

        for (let i = 0; i < dados.length; i++) {
            phone.push(dados[i][6]);
            nome.push(dados[i][0]);
            nf.push(dados[i][7]);
            valor.push(dados[i][3]);
            vencimento.push(dados[i][2]);
        }

        var mensagem = "Prezado Sr.(a) "+nome[0]+"                                                             Olá,  tudo bem? Aqui é a Ludmila do departamento financeiro da Doctors Vet.                                                                          Em nossos registros consta o seguinte valor em aberto: NF Nº: "+nf[0]+"   - VALOR: R$"+valor[0]+"   - VENCIMENTO: "+vencimento[0]+"	    -    0 dias em atraso.                                                                          Passando para lembrar do vencimento do boleto.                                                                           Qualquer duvida estou a disposição. Obrigada.";

        const browser = await puppeteer.launch({headless : false});
        const page = await browser.newPage();
        

        await page.goto('https://web.whatsapp.com/send?phone=+55'+phone[0]+'&text='+mensagem);
        await delay(120000);//tempo para mandar a primeira mensagem

        const searchResultSelector = "span[data-icon='send']";
        await page.click(searchResultSelector)

        await delay(5000);//tempo para entrar na outra conversa 

        for(var index = 1 ; (index < phone.length) || (index < nome.length) || (index <  valor.length) || (index < vencimento.length) || (index < nf.length); index++){
            var mensagem = "Prezado Sr.(a) "+nome[index]+"                                          Olá,  tudo bem? Aqui é a Ludmila do departamento financeiro da Doctors Vet.                                          Em nossos registros consta o seguinte valor em aberto: NF Nº: "+nf+"   - VALOR: R$"+valor[index]+"   - VENCIMENTO: "+vencimento[index]+"	    -    0 dias em atraso.                                          Passando para lembrar do vencimento do boleto.                                          Qualquer duvida estou a disposição. Obrigada.";

            await page.goto('https://web.whatsapp.com/send?phone=+55'+phone[index]+'&text='+mensagem);
            await delay(120000);

            const searchResultSelector = "span[data-icon='send']";
            await page.click(searchResultSelector)

            await delay(20000);
        }


        function delay(time){
            return new Promise(function (resolve){
                setTimeout(resolve,time);
            });
        }
    })();

}, 25000);

