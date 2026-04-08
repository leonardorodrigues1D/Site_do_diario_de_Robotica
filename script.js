/**
 * Função para verificar a resposta de uma pergunta do quiz.
 * @param {number} numeroQuestao - O número da questão (ex: 1, 2, 3...).
 * @param {string} respostaCorreta - A alternativa correta (ex: 'a', 'b', 'c').
 */
function verificarResposta(numeroQuestao, respostaCorreta) {
    // 1. Seleciona o elemento de rádio (opção) que foi marcado pelo usuário para a questão específica.
    // O `name` do input de rádio é usado para agrupar as opções de uma mesma pergunta (ex: name="q1").
    const respostaUsuario = document.querySelector(`input[name="q${numeroQuestao}"]:checked`);

    // 2. Encontra o elemento <span> onde o resultado (certo/errado) será exibido.
    // O ID desse span é construído dinamicamente (ex: "resultado1", "resultado2").
    const elementoResultado = document.getElementById(`resultado${numeroQuestao}`);

    // 3. Verifica se o usuário realmente selecionou uma opção.
    if (respostaUsuario) {
        // 4. Compara o valor da opção selecionada ('a', 'b' ou 'c') com a resposta correta.
        if (respostaUsuario.value === respostaCorreta) {
            // Se estiver correto:
            elementoResultado.textContent = "Correto!"; // Define o texto.
            elementoResultado.className = "resultado correto"; // Aplica as classes de estilo (verde).
        } else {
            // Se estiver incorreto:
            elementoResultado.textContent = "Incorreto!"; // Define o texto.
            elementoResultado.className = "resultado incorreto"; // Aplica as classes de estilo (vermelho).
        }
    } else {
        // 5. Se nenhuma opção foi marcada, avisa o usuário.
        alert("Por favor, selecione uma opção antes de verificar.");
    }
}