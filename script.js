<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Busca com Autocomplete</title>
  <style>
    #suggestions {
      border: 1px solid #ccc;
      max-height: 150px;
      overflow-y: auto;
      position: absolute;
      background-color: white;
      width: 100%;
      display: none;
    }
    .suggestion-item {
      padding: 8px;
      cursor: pointer;
    }
    .suggestion-item:hover {
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>

  <input type="text" name="q" id="searchInput" placeholder="Buscar..." />
  <div id="suggestions"></div> <!-- Aqui serão mostradas as sugestões -->

  <script>
    const searchInput = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('suggestions');

    // Lista local de sugestões (exemplo estático)
    const suggestions = ["Cadeira", "Sofá", "Mesa", "Poltrona", "Armário", "Cama", "Estante"];

    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase(); // Captura o que o usuário digitou
      suggestionsBox.innerHTML = ''; // Limpa sugestões anteriores

      if (query.length > 0) {
        // Filtra as sugestões com base no que o usuário digitou
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));

        // Exibe as sugestões filtradas
        filteredSuggestions.forEach(item => {
          const suggestionItem = document.createElement('div');
          suggestionItem.classList.add('suggestion-item');
          suggestionItem.textContent = item;
          suggestionItem.addEventListener('click', function() {
            searchInput.value = item;
            suggestionsBox.style.display = 'none'; // Esconde as sugestões
          });
          suggestionsBox.appendChild(suggestionItem);
        });

        // Mostra o box de sugestões
        suggestionsBox.style.display = filteredSuggestions.length > 0 ? 'block' : 'none';
      } else {
        suggestionsBox.style.display = 'none'; // Esconde as sugestões se o campo estiver vazio
      }
    });

    // Buscar sugestões via API (substituir /api/sugestoes com a URL correta)
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();

      if (query.length > 0) {
        fetch(`/api/sugestoes?q=${query}`)
          .then(response => response.json())
          .then(data => {
            suggestionsBox.innerHTML = ''; // Limpa sugestões anteriores
            data.forEach(item => {
              const suggestionItem = document.createElement('div');
              suggestionItem.classList.add('suggestion-item');
              suggestionItem.textContent = item;
              suggestionItem.addEventListener('click', function() {
                searchInput.value = item;
                suggestionsBox.style.display = 'none'; // Esconde as sugestões
              });
              suggestionsBox.appendChild(suggestionItem);
            });
            suggestionsBox.style.display = data.length > 0 ? 'block' : 'none';
          })
          .catch(error => console.error('Erro ao obter sugestões:', error));
      } else {
        suggestionsBox.style.display = 'none';
      }
    });
  </script>

</body>
</html>
