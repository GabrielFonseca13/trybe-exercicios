class Student {
  private _matricula: string;
  private _nome: string;
  private _notaProva: number[] = Array();
  private _notaTrabalho: number[] = Array();

  constructor(matricula: string, nome: string, notaProva: number[], notaTrabalho: number[]) {
    this._matricula = matricula
    this._nome = nome;
    this.notaProva = notaProva;
    this.notaTrabalho = notaTrabalho;
  }

  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get notaProva(): number[] {
    return this._notaProva;
  }
  public set notaProva(value: number[]) {
    if (value.length !== 4) {
      throw new Error('São necessários 4 notas de prova')
    }
    this._notaProva = value;
  }

  public get notaTrabalho(): number[] {
    return this._notaTrabalho;
  }
  public set notaTrabalho(value: number[]) {
    if (value.length !== 2) {
      throw new Error('São necessários 2 notas de Trabalho')
    }
    this._notaTrabalho = value;
  }

  sumGrades(): number {
    return [...this.notaProva, ...this.notaTrabalho]
      .reduce((notaAnterior, notaAtual) => {
        notaAtual += notaAnterior;
        return notaAtual;
      }, 0);
  }

  sumAverageGrades(): number {
    const sumGrades = this.sumGrades();
    const divider = this._notaProva.length + this._notaTrabalho.length;
    return sumGrades / divider;
  }
}

const student1 = new Student('1123', 'Gabriel', [4, 9, 10, 8], [10, 10]);
console.log(student1);
console.log('Soma das notas: ', student1.sumGrades());
console.log('Média das notas: ', student1.sumAverageGrades())

const student2 = new Student('4321', 'Gilberto', [3, 1, 0, 2], [3, 0]);
console.log(student2);
console.log('Soma das notas: ', student2.sumGrades());
console.log('Média das notas: ', student2.sumAverageGrades())