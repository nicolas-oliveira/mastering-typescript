export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public static criaDe(
    data: string,
    _quantidade: string,
    _valor: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(data.replace(exp, ","));
    const quantidade = parseInt(_quantidade);
    const valor = parseFloat(_valor);

    return new Negociacao(date, quantidade, valor);
  }
}
