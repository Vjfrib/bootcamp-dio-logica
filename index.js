class Carro {
  constructor(ano, cor, modelo) {
    this.ano = ano;
    this.cor = cor;
    this.modelo = modelo;
  }

  andar() {
    console.log(`O carro está andando.`);
    const carroInfo = {
      ano: this.ano,
      cor: this.cor,
      modelo: this.modelo
    };
    console.log(JSON.stringify(carroInfo));
  }
}

// Criando uma instância para um Gol 99 vermelho
const gol99Vermelho = new Carro(1999, 'vermelho', 'Gol');

// Chamando o método andar
gol99Vermelho.andar();
