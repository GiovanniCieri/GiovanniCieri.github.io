document.querySelectorAll('.enlace').forEach(function(div) {
    div.addEventListener('click', function() {
      var url = this.dataset.url;
      if (url) {
        window.location.href = url;
      }
    });
  });