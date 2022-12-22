let players = [
    {name: "Seva", goals: 4, pass: 3},
    {name: "Vlad", goals: 2, pass: 5},
    {name: "Yaroslav", goals: 3, pass: 4}
]

function calculate(players){
    const K_GOAL = 2
    const K_PASS = 1;
    var newPlayers = []
    for (let i in players){
        let result = players[i].goals*K_GOAL + players[i].pass*K_PASS
        players[i].result = result
        newPlayers.push(players[i])
    }
    return newPlayers;
}

console.log(calculate(players))