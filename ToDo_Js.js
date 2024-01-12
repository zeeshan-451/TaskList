const ToDo = () => {
    let x = document.getElementById("input").value;
    let tasks = document.getElementById("Tasks");
    if (x == "") {
      alert("Please Enter a Task");
    } else {
      let listItem = document.createElement("ul");
      listItem.innerHTML = `${x} <i class="fa fa-trash"></i>`;
      tasks.appendChild(listItem);
      document.getElementById("input").value = "";
      const del = () => {
        listItem.remove();
      };
      listItem.querySelector("i").addEventListener("click", del);
    }
  };