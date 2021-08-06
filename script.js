
const taskList = [];
const badTaskList = [];

const handleOnSubmit = e => {

    const formData = new FormData(e);
    const task = formData.get("task");
    const hr = formData.get("hr");

    const newTask = {
        task,
        hr
    }

    // push list in the global array
    taskList.push(newTask);
    console.log(taskList);
   displayTaskList();
}

//displaying the task lists
const displayTaskList = () => {

    let tasks = "";
    
    taskList.map((item, i)=> {

        tasks += `
        <li>
        <div class="items">
          <span class="item"
            ><input type="checkbox" /><label for=""
              >${item.task}</label
            ></span
          >
          <span class="hrs">${item.hr}hrs/w</span>
          <button onclick ="markAsNotToDoTask(${i})">Mark Not To Do</button>
          <button onclick ="deleteItem(${i})">DELETE</button>
        </div>
      </li>
        `
    });

    document.getElementById("to-do-list").innerHTML = tasks;
};


// marks the task list as not to do list
const markAsNotToDoTask = (i) => {
//  1. find out which item is clicked 
    console.log(taskList[i]);

    // 2. remove that item from the array and put in the variable
    const item = taskList.splice(i, 1)[0];
    badTaskList.push(item);

    displayTaskList();
    displayBadTaskList();
};

//Delete item
const deleteItem = i => {
    taskList.splice(i,1);
    displayTaskList();
};

// 3. we need to have the variable to store in not to do items
//displaying badtasklists
const displayBadTaskList = () => {

// 4. item in point number 2 which was taken out from the task list array is now ut inside the new array

    let tasks = "";

// 5. loop through the array and display in the bad task list */
    badTaskList.map((item, i)=> {

        tasks += `
        <li>
        <div class="items">
          <span class="item"
            ><input type="checkbox" /><label for=""
              >${item.task}</label
            ></span
          >
          <span class="hrs">${item.hr}hrs/w</span>
          <button onclick ="markAsToDoTask(${i})">Mark as To Do</button>
        </div>
      </li>
        `
    });

    document.getElementById("bad-task-list").innerHTML = tasks;

};








// Reverse (from not to do list to task list)

const markAsToDoTask = (i) => {

    const item = badTaskList.splice(i,1)[0];
    taskList.push(item);

    displayBadTaskList();
    displayTaskList();
};



