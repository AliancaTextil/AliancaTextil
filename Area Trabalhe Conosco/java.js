document.addEventListener('DOMContentLoaded', function() {
    var waypoints = document.querySelectorAll('.waypoint');

    function isVisible(element) {
        var rect = element.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    function handleScroll() {
        waypoints.forEach(function(waypoint) {
            if (isVisible(waypoint)) {
                waypoint.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica a visibilidade dos elementos ao carregar a página
});

ScrollReveal().reveal('.card', {
    delay: 300, // Atraso de 300ms para iniciar a animação após o elemento ser revelado
    distance: '50px', // Distância de deslocamento dos elementos
    duration: 800, // Duração da animação em milissegundos
    easing: 'ease', // Tipo de easing para a animação
    interval: 200 // Atraso entre cada item quando houver múltiplos elementos
  });