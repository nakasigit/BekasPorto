var slider1 = $(".imageslider.one")
var prev1 = $(".prev.one")
var next1 = $(".next.one")
var x1 = 0
slider1.css('left', x1 + "%")

next1.click(
    () => {
        if (x1 < 500) {
            x1 += 100;
        } else if (x1 == 500){
            x1 -= 500;
        }
        slider1.css('left', -x1 + "%")
    }
)

prev1.click(
    () => {
        if (x1 == 0) {
            x1 += 500;
        } else if (x1 > 0){
            x1 -= 100;
        }
        slider1.css('left', -x1 + "%")
    }
)

var slider2 = $(".imageslider.two")
var prev2 = $(".prev.two")
var next2 = $(".next.two")
var x2 = 0
slider2.css('left', x1 + "%")

next2.click(
    () => {
        if (x2 < 600) {
            x2 += 100;
        } else if (x2 == 600){
            x2 -= 600;
        }
        slider2.css('left', -x2 + "%")
    }
)

prev2.click(
    () => {
        if (x2 == 0) {
            x2 += 600;
        } else if (x2 > 0){
            x2 -= 100;
        }
        slider2.css('left', -x2 + "%")
    }
)