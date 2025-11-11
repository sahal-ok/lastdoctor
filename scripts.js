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
    fetch("https://api.countapi.xyz/hit/www.lastdr.com/visits")
      .then(res => res.json())
      .then(res => {
        document.getElementById("count").innerText = res.value;
      });
    //whatsapp
    