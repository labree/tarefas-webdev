// Alternância do menu móvel
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        // Alterna a classe 'active' nos links de navegação
        navLinks.classList.toggle('active');
        
        // Anima o hambúrguer para um X
        const bars = document.querySelectorAll('.bar');
        bars[0].classList.toggle('rotate-45');
        bars[1].classList.toggle('opacity-0');
        bars[2].classList.toggle('-rotate-45');
    });
    
    // Fecha o menu ao clicar em um link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            
            // Reseta a animação do hambúrguer
            const bars = document.querySelectorAll('.bar');
            bars[0].classList.remove('rotate-45');
            bars[1].classList.remove('opacity-0');
            bars[2].classList.remove('-rotate-45');
        });
    });
}); 