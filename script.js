const input = document.getElementById("inputfield");
const addTaskButton = document.getElementById("button");
const list = document.getElementById("list");

const addAllTheTasksToDom = async function () {
    const allTasks = await GetDataresult();
    while (list.firstChild) { list.removeChild(list.firstChild) };
    allTasks.forEach(task => {
        const taskitem = document.createElement("li");
        const trashbutton = document.createElement("button");
        const trash = document.createElement("img");
        const check = document.createElement("input");
        check.type = "checkbox";
        taskitem.appendChild(check);
        const description = document.createTextNode(task.description);
        taskitem.appendChild(description);

        if (task.done == "true") {
            taskitem.classList.add("lined");
        }

        trash.src = "trash-delete-icon.jpg";
        trash.style.height = "20px";
        trash.style.width = "20px";
        trashbutton.appendChild(trash);
        const editfield = document.createElement("input");
        editfield.type = "text";
        const submitEditButton = document.createElement("button");
        submitEditButton.innerText = "Edit";
        submitEditButton.style.width = "100px";
        taskitem.appendChild(editfield);
        taskitem.appendChild(submitEditButton);
        taskitem.appendChild(trashbutton);
        list.appendChild(taskitem);
        taskitem.style.display = "flex";
        taskitem.style.width = "700px"
        taskitem.style.justifyContent = "space-between";
        editfield.style.display = "none";
        submitEditButton.style.display = "none";
        trashbutton.addEventListener("click", function () { removeSingleTask(task.id) });
        check.addEventListener("change", function () {
            if (this.checked) {
                updateDoneStatusOfSingleTask(task.id, { done: `true` })
            }
        })

        taskitem.addEventListener("click", function () {
            editfield.style.display = "block";
            submitEditButton.style.display = "block";
        })

        submitEditButton.addEventListener("click", function () {
            if (editfield.value == "") {
                return;
            } else if (editfield.value !== "") {
                updateDescriptionOfSingleTask(task.id, { description: editfield.value })
            }
        })
    });
};

document.addEventListener("DOMContentLoaded", function () {
    addAllTheTasksToDom();
    addTaskButton.addEventListener("click", function () {
        addSingleTask({ description: input.value, done: `false` });
    });
})
