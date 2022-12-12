let form = document.querySelector(".form");
let inputs = document.querySelectorAll(".input");
let btn = document.querySelector(".button");
let div = document.querySelector(".box");
let inputs_box = document.querySelector(".inputs_box")
let arr = [];
let obj = {};
if (btn.type == 'submit') {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (const i of inputs) {
      obj.id = Math.round(Math.random() * 1000000);
      obj[i.name] = i.value;
      i.value = '';
    };
    arr[arr.length] = obj;
    obj = {};
    render();
  });
}
function render() {
  div.textContent = '';
  for (let i of arr) {
    let ul = document.createElement('ul');
    ul.innerHTML = `  
    <li>${i.name}</li>   
    <li>${i.number}</li>       
    <li>${i.mail}</li>
    <li><button onclick="del(${i.id})" type="button">Delete</button><button onclick="edit(${i.id})" type="button">Edit</button></li>
    `;
    div.append(ul);
  };
};
function del(num) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (num == arr[i].id) {
      arr.splice(i, 1);
      render();
    };
  };
};
function edit(num) {
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i].id) {
      inputs[0].value = arr[i]['name'];
      inputs[1].value = arr[i]['number'];
      inputs[2].value = arr[i]['mail'];
      btn.style.display = 'none'
      btn.type = 'button'
      let newBtn = document.createElement("button")
      newBtn.textContent = "Edit Ok"
      newBtn.type = 'button'
      inputs_box.append(newBtn)
      newBtn.addEventListener("click", () => {
        arr[i]['name'] = inputs[0].value;
        arr[i]['number'] = inputs[1].value;
        arr[i]['mail'] = inputs[2].value;
        newBtn.remove()
        btn.style.display = 'inline-block'
        btn.type = 'submit'
        render()
        inputs[0].value = '', inputs[1].value = '', inputs[2].value = ''
      });
      break
    }
  };
};
