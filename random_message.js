greetingsArray = {
    p1: ["You love ", "You hate ", "You don't know how you feel about "], 
    p2: ["playing ", "watching ", "coaching "], 
    p3: ["football.", "soccer.", "basketball."]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const returnGreeting = () => {
    emptyp1 = []
    emptyp2 = []
    emptyp3 = []
    for (const [key,value] of Object.entries(greetingsArray)) {
        if (key == "p1") {
            emptyp1.push(value)
        }
        if (key == "p2") {
            emptyp2.push(value)
        }
        if (key == "p3") {
            emptyp3.push(value)
        }
    }
    return emptyp1[0][getRandomInt(3)]+ emptyp2[0][getRandomInt(3)] + emptyp3[0][getRandomInt(3)]
}


console.log(returnGreeting())

