class Carro {

  constructor(anoInput, corInput, modeloInput) {
    this.anoDoBagui = anoInput;
    this.corDoBagui = corInput;
    this.modeloDoBagui = modeloInput;
  }

  andar() {
    console.log(`O carro está andando.`);
  }

  parar() {
    console.log(`O carro parou.`);
  }

  jsonar() {

    const carroInfo = {
      anoDaMaquina: this.anoDoBagui,
      corDaMaquina: this.corDoBagui,
      modeloDaMaquina: this.modeloDoBagui
    };

    console.log(JSON.stringify(carroInfo));
  }

}

// Vou tentar exportar
export { Carro };