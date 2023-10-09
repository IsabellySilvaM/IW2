function calcularDespesas() {
  const orcamento = parseFloat(document.getElementById("orcamento").value);
  const hospedagem = parseFloat(document.getElementById("hospedagem").value);
  const transporte = parseFloat(document.getElementById("transporte").value);
  const alimentacao = parseFloat(document.getElementById("alimentacao").value);
  const extras = parseFloat(document.getElementById("extras").value);

  for (const id of [
    "orcamento",
    "hospedagem",
    "transporte",
    "alimentacao",
    "extras",
  ]) {
    if (document.getElementById(id).value === "") {
      return;
    }
  }

  const totalDespesas = hospedagem + transporte + alimentacao + extras;

  let mensagem = "";

  if (totalDespesas > orcamento) {
    mensagem = `
      <div id="mensagem">
        <div class="box">
          <h2 class="bad">Péssima notícia</h2>
          <p>Os valores informados por você deram o total de $${totalDespesas.toFixed(
            2,
          )}, sendo assim, esse valor ultrapassa o seu orçamento de $${orcamento.toFixed(
            2,
          )} para essa viagem!<br><br>
          Com base nos valores informados por você, o que você mais está tendo gasto seria a ${campoMaiorGasto(
            hospedagem,
            transporte,
            alimentacao,
            extras,
          )} tente economizar um pouco mais!</p>
        </div>
      </div>
    `;
  } else {
    mensagem = `
      <div id="mensagem">
        <div class="box">
          <h2 class="good">Ótima notícia</h2>
          <p>Os valores informados por você deram o total de $${totalDespesas.toFixed(
            2,
          )}, sendo assim, esse valor se encaixa perfeitamente no seu orçamento de $${orcamento.toFixed(
            2,
          )} para essa viagem!</p>
        </div>
      </div>
    `;
  }

  document.getElementById("main").innerHTML = mensagem;
}

function campoMaiorGasto(hospedagem, transporte, alimentacao, extras) {
  const gastos = {
    Hospedagem: hospedagem,
    Transporte: transporte,
    Alimentação: alimentacao,
    Extras: extras,
  };
  let maiorGasto = "Hospedagem";

  for (const campo in gastos) {
    if (gastos[campo] > gastos[maiorGasto]) {
      maiorGasto = campo;
    }
  }

  return maiorGasto;
}
