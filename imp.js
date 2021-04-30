
function pagechange()
{
    window.location.href = "index.html";
}

let div_tag = document.querySelector('#imp_notes');
let h = "";
const add = document.getElementsByClassName('fav');
let c = document.getElementsByClassName("noteCard");


let items = [];

for (let i = 0; i < add.length; i++)
{
   
    add[i].addEventListener("click", function (e) {
        
        if (typeof(Storage) !== 'undefined')
        {
            let item = {
                id: i + 1,
                title: e.target.parentElement.children[0].textContent,
                text: e.target.parentElement.children[1].textContent,
                no: 1
            };
            if (JSON.parse(localStorage.getItem('items')) === null)
            {
                items.push(item);
                localStorage.setItem("items", JSON.stringify(items));
                window.location.reload();
            }
            else {
                const localItem = JSON.parse(localStorage.getItem("items"));
                localItem.map(data => {
                    if (item.id == data.id) {
                        item.no =1;
                        data.no = 1;
                        if (item.no > 1 || data.no>1)
                        {
                            items.remove(data);
                        }
                        
                    }
                    else {
                        items.push(data);
                        window.location.reload();
                    }
                    
                });
                items.push(item);
                localStorage.setItem("items", JSON.stringify(items));
                window.location.reload();
            }
        }
        else {
             alert("Storage is not working!");
        }
        add.style.backgroundColor = '#000000';
    });
}
s();

function s() {
    
        if (JSON.parse(localStorage.getItem('items')) == 0) {
            h += '<div class="mx-auto" style="width: 200px;" ><p>No Book Marks</p></div>';
        }
        else {
            JSON.parse(localStorage.getItem('items')).map(data => {
                h += '<div class="noteCard my-2 mx-2 card" style="width: 18rem;"><div class="card-body"><h4 class="card-title index">' + data.title + '</h4><p class="card-text ct">' + data.text + '</p><button class="btn btn-warning rem" onclick=Del(this)><i class="far fa-times-circle"></i></button><pre>                              ' + data.id + '</pre></div></div>';
            });
        }
        div_tag.innerHTML = h;
}

