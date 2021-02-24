// http://algorithmicbotany.org/
let can; let canw = 1000; let canh = 1000;


let rules = {
    0: ["1[[[01]]]001[01]1",
        "10[01]10[[[1]00]]1",
        "[[[0]]]01[011]1",
        "[0]010[011]1"
       ],
    1: ["1"],
    C: ["11"]
}

let angle;
let axiom = "0"

function setup() {
    can = createCanvas(canh, canw)
    frameRate(10)
    axiom = doRules(axiom)
    // axiom = doRules(axiom)
    // axiom = doRules(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    axiom = doRules(axiom)
    // slider = createSlider(0, TWO_PI, PI/4, 0.01)
    turtle(axiom)
}

let i = 0;
let x = 0;
let y = 0;
function drawCurve(xoff, yoff, scale) {
    // noStroke()
    scale = 1
    beginShape()
    translate(0, 0)
    
    // bezier(
    //     0, (0) * scale,
    //     0 + x, (0) * scale,
    //     0 - x, (len) * scale,
    //     0, (len) * scale
    // )
    // bezier(len/2, 0)
    // bezier(len/20, len/3)
    // bezier(len/10, 2*len/3)
    // bezier(len, len)
    endShape(CLOSE)
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
            postman += rules[c][random(0, rules[c].length) | 0]
        }
    }
    return postman
}

let len = 15
let s_lifo = [1]
let depth = 0;
function turtle(axiom) {
    // stroke(000)
    let s = 1;
    translate(canw/1.5, canh/2)
    for(let i = 0; i < axiom.length; i++) {
        let c = axiom.charAt(i)
        fill(...[doColor(0,0,0,depth/6)],255);
        stroke(...[doColor(0,0,0,depth/6)],255);
        switch(c) {
            case "0":
                // line(0,0,0,-len)
                ellipse(0,-len,20,20)
                // curve(5, 26, 73, 24, 73, 61, 15, 65);
                // curve(73, 24, 73, 61, 15, 65, 15, 65);
                // drawCurve(0, 0, -s_lifo[depth])
                break;
            case "1":
                // line(0,0,0, -len/4)
                // line(0,0,0, -len)
                // 
                ellipse(0,-len,5,5)
                drawCurve(0, -s_lifo[depth])
                translate(0,-len)
                break;
            // case "C":
            //     ellipse()
            case "[":
                push()
                s_lifo.push(++s)
                ++depth
                rotate(-angle)
                break;
            case "]":
                pop()
                s_lifo.push(--s)
                --depth
                rotate(angle)
                break;
        }
    }
    depth = 0;
}

angle = 25.05
let start = "F"
let p = 0.5
function draw() {
    // turtle(axiom)
}
//     translate(canw/2, canh/2)
//     p = (p + sin(frameCount/50))/2
//     fill(doColor(0,0,0,p, 0))
//     ellipse(20, 20, 20, 20)
// }
//     background(111111)
    
//     // angle = slider.value()
//     // angle = constrain(angle + (sin(frameCount /30) - 0.5) / 400, 24.8, 25.2)
//     // i = (i + 20) % 1000
//     x = (x + sin(frameCount/10) * 10)
//     y = (y + sin(frameCount/10) * 10)
//     // print(sin(frameCount/10))
//     // drawCurve()
//     // translate(canw/2, canh/2)
//     // background("white")
//     turtle(axiom)
//     // angle =(sin(frameCount/10)) * 2*Math.PI
//     // print(angle)
// }

let starta = [0.5,0.5,0.5]
let startb = [0.5,0.5,0.5]
let index = 0.5 // 0  to 1 === t
let startc = [1,1,1]
// trying out inigo quillez' procedural color palette
function doColor(a, b, c, t, d) {
    a = starta
    b = startb
    c = startc
    let first = [a[0], a[1], a[2]]
    // print(first)
    let d2 = random(0.15, 0.25)
    let d3 = random(d2, 0.6)
    // d = [0.00, 0.20, 0.5]
    d = [0, d2, d3]
    let second = [
        b[0]*cos((2*PI*(c[0]*t+d[0]))),
        b[1]*cos((2*PI*(c[1]*t+d[1]))),
        b[2]*cos((2*PI*(c[2]*t+d[2])))
    ]
                 
    let result = [
        (first[0] + second[0]) * 255,
        (first[1] + second[1]) * 255,
        (first[2] + second[2]) * 255
    ]
    return result
    
    // let c = 0.5
    // let r = 
    
}
