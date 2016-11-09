$(document).ready(function (e) {
    ($('section').height() > $('aside').height()) ? $('aside').height($('section').height()) : $('section').height($('aside').height());
    goToUrl = function (url) {
        window.location = url;
    }
});