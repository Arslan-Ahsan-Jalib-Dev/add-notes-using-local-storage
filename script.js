var add_btn=document.getElementById("addBtn");
var myNotes=[];

if(localStorage.getItem('added_notes') !== null){
    showCards();
    myNotes=JSON.parse(localStorage.getItem('added_notes'));
}
console.log(myNotes);
add_btn.addEventListener("click",addUser);
//localStorage.setItem("lastname", "Smith");
//console.log(localStorage.getItem("lastname"));
function addUser(){
    var notes_title=document.getElementById("addTitle").value;
    var notes_des=document.getElementById("addTxt").value; 
    document.getElementById("addTitle").value="";
    document.getElementById("addTxt").value="";
    if(notes_title !="" && notes_des !=""){
        var obj= new notesObject(notes_title,notes_des);
        myNotes.push(obj);
         localStorage.setItem("added_notes", JSON.stringify(myNotes));
        showCards();
    }
 
    else{
        console.log("No cards");
    }
   
    
}

function notesObject(user_title,user_des,idd){
    this.title=user_title,
    this.description=user_des
}
function showCards(){
    if(localStorage.getItem('added_notes') !== null){
            var notes_list=JSON.parse( localStorage.getItem("added_notes"));
    var txt="";
    notes_list.map((val,index)=>{
        txt+=`<div class="col-md-4">
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${val.title}</h5>
                        <p class="card-text">${val.description}</p>
                        <button id="${index}"onclick="deleteNote(${index})" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>
            </div>
       `
    });
    document.getElementById("notes").innerHTML=txt;
    }
}

const deleteNote=(card_id)=>{
    
    myNotes=JSON.parse(localStorage.getItem('added_notes'));
    myNotes.splice(card_id,1);
    console.log(myNotes);
    localStorage.setItem("added_notes", JSON.stringify(myNotes));
    showCards();
    
}
