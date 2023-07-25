const navigationtItems = [
    
    "Dashboard",
    "Tables",
    
    "Task List",
    "Kanban",
    "Map",

    "Messages",
    "Calendar",
      

    "Users List",
    "Transactions",
    "Settings",
    "Login",

];


const navigationList = document.getElementById("navigation-list");

navigationItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.classList.add("dropdown-item");
  a.href = "#" + item.toLowerCase();
  a.textContent = item;
  li.appendChild(a);
  navigationList.appendChild(li);
});


