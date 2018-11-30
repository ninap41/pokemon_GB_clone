console.log("you did it")

function changeChar(char_id, obj_string) {
    $(`#${char_id}`).css("background", `url('assets/mainCharacter_${obj_string}.png') 20px, 20px`)
    .css("background-repeat", `no-repeat`)
    .css("background-position", `center`)
    .css("background-size", `cover`);
    return;
}