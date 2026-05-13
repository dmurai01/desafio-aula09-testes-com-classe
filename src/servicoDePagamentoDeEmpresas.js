/*
  Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando o pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara'. Caso contrário, a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o último pagamento. 
  
  Ex.
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagemento.pagar('1231-4563-7895', 'Samar', 56.87);
  console.log(servicoDePagamento.consultaUltimoPagamento());
  {
    codigoBarras: '1231-4563-7895',
    empresa: 'Samar',
    valor: 56.87
  }
  
  A entrega deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta teste usando Mocha e Node Assert.
*/

export default class ServicoDePagamentoDeEmpresas {
  #pagamentos
  
  constructor () {
    this.#pagamentos = [];
  }
  
  realizarPagamento(codigoBarras, empresa, valor) {
    let categoria = 'padrão'
    if (!codigoBarras || !empresa || !valor) {
        return 'Todos os dados devem ser enviados';
    }
    if (valor > 100) {
      categoria = 'cara';
    }
    this.#pagamentos.push({
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria
    });
  }
  
  consultar (){
    return this.#pagamentos.at(-1);
  }
}
  
const servicoDePagamento = new ServicoDePagamentoDeEmpresas();
// servicoDePagamento.realizarPagamento('3265-4895-7452', 'Claro', 150.95);
// servicoDePagamento.realizarPagamento('3265-4895-7452', 'Vivo', 50.95);
// servicoDePagamento.realizarPagamento('3265-4895-7452', 'Tim', 250.95);
// servicoDePagamento.realizarPagamento('3265-4895-7452', 'Tim', );

//console.log(servicoDePagamento.consultar())
  

