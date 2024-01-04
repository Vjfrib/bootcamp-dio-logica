class Carro {

  // Construtor, em Js, é o método chamdo (de requisiões/ definições e atributos) qndo o obj inicia,

  constructor(anoInput, corInput, modeloInput) {
    //o `this.atributo` significa = "o atributo da parada que vai ser construida"
    this.anoDoBagui = anoInput; //this.ano = ano da parada
    this.corDoBagui = corInput;
    this.modeloDoBagui = modeloInput;
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
      //O_que_vai_ser_exibido: variável
      anoDaMaquina: this.anoDoBagui,
      corDaMaquina: this.corDoBagui,
      modeloDaMaquina: this.modeloDoBagui
    };
    console.log(JSON.stringify(carroInfo));
  }
  ////////////////////////////////////////////////////////////////////////////////
}
