document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de "próximo passo"
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    // 2. Itera sobre os botões e adiciona o 'ouvinte' de clique
    botoesProximo.forEach(button => {
        button.addEventListener('click', function() {
            // Encontra o elemento de passo atual que tem a classe 'ativo'
            const passoAtual = document.querySelector('.passo.ativo');
            
            // Determina o ID do próximo passo a partir do atributo 'data-proximo'
            const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
            
            // Encontra o elemento do próximo passo
            const proximoPasso = document.getElementById(proximoPassoId);

            // Garante que o passo atual e o próximo existam antes de prosseguir
            if (passoAtual && proximoPasso) {
                // 3. Executa a transição:
                passoAtual.classList.remove('ativo');
                proximoPasso.classList.add('ativo');

                // 4. Melhoria: Rola a página para o topo, garantindo que o usuário veja o novo conteúdo
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                });
            } else {
                console.error('Erro de transição: Passo atual ou próximo passo não encontrado.');
            }
        });
    });
});