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
