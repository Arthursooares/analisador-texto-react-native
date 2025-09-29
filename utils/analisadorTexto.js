// utils/analisadorTexto.js
export const analisarTexto = (texto) => {
  if (!texto || texto.trim() === "") {
    return {
      numVogais: 0,
      numConsoantes: 0,
      palindromos: [],
    };
  }

  const vogais = texto.match(/[aeiouáéíóúãõâêîôûAEIOUÁÉÍÓÚÃÕÂÊÎÔÛ]/g) || [];
  const consoantes = texto.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];

  const palavras = texto.split(/\s+/);
  const palindromos = palavras.filter((p) => {
    const normalizado = p.toLowerCase().replace(/[^a-záéíóúãõâêîôû]/gi, "");
    return normalizado && normalizado === normalizado.split("").reverse().join("");
  });

  return {
    numVogais: vogais.length,
    numConsoantes: consoantes.length,
    palindromos,
  };
};
