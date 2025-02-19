<script>
  function showGroup(group, sectionId, event) {
    // Update active tab (opsional)
    document.querySelectorAll('nav button').forEach(btn => {
      btn.classList.remove('active-tab');
    });
    if (event && event.target) {
      event.target.classList.add('active-tab');
    }
    
    if (group === 'beranda') {
      // Tampilkan container Beranda dan sembunyikan Gallery
      document.getElementById('beranda-container').classList.remove('hidden');
      document.getElementById('beranda-container').classList.add('block');
      document.getElementById('gallery-container').classList.add('hidden');
      
      // Sembunyikan semua section gallery (opsional)
      document.querySelectorAll('#gallery-container .gallery-section').forEach(sec => {
        sec.classList.add('hidden');
      });
    } else if (group === 'gallery') {
      // Tampilkan container Gallery dan sembunyikan Beranda
      document.getElementById('gallery-container').classList.remove('hidden');
      document.getElementById('gallery-container').classList.add('block');
      document.getElementById('beranda-container').classList.add('hidden');
      
      // Sembunyikan semua section gallery terlebih dahulu
      document.querySelectorAll('#gallery-container .gallery-section').forEach(sec => {
        sec.classList.add('hidden');
      });
      // Tampilkan section gallery yang dipilih (Foto atau Video)
      if(sectionId) {
        const sel = document.getElementById(sectionId);
        if(sel) {
          sel.classList.remove('hidden');
          sel.classList.add('block');
        }
      }
    }
  <script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-entrance');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card-entrance').forEach((el) => {
    observer.observe(el);
  });


  /* YOU DONT NEED THESE, these are just for the popup you see */
function closeTreactPopup(){ 
    document.querySelector(".treact-popup").classList.add("hidden");
  }
  function openTreactPopup(){ 
    document.querySelector(".treact-popup").classList.remove("hidden");
  }
  document.querySelector(".close-treact-popup").addEventListener("click", closeTreactPopup);
  setTimeout(openTreactPopup, 3000)
</script>
</script>

const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

playBtn.addEventListener('click', () => {
  playIcon.classList.toggle('hidden');
  pauseIcon.classList.toggle('hidden');
});
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    movieLists[i].scrollLeft += 300;
  });
});