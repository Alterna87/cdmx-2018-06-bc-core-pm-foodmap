const modalPlace =(name,photo)=> {
  swal({
    imageUrl: `${photo}`,
    imageWidth: 400,
    imageHeight: 200,
    title: `<strong>${name}</strong>`,
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//github.com">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  })

}
