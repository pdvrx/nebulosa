class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
  
    const btn1 = document.querySelector(".artista:nth-child(1) :nth-child(1)");
    btn1.onclick = function(){
      var bio=document.querySelector(".artista :nth-child(2)");
      bio.classList.toggle("bio-active")
      console.log("o")

    }

    const btn2 = document.querySelector(".artista:nth-child(2) :nth-child(1)");
    btn2.onclick = function(){
      var bio=document.querySelector(".artista:nth-child(2) :nth-child(2)");
      bio.classList.toggle("bio-active")
      console.log(bio)
    }

    const btn3 = document.querySelector(".artista:nth-child(3) :nth-child(1)");
    btn3.onclick = function(){
      var bio=document.querySelector(".artista:nth-child(3) :nth-child(2)");
      bio.classList.toggle("bio-active")
    }

    const btn4 = document.querySelector(".artista:nth-child(4) :nth-child(1)");
    btn4.onclick = function(){
      var bio=document.querySelector(".artista:nth-child(4) :nth-child(2)");
      bio.classList.toggle("bio-active")
    }

    console.log(document.querySelector(".artista:nth-child(2) :nth-child(3)"))

    







