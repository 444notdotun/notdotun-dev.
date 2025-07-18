console.log("todolist");

let ul = document.getElementById("todolist");
let button = document.querySelector("button");
let input = document.querySelector("input");
let main = document.querySelector("main")
let clear = document.getElementById("clear")
let div = document.createElement("div")
let pp = document.createElement("p");
div.appendChild(pp)

let space = function () {
    if (ul.children.length < 1) {
        pp.textContent = "you have no to do for the day!"
        // bn();
    } else {
        pp.textContent = ` you have ${ul.children.length} to do for the day`;

    }
}
let clearbn = document.createElement("button")


button.addEventListener("click", () => {
    let inputvalue = input.value;

    if (inputvalue === "") {
        alert("enter a to-do")
        return
    }



    let li = document.createElement("li")
    li.textContent = inputvalue
    li.style.fontSize = "bold"
    li.style.textTransform = "capitalize"
    let completebn = document.createElement("button")
    completebn.textContent = "complete"
    completebn.addEventListener("click", () => {
        completebn.textContent = "completed!"
        li.style.textDecoration = "line-through"
    })
    let deletebn = document.createElement("button")
    deletebn.textContent = "Delete"

    deletebn.addEventListener("click", () => {
        li.remove()
        space()
        bn()
    })
    input.value = "";
    input.focus();

    li.appendChild(completebn)
    li.appendChild(deletebn)
    ul.appendChild(li)

    function bn() {

        if (ul.children.length > 0) {
            clearbn.textContent = "clear all"
            clear.appendChild(clearbn)
            clearbn.addEventListener("click", () => {
                li.remove();
                space()
                if (ul.children.length === 0) {
                    clear.removeChild(clearbn)
                }
            })
        } else if (ul.children.length === 0) {
            clear.removeChild(clearbn)
        }


    }

    space()
    bn()

})
main.appendChild(div)
space()
