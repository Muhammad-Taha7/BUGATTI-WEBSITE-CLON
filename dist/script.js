 function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('left-0');
    sidebar.classList.toggle('left-[-100%]');
  }

  function showImages(setNumber) {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    document.getElementById('imagesContainer').style.display = 'flex';
    document.getElementById('colorDiv').style.display = 'none';

    if (setNumber === 1) {
      img1.src = "https://i.postimg.cc/mkHXFyRT/1.png";
      img2.src = "https://i.postimg.cc/MZQd5t2S/2.png";
      img3.src = "https://i.postimg.cc/YqN8K9CD/3.png";
    } else if (setNumber === 2) {
      img1.src = "https://i.postimg.cc/9QJp0nTG/4.png";
      img2.src = "https://i.postimg.cc/XJyc2NP8/5.png";
      img3.src = "https://i.postimg.cc/vHv72N0p/6.png";
    } else if (setNumber === 3) {
      img1.src = "https://i.postimg.cc/pd3Knbdn/7.png";
      img2.src = "https://i.postimg.cc/vTtnj4tW/8.png";
      img3.src = "https://i.postimg.cc/sD37WJ3K/9.png";
    }
  }

  function showColorDiv(color) {
    const colorDiv = document.getElementById('colorDiv');
    colorDiv.style.display = 'block';
    colorDiv.style.backgroundColor = color;

    document.getElementById('imagesContainer').style.display = 'none';
  }

  // 👇 Call the default open section on page load
  window.onload = function () {
    showImages(1);
  };function showColorDiv(type) {
  const colorDiv = document.getElementById('colorDiv');
  colorDiv.style.display = 'flex';
  colorDiv.style.backgroundColor = '#000'; // black background
  colorDiv.innerHTML = ''; // clear previous content
  document.getElementById('imagesContainer').style.display = 'none';

  let title = '';
  let paragraph = '';

  switch(type) {
    case 'red':
      title = 'Company Overview';
      paragraph = `
        Bugatti is not just a car manufacturer; it is a symbol of perfection, performance, and passion. 
        Since its inception, the company has stood at the forefront of engineering brilliance and artistic beauty. 
        We design not only to impress but to inspire. 
        Every curve, every bolt, every stitch is a reflection of the dedication to excellence. 
        The brand thrives on innovation while honoring its rich heritage. 
        Our vision transcends traditional automotive boundaries. 
        We believe in pushing the limits of what’s possible. 
        `;
      break;

    case 'blue':
      title = 'Careers at Bugatti';
      paragraph = `
        Working at Bugatti means being part of an elite team driven by excellence. 
        We are committed to crafting more than just world-class cars; we build dreams on wheels. 
        Our workplace fosters creativity, precision, and pride in everything we do. 
        With positions spanning engineering, design, IT, and management, 
        our roles are as diverse as our vehicles. 
        We empower talent and support personal growth every step of the way. 
        Passion for innovation lies at the heart of our recruitment. 
        `;
      break;

    case 'green':
      title = 'Newsroom';
      paragraph = `
        Stay updated with the world of Bugatti through our official newsroom. 
        Discover the latest product launches, design innovations, and global events. 
        Our newsroom provides direct access to press releases, articles, and media coverage. 
        We believe in sharing our journey with enthusiasts and industry experts alike. 
        From concept sketches to real-world performance, every story tells our evolution. 
        Explore in-depth features on upcoming models and historic milestones. 
        Dive into behind-the-scenes insights from our designers and engineers. 
        `;
      break;

    case 'purple':
      title = 'Dealer Finder';
      paragraph = `
        Finding a Bugatti dealer is your first step into the extraordinary. 
        Our global network ensures that excellence is always within reach. 
        Each showroom is designed to reflect the brand’s commitment to luxury and prestige. 
        Authorized dealers provide unmatched service, tailored to your needs. 
        Discover the full lineup of current and legacy models in person. 
        Whether you're purchasing or learning, your journey starts with us. 
       `;
      break;

    case 'orange':
      title = 'Customer Service';
      paragraph = `
        At Bugatti, customer satisfaction is the cornerstone of our success. 
        Our dedicated service team is available to assist you at every stage of ownership. 
        From basic inquiries to complex technical support, we handle it all with precision. 
        We treat every customer as part of the Bugatti family. 
        Our goal is to exceed expectations, not just meet them. 
        You can reach us through a variety of platforms, any time, anywhere. 
       `;
      break;

    case 'yellow':
      title = 'La Maison Pur Sang';
      paragraph = `
        La Maison Pur Sang represents the soul of Bugatti personalization. 
        It’s where individuality meets automotive artistry. 
        Every client is offered an unparalleled customization experience. 
        From exclusive materials to personalized embroidery, everything is tailored. 
        Our artisans work closely with you to bring your vision to life. 
        No two vehicles are alike — each is a true reflection of its owner. 
        `;
      break;

    case 'pink':
      title = 'Collections';
      paragraph = `
        Bugatti Collections blend luxury with lifestyle. 
        Discover a curated range of premium apparel, accessories, and collectibles. 
        Designed for those who appreciate refinement both on and off the road. 
        Our collections are crafted with the same precision as our cars. 
        From fashion to timepieces, quality is never compromised. 
        Every piece echoes the brand's heritage and design philosophy. 
        Collaborations with elite designers bring exclusivity to every item. 
        `;
      break;

    case 'gray':
      title = 'BUGATTI Store';
      paragraph = `
        The official BUGATTI Store is your destination for high-end merchandise. 
        Our store features a luxurious assortment of gear and lifestyle products. 
        From polos to leather goods, each item represents excellence. 
        The designs are inspired by the elegance of Bugatti vehicles. 
        Whether online or in select showrooms, shopping is seamless. 
        Products are made with superior materials and modern aesthetics. 
       `;
      break;
  }

  colorDiv.innerHTML = `
    <div class="text-white  w-full  gap-6 px-10 py-6 max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">${title}</h2>
      <p class="text-lg leading-8 whitespace-pre-line">${paragraph.trim()}</p>
    </div>
  `;
}









document.querySelectorAll('.group').forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => {
      video.play();
    });
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });



   AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // whether animation should happen only once
  });