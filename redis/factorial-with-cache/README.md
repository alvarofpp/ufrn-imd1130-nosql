# Factorial with cache
Executa o cálculo de fatorial usando o Redis como memória cache para salvar os dados já processados.

## Rotas
| Rota | Método | Descrição |
| ---- | ------ | --------- |
| `/` | `GET` | Home. |
| `/factorial` | `GET` | Lista todos os dados salvos em memória. |
| `/factorial/{keyNymber}` | `GET` | Retorna o resultado da fatorial, calcula caso seja necessário. |
