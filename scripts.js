 // Toggle category list
    function toggle(element) {
      const list = element.nextElementSibling;
      list.style.display = list.style.display === "block" ? "none" : "block";
    }

    // Search doctor by name
    document.getElementById("search").addEventListener("input", function() {
      let search = this.value.toLowerCase();
      document.querySelectorAll(".category").forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(search) ? "block" : "none";
      });
    });

    //whatsapp
    