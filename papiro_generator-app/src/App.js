import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './papirus.svg';
import './App.css';



class App extends Component {

  state = {
    text: ''
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var validchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()_/!$";
	
	if(e.target.innerText == "JORRAR!"){
		var tab0 = new Array(
		  "Legal, já começou ",
		  "8h da manhã e vocês n",
		  "Vocês só n",
		  "Impressionante ",
		  "Claro que já estão n",
		  "Vai-te a merda, cornos, já ness",
		  "Chega dess",
		  "Esse grupo aqui é aquele velho negócio, a gente pede uma informação útil mas começa "
		);

		var tab1 = new Array(
		  "a gorfada ",
		  "a jorração ",
		  "a putaria ",
		  "a palhaçada ",
		  "a babaquice ",
		  "e papo imbecil ",
		  "a merdinha pré-almoço "
		);

		var tab2 = new Array(
		  "e o RL ",
		  "e o Tchola  ",
		  "e o Tiziu ",
		  "e o Fábio ",
		  "e o Castanhari ",
		  "e o Felipe Neto ",
		  "e o Leo ",
		  "e o Mouse ",
		  "e os mongolóides ",
		  "e os retardados ",
		  "e o Gorski ",
		  "e a Marcinha ",
		  "e o Atendende do Subway ",
		  "e esse grupo "
		);

		var tab3 = new Array(
		  "com fotinho de café no Instagram.",
		  "em baile funk de filha da puta.",
		  "pagando lanche pra Bia666.",
		  "comprando cyberlocks.",
		  "soltando vídeo merda no Youtube.",
		  "morrendo no PUBG.",
		  "nem pra vir dar uma bala nuns peruanos comigo.",
		  "usando bot em RPG de celular.",
		  "jogando jogo de puta.",
		  "fazendo piadinha lixo.",
		  "liberando o boga sem freios.",
		  "pegando AIDS.",
		  "dando ré no kibe.",
		  "ligando o sininho nas minas.",
		  "se tornou tudo que abominou um dia. Palmas!",
		  "não cala a boca, doente.",
		  "é protagonista de mais uma história imbecil.",
		  "não para de vomitar.",
		  "me deixou puto a ponto de capotar um Clio.",
		  "tatuando caveira no cu.",
		  "comprando merda enlatada na Steam só porque tá em promoção.",
		  "falando de caneta merda pra velho de 60 anos assinar contrato.",
		  "é um símio que não sabe escrever, não é culpa minha.",
		  "há 10 dias perguntando em que sushi levar a guria mirim.",
		  "se jogando na caçamba de lixo.",
		  "pegando sorvete de bosta pra colocar calda de merda e confeito de fezes e no fim jogar uma cereja em cima.",
		  "tatuando a próxima merdinha permanente. Pra conseguir ficar ainda pior."
		);
	} else {
		var tab0 = new Array(
		  "Olá Bela Mãe "
		);

		var tab1 = new Array(
		  "será que poderia "
		);

		var tab2 = new Array(
		  "fista-lá ",
		  "respeita-lá ",
		);

		var tab3 = new Array(
		  "com amor e carinho."
		);
	}

    Array.prototype.shuffle = function () {
      var temp;
      var a, b;

      if (this.length < 2) return;

      for (var i = 0; i < 20; i++) {
        a = Math.floor(Math.random() * this.length);
        b = Math.floor(Math.random() * this.length);
        temp = this[a];
        this[a] = this[b];
        this[b] = temp;
      }
    }

    Array.prototype.chr = function (index, pos) {
      return this[index].charAt(pos);
    }

    tab0.shuffle();
		tab1.shuffle();
		tab2.shuffle();
		tab3.shuffle();

    this.setState({
      text: tab0[0] + tab1[0] + tab2[0] + tab3[0]
  });
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>
          Gere uma frase do nosso grandioso Leozão/Khaoz/Sapatinho.
          </p>
        <Button data-id="1" variant="contained" size="large" color="primary" onClick={this.handleClick}>
          Jorrar!
        </Button>
		<br>
		<Button data-id="2" variant="contained" size="large" color="primary" onClick={this.handleClick}>
          Fistar!
          </Button>
        <p>
          {this.state.text}
        </p>
      </header>
    </div>
  );
}
}

export default App;
