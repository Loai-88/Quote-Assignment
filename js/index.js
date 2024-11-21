
const array = [
    {   'author': 'Oscar Wilde', 
        'quote': '“Be yourself; everyone else is already taken.”'
    },
    {   'author': 'Bernard M. Baruch', 
        'quote': "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    },
    {   'author': 'Frank Zappa', 
        'quote': '“So many books, so little time.”'
    },
    {   'author': 'Wayne Gretzy', 
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {   'author': 'Albert Einstein', 
        'quote': "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {   'author': '"― Marcus Tullius Cicero"', 
        'quote': '“A room without books is like a body without a soul.”'
    },
];

function generateQuote(){
    var random = Number.parseInt(Math.random()*array.length + 1);
    document.getElementById('quoteprint').innerText=`"${array[random].quote}\"`;
    document.getElementById('authorprint').innerText=`"${array[random].author}\"`;
}




