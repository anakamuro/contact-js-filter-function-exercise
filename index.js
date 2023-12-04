let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
 
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item');

    for(let i=0; i<li.length; i++){
        let h5 = li[i].getElementsByTagName('h5')[0];

        if(h5.innerHTML.toUpperCase().indexOf(filterValue) > -1){
          li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}