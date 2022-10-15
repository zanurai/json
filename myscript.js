showtask();

let text = document.getElementById("text");
let tasks = document.getElementById("tasks");
tasks.addEventListener("click", function () {
    textval = text.value;
    if (textval.trim() != 0) {
        let webtask = localStorage.getItem("localtask");

        if (webtask == null) {
            taskObj = [];
        } else {
            taskObj = JSON.parse(webtask)
        }

        taskObj.push(textval);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
    }
    showtask();
})

function showtask() {
    let webtask = localStorage.getItem("localtask");

    if (webtask == null) {
        taskObj = [];
    } else {
        taskObj = JSON.parse(webtask)
    }
    let html = '';
    let POP = document.getElementById("POP");
    taskObj.forEach((item, index) => {
        html += `<tr>
            <th scope="row"><br>${index + 1}</th>
            <td>${item}</td>
            <td><button type="button"onclick="edittask(${index})" class="text-primary">
            <i class="fa fa-edit"id="edit">Edit</i></button></td>
            <td><button type="button"onclick="deleteitem(${index})" class="text-danger">
            <i class="fa fa-trash"id=delete>Delete</i></button></td>
        </tr>`
    });
    POP.innerHTML = html;

}
//edittask

function edittask(index) {
    let saveindex = document.getElementById("saveindex")
    let tasks = document.getElementById("tasks");
    let savetask = document.getElementById("savetask")

    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    text.value = taskObj[index];

    tasks.style.display = "none"
    savetask.style.display = "inline-block"
}

//savetask
let savetask = document.getElementById("savetask");
savetask.addEventListener("click", function () {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let tasks = document.getElementById("tasks");
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = text.value;
    savetask.style.display = "none";
    tasks.style.display = "inline-block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    text.value = " ";
    showtask();
})

//deleteitem
function deleteitem(index) {

    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}
//deletes
let deletes = document.getElementById("deletes");
deletes.addEventListener("click", function () {
    //let savetask = document.getElementById("savetask");
    //let tasks = document.getElementById("tasks");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);

    if (webtask == null) {
        taskObj = [];
    } else {
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    //savetask.style.display = "none"
    //tasks.style.display = "inline-block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    //text.value = " ";
    showtask();
})
//search
let searchbox = document.getElementById("search");
searchbox.addEventListener("input", function () {
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function (item) {
        let searchtext = item.getElementsByTagName("td")[0].
            innerText;
        let searchboxval = search.value;
        let re = new RegExp(searchboxval, 'gi');

        if (searchtext.match(re)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}) 