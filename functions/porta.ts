import PortaModel from "../model/PortaModel";

export function criarPortas(
  quantidade: number,
  portaSelecionada: number
): PortaModel[] {
  return Array.from({ length: quantidade }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === portaSelecionada;
    return new PortaModel(numero, temPresente);
  });
}
