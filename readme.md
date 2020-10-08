# My Log
Um módulo pra facilitar e melhorar os logs do console

O My Log foi criado para facilitar a leitura dos logs no terminal, com algumas opções interessantes como cores, título e a exibição de forma completa de Objetos.

## Instalação
```
npm i git+https://github.com/lvmasterrj/mylog/#master
```

## Utilização
Funcionamento básico:
```javascript
const log = require("mylog")

log.ok("Tudo certo!")
```

Adicionando cores
```javascript
log.error("Deu erro aqui!")
log.info("Veja isso!")
log.warning("Atenção!")
log.ok("Tudo certo!")
```
![](./imgs/cores.PNG)
