function showTab(id) {
  // Alle Tab-Inhalte ausblenden
  document.querySelectorAll('.tab-content').forEach(function(tab) {
    tab.style.display = 'none';
  });

  // Den gewünschten Tab anzeigen
  const selected = document.getElementById(id);
  if (selected) {
    selected.style.display = 'block';
  }

  // Alle Buttons deaktivieren
  document.querySelectorAll('.tabs button').forEach(function(btn) {
    btn.classList.remove('active');
  });

  // Aktiven Button markieren
  const activeBtn = document.querySelector('.tabs button[onclick="showTab(\'' + id + '\')"]');
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// Standardmäßig Türkisch anzeigen
document.addEventListener("DOMContentLoaded", function() {
  showTab('tr');
});
