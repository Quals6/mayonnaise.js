/*!
 * mayonnaise.js <https://github.com/nathanchapman/mayonnaise.js>
 *
 * Copyright (c) 2016 Nathan Chapman.
 * Licensed under the MIT license.
 */

var mayonnaise = function() {};
var quotes = [
    '*sniffle* That Penny has the most beautiful voice.',
    '80. MY ICE CREAM! IT\'S ALIVE!',
    'A doughnut?',
    'A SECRET STRING!!!',
    'AHHHH! IT\'S THE APOCALYPSE! OFFICE PRODUCTS ARE FALLING FROM THE SKY!',
    'Another piece of paper.',
    'Are you Squidward? ...That\'s okay, take your time.',
    'BIGGER BOOT!!',
    'Boating school?! I thought this was Spanish class!',
    'But I was looking for ME the whole time! It\'s the perfect crime!',
    'Can we say that hats from Texas are dumb?',
    'Do it again, I wasn\'t looking!',
    'Don\'t touch me, I\'m sterile.',
    'FIRMLY GRASP IT, SPONGEBOB, FIRMLY GRASP IT!',
    'GARY?! I THOUGHT WHAT WE HAD WAS SPECIAL!',
    'GYAH! THEY\'RE HAVING A SALE ON SCENTED PINECONES!',
    'GYAHAHAHA HE GOT HIT IN THE HEAD WITH TWO COCONUTS!',
    'Hahaha! Connect the dots! I drawed a horsey.',
    'HAHAHAHA, IT\'S A GIRAFFE!',
    'HERE COMES A GIANT FIST!',
    'Hey, nice place you got here!',
    'Hey, we are not chicken! OH NO, MY POPCORN!',
    'Hi Spongeboob. GYAHAHAHAHA SPONGBEBOOB!',
    'Hibernation must mean the opposite of beauty sleep…',
    'I didn\'t know you spoke bird!',
    'I don\'t think this is the real Spongebob. Just look how yellow he is.',
    'I gotta get back to crusting the crab.',
    'I guess you\'re going to miss the Panty Raid.',
    'I know, let\'s get naked!',
    'I thought it was some kind of new fashion of cotton candy you wear on your head.',
    'I THOUGHT THE CORPS WOULD HELP ME STRAIGHTEN OUT MY LIFE, SIR!',
    'I THOUGHT WE SETTLED THIS THE LAST TIME!',
    'I\'m always here at double weenie Wednesday.',
    'I\'m mad. I can\'t see my forehead.',
    'I\'m Squidward, I\'m Squidward, I\'m Squidward Squidward Squidward!',
    'I\'VE GOT THE UGLY!',
    'Is he a mermaid?',
    'Is he the badguy?',
    'Is mayonnaise an instrument?',
    'It may be stupid, but it\'s also dumb!',
    'Just like a genie!',
    'Kicking! I wanna do some kicking!',
    'Knowledge can never replace friendship. I prefer to be an idiot!',
    'Kraaaaaabs.... isn\'t that the red sweaty guy you work for?',
    'LEEDLE LEEDLE LEEDLE LEE.',
    'Liar liar, plants for hire.',
    'LIFE DEATH LIFE DEATH LIFE DEATH LIFE DEATH!!!',
    'Marty?! Janet?! Who are you people?!',
    'Me too! INFLATABLE PANTS! WHAT\'S YOUR IDEA?',
    'Methinks it\'s mutton-tastic!',
    'My parents think I\'m dumber than a sack of diapers.',
    'My pickle started off life in a jar, and now it\'s in a jar again! It\'s like, a pun or something!',
    'No, Spongebob. That\'s Italian. (Because Italian is just that amazing, yes?)',
    'NO! THIS IS PATRICK!!!!! I am not a Krusty Krab!',
    'Not how I use em.',
    'Now all I need is a magic moustache, and all my dreams will have come true!',
    'Now if you\'ll excuse me, it\'s time for my weekly condiment soaking.',
    'OH BOY I LOVE BEING PURPLE!',
    'Oh no, I broke it!',
    'Ohhhhh. EAST? I thought you said WEAST.',
    'OKAY, MAGICAL TALKING TRASHCAN!',
    'Once there was an ugly barnacle. He was so ugly, everyone died. The end.',
    'One watermelon, fresh from the manure field your spookiness!',
    'Pardon my French, but GET THIS THING OFF ME!! (Ohonhonhonhonhonhonhon…)',
    'Pretend to be somebody else!',
    'Psh. Wait\'ll you see NO PATRICK DAY!',
    'PUFF OUT YOUR CHEST, SAY "TAX EXEMPTION", AND DEVELOP A TASTE FOR FREEFORM JAZZ.',
    'RECTANGLES!!!',
    'Roger! Without him, the lightbulb will have nothing to warm!',
    'Sandy\'s a girl?',
    'Spongebob, I think Squidward\'s taken this too far. That last snowball had his clarinet in it.',
    'Spongebob? Where is "Leaving Bikini Bottom"?',
    'Squidward, you and your nose will definitely not fit in!',
    'SQUIDWARD, YOUR CEILING IS TALKING TO ME!',
    'Squidward! The sky had a baby from my cereal box!',
    'STILL TWO ICECREAMS!',
    'That\'s Mr. Dr. Professor Patrick to you!',
    'The inner machinations of my mind are an enigma',
    'This is a hotel?',
    'TWO ICECREAMS!',
    'Uh...I gotta draw a new battery for this...',
    'Uhhh...uhhhh...uhhhh...... TWENTY FOUR!!!',
    'WASHING AN OLD PERSON!',
    'We should take Bikini Bottom, and push it somewhere else!',
    'We\'d better do what he says, he knows how to grow food.',
    'WE\'RE NOT CAVEMEN! WE HAVE TECHNOLOGY!',
    'Well I don\'t tell you how to live your life!',
    'What\'re you asking for?',
    'What\'s the matter, is he stupid?',
    'When in doubt, pinky out!',
    'Who\'re you callin pinhead?!',
    'Who\'s a…. WHO\'S A BIG YELLOW SPONGE WITH HOLES?!',
    'Whoever\'s the owner of the white Sudan, you left your lights on.',
    'Wumbology, the study of WUMBO?! It\'s first grade, Spongebob!',
    'Y\'know, WUMBO, he she me, WUMBO...',
    'Yeah, well I\'d hate you even if I didn\'t hate you.',
    'YOU BROKE MY HEART! NOW I\'M GONNA BREAK SOMETHING OF YOURS!!',
    'You guys talk funny! SAY MORE WORDS!',
    'You mean like a weenie? OKAY!',
    'YOU TOOK MY ONLY FOOD. NOW I\'M GONNA STARVE.',
    'You\'re right, if I was the mom, this would be kind of shocking...',
    'You\'ve got it set to M for MINI, when it should be set to W for WUMBO.'
];

mayonnaise.prototype.get = function(number) {
    if (!number) return 'Is mayonnaise an instrument?';
    var string = '';
    for (var i = 0; i < number; i++) {
      string += quotes[Math.floor(Math.random() * quotes.length)];
      if (i != number-1) {
        string += ' ';
      }
    }
    return string;
};

module.exports = new mayonnaise();
