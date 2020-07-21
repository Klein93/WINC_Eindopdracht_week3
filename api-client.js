const someAPICallToGetAllTasks = async function () {
    const apiUrl = `https://wincacademydatabase.firebaseio.com/bram/tasks.json`;
    try {
        let taskData = await fetch(apiUrl, { method: "GET" })
        return taskData.json();
    } catch (error) {
        console.log(error);
    }
};

const GetDataresult = async function () {
    let dataresult = await someAPICallToGetAllTasks();
    let tasks = Object.keys(dataresult).map(key => ({
        id: key,
        description: dataresult[key].description,
        done: dataresult[key].done
    }));
    return tasks;
};

const addSingleTask = async function (task) {
    const postUrl = `https://wincacademydatabase.firebaseio.com/bram/tasks.json`;
    try {
        await fetch(postUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(task),
        })
        addAllTheTasksToDom();
    } catch (error) {
        console.log(error);
    }
};

const removeSingleTask = async function (taskId) {
    const delUrl = `https://wincacademydatabase.firebaseio.com/bram/tasks/${taskId}.json`;
    try {
        await fetch(delUrl, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(),
        })
        addAllTheTasksToDom();
    } catch (error) {
        console.log(error);
    }
};

const updateDoneStatusOfSingleTask = async function (taskId, update) {
    const patchUrl = `https://wincacademydatabase.firebaseio.com/bram/tasks/${taskId}.json`;
    try {
        await fetch(patchUrl, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(update),
        })
        addAllTheTasksToDom();
    } catch (error) {
        console.log(error);
    }
};

const updateDescriptionOfSingleTask = async function (taskId, description) {
    const patchdescrUrl = `https://wincacademydatabase.firebaseio.com/bram/tasks/${taskId}.json`;
    try {
        await fetch(patchdescrUrl, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(description),
        })
        addAllTheTasksToDom();
    } catch (error) {
        console.log(error);
    }
};



