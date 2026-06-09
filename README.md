# Desafio Aula 09 - PGATS

Este projeto é um desafio proposto na Aula 09 da disciplina PGATS. O objetivo é criar uma classe em JavaScript que utiliza objetos e listas, além de implementar testes para essa classe.

## Estrutura do Projeto

- `src/servicoDePagamentoDeEmpresas.js`: Implementação da classe principal.
- `test/servicoDePagamentoDeEmpresas.test.js`: Arquivo de testes.

## Como executar os testes

Certifique-se de ter o Node.js instalado. Execute `npm test` para rodar os testes.

----------------------------------------------------------------------------

## Integração Contínua com GitHub Actions

Este repositório utiliza um workflow de integração contínua configurado em `.github/workflows/ci.yaml`.

### Disparadores do workflow
- `push` na branche `incluindo-pipeline-trabalho-conclusao-ci`
- `workflow_dispatch` para execução manual
- `schedule` para execução agendada diária às 02:00 UTC

### O que o workflow faz
1. Faz checkout do código.
2. Configura o Node.js no runner.
3. Instala as dependências com `npm install`.
4. Executa os testes usando Mocha e gera um relatório com Mochawesome em `./mochawesome-html`.
5. Publica o relatório como artifact da pipeline.

### Como acessar o relatório
Após a execução do workflow, o relatório de testes fica disponível na aba `Artifacts` da execução do GitHub Actions.

