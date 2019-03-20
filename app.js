
    const quotes =[

        {
            quote:"Starve your distractions. Feed your focus.",
            author:"Charmaine Hayden"
        },

          {
            quote:"Excuses will always be there for you. Opportunity won't.",
            author:"unknown"
            
        },

          {
            quote:"What you think of yourself is much more important than what people think of you",
            author:"Seneca"
            
        },
        
        {
            quote:"Education is the most powerful weapon which you can use to change the world.",
            author:"Nelson Mandela"
            
        },

          {
            quote:"We don't develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity.",
            author:"Barbara De Angelis"
            
        },

]

const btn=document.getElementById('generate-btn')

btn.addEventListener('click', function(){
let random = Math.floor(Math.random()*quotes.length);
console.log(random)
document.getElementById('quote').textContent=quotes[random].quote;
document.querySelector('.quote-author').textContent=quotes[random].author;
})

  



