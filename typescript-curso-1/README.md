## 1 - Typescript e compilador

Este repositório tem códigos relacionados a um front-end com regras de negócios específicos.

Execute o projeto com:

```
yarn install && yarn start
```

E ele abrirá um front-end de formulário simples usando o brosersync. Porém, não se trata deste front-end e sim sobre o ambiente Typescript que está incluso no projeto.

O Typescript é um super-set da linguagem Javascript e tem como objetivo impedir que erros comuns aconteçam em produção, mesmo que tais bugs sejam criados em desenvolvimento e a linguagem Javascript não identifique. A linguagem vai além de apenas `tipar o javascript`. Queremos que o código falhe, falhe rápido e se puder ainda em desenvolvimento.

Por outro lado o Typescript não é um linguagem que o navegador entende. Necessitando de um tradutor para a linguagem Javascript. O compilador chama `tsc` e a documentação pode ser [encontrada aqui](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

Um arquivo importante do projeto é o `tsconfig.json` ele define basicamente o diretório que será desenvolvido o código Typescript e a saída do compilador em Javascript.

Estes parâmetros se referem que ao compilar, o `tsc` não permita que o código seja compilado.

```
    "noEmitOnError": true
```

E quais são esses erros?

Vamos supor o código feito aqui no repositório.

Você definiu uma classe com esses parâmetros:

```ts
export class Negociacao {
    constructor(data, quantidade, valor) {
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;
	}

...
```

E você chamou logo após dessa forma:

```js
const negociacao = New Negociacao(new Date.now());
```

Será que consegue ver o erro?

Em qual linguagem será mais fácil observar tal erro?

Obviamente está faltando dois parâmetros no objeto que está sendo criado e tal falha só aconteceria em produção com o Javascript. O Typescript por outro lado iria instruir que está errado e mesmo que você ignorasse isso, seu compilador não iria continuar até que se resolvesse o erro.
