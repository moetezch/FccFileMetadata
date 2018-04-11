$(document).ready(function () {
    $('#fileinput').on('change', function (evt) {
       
        if (this.files[0].size > 10485760) {
     
            $('#button').hide()
            alert("File size Limit is 10 mb, please reload the page and choose a smaller one")
        }
    });
});
