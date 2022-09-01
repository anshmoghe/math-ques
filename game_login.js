
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
    localStorage.setItem("player1name",player1_name);
    localStorage.setItem("player2name",player2_name);
	  //Set "player2_name" using localStorage.setItem() function

    window.location = "index.html";
}

