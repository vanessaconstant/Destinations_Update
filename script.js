// Listen to the submit event happening on the form

document.getElementById('user_input_form').addEventListener('submit', (evt)=>{
    evt.preventDefault();
    

    const destination = document.getElementById('destination').value;
    const location = document.getElementById('location').value;
    const photourl = document.getElementById('photourl').value;
    const description = document.getElementById('description').value;


document.getElementById("user_input_form").reset();

const card = document.createElement('div');
card.classList.add("card");
card.setAttribute('style', "width:18rem");

document.getElementById('cards_container').append(card);


const img = document.createElement('img');
img.classList.add('card-img-top');
if(photourl.length === 0){
    img.setAttribute('src', 'https://cdn.mos.cms.futurecdn.net/z3rNHS9Y6PV6vbhH8w83Yn-1200-80.jpg') 
}else{
    img.setAttribute('src', photourl);
}

card.appendChild(img);

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.appendChild(cardBody);


const newDestElt = document.createElement('h5');
newDestElt.innerText = destination;
newDestElt.classList.add('card-title');
cardBody.appendChild(newDestElt);


const newLocElt = document.createElement('p');
newLocElt.innerText = location;
newLocElt.classList.add('card-text');
cardBody.appendChild(newLocElt);

// we only create the element that contains a description if the user puts an element.
if (description.length !== 0){
const newDescElt = document.createElement('p');
newDescElt.innerText = description;
newDescElt.classList.add('card-text');
cardBody.appendChild(newDescElt);


}

const editBtn = document.createElement('button');
editBtn.classList.add('btn', 'btn-warning');
editBtn.innerText = "Edit";
cardBody.appendChild(editBtn);
editBtn.addEventListener('click', handleEdit)

const removeBtn = document.createElement('button');
removeBtn.classList.add('btn', 'btn-danger');
removeBtn.innerText = "Remove";
cardBody.appendChild(removeBtn);
removeBtn.addEventListener('click', handleRemove)

})


function handleEdit(evt){
    const editBtn = evt.target;
    const cardBody = editBtn.parentElement;
    const card = cardBody.parentElement;

    const destElt = cardBody.children[0];
    const locElt = cardBody.children[1];
    const imgElt = card.children[0];

    
    const newDest = prompt("Enter new destination", destElt.innerText);
    const newLoc= prompt("Enter new location", locElt.innerText);
    const newImg = prompt("Enter new image url", imgElt.getAttribute('src'));

    if(newDest !== destElt.innerText){
        destElt.innerText = newDest;
    }

    if( newLoc !== locElt.innerText){
        locElt.innerText = newLoc;
    }


    if(newImg !== imgElt){
        imgElt.setAttribute('src', newImg);
    }

}

function handleRemove(evt){
    
    evt.target.parentElement.parentElement.remove();

}

// use the bootsrap card template with the user inputs

    /*
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    */