class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    // GET e SET do saldo -------------------------------------------
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    // Criando métodos para SACAR e DEPOSITAR -----------------------
    sacar(valor){
        if(valor > this._saldo){
            return "Operação NEGADA";
        }else{
            this._saldo = this._saldo - valor;

            return this._saldo;
        }
    }
    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

// Criando uma Class filha Chamada ContaCorrente -----------------
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, CartaoCredito){
        super(agencia, numero);
        this.tipo = 'CORRENTE';
        this._CartaoCredito = CartaoCredito;
    }

    // Criando métodos para Cartão de Credito ---------------------
    get CartaoCredito(){
        return this._CartaoCredito;
    }
    set CartaoCredito(valor){
        this._CartaoCredito = valor;
    }
}

// Criando uma Class filha Chamada ContaPoupanca -----------------
class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'POUPANÇA';
    }
}

// Criando uma Class filha Chamada ContaUniversitaria -----------------
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'UNIVERSITARIA';
    }

    sacar(valor){
        if(valor > 500){
            return "Operação NEGADA";
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}