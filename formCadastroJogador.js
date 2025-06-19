const form = document.getElementById('formJogador');
const lista = document.getElementById('listaJogadores');
//função que quando alguém clicar no botão de enviar, vai pegar os valores dos inputs e adicionar na lista
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const nome = document.getElementById('nome').value;
    const habilidades = 
    document.querySelectorAll('input[name="habilidades"]:checked'); 
    const habilidadesArray = Array.from(habilidades).map(h => h.value);
    //Pega a posição do jogador
    const posicao = document.querySelector('input[name="posicao"]:checked').value;
    //pega a data de estreia na seleção
    const dataEstreia = document.getElementById('estreia').value;
    //Adiciona o jogador na lista
    const jogadorItem = document.createElement('li');
    jogadorItem.innerHTML = `
        Nome: ${nome}<br>
        Habilidades: ${habilidadesArray.join(', ')}<br>
        Posição: ${posicao}<br>
        Data de Estreia: ${dataEstreia}
    `;
    lista.appendChild(jogadorItem);
    //Limpa os campos do formulário
    form.reset();
});