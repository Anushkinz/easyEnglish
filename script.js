// озвучка iron мужчина
var div = document.getElementById('circle');
let $start = document.querySelector('#start')
let $startFrame = document.querySelector('.start')
let $part1 = document.querySelector('.part1')
let $game = document.querySelector('.game')
let $table = document.querySelector('#table')
let $won = document.querySelector('.won')
let $resetBtn = document.querySelector('.reset')
let $nextBtn = document.querySelector('.next')
let $circle = document.querySelector("#circle")
let $circle1 = document.querySelector("#circle1")
let $circle2 = document.querySelector("#circle2")
let $tasks = document.querySelector('.tasks');
let $task = document.querySelectorAll('.task')
let $description = document.querySelector('.description')
let $mainPage = document.querySelector('#mainPage')
let audio = new Audio("audio/welcome.mp3");
let level = 1
$task.forEach((t, e) => {
    // e.preventDefault();
    console.log(t);
    t.addEventListener('click', () => showTask(t.dataset.id))
})
function showTask(id) {
    level = id;
    levels(level)
    $tasks.classList.add('hide')
    $game.classList.remove('hide')
}

var listener = function (e) {
    div.style.left = e.pageX - 50 + "px";
    div.style.top = e.pageY - 120 + "px";
};
var listener1 = function (e) {
    $circle1.style.left = e.pageX - 50 + "px";
    $circle1.style.top = e.pageY - 120 + "px";
};
var listener2 = function (e) {
    $circle2.style.left = e.pageX - 50 + "px";
    $circle2.style.top = e.pageY - 120 + "px";
};

circle.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener);
});
circle1.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener1);
});
circle2.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener2);
});
circle1.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener1);
})
circle2.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener2);
})

circle.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener);
    let divx = div.getBoundingClientRect().x
    let divy = div.getBoundingClientRect().y
    let tablex = $table.getBoundingClientRect().x
    let tabley = $table.getBoundingClientRect().y
    if (Math.abs(divx - tablex) <= 80 && Math.abs(divy - tabley) <= 50) {
        audio = new Audio(`audio/great.mp3`);
        audio.play()
        won()
    }
});

function won() {
    $won.classList.remove('hide')
    $game.style.pointerEvents = 'none'
}

$resetBtn.addEventListener('click', function () {
    $won.classList.add('hide')
    levels(level)
    $game.style.pointerEvents = 'auto'
})

$nextBtn.addEventListener('click', function () {
    $won.classList.add('hide')
    level++
    levels(level)
    $game.style.pointerEvents = 'auto'
})

$start.addEventListener('click', function () {
    audio.play();
    // $tasks.style.visibility = "visible;
    $tasks.classList.remove('hide')
    $startFrame.classList.add('hide')
})


function levels(level) {
    level = Number(level)
    $tasks.classList.add('hide')
    $game.classList.remove('hide')
    $circle.style.top = 0
    $circle.style.left = 0
    $circle1.style.top = 200
    $circle1.style.left = 0
    $circle2.style.top = 400
    $circle2.style.left = 0
    let color = ""
    let icon = ""
    let icon1 = ""
    let icon2 = ""
    switch (level) {
        case 1:
            icon = "ball"
            break
        case 2:
            icon = "pen"
            break
        case 3:
            icon = "book"
            break
        case 4:
            icon = "ball"
            icon1 = "pen"
            icon2 = "book"
            break
        case 5:
            icon = "pen"
            icon1 = "ball"
            icon2 = "book"
            break
        case 6:
            icon = "book"
            icon1 = "ball"
            icon2 = "pen"
            break
        case 7:
            color = "red"
            break
        case 8:
            color = "green"
            break
        case 9:
            color = "blue"
            break
    }
    if (level <= 3) {
        audio = new Audio(`audio/${icon}-table.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>put ${icon} on the table</p>
        `)
        $circle.style.backgroundImage = `url(./icon/${icon}.png)`
        $table.style.backgroundImage = `url(./icon/table.png)`
    } else if (level > 3 && level <= 6) {
        audio = new Audio(`audio/${icon}-table.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>put ${icon} on the table</p>
        `)
        $circle1.classList.remove('hide')
        $circle2.classList.remove('hide')
        $circle.style.backgroundImage = `url(./icon/${icon}.png)`
        $circle1.style.backgroundImage = `url(./icon/${icon1}.png)`
        $circle2.style.backgroundImage = `url(./icon/${icon2}.png)`
        $table.style.backgroundImage = `url(./icon/table.png)`
    } else if (level > 6 && level < 10) {
        $circle1.classList.add('hide')
        $circle2.classList.add('hide')
        console.log(level)
        console.log(color)
        audio = new Audio(`audio/${color}ball-${color}table.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>put ${color} ball on the ${color} table</p>
        `)
        // <div>
        //         <img src="./ball${level}.png">
        //         --- ${color} ball
        //     </div>
        //      <div>
        //         <img src="./table${level}.png">
        //         --- ${color} table
        //     </div>
        $table.style.color = "black"
        $circle.style.backgroundImage = `url(./ball${level}.png)`
        $table.style.backgroundImage = `url(./table${level}.png)`
    } else {
        level -= 3
        $table1.classList.remove('hide')
        $table2.classList.remove('hide')
        $table1.style.backgroundImage = url(`./table2.png`)
        $table1.style.right = "50%"
        $table2.style.right = "80%"
        $table2.style.backgroundImage = url(`./table3.png`)
        $table.style.backgroundImage = url(`./table1.png`)
        $circle.style.backgroundImage = url(`./ball${level}.png`)
    }
}


$mainPage.addEventListener('click', function () {
    $game.classList.add('hide')
    $tasks.classList.remove('hide')
})