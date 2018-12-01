console.log("you did it")

function displayGenCharacter(character) {
    $(`#${character.char.value}`).animate({left: character.char.x * 20 + 'px', top: character.char.y * 20 + 'px'}, 100)
}

function npcDisplay(w) {
    if (w.characters) {
        w.characters.forEach(c => {
            console.log(c);
            var parent_char = document.getElementById('gameContainer');         
            var new_world_char = document.createElement("Div");        
            parent_char.appendChild(new_world_char);                             
            document.getElementById("gameContainer").appendChild(new_world_char); 
            $(new_world_char).attr('id', `${c.char.value}`)
            $(`#${c.char.value}`).css("background", `url('${c.char.path}.png') 20px, 20px`)
            .css("background-repeat", `no-repeat`)
            .css("background-position", `center`)
            .css("background-size", `cover`)
            .css("width","20px")
            .css("height","20px")
            .css("position","absolute")
            .css("padding","1.85px 0px")
            .css("margin","1.85px 0px")
            .css("margin-top","2.6px");
            c.char.x = c.starting_coordinates.char.x
            c.char.y = c.starting_coordinates.char.y
            displayGenCharacter(c);
        });
    }


function canPlayerPassNpc(world_characters) { // should be all world characters
    world_characters.characters.forEach(c => {
        if (currenWorld[mainCharacter.x][mainCharacter.y] === currenWorld[c.char.x][c.char.y]){
            //step back
        }
    });
    
}


    // #generalCharacter {
    //     background-repeat: no-repeat;
    //     background-position: center;
    //     background-size: cover;
    //     width: 20px;
    //     height:20px;
    //     position: absolute;
    //     padding: 1.85px 0px;
    //     margin: -1.85px 0px;
    //     margin-top: 2.6px;
    // }
    

}