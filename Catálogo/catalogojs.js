document.addEventListener('DOMContentLoaded', function() {
    const colorFilter = document.getElementById('colorFilter');
    const colorCards = document.querySelectorAll('.color-card');
  
    // Adiciona evento de mudança ao filtro de cores
    colorFilter.addEventListener('click', function(event) {
      const selectedColor = event.target.dataset.color;
      
      // Itera sobre todos os cartões de cores
      colorCards.forEach(card => {
        // Se a cor do cartão corresponder à cor selecionada ou for "Todas as Cores", mostra o cartão, caso contrário, esconde
        if (selectedColor === 'all' || card.classList.contains(selectedColor)) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
  
  