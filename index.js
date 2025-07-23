
    let arr = JSON.parse(localStorage.getItem("taskList")) || [];

    function displaytask(taskArray) {
      let output = "";
      taskArray.forEach((item, index) => {
        output += `<p>${index + 1}. ${item.task} - ${item.date} 
          <button onclick="remove(${index})">Remove</button></p>`;
      });
      document.getElementById("display").innerHTML = output;
    }

    function add() {
      let task = document.getElementById("task").value;
      let date = document.getElementById("date").value;

      if (task === "" || date === "") {
        alert("Please fill in both fields");
        return;
      }

      arr.push({ task, date });
      localStorage.setItem("taskList", JSON.stringify(arr));

      document.getElementById("task").value = "";
      document.getElementById("date").value = "";

      displaytask(arr);
    }

    function remove(index) {
      arr.splice(index, 1);
      localStorage.setItem("taskList", JSON.stringify(arr));
      displaytask(arr);
    }

    function search() {
      let find = document.getElementById("search").value.toLowerCase();
      const result = arr.filter(item =>
        item.task.toLowerCase().includes(find)
      );
      displaytask(result);
    }
    displaytask(arr);
  