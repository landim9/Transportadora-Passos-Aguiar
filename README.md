# Tranportadora Passos Aguiar
## Projeto FUll Stack, Exemplo de conceitos como:

- MVC (Model View Controller)
- CRUD ( Create Read Update Delete)
- API (Application Programming Interface)
- Testes unítarios 

## Tecnologías 

- [XAMPP](https://www.apachefriends.org/pt_br/index.html), MYSQL, MariaDB - Banco de dados Relacional
- [NodeJS](https://nodejs.org/en), Framework para desenvolvimento back-end
- [Visual Studio Code](https://code.visualstudio.com/), IDE (Ambiente de desenvolvimento integrado)
- [Insomnia](https://insomnia.rest/download), 


## Dependências 
- MYSQL
- EXPRESS
- CORS

## Para Testar 

- 1 Faça Download deste repositório
- 2 Abra com VSCode
- 3 Abra um terminal **cmd** ou **bash**
- 4 Navegue até a pasta **/api** e instale as dependências usando **npm**

```
cd api
npm i
```

- 5 Abra o XAMPP e clique em **Start** nos serviços Apache e MySQL, Depois abra o **Shell** e acesse o MariaDB

```
mysql -u root
```

- 6 Copie o script de criação do banco de dados e cole no shell do MariaDB (./bd/script.sql), copie também os dados de teste que estão na pasta (./testes/populacaobd.sql)
- 7 Abra o insomnia e importe o arquivo de teste (./teste/insomnia.json)