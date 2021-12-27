//define the element

var taskInput = document.getElementById("taskInput");
var taskHolder = document.getElementById("task-holder");
var taskHolderdone = document.getElementById("task-holder-done");
var task = document.getElementsByClassName('task');

//camel case
function submitTask() {
    console.log("Button clicked");
    
    //same as var val = document.getElementById("taskInput").value;
    var val = taskInput.value;
    console.log(val);

    if (val !== "") {
        //get input value
        //create a div. with a class = task element
        var taskDiv = document.createElement('div');
        taskDiv.className = "task";
        // taskDiv.addEventListener("click", delTask);


        // create p tag start
        var pEle = document.createElement("p");
        pEle.innerHTML = val;


        // document.createElement("p").innerHTML = val;

        // create p tag end


        // create del button

        var btn = document.createElement("BUTTON");
        btn.innerHTML = "delete";
        btn.className = "delbut";
        btn.addEventListener("click", delTask);

        var compbtn = document.createElement("BUTTON");
        compbtn.innerHTML = "completed";
        compbtn.className = "compbut";
        compbtn.addEventListener("click", compTask);
       

        //append the holder & div
        taskDiv.append(pEle);
        taskHolder.append(taskDiv);
        taskDiv.append(btn);
        taskDiv.append(compbtn);

        //to clear input data from task holder after submit
        taskInput.value = "";

    } else {
        alert("Please fill");
    }

}
//delTask funtion
function delTask() {
    // this.style.display = "none";
    alert("are you sure?");
    this.parentNode.remove();
}


function compTask() {
    alert("is it?");
    taskHolderdone.append(this.parentNode);
    document.getElementsByClassName('compbut').innerHTML = 'move back';

}
