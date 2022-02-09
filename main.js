
let count = 0;
const addTask = document.getElementById('add-btn');
addTask.addEventListener('click',function (){

    const inputField = document.getElementById('input-field')
   
    if (inputField.value ==""){
        alert('Input cant be empty.');
    }else if(isNaN(inputField.value)){
        count++;
        const task = document.createElement('tr');
        task.innerHTML = ` <th scope="row">${count}</th>
                         <td class='w-75'>${inputField.value}</td>
                         <td>
                         <button type="button" class="btn btn-outline-success done-btn">Done</button>
                         <button  type="button" class="btn btn-outline-danger del-btn">Delete</button>
                         </td>
                     `
         const taskContainer = document.getElementById('content-holder');
         taskContainer.appendChild(task);
         inputField.value = '';
     }else{
         alert('Its a Number. Actually a task can\'t be number')
     }
    
    const delBtn = document.getElementsByClassName('del-btn');
    const doneBtn = document.getElementsByClassName('done-btn');
    
    for(const button of delBtn){
        button.addEventListener('click',function(e){
            // const contentHolder = button.parentNode.parentNode.parentNode;
            // contentHolder.removeChild(button.parentNode.parentNode)
            e.target.parentNode.parentNode.parentNode.style.display = 'none';           
        })
    }
    for(const button of doneBtn){
        button.addEventListener('click',function(e){
            e.target.parentNode.parentNode.style.textDecoration = 'line-through';
        })
    }


    
    

})