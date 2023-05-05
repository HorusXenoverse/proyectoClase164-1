AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        if(e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowRight" || e.key == "ArrowLeft"){
          var pasos = document.querySelector("#sound2")
          pasos.components.sound.playSound()
        }

      });
    },
  });


  
