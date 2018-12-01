console.log("you did it")

function changeChar(char, obj_string) {
    $(`#${char.name}`).css("background", `url('${char.path}${obj_string}.png') 20px, 20px`)
    .css("background-repeat", `no-repeat`)
    .css("background-position", `center`)
    .css("background-size", `cover`);
    return;
}