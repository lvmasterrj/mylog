// log.js
const chalk = require('chalk');
const util = require('util');

function formata(cor, ...args){
    if(args.length == 1) { //Se veio só uma informação
        if(typeof args[0] === 'string') {// Se for string
			console.log(chalk.keyword(cor)(`\n ===== ${args[0]}`));
			//console.log(chalk`\n{${cor} ===== ${args[0]}}`) // Mensagem com chalk
        } else {
            console.log(chalk`\n{${cor} ========================================}`);
            console.log('\n' + util.inspect(args[0], false, null, false)); // Mensagem sem o chalk
            console.log(chalk`\n{${cor} ========================================}`);
        }
    } else {

		console.log(chalk.keyword(cor)(`\n==================== ${args[0]} ====================`)) //Título
        let tamanho = args[0].length + 42; // Pega o tamanho do titulo para criar o rodapé
        args.shift(); // Remove o título
        args.forEach(arg => {
            console.log('\n' + util.inspect(arg, false, null, true)) // Mensagens
		})
        console.log(chalk.keyword(cor)(`\n${'='.repeat(tamanho)}\n`)) // Rodapé
    }
}

module.exports = {
    error: (...args) => {formata('red', ...args)},
    info: (...args) => {formata('cyan', ...args)},
    warning: (...args) => {formata('yellow', ...args)},
    ok: (...args) => {formata('green', ...args)},
};