class Carro {
  
  // Construtor, em Js, é o método chamdo (de requisiões/ definições e atributos) qndo o obj inicia,
  
  constructor(ano, cor, modelo) {
    //o `this.atributo` significa = "o atributo da parada que vai ser construida"
    this.anoDoBagui = ano; //this.ano = ano da parada
    this.corDoBagui = cor;
    this.modeloDoBagui = modelo;
  }
  ////////////////////////////////////////////////////////////////////////////////
  andar() {
    console.log(`O carro está andando.`);
  }

  parar() {
    console.log(`O carro parou.`);
  }

  jsonar() {
    //Modelo de como vai ficar o registro Json
    const carroInfo = {
      anoDaMaquina: this.anoDoBagui,
      corDaMaquina: this.corDoBagui,
      modeloDaMaquina: this.modeloDoBagui
    };
    console.log(JSON.stringify(carroInfo));
  }
  ////////////////////////////////////////////////////////////////////////////////
}
