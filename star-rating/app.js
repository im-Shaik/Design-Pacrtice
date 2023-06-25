class Rating {
  // Constructor
  constructor() {
    this.stars = document.querySelectorAll(".fa-star");
    this.rating = document.getElementById("rating");
  }

  // Get rate
  rate() {
    this.stars.forEach((el, index1) => {
      el.addEventListener("click", () => {
        this.stars.forEach((el, index2) => {
          if (index1 >= index2) {
            el.classList.add("color");
            this.msg(index1);
          } else {
            el.classList.remove("color");
            this.msg(index1);
          }
        });
      });
    });
  }

  // Get msg
  msg(index) {
    if (index < 1) {
      this.rating.innerHTML = "Bad";
    }
    if (index > 1) {
      this.rating.innerHTML = "Ok";
    }
    if (index > 2) {
      this.rating.innerHTML = "Good";
    }
  }
}

// Assign Obj
const rating = new Rating();
// Call
rating.rate();
