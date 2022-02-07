import { Negociacao } from "../models/negociacao.js";
import { DiasDaSemana } from "../enums/dia-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  private negociacoesView = new NegociacoesView("#negociacoesView", true);
  private mensagemView = new MensagemView("#mensagemView", false);

  private readonly SABADO = 6;
  private readonly DOMINGO = 0;

  constructor() {
    // Obtém os elementos da árvore DOM
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
      return;
    }

    this.negociacoesView.update(this.negociacoes);
    this.limparFormulario();
    this.negociacoes.adiciona(negociacao);
    this.mensagemView.update("Negociação adicionada com sucesso");
  }

  private ehDiaUtil(data: Date) {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < this.SABADO;
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
