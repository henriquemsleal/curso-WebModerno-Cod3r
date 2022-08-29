// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'; // não faça isso
const avo = { attri1: 'A' }; // avo tem como protótipo o object.prototype
const pai = { __proto__: avo, attri2: 'B', attri3: 'D' };
const filho = { __proto__: pai, attri3: 'C' };
console.log(filho.attr0);
console.log(filho.attr1);
console.log(filho.attr2);
console.log(filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: 'F40',
  velMax: 324, //shadowing
};

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
