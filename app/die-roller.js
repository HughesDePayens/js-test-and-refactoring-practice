exports.rollDie = function(faces) {
    return faces[Math.floor(Math.random() * Math.floor(faces.length - 1))];
}

exports.rollDice = function(numberOfDice, faces) {
    let result = [];

    for (let i = 0; i < numberOfDice; i++) result.push(exports.rollDie(faces));

    return result;
}
