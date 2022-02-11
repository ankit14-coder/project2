const body =document.querySelector("body");
      const navbar = document.querySelector(".navbar");
      const menu = document.querySelector(".menu-list");
      const menuBtn = document.querySelector(".menu-btn");
      const cancelBtn = document.querySelector(".cancel-btn");
      menuBtn.onclick = () => {
        menu.classList.add("active");
        navbar.classList.add("show");
        menuBtn.classList.add("hide");
        body.classList.add("disabledScroll");
      };
      cancelBtn.onclick = () => {
        menu.classList.remove("active");
        body.classList.remove("disabled");
        navbar.classList.remove("show");
        menuBtn.classList.remove("disabledScroll");
      };
      window.onscroll = () => {
        this.scrollY > 20
          ? navbar.classList.add("sticky")
          : navbar.classList.remove("sticky");
      };