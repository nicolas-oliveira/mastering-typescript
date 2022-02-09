# Typescript avançado com novas funcionalidades

## Decorators

São funções que podem ser chamadas dentro de métodos e podem estar independente de arquitetura.

É necessário ativar no `tsconfig.json`:

```json
"experimentalDecorators": true
```

O esqueleto de um decorator deve ter esse formato:

```ts
export function logarTempoDeExecucao() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    return descriptor;
  };
}
```

É implementado dessa forma sendo chamado antes de um método:

```ts
@logarTempoDeExecucao()
```
