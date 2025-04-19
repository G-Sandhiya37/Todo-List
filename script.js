    let input= document.getElementById("input");
    let sumbit= document.getElementById("sumbit");
    let AddTask= document.getElementById("AddTask");
    let doneTask= document.getElementById("doneTask");
    let list= new Array();
    sumbit.addEventListener('click',(event)=>{
        if(input.value!=''){
          list.push(input.value);
        AddTask.innerHTML += '<li class="list-group-item" id="'+(list.length-1)+'"><button class="btn btn-warning" onclick="complete('+(list.length-1)+')">'+input.value+'</button></li>';
        input.value= '';  
        }
        
    })
    function complete(id){
        doneTask.innerHTML +='<li class="list-group-item"><i class="bi bi-check2-all"></i>'+list[id]+'</li>';
        document.getElementById(id).style.display="none";
    }