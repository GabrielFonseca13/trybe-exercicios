interface IAgenda<T> {
  protocolo: string;
  data: Date;
  regras: T;
}

export default IAgenda;