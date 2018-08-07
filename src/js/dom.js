const modalPlace =(name,photo, address, rating)=> {
  swal({
    imageUrl: `${photo}`,
    title: `<strong>${name}</strong>`,
    html:`<b>Dirección: </b> ${address} <br>` +
    `<b>Rating:</b> ${rating}`,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  })
};

const listPlace = (name, photo, address, rating)=> {
result = document.getElementById('result');
let photos;
if(photo =='') {
  photos = `<p class = 'orange-text'>${name}</p>`;
} else {
  photos = `<img src="${photo}">
  <span class="card-title">${name}</span>`;
}
  result.innerHTML += `<div class="col s12 m7">
      <div class="card">
        <div class="card-image">
        ${photos}
        </div>
        <div class="card-content">
          <p>${address}</p>
          <p>Ranking: ${rating}</p>
        </div>
      </div>
    </div>`;
}

let filter= document.getElementById('filter');
let result = document.getElementById('result');
const clean = () => {
  result.innerHTML ='';
}

const selectFilter = () => {
    return filter.value;

}

filter.addEventListener('change', findMe)



// Add JQuery for effect selects
$(document).ready(function(){
  $('select').formSelect();
});
