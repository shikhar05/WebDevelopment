var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

var developers = [
    { fname: "Bruce", lname: "Wayne", ability: [
        { name: "Master martial artist" }, { name: "Strategy" }, { name: "Genius-level intellect" }, { name: "Sword fighting" },
        { name: "Acrobat" }, { name: "Detective" }, { name: "Escapologist" }, { name: "Strategist" },
        { name: "Master of stealth" }, { name: "Master of disguise" }, { name: "Idetic memory" }
    ]
    },
    { fname: "Clark", lname: "Kent", ability: [
        { name: "Invulnerability" }, { name: "Heat Vision" }, { name: "Flight" }, { name: "X-ray vision" }
    ]
    },
    { fname: "Barry", lname: "Allen", ability: [
        { name: "Light speed" }, { name: "Healing" }, { name: "Time travel" }, { name: "Pass through wall" }
    ]
    },
    { fname: "Arthur", lname: "Curry", ability: [
        { name: "Swimming" }, { name: "Marine telepathy" }, { name: "" }, { name: "Sword fighting" }
    ]
    },
    { fname: "Hal", lname: "Jordan", ability: [
        { name: "Flight" }, { name: "Conjouring constructs" }, { name: "Telekenesis" }, { name: "Interstaller travel" }
    ]
    }
]

app.get("/developer", function (req, res) {
    res.json(developers);
});

app.get("/developer/:index", function (req, res) {
    var index = req.params['index']; // or req.params.index;
    res.json(developers[index]);
});

app.get("/developer/:index/ability", function (req, res) {
    var index = req.params['index']; // or req.params.index;
    res.json(developers[index].ability);
});

app.get("/developer/:index/ability/:abIndex", function (req, res) {
    var index = req.params['index']; // or req.params.index;
    var abIndex = req.params['abIndex'];
    res.json(developers[index].ability[abIndex]);
});

app.listen(3000)