showNotes();

let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click", ()=>{
    let addText = document.getElementById("addText");
    let addTitle = document.getElementById("addTitle");
    let notesElement=localStorage.getItem("notesElement");
    if (notesElement == null)
    {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notesElement);
    }
    let Obj = {
        title:addTitle.value,
        text:addText.value
    }
    notesObj.push(Obj);
    localStorage.setItem("notesElement", JSON.stringify(notesObj));
    //this line will help to nullify the add text area after clicking on btn  
    addTitle.value = "";
    addText.value = "";
    // console.log(notesObj);
    showNotes();
});

function showNotes()
{
    let notesElement = localStorage.getItem("notesElement");
    if (notesElement == null)
    {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notesElement);
    }
    let html = "";
    notesObj.forEach((element,index)=>{
        html += `<div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h4 class="card-title index">${element.title}</h4>
                        <p class="card-text"> ${element.text} </p>
                        <button id="${index}" onclick="del(this.id)" class="btn btn-outline-warning del"><i class="far fa-times-circle"></i></button>
                        <button id="f" class="btn btn-outline-warning fav"><i class="far fa-star"></i></button>
                        <pre>                              ${index+1}</pre>
                    </div>    
                
                </div>`;
    });
    let notes = document.getElementById("notes");
    if (notesObj.length != 0)
    {
        notes.innerHTML = html;
    }
    else {
        notes.innerHTML = `<p id="para">Nothing to show!</p>`;
    }
};

 function del(index)
 {
     let notesElement=localStorage.getItem("notesElement");
     if (notesElement === null)
     {
         notesObj = [];
     }
     else {
         notesObj = JSON.parse(notesElement);
     }
     notesObj.splice(index, 1);
     localStorage.setItem("notesElement", JSON.stringify(notesObj));
     showNotes();  
}



let search = document.getElementById('search');
search.addEventListener("input", () => {
    let inputval = search.value;
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach((element) => {
        let cardText = element.getElementsByClassName("card-text")[0].innerText;
        if (cardText.includes(inputval))
        {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});

function pagechangetoimp()
{
    window.location.href = "imp.html";
}


