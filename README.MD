-----------Criação do Back End API em NodeJS-------------

* Iniciar projeto: yarn init -y
* Instalat Express: yarn add express
* Criar pasta "src" para armazenar códico da aplicação
* Criar arquivo server.js como arquivo iniciar do servidor
* Instalar nodemon para reinicar a cada atualização do codigo
: yarn add nodemon -D (Flag -D dependencia só em DEV)
Comando para iniciar em modo DEV

Separando Rotas
* Criar arquivo routes.js
* importar express
* importar rotas no express.js

Preparando Banco
* Instalar mongoose (ORM)
* acessar portquiz.net:27017 para saber se tem proxy

Criar controller e models 
-Model
*Importar mongoose
*Criar eschema do banco
-Controller
* Criar SessionController para trabalhar com sessão
* Importar SessionController para route.js

Criação e listagem dos Spots da aplicação
(locais onde os usuário irá trabalhar nas empresas)
atributos: imagem, empresa, tecnologia, valor diária

* Criar model Spot
*Criar SpotController
*Criar rota no routes.js e importar o controller SpotController

Obs. Utilizar Multipart Form para upload de imagen para
gravar no banco via insomnia para testeem dev
* Instalar lib para upload de imagens e arquivos multPart Form (yarn add multer)

Configurando o Multer
* Criar pasta config
* Criar arquivo upload.js
* Criar função upload
* Criar pasta uploads fora do src para armazenar as imagens
* importar o multe no route.js

Testar no Spot controller o console.log

Instalando CORS
yarn add cors
* alterando arquivo server.js - importando o cors

=====================

Hospedando no Heroku
* heroku create
https://air-cnc-api.herokuapp.com/ | https://git.heroku.com/air-cnc-api.git
