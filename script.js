// function popupFunc(){
//     const popup = document.querySelector(".pop-up");
//     if (popup.style.display === "none") {
//         popup.style.display = "block";
//     } else {
//         popup.style.display = "none";
//     }
// }
document.addEventListener('DOMContentLoaded', () => {
    var popup = document.getElementsByClassName("pop-up");
    // open the popup
    var readMore = document.getElementsByClassName("read-more-btn");
    for (var x = 0; x < readMore.length; x++) {
        (function(index) {
            readMore[index].addEventListener('click', function() {
                popup[index].style.display = 'flex';
            });
        })(x);
    }
    // close the popup
    var close = document.getElementsByClassName("close");
    for (var y = 0; y < close.length; y++) {
        (function(index) {
            close[index].addEventListener('click', function() {
                popup[index].style.display = 'none';
            });
        })(y);
    }
});