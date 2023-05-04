import Person from "./Person";

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assingmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);


    this._enrollment = this.generateEnrollment();
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A Matrícula deve possuir no mínimo 16 caracteres');
    }
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode ter 4 notas de prova')
    }
    this._examsGrades = value;
  }

  public get assingmentsGrades(): number[] {
    return this._assingmentsGrades;
  }

  public set assingmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode ter 2 notas de trabalhos')
    }
    this._assingmentsGrades = value;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._assingmentsGrades]
      .reduce((notaAnterior, notaAtual) => {
        notaAtual += notaAnterior;
        return notaAtual;
      }, 0);
  }

  sumAverageGrades(): number {
    const sumGrades = this.sumGrades();
    const divider = this._examsGrades.length + this._assingmentsGrades.length;
    return sumGrades / divider;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

}

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assingmentsGrades = [50, 45];
tamires.assingmentsGrades = [47, 42];

console.log(carolina);
console.log('Soma das notas: ', carolina.sumGrades());
console.log('Média das notas: ', carolina.sumAverageGrades())
console.log('-----------------------------------');
console.log(lucas);
console.log('Soma das notas: ', lucas.sumGrades());
console.log('Média das notas: ', lucas.sumAverageGrades())
console.log('-----------------------------------');
console.log(jessica);
console.log('Soma das notas: ', jessica.sumGrades());
console.log('Média das notas: ', jessica.sumAverageGrades())
console.log('-----------------------------------');
console.log(tamires);
console.log('Soma das notas: ', tamires.sumGrades());
console.log('Média das notas: ', tamires.sumAverageGrades())
console.log('-----------------------------------');
console.log(fernando);
console.log('Soma das notas: ', fernando.sumGrades());
console.log('Média das notas: ', fernando.sumAverageGrades())

// deve retornar erro
// fernando.assignmentsGrades = [45, 45, 45];
export default Student;