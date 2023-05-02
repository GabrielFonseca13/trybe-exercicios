class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(d: number, m: number, y: number) {
    const dateStr = `${y}-${m}-${d}`
    console.log(dateStr)

    if (!Data.validateDate(d, m, y)) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = d;
      this._month = m;
      this._year = y;
    }
  }

  public get day(): number {
    return this._day;
  }
  public set day(value: number) {
    this._day = value;
  }

  public get month(): number {
    return this._month;
  }
  public set month(value: number) {
    this._month = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }

  getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    return months[this.month - 1];
  }

  isLeapYear(): boolean {
    return this._year % 4 === 0;
  }

  compare(date: Data): number {
    const currentDateStr = `${this._year}-${this._month}-${this._day}`;

    const dateStr = `${date._year}-${date._month}-${date._day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }

  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this._day > 9 ? this._day.toString() : `0${this._day.toString()}`;
    const month = this._month > 9
      ? this._month.toString()
      : `0${this._month.toString()}`;
    const year = this._year.toString();

    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName()).replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }

  // esse método é estático pois ele não precisa acessar o `this` em momento algum
  // logo, não precisa estar vinculado a nenhuma instância
  private static validateDate(day: number, month: number, year: number)
    : boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;

    return true;
  }
}

export default Data;