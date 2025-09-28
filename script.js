document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LÓGICA DE MOSTRAR/ESCONDER CONTEÚDO (Experiência e Formação) - REATIVADO!
    const toggleButtons = document.querySelectorAll('.js-toggle-details');

    toggleButtons.forEach(button => {
        // Encontra o elemento de detalhes (ul ou p.descricao)
        const detailsList = button.parentElement.querySelector('.detalhes-funcao');

        // Lógica de inicialização: Esconde os detalhes no carregamento
        if (detailsList) {
            detailsList.classList.add('hidden');
        }

        button.addEventListener('click', () => {
            if (detailsList) {
                // Fecha todos os outros detalhes abertos
                toggleButtons.forEach(otherBtn => {
                    if (otherBtn !== button) {
                        const otherDetails = otherBtn.parentElement.querySelector('.detalhes-funcao');
                        if (otherDetails && !otherDetails.classList.contains('hidden')) {
                            otherDetails.classList.add('hidden');
                            otherBtn.classList.remove('active-toggle');
                        }
                    }
                });
                // Alterna a classe 'hidden' nos detalhes (esconde/mostra)
                detailsList.classList.toggle('hidden');
                // Alterna a classe 'active-toggle' no H3 para girar a seta
                button.classList.toggle('active-toggle');
            }
        });
    });

    // 2. LÓGICA DE ANIMAÇÃO DAS BARRAS DE HABILIDADE
    const progressBars = document.querySelectorAll('.progresso');

    progressBars.forEach(bar => {
        const targetWidth = bar.style.width; 
        
        bar.style.width = '0%'; 

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100); 
    });
    
    // 3. LÓGICA DE HOVER NA IMAGEM (Ampliação e Ofuscamento do Fundo)
    const hoverTarget = document.querySelector('.js-hover-target'); 
    const curriculoContainer = document.getElementById('curriculo');
    
    if (hoverTarget && curriculoContainer) {
        // Quando o mouse ENTRA na foto/wrapper
        hoverTarget.addEventListener('mouseenter', () => {
            curriculoContainer.classList.add('dim-bg');
        });

        // Quando o mouse SAI da foto/wrapper
        hoverTarget.addEventListener('mouseleave', () => {
            curriculoContainer.classList.remove('dim-bg');
        });
    }

        });// Seleciona os elementos
            const perfilWrapper = document.querySelector('.perfil-info-wrapper');
            const formacaoOverlayText = document.getElementById('formacao-overlay-text');

        // Mostra o texto ao passar o mouse
                perfilWrapper.addEventListener('mouseenter', () => {
                formacaoOverlayText.classList.remove('hidden');
        });

        // Esconde o texto ao tirar o mouse
                perfilWrapper.addEventListener('mouseleave', () => {
                formacaoOverlayText.classList.add('hidden');
        });