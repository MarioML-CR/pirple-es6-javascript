const submitName = (event) => {
    event.preventDefault();
    const name_input = document.getElementById("name_imput");
    const name = name_input.value;
    debugger
    console.log(name);
    const character_array = name.split("");
    debugger
    console.log(character_array);
    const reversed_character_array = character_array.reverse();
    const reversed_name = reversed_character_array.join("");
    console.log(reversed_name);
    document.getElementById('reversed_name').innerHTML = reversed_name;
}

// const name_input = document.getElementById("name_imput");
// console.log(name_input.name);