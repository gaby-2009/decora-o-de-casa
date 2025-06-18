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
    const searchInput = document.querySelector('input[name="q"]');
    const suggestionsBox = document.getElementById('suggestions');

    const suggestions = [
      'JavaScript',
      'HTML',
      'CSS',
      'Node.js',
      'React',
      'Vue.js',
      'Angular',
      'Python',
      'Django',
      'Flask'
    ];

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
            searchInput.value = item;  // Preenche o campo de pesquisa com a sugestão selecionada
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
  </script>

</body>
</html>

