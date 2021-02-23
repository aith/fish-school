// http://algorithmicbotany.org/
let can; let canw = 800; let canh = 800;


let rules = {
    0: ["1[0[0]]"],
    1: ["11"]
}

let angle;
let axiom = "0"

function setup() {
    can = createCanvas(canh, canw)
    frameRate(20)
    axiom = doRules(axiom)
    print(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    turtle(axiom)
    print(axiom)
    slider = createSlider(0, TWO_PI, PI/4, 0.01)
}

function doRules(axiom) {
    let postman = ""
    for(let i = 0; i < axiom.length; i++){
        let c = axiom.charAt(i)
        if(!c) return;
        if(!rules[c]) {
            postman += c;
        }
        else {
            postman += rules[c][0]
        }
    }
    return postman
}

let len = 1
function turtle(axiom) {
    // stroke(000)
    translate(canw/2, canh/2)
    for(let i = 0; i < axiom.length; i++) {
        let c = axiom.charAt(i)
        switch(c) {
            case "0":
                line(0,0,0,-len)
                break;
            case "1":
                // line(0,0,0, -len/4)
                line(0,0,0, -len)
                translate(0,-len)
                break;
            case "[":
                push()
                rotate(-angle)
                break;
            case "]":
                pop()
                rotate(angle)
                break;
        }
    }
}

let start = "F"
function draw() {
    background(111111)
    angle = slider.value()
    turtle(axiom)
    // background("white")
    // turtle(axiom)
    // angle =(sin(frameCount/10)) * 2*Math.PI
    // print(angle)
}
