/* 
So we want 78 tarot cards
We want to shuffle them at random
Keep the last card of the deck
Have the person pick numbers between 1-77 & place them into Past, Present, Future

Card Img Credit: https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0
*/

function tarotCard(name, image) {
    this.name = name;
    this.image = image;
}

const deck = [
    new tarotCard('The Fool', '00-TheFool'),
    new tarotCard('Knight of Cups', 'Cups12'),
    new tarotCard('Justice', '11-Justice'),
    new tarotCard('King of Cups', 'Cups14'),
    new tarotCard('Page of Cups', 'Cups11'),
    new tarotCard('King of Wands', 'Wands14'),
    new tarotCard('Ten of Cups', 'Cups10'),
    new tarotCard('Nine of Pentacles', 'Pentacles09'),
    new tarotCard('Nine of Cups', 'Cups09'),
    new tarotCard('Strength', '08-Strength'),
    new tarotCard('Seven of Wands', 'Wands07'),
    new tarotCard('Eight of Wands', 'Wands08'),
    new tarotCard('Ace of Swords', 'Swords01'),
    new tarotCard('Six of Pentacles', 'Pentacles06'),
    new tarotCard('Five of Swords', 'Swords05'),
    new tarotCard('The Moon', '18-TheMoon'),
    new tarotCard('Two of Swords', 'Swords02'),
    new tarotCard('Nine of Swords', 'Swords09'),
    new tarotCard('The World', '21-TheWorld'),
    new tarotCard('The Tower', '16-TheTower'),
    new tarotCard('The Hermit', '09-TheHermit'),
    new tarotCard('Nine of Wands', 'Wands09'),
    new tarotCard('Page of Swords', 'Swords11'),
    new tarotCard('Four of Swords', 'Swords04'),
    new tarotCard('The Chariot', '07-TheChariot'),
    new tarotCard('The Hierophant', '05-TheHierophant'),
    new tarotCard('King of Swords', 'Swords14'),
    new tarotCard('Four of Cups', 'Cups04'),
    new tarotCard('The Empress', '03-TheEmpress'),
    new tarotCard('Knight of Swords', 'Swords12'),
    new tarotCard('Four of Pentacles', 'Pentacles04'),
    new tarotCard('Five of Pentacles', 'Pentacles05'),
    new tarotCard('Six of Cups', 'Cups06'),
    new tarotCard('Page of Wands', 'Wands11'),
    new tarotCard('Five of Cups', "Cups05"),
    new tarotCard('Queen of Cups', 'Cups13'),
    new tarotCard('Eight of Pentacles', 'Pentacles08'),
    new tarotCard('Ace of Wands', "Wands01"),
    new tarotCard('Ten of Pentacles', 'Pentacles10'),
    new tarotCard('Seven of Pentacles', 'Pentacles07'),
    new tarotCard('Three of Pentacles', 'Pentacles03'),
    new tarotCard('The Star', '17-TheStar'),
    new tarotCard('Queen of Pentacles', 'Pentacles13'),
    new tarotCard('Judgement', '20-Judgement'),
    new tarotCard('Temperance', '14-Temperance'),
    new tarotCard('Five of Wands', 'Wands05'),
    new tarotCard('Two of Wands', 'Wands02'),
    new tarotCard('The Emperor', '04-TheEmperor'),
    new tarotCard('The Sun', '19-TheSun'),
    new tarotCard('Six of Swords', 'Swords06'),
    new tarotCard('Three of Wands', 'Wands03'),
    new tarotCard('Death', '13-Deatj'),
    new tarotCard('The Lovers', '06-TheLovers'),
    new tarotCard('Ace of Cups', 'Cups01'),
    new tarotCard('Ten of Swords', 'Swords10'),
    new tarotCard('Knight of Pentacles', 'Pentacles12'),
    new tarotCard('Page of Pentacles', 'Pentacles11'),
    new tarotCard('Seven of Swords', 'Swords07'),
    new tarotCard('The Hanged Man', '12-TheHangedMan'),
    new tarotCard('Eight of Swords', 'Swords08'),
    new tarotCard('King of Pentacles', 'Pentacles14'),
    new tarotCard('Queen of Swords', 'Swords13'),
    new tarotCard('Four of Wands', 'Wands04'),
    new tarotCard('Wheel of Fortune', '10-WheelOfFortune'),
    new tarotCard('The Devil', '15-TheDevil'),
    new tarotCard('Two of Cups', 'Cups02'),
    new tarotCard('Queen of Wands', 'Wands13'),
    new tarotCard('Ten of Wands', 'Wands10'),
    new tarotCard('Three of Cups', 'Cups03'),
    new tarotCard('The High Priestess', '02-TheHighPriestess'),
    new tarotCard('Ace of Pentacles', 'Pentacles01'),
    new tarotCard('Seven of Cups', 'Cups07'),
    new tarotCard('Three of Cups', 'Cups03'),
    new tarotCard('Two of Pentacles', 'Pentacles02'),
    new tarotCard('The Magician', '01-TheMagician'),
    new tarotCard('Six of Wands', 'Wands06'),
    new tarotCard('Knight of Wands', 'Wands12'),
    new tarotCard('Eight of Cups', 'Cups08'),
];

function getRandom(num) {
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};

 function returnCard(deck){
    var index = getRandom(78);
    var currentCard = deck[index];
    return currentCard;
};

document.getElementById('draw').onclick = 
function(){
    var index = getRandom(78);
    var currentCard = deck[index];

    document.getElementById('display').innerHTML =
    '<img src="tarotDeck/' + currentCard.image + '.png"><h3>'
     + currentCard.name + '</h3>';
}

module.exports = returnCard(deck);