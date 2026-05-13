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
  

