 let input = document.getElementById('inputToDo') 
 let classDeleteBtn = document.querySelectorAll('.delete')
 let ul = document.getElementById('ulToDo') 
 let submitToDo = document.querySelector('.add')

 submitToDo.addEventListener('submit', function(event){
    event.preventDefault();
 });

function submitToDoList(valueToDo){
    let insertLi = document.createElement('li')
    insertLi.setAttribute('id','liToDo')
    insertLi.className = 'list-group-item d-flex justify-content-between align-items-center'

    let insertSpan = document.createElement('span')
    insertSpan.textContent = valueToDo 

    let insertI = document.createElement('i')
    insertI.className = 'fa fa-trash-o delete'
    insertI.addEventListener('click', function(event){
        event.target.parentElement.remove()
    })
    
    insertLi.append(insertSpan,insertI) 
    ul.append(insertLi)
    input.value = ''
}
 //for add to do
 input.addEventListener('keydown', function (e) {
    let NewTodoValue = e.target.value.trim()
    console.log(NewTodoValue)
     if (e.key === 'Enter') {
        if (NewTodoValue){
            submitToDoList(NewTodoValue)
        }
     }
 })

//for delete to do 
//   classDeleteBtn.forEach(function(btn) {
//     btn.addEventListener('click', function(e){
//         e.target.parentElement.remove()
//     })
//  })

// ul.addEventListener('click',function(e){
//     if(e.target.classList.contains('delete')){
//         e.target.closest('li').remove();
//     }
// })