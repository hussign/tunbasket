document.addEventListener('DOMContentLoaded', function () {
    // Votre code JavaScript ici
    document.getElementById('toggleSidebar').addEventListener('click', function () {
        var sidebar = document.querySelector('aside');
        sidebar.classList.toggle('hidden');
        if (sidebar.classList.contains('hidden')) {
            sidebar.style.width = '0';
        } else {
            sidebar.style.width = '200px'; // Ajustez la largeur selon vos besoins
        }
    });

    // Ajoutez un gestionnaire d'événements au lien "Accueil"
    var accueilLink = document.getElementById('accueil-link');
    accueilLink.addEventListener('click', function () {
        var tableContainer = document.querySelector('.table-container');
        tableContainer.style.display = 'none'; // Cache le tableau
    });

    // Ajoutez un gestionnaire d'événements au lien "Joueurs"
    var joueursLink = document.getElementById('joueurs-link');
    joueursLink.addEventListener('click', function () {
        var tableContainer = document.querySelector('.table-container');
        tableContainer.style.display = 'block'; // Affiche le tableau
    });

    function toggleTable() {
        var tableContainer = document.querySelector('.table-container');
        tableContainer.style.display = (tableContainer.style.display === 'none') ? 'block' : 'none';
    }
});

function attentionautabac(Tue) {
    console.log("tabac" + Tue + "!")
  }
  




