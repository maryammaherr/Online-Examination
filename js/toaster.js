function toastWarning(msg){
    toastr.warning(msg);
}

function toastSuccess(msg){
    toastr.success(msg);
}

function toastInfo(msg){
    toastr.info(msg);
}

function toastError(msg){
    toastr.error(msg);
}

$(document).ready(function() {

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
    }

});



