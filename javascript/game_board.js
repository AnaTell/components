function movefirstplayer(item) {
  const firstPlayerPlace = item.querySelector("#player1_race .active");
  const firstPlayerMove = item.querySelector("#player1_race .active").nextElementSibling;
  firstPlayerPlace.classList.toggle("active");
  firstPlayerMove.classList.add("active");
}

function movesecondplayer(item) {
  const secondPlayerPlace = item.querySelector("#player2_race .active");
  const secondPlayerMove = item.querySelector("#player2_race .active").nextElementSibling;
  secondPlayerPlace.classList.toggle("active");
  secondPlayerMove.classList.add("active");
}

function resetplayers(item) {
  const firstPlayerPlace = item.querySelector("#player1_race .active");
  const secondPlayerPlace = item.querySelector("#player2_race .active");
  const playersBack = item.querySelectorAll('td:first-child');
  firstPlayerPlace.classList.remove("active");
  secondPlayerPlace.classList.remove("active");
  playersBack.forEach((player) => {
    player.classList.add("active");
  });
}

/*function movefirstplayerdow(item) {
  const firstPlayerPlace = item.querySelector("#player1_race .active");
  const firstPlayerMove = item.querySelector("#player1_race .active").nextElementSibling;
  firstPlayerPlace.classList.toggle("active");
  firstPlayerMove.classList.add("active");
}*/

document.addEventListener("keyup", (event) => {
  switch (event.keyCode) {
    case 88:
      if (document.querySelector('#player1_race td:last-child.active')) {
        window.alert("RED WINS!");
        resetplayers(event.currentTarget);
      } else {
        movefirstplayer(event.currentTarget);
      }
      break;
    case 112 :
      if (document.querySelector('#player2_race td:last-child.active')) {
        window.alert("BLUE WINS!");
        resetplayers(event.currentTarget);
      } else {
        movesecondplayer(event.currentTarget);
      }
      break;
    default:
      console.log('Something went wrong');
  }
});
