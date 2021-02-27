let personName = 'default';

function getName(){
    return personName;
}

function setName(newName){
    personName = newName;
}

module.exports = {
    getName,
    setName
};