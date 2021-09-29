var carta1 = {
  nome: "Geralt de Rívia",
  imagem:
    "https://i.pinimg.com/originals/c0/72/82/c072829b73be230deef243535978e374.jpg",
  atributos: { ataque: 9, defesa: 8, magia: 9 }
};
var carta2 = {
  nome: "Ciri",
  imagem:
    "https://i.pinimg.com/originals/dd/c7/47/ddc747cfb5c2a956e3596604aee4c4bc.png",
  atributos: { ataque: 10, defesa: 7, magia: 10 }
};

var carta3 = {
  nome: "Triss Merigold",
  imagem: "https://images2.alphacoders.com/104/1045504.jpg",
  atributos: { ataque: 7, defesa: 7, magia: 10 }
};

var carta4 = {
  nome: "Yennefer",
  imagem:
    "https://a-static.besthdwallpaper.com/o-witcher-3-caca-selvagem-yennefer-papel-de-parede-2560x1600-14916_7.jpg",
  atributos: { ataque: 8, defesa: 7, magia: 10 }
};

var carta5 = {
  nome: "Eredin",
  imagem:
    "https://bbts1.azureedge.net/images/p/full/2016/10/c15824db-dc32-42ea-8c67-a9aec9157c8e.jpg",
  atributos: { ataque: 9, defesa: 9, magia: 7 }
};

var carta6 = {
  nome: "Gaunter O'Dimm",
  imagem: "https://wallpapercave.com/wp/wp7364281.jpg",
  atributos: { ataque: 9, defesa: 8, magia: 10 }
};

var carta7 = {
  nome: "Dettlaff",
  imagem:
    "https://i.pinimg.com/originals/9a/28/57/9a28570af2681fbd1a16b4ac6c542d1c.jpg",
  atributos: { ataque: 10, defesa: 9, magia: 7 }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);
  var numeroCartaJogador = parseInt(Math.random() * 7);
  while (numeroCartaMaquina === numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div";
}