function jogada() {
    var jogadaJogador = Math.floor(Math.random() * 6) + 1;
    var jogadaIA = Math.floor(Math.random() * 6) + 1;
    var resultado = document.getElementById("resultado");

    if (jogadaJogador === 1 || jogadaJogador === 2 || jogadaJogador === 3) {
      resultado.innerHTML = "A ação foi " + jogadaJogador + " e falhou";
    
    } else if (jogadaJogador === 6) {
      resultado.innerHTML = "A ação foi " + jogadaJogador + " e acertou com um crítico!";
      
    } else {
      resultado.innerHTML = "A ação foi " + jogadaJogador + " e acertou.";
      if (jogadaIA === 1 || jogadaIA === 2 || jogadaIA === 3) {
        resultado.innerHTML += "<br>A reação foi " + jogadaIA + " e falhou.";
        
      } else if (jogadaIA === 6) {
        resultado.innerHTML += "<br>A reação foi " + jogadaIA + "  defendeu com um crítico!";
        
      } else {
        resultado.innerHTML += "<br>A reação foi " + jogadaIA + " e defendeu.";
      }
    }

  }