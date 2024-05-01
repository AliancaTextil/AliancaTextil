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