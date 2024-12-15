
karthik()
document.querySelector(".intro").addEventListener("click",function(){
    karthik()
}) 

document.querySelector(".abtme").addEventListener("click",function(){
    document.querySelector(".intro").classList.remove("focus")
    document.querySelector(".pro").classList.remove("focus")
    document.querySelector(".abtme").classList.add("focus")  
    content=document.querySelector(".secondary")
    content.innerHTML='\n           \n\n        <div class="newdiv1 pop"><div class="d1"><h3>skills</h3><p class="pari">yet to be build</p></div><div class="d2"><h3>proffeciency</h3><p class="pari">not a proffesional till date</p></div><div class="d3"><h3>hobbies</h3><p class="pari">it changes with time</p></div></div>'
    setTimeout(function(){
        document.querySelector(".d1").classList.add("slideLeft");
        document.querySelector(".d1").classList.add("light");
    },0)
    setTimeout(function(){
        document.querySelector(".d2").classList.add("slideLeft");
        document.querySelector(".d2").classList.add("light");
    },500)
    setTimeout(function(){
        document.querySelector(".d3").classList.add("slideLeft");
        document.querySelector(".d3").classList.add("light");
    },1000)
}
)

function karthik(){
    document.querySelector(".abtme").classList.remove("focus")
    document.querySelector(".pro").classList.remove("focus") 
   content=document.querySelector(".secondary")
   document.querySelector(".intro").classList.add("focus")
   content.innerHTML='\n           \n\n        <div class="newdiv pop "><div class="hr1"><img  src="./user.png" class="img"></div><div class="hr2"><p class="newpara"><span class="hi">Hi Iam</hi></br><span class="karthik "> Karthik</span></br><span class="stu">Student of CSE</span></p></p><div class="bdiv"><button class="btn pop3">Contact</button><button class="btn pop3">hire me</button></div></div></div>'
   setTimeout(function(){
    document.querySelector(".karthik").classList.add("pop1");
   },500)

   setTimeout(function(){
    document.querySelector(".stu").classList.add("pop2");
   },900)
}

document.querySelector(".pro").addEventListener("click",function(){
    document.querySelector(".intro").classList.remove("focus")
    document.querySelector(".abtme").classList.remove("focus")
    document.querySelector(".pro").classList.add("focus")

    content=document.querySelector(".secondary");
    content.innerHTML='\n     \n\n <div class="newdiv3 pop"><div class="pro1"><img class="v1" src="./cb.gif"><p>chatbox</p><a href="https://karthik798m.github.io/chatbox1/"><button class="btn">visit</button></a></div><div class="pro2"><img class="v2" src="./lg.gif"><p>login page</p><a href="https://karthik798m.github.io/new-login/"><button class="btn">visit</button></a></div></div>'
})