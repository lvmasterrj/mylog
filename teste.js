const log = require("./index.js");

let pessoa = {
	dadosPessoais: {
		nome: "Leonardo",
		idade: 35
	},
	endereco: {
		rua: "Rua abcd",
		bairro: "Centro"
	},
	filhos: {
		Leticia: {
			idade: 4,
			sexo: "f",
		},
		Lucas: {
			idade: 0,
			sexo: "m"
		}
	}
}
log.info("Dados da pessoa", pessoa)