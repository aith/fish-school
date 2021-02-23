let can; let canw = 800; let canh = 800;


let rules = {
    0: ["1[0]0"],
    1: ["11"]
}
function setup() {
    can = createCanvas(canh, canw)
    frameRate(60)
    let axiom = "0"
    axiom = doRules(axiom)
    print(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    turtle(axiom)
    print(axiom)
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

    let len = 50
function turtle(axiom) {
    len *= 0.5;
    let angle = radians(45)
    stroke(000)
    translate(canw/2, canh/2)
    for(let i = 0; i < axiom.length; i++) {
        let c = axiom.charAt(i)
        switch(c) {
            case "0":
                line(0,0,0,-len)
                break;
            case "1":
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
    
}
