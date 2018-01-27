let zaksvg = SVG('zak');
zaksvg.animate({ ease: '<>', delay: '.1s' }).attr({ fill: '#E1E1E1' }).
after(function() {
    zaksvg.animate({ ease: '<>', delay: '.5s' }).attr({ fill: '#000' })
});

setInterval(function() {
    if (document.visibilityState != "visible") { $('title').html("Miss you :("); } else { $('title').html("&copy; Zakarya KARTTI "); }
}, 2000);

function svgAnimate(attr, delay, el = zaksvg) {
    return el.animate({ ease: '<>', delay: delay }).attr(attr);
}

$('#mail').hover(function() {
    let mailsvg = SVG('mail');
    svgAnimate({ fill: "#FFB400" }, '2s', mailsvg);
    svgAnimate({ fill: "#FFB400" }, '1s');
});

$('#li').hover(function() {
    let lisvg = SVG('li');
    svgAnimate({ fill: "#0077B5" }, '2s', lisvg);
    svgAnimate({ fill: "#0077B5" }, '1s');
});

$('#phone').hover(function() {
    let phonesvg = SVG('phone');
    svgAnimate({ fill: "#25D366" }, '2s', phonesvg);
    svgAnimate({ fill: "#25D366" }, '1s');
});

$('#fb').hover(function() {
    let fbsvg = SVG('fb');
    svgAnimate({ fill: "#3b5998" }, '2s', fbsvg);
    svgAnimate({ fill: "#3b5998" }, '1s');
});

$('#gmail').hover(function() {
    let gmailsvg = SVG('gmail');
    svgAnimate({ fill: "#c71610" }, '2s', gmailsvg);
    svgAnimate({ fill: "#c71610" }, '1s');
});