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

}


$(document).ready(function(){
  $('select').formSelect();
});
