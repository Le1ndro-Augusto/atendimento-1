// Seleciona todos os botões de perguntas
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona evento de clique em cada pergunta
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle de classe "active" para mostrar ou esconder a resposta
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});
