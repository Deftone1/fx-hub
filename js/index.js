import 'bootstrap/dist/js/bootstrap.bundle';

// Javascript to allow dropdown functionality
Template.navBarTemplate.events({
    'click .dropdown-toggle': function (e) {
        e.preventDefault();
        $(e.target).find('.dropdown-menu').toggle();
        }
});

// Jaws Modal Functionality
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

 

