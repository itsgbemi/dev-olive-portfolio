// Toggle more-info display
 document.querySelector('.dropdown-icon').addEventListener('click', function() {
   document.querySelector('.more-info').classList.toggle('show');
        });    
        
// Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function(e) {
       e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
     behavior: 'smooth'
      });
                
 // Highlight active link
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
       this.classList.add('active');
            });
        });
        
  // Hide/Show sections based on footer navigation clicks
  const aboutBox = document.querySelector('.about-me-box');
  const resumeBox = document.querySelector('.resume');
  const contactBox = document.querySelector('.contact');
  const portfolioBox = document.querySelector('.portfolio');

document.getElementById('about-link').addEventListener('click', function() {
  aboutBox.classList.remove('hidden');
 resumeBox.classList.add('hidden');
 contactBox.classList.add('hidden');
 portfolioBox.classList.add('hidden');
   this.classList.add('active');
            document.getElementById('resume-link').classList.remove('active');
        });

  document.getElementById('resume-link').addEventListener('click', function() {
   aboutBox.classList.add('hidden');
   contactBox.classList.add('hidden');
   portfolioBox.classList.add('hidden');
    resumeBox.classList.remove('hidden');
   this.classList.add('active');
    document.getElementById('about-link').classList.remove('active');
        });      
        
 document.getElementById('contact-link').addEventListener('click', function() {
   aboutBox.classList.add('hidden');
   resumeBox.classList.add('hidden');
   portfolioBox.classList.add('hidden');
    contactBox.classList.remove('hidden');
   this.classList.add('active');
    document.getElementById('about-link').classList.remove('active');
        });            
  
  document.getElementById('portfolio-link').addEventListener('click', function() {
   aboutBox.classList.add('hidden');
   resumeBox.classList.add('hidden');
   contactBox.classList.add('hidden');
    portfolioBox.classList.remove('hidden');
   this.classList.add('active');
    document.getElementById('about-link').classList.remove('active');
        });       
    