// script.js - Interações do site MIP Prime

// Aguarda o carregamento completo do DOM para garantir que todos os elementos existem
document.addEventListener('DOMContentLoaded', function() {
    // --- Formulário de contato ---
    // Seleciona o formulário (se existir na página)
    const form = document.querySelector('form');
    if (form) {
        // Intercepta o envio do formulário para exibir um alerta e limpar os campos
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            form.reset();
        });
    }

    // --- Botão de voltar ao topo ---
    // Seleciona o botão de voltar ao topo (se existir na página)
    const btnTopo = document.getElementById('btn-topo');
    if (btnTopo) {
        // Mostra o botão apenas quando o usuário rolar mais de 200px para baixo
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                btnTopo.classList.add('mostrar');
            } else {
                btnTopo.classList.remove('mostrar');
            }
        });
        // Ao clicar no botão, rola suavemente para o topo da página
        btnTopo.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Exibição de texto explicativo nos cartões de serviço ao passar o mouse ---
    const servicoCards = document.querySelectorAll('.servico-card');
    servicoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Destaca o cartão e mostra o texto
            card.classList.add('destaque');
            card.querySelector('.servico-info').style.display = 'block';
        });
        card.addEventListener('mouseleave', function() {
            // Remove destaque e esconde o texto
            card.classList.remove('destaque');
            card.querySelector('.servico-info').style.display = 'none';
        });
    });

    // --- Modal de vídeo para serviços ---
    const modal = document.getElementById('modal-video');
    const video = document.getElementById('video-servico');
    const closeBtn = document.querySelector('.modal-video-close');
    const videoSources = {
        consultoria: 'videos/consultoria.mp4',
        gestao: 'videos/gestao.mp4',
        treinamento: 'videos/treinamento.mp4'
    };
    // Ao clicar no cartão, abre o modal com o vídeo correto
    servicoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            const servico = card.getAttribute('data-servico');
            if (videoSources[servico]) {
                video.querySelector('source').src = videoSources[servico];
                video.load();
                modal.style.display = 'flex';
            }
        });
    });
    // Fecha o modal ao clicar no X
    closeBtn.addEventListener('click', function(e) {
        modal.style.display = 'none';
        video.pause();
    });
    // Fecha o modal ao clicar fora do vídeo
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            video.pause();
        }
    });

    // --- Menu hambúrguer responsivo ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('mostrar');
        });
        // Fecha o menu ao clicar em um link (mobile)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('mostrar');
            });
        });
    }
}); 