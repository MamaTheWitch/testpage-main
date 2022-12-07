function fillPlayers() {
        					var select = document.getElementById("datalist"); 
        					for(var i = 0; i < players.length; i++) {
                      var opt = players[i];
                      var element = document.createElement("option");
                      element.text = opt;
                      element.value = opt;
                      select.add(element);
        					};
}
fillPlayers()
