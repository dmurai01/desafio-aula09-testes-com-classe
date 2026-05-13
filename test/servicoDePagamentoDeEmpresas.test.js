import ServicoDePagamentoDeEmpresas from '../src/servicoDePagamentoDeEmpresas.js';
import assert from 'node:assert';

describe('Classe de Servico de Pagamento de Empresas', () => {
    describe('Método de realizar pagamento', () => {
        it('Validar se ao enviar todas as propriedados corretamente para o método de realizar pagamento, está armazenando os valores na lista', () => {
            const servicoDePagamento = new ServicoDePagamentoDeEmpresas();

            servicoDePagamento.realizarPagamento('3265-4895-7452', 'Claro', 150.95);
            const pagamento = servicoDePagamento.consultar();

            assert.equal(pagamento.codigoBarras, '3265-4895-7452');
            assert.equal(pagamento.empresa, 'Claro');
            assert.equal(pagamento.valor, 150.95);

        });

        it('Validar se ao enviar uma propriedade vazia para o método de realizar pagamento, retorna mensagem de erro', () => {
            const retornoEsperado = 'Todos os dados devem ser enviados';

            const servicoDePagamento = new ServicoDePagamentoDeEmpresas();
            const retorno = servicoDePagamento.realizarPagamento('3265-4895-7452', '', 150.95);

            assert.equal(retorno, retornoEsperado);

        });

        it('Validar se ao enviar todas as propriedados corretamente e a propriedade valor maior que 100.00, para o método de realizar pagamento, está armazenando os valores na lista e aplicando a categoria como "cara"', () => {

            const codigoBarrasEnviado = '3265-4895-7452';
            const empresaEnviada = 'Claro';
            const valorEnviado = 100.01;

            const servicoDePagamento = new ServicoDePagamentoDeEmpresas();

            servicoDePagamento.realizarPagamento(codigoBarrasEnviado, empresaEnviada, valorEnviado);
            const pagamento = servicoDePagamento.consultar();

            assert.equal(pagamento.codigoBarras, codigoBarrasEnviado);
            assert.equal(pagamento.empresa, empresaEnviada);
            assert.equal(pagamento.valor, valorEnviado);
            assert.equal(pagamento.categoria, 'cara');

        });

        it('Validar se ao enviar todas as propriedados corretamente e a propriedade valor menor ou igual a 100.00, para o método de realizar pagamento, está armazenando os valores na lista e aplicando a categoria como "padrão"', () => {

            const codigoBarrasEnviado = '3265-4895-7452';
            const empresaEnviada = 'Claro';
            const valorEnviado = 100.00;

            const servicoDePagamento = new ServicoDePagamentoDeEmpresas();

            servicoDePagamento.realizarPagamento(codigoBarrasEnviado, empresaEnviada, valorEnviado);
            const pagamento = servicoDePagamento.consultar();

            assert.equal(pagamento.codigoBarras, codigoBarrasEnviado);
            assert.equal(pagamento.empresa, empresaEnviada);
            assert.equal(pagamento.valor, valorEnviado);
            assert.equal(pagamento.categoria, 'padrão');

        });
    });
    
    describe('Método de consulta', () => {
        it('Validar se o método de consulta está retornando apenas o último pagamento', () => {
            const servicoDePagamento = new ServicoDePagamentoDeEmpresas();

            servicoDePagamento.realizarPagamento('5451-2571-9820', 'Tim', 20.05);
            servicoDePagamento.realizarPagamento('3265-4895-7452', 'Claro', 90.55);
            servicoDePagamento.realizarPagamento('1265-4654-1252', 'Vivo', 200.95);

            const pagamento = servicoDePagamento.consultar();

            assert.equal(pagamento.codigoBarras, '1265-4654-1252');
            assert.equal(pagamento.empresa, 'Vivo');
            assert.equal(pagamento.valor, 200.95);
            assert.equal(pagamento.categoria, 'cara')
            
        });
    });

});
