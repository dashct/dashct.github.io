var list = document.getElementById('enemies');

function addEnemy() {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode("harry jenko"));
    list.appendChild(entry);
}

function joinClub() {
    alert("you have joined the DCT fanclub 🎉");
}
