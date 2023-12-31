// // module aliases
// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     Runner = Matter.Runner,
//     Composite = Matter.Composite,
//     Vector = Matter.Vector,
//     Constraint = Matter.Constraint;

// const showWireframes = false;
// const lettersAreStatic = false;
// const showConstraints = false;

// const container1 = document.getElementById("canvas1");

// // create an engine
// var engine = Engine.create();
// engine.world.gravity.y = 0.1;

// // create a renderer
// var render1 = Render.create({
//     element: container1,
//     engine: engine,
//     options: {
//         width: container1.clientWidth,
//         height: container1.clientHeight,
//         background: "transparent",
//         wireframes: showWireframes,
//         showAngleIndicator: false
//     }
// });

// function switchWireframes() {
//     render1.options.wireframes = !render1.options.wireframes;
// }

// // Epilepsy warning
// // setInterval(switchWireframes, 1000);


// // let mouse = Matter.Mouse.create(render1.canvas);
// // Matter.Mouse.clearSourceEvents(mouse);


// let prevMousePos= Vector.create(0, 0);

// let mousepos = Vector.create(0, 0);
// // let debugCursor = Bodies.circle(0, 0, 10, {
// //     isStatic: true,
// //     isSensor: true,
// //     render: {
// //         fillStyle: "red",
// //         strokeStyle: "black"
// //     }
// // })
// // Composite.add(engine.world, debugCursor);
// //

// container1.addEventListener("touchmove", (e) => {
//     var rect = e.target.getBoundingClientRect();
//     var x = e.targetTouches[0].clientX - rect.left;
//     var y = e.targetTouches[0].clientY - rect.top;

//      prevMousePos = mousepos;
//     mousepos =Vector.create(x, y);
//     // debugCursor.position = mousepos;
// });

// //
// // let scrollOffset = 0;
// // container1.addEventListener("touchstart", (e) => {
// //     scrollOffset = 0
// // });


// // document.addEventListener('mousemove', () => {
// //     const query = Query.point(bodies, mouse.position)
// //     console.log(mouse.position);
// //     console.log(query);
// // });





// // document.addEventListener('mousemove', () => {
// //     const query = Query.point(Composite.allBodies(engine.world), mouse.position)
// //     console.log(mouse.position);
// //     console.log(query);
// // });
// // let mouseConstraint = Matter.MouseConstraint.create(engine, {
// //     mouse: mouse,
// //     constraint: {
// //         collisionFilter: {
// //             category: 0b0010
// //         },
// //         stiffness: 0.8,
// //         render: {
// //             visible: false
// //         }}});

// // mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
// // mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
// // Matter.World.add(engine.world, mouseConstraint);

// // Composite.add(engine.world, mouseConstraint);

// // allow scroll through the canvas
// // mouseConstraint.mouse.element.removeEventListener(
// //     "mousewheel",
// //     mouseConstraint.mouse.mousewheel
// // );
// // mouseConstraint.mouse.element.removeEventListener(
// //     "DOMMouseScroll",
// //     mouseConstraint.mouse.mousewheel
// // );


// // run the renderer
// Render.run(render1);

// // create runner
// var runner = Runner.create();


// // run the engine
// Runner.run(runner, engine);
// engine.positionIterations = 10;

// function handleResize(container1) {
//     // set canvas size to new values
//     render1.canvas.width = container1.clientWidth;
//     render1.canvas.height = container1.clientHeight;
// }



// window.addEventListener("resize", () => handleResize(container1));



// // window.addEventListener("touchstart", function (event) {
// //     invokeCollision();
// // });


// // Matter.Events.on(mouseConstraint, 'mousemove', function (event) {
// //         //For Matter.Query.point pass "array of bodies" and "mouse position"
// //         mousepos = Vector.create(event.mouse.position.x, event.mouse.position.y)
// //     }
// // );
// //
// // Matter.Events.on(mouseConstraint, "mouseup", function (event) {
// //         //For Matter.Query.point pass "array of bodies" and "mouse position"
// //         mousepos = Vector.create(0, 0)
// //     }
// // );
// // Matter.Events.on(mouseConstraint, "touchend", function (event) {
// //         //For Matter.Query.point pass "array of bodies" and "mouse position"
// //         mousepos = Vector.create(0, 0)
// //     }
// // );

// // add event listener
// // container1.addEventListener("mouseleave", () => {
// //     // fire mouseup event to let go of the dragged item
// //     mouseConstraint.mouse.mouseup(event);
// // });
// //



// let lettersManager = new LettersManager();
// let letters = lettersManager.GetLetters();
// let bodies = lettersManager.GetBodies();


// function scanUserTouches(){
//     if (letters === null) return;
//     return  Matter.Query.point(bodies, mousepos);
// }

// function searchTouches() {

//     if (mousepos === null) return;
//     if (letters === null) letters = lettersManager.GetLetters();
//     // console.log("mouse position: "+ mousepos.x + " " + mousepos.y)
//     checkMouseIdle(prevMousePos, mousepos);

//     if (mousepos.x === 0 && mousepos.y === 0) {
//         letters.forEach(letterObj => {
//                 letterObj.isTouched(false)
//         });
//     }

//     let currentlyTouched = scanUserTouches();

//     letters.forEach(letterObj => {
//         var letterIsTouched = currentlyTouched.includes(letterObj.body);
//         letterObj.isTouched(letterIsTouched)
//     });
// }

// let searchTouch = setInterval(searchTouches, 50);
// let DeltaTime = 0;

// Matter.Events.on(runner, "afterTick", function () {
//     DeltaTime  = (engine.timing.delta || (1000 / 60)) / 1000;


//     letters.forEach(letterObj => {
//         letterObj.update();

//     });
// })

// let idleTimer = 0;
// function checkMouseIdle(prev, curr){
//     if (prev === null || curr === null) return;
//     // console.log("Idle timer :"+idleTimer )

//     if (Math.abs(prev.x -curr.x)<1 && Math.abs(prev.y - curr.y)<1){
//         idleTimer++;
//     }else {
//         idleTimer = 0;
//     }

//     if (idleTimer > 50){
//         // console.log("Idle timer reached");
//         mousepos = Vector.create(0, 0);

//         letters.forEach(letterObj => {
//             letterObj.isTouched(false)
//         });
//         idleTimer = 0;
//     }


// }



// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Vector = Matter.Vector,
    Constraint = Matter.Constraint;

const showWireframes = false;
const lettersAreStatic = false;
const showConstraints = false;

const container1 = document.getElementById("canvas1");

// create an engine
var engine = Engine.create();
engine.world.gravity.y = 0.1;

// create a renderer
var render1 = Render.create({
    element: container1,
    engine: engine,
    options: {
        width: container1.clientWidth,
        height: container1.clientHeight,
        background: "transparent",
        wireframes: showWireframes,
        showAngleIndicator: false
    }
});

function switchWireframes() {
    render1.options.wireframes = !render1.options.wireframes;
}

// Epilepsy warning
// setInterval(switchWireframes, 1000);


// let mouse = Matter.Mouse.create(render1.canvas);
// Matter.Mouse.clearSourceEvents(mouse);


let prevMousePos= Vector.create(0, 0);

let mousepos = Vector.create(0, 0);
// let debugCursor = Bodies.circle(0, 0, 10, {
//     isStatic: true,
//     isSensor: true,
//     render: {
//         fillStyle: "red",
//         strokeStyle: "black"
//     }
// })
// Composite.add(engine.world, debugCursor);
//

container1.addEventListener("touchmove", (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.targetTouches[0].clientX - rect.left;
    var y = e.targetTouches[0].clientY - rect.top;

     prevMousePos = mousepos;
    mousepos =Vector.create(x, y);
    // debugCursor.position = mousepos;
});

//
// let scrollOffset = 0;
// container1.addEventListener("touchstart", (e) => {
//     scrollOffset = 0
// });


// document.addEventListener('mousemove', () => {
//     const query = Query.point(bodies, mouse.position)
//     console.log(mouse.position);
//     console.log(query);
// });





// document.addEventListener('mousemove', () => {
//     const query = Query.point(Composite.allBodies(engine.world), mouse.position)
//     console.log(mouse.position);
//     console.log(query);
// });
// let mouseConstraint = Matter.MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//         collisionFilter: {
//             category: 0b0010
//         },
//         stiffness: 0.8,
//         render: {
//             visible: false
//         }}});

// mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
// mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
// Matter.World.add(engine.world, mouseConstraint);

// Composite.add(engine.world, mouseConstraint);

// allow scroll through the canvas
// mouseConstraint.mouse.element.removeEventListener(
//     "mousewheel",
//     mouseConstraint.mouse.mousewheel
// );
// mouseConstraint.mouse.element.removeEventListener(
//     "DOMMouseScroll",
//     mouseConstraint.mouse.mousewheel
// );


// run the renderer
Render.run(render1);

// create runner
var runner = Runner.create();


// run the engine
Runner.run(runner, engine);
engine.positionIterations = 10;

function handleResize(container1) {
    // set canvas size to new values
    render1.canvas.width = container1.clientWidth;
    render1.canvas.height = container1.clientHeight;
}



window.addEventListener("resize", () => handleResize(container1));



// window.addEventListener("touchstart", function (event) {
//     invokeCollision();
// });


// Matter.Events.on(mouseConstraint, 'mousemove', function (event) {
//         //For Matter.Query.point pass "array of bodies" and "mouse position"
//         mousepos = Vector.create(event.mouse.position.x, event.mouse.position.y)
//     }
// );
//
// Matter.Events.on(mouseConstraint, "mouseup", function (event) {
//         //For Matter.Query.point pass "array of bodies" and "mouse position"
//         mousepos = Vector.create(0, 0)
//     }
// );
// Matter.Events.on(mouseConstraint, "touchend", function (event) {
//         //For Matter.Query.point pass "array of bodies" and "mouse position"
//         mousepos = Vector.create(0, 0)
//     }
// );

// add event listener
// container1.addEventListener("mouseleave", () => {
//     // fire mouseup event to let go of the dragged item
//     mouseConstraint.mouse.mouseup(event);
// });
//



let lettersManager = new LettersManager();
let letters = lettersManager.GetLetters();
let bodies = lettersManager.GetBodies();
let hitRadius = 50;

function inRadius(body, point) {
    let distance = Vector.magnitude(Vector.sub(body.position, point));
    return distance < hitRadius;
}

function scanUserTouches(){
    if (letters === null) return;
    hits = []
    bodies.forEach(body => {
        if (inRadius(body, mousepos)) {
            hits.push(body);
        }
    })
    return hits;
    // return  Matter.Query.point(bodies, mousepos);
}

function searchTouches() {

    if (mousepos === null) return;
    if (letters === null) letters = lettersManager.GetLetters();
    // console.log("mouse position: "+ mousepos.x + " " + mousepos.y)
    checkMouseIdle(prevMousePos, mousepos);

    if (mousepos.x === 0 && mousepos.y === 0) {
        letters.forEach(letterObj => {
                letterObj.isTouched(false)
        });
    }

    let currentlyTouched = scanUserTouches();

    letters.forEach(letterObj => {
        var letterIsTouched = currentlyTouched.includes(letterObj.body);
        letterObj.isTouched(letterIsTouched);

    });
}

let searchTouch = setInterval(searchTouches, 50);
let DeltaTime = 0;

Matter.Events.on(runner, "afterTick", function () {
    DeltaTime  = (engine.timing.delta || (1000 / 60)) / 1000;


    letters.forEach(letterObj => {
        letterObj.update();

    });
})

let idleTimer = 0;
function checkMouseIdle(prev, curr){
    if (prev === null || curr === null) return;
    // console.log("Idle timer :"+idleTimer )

    if (Math.abs(prev.x -curr.x)<1 && Math.abs(prev.y - curr.y)<1){
        idleTimer++;
    }else {
        idleTimer = 0;
    }

    if (idleTimer > 30){
        // console.log("Idle timer reached");
        mousepos = Vector.create(0, 0);

        letters.forEach(letterObj => {
            letterObj.isTouched(false)
        });
        idleTimer = 0;
    }


}










