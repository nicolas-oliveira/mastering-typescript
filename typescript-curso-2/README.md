# Criando meu próprio micro-framework

Nessa parte, para avançar com os conhecimentos de typescript é necessário um desafio maior. O View do projeto será responsável por resgatar os dados e renderizar em HTML dinamicamente conforme o código é necessário.

## Negociacoes e Negociacao

Uma abstração importante acontece quando diferenciamos a unidade que o usuário irá inputar e a lista que está privada no controller. Para isso funcionar corretamente deve-se privar e não permitir o usuário alterar a lista.

```ts
export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
```

O argumento `readonly` garante que não poderá acontecer alterações na lista.

## Eventlistener

Para que ocorra uma atualização constante do navegador conforme o usuário coloca seus inputs é necessário criar um `eventlistener` no qual escuta o submit do formulário e executa o método do controller.

```ts
form.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.adiciona();
});
```

## Tamplate strings

Para que a lista seja constantemente atualizada foi optado pela forma declarativa de retornar strings e logo após transformar em HTML

```ts
  template(model: Negociacoes): string {
    return `
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>DATA</th>
						<th>QUANTIDADE</th>
						<th>VALOR</th>
					</tr>
				</thead>
				<tbody>
					${model.lista().map((negociacao) => {
						return `
								<tr>
									<td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
									<td>${negociacao.quantidade}</td>
									<td>${negociacao.valor}</td>
								</tr>
							`;
					}).join('')}
				</tbody>
			</table>
		`;
  }

```

## Protected

Propriedade que garante o acesso nas classes que herdarem as propriedades, porém não garante o acesso fora do escopo das classes.

```ts
  protected element: HTMLElement;
```

## Generics

Os generics `<T>` funcionam como uma carta coringa que possibilita ao programador mudar qual tipo será definido dentro da classe pai.

```ts
export class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  template(model: T): string {
    throw Error("Class without implamentation template() method");
  }

  update(model: T): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}
```

Basta chamar na classe filha com `extends View<string>`.
