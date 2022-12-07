$(document).ready(function() {
    //document.getElementById("quan").focus();

    //old newListEnty()  
    //a();
    setQuanOnAcction()

});
function setQuanOnAcction(params) {
    $('#quan').on('input', a)
}

function newListEnty(params) {

    //get input
    $('#quan').on('input', function(e) {
        var model = $('#quan').val();

        let newInput = $("<input>").html("test")
        newInput.attr("contenteditable", false)
        newInput.attr("type", "checkbox")
        $("ul").append(newInput)

        replsed = $("#quan").replaceWith(function() {

            let newReplaceOb = $("<li>").html(model);
            newReplaceOb.attr("contenteditable", true)
            newReplaceOb.attr("id", "newEnty")
            return newReplaceOb;
        });
        let newEnty = document.getElementById("newEnty");

        newEnty.focus();
        window.getSelection().selectAllChildren(newEnty);

        window.getSelection().collapseToEnd();

        //newEnty.classList.remove("newEnty");
        newEnty.removeAttribute("id");
        let inputQuan = '<input type="text" id="quan" >'
        $("ul").append($("<li>").html(inputQuan));
        newListEnty()
    });

}

function a(params) {
    addTask();
    focusNewTask();
    addTaskInput();
    setQuanOnAcction();
}

function focusNewTask() {
    let newEnty = document.getElementById("newEnty");

    newEnty.focus();
    window.getSelection().selectAllChildren(newEnty);

    window.getSelection().collapseToEnd();

    //newEnty.classList.remove("newEnty");
    newEnty.removeAttribute("id");
}

function addTaskInput() {
    let inputQuan = '<input type="text" id="quan" >'
    $("ul").append($("<li>").html(inputQuan));

}

function addTask(task) {
    var model = $('#quan').val();

    let newInput = $("<input>").html("test")
    newInput.attr("contenteditable", false)
    newInput.attr("type", "checkbox")
  newInput.attr("onclick","pendingToggle(this)")
    //$("ul").append(newInput)  onclick="pendingToggle(this)"

    let taskLable = $("<text>").html(model);
    taskLable.attr("contenteditable", true)
    taskLable.attr("id", "newEnty")
  taskLable.attr("min-width","300px");
  let removeButton =$("<button>").html("&#10006")
  removeButton.attr("onClick","removeEntry(this)")

  
    let taskDiv = $("<div>");
    taskDiv.append(newInput);
    taskDiv.append(taskLable);
  taskDiv.append(removeButton);
  //<button>&#10006;</button>

    replsed = $("#quan").replaceWith(taskDiv);

}

function removeEntry(toRemove) {
  //removes ganze
  toRemove.parentNode.parentNode.remove()
}
function pendingToggle(e) {
  e.parentNode.classList.toggle('unpending');
}
    
/*
for (let name of document.querySelectorAll('input')) {
    name.addEventListener('click', clickHandler);
}

function clickHandler(e) {        
    let taskElement =e.path.filter(function (x) {return x.type === 'checkbox'})[0].parentNode

    taskElement.classList.toggle('unpending');

}*/

/*

function taskUnpending(params) {
    //console.log("ggggg")
    test()
}

function test(params) {
    //console.log("test()")



  }


$('input[type="checkbox"]').click(function(){
  if($(this).is(":checked")){
    console.log(":checked")

    //input element where you put value
    $("#isClicked").val("Yes");
 console.log($("#isClicked").val());              
  }
  else if($(this).is(":not(:checked)")){
    $("#isClicked").val("");
      console.log( $("#isClicked").val());
      

    }
});
*/
