window.onload = function () {


    
    function onMouseOver(bto1){
        bto1.style.color="blue";
        bto1.style.textShadow=".2rem .2rem .2rem #333";
    }
    function onMouseOut(bto1){
        bto1.style.color="goldenrod";
        bto1.style.textShadow="none";
    }
    function onMouseDown(bto1){
        bto1.style.color="red";
        bto1.style.textShadow=".2rem .2rem .2rem #000";
    }

    let bto1 = document.getElementById("btn1");
    bto1.addEventListener("mouseover", function(){onMouseOver(bto1)});
    bto1.addEventListener("mouseout", function(){onMouseOut(bto1)});
    bto1.addEventListener("mousedown", function(){onMouseDown(bto1)});

    let bto2 = document.getElementById("btn2");
    bto2.addEventListener("mouseover", function(){onMouseOver(bto2)});
    bto2.addEventListener("mouseout", function(){onMouseOut(bto2)});
    bto2.addEventListener("mousedown", function(){onMouseDown(bto2)});

    let bto3 = document.getElementById("btn3");
    bto3.addEventListener("mouseover", function(){onMouseOver(bto3)});
    bto3.addEventListener("mouseout", function(){onMouseOut(bto3)});
    bto3.addEventListener("mousedown", function(){onMouseDown(bto3)});

    
    searchItem=document.getElementById("search");
    avisos=document.getElementById("avisos");
    bto1.onclick=function(){
       if(searchItem.style.display=="none" || searchItem.style.display==""){
            searchItem.style.display="flex";
            avisos.style.display="block";
        }else{
            searchItem.style.display="none";
            avisos.style.display="none";
       }
    }
    document.getElementById("closeBtn").onclick=function(){
        searchItem.style.display="none";
        avisos.style.display="none"; 
    }

    document.getElementsByClassName("close")[0].onclick=function(){
        document.getElementById('LoginForm').style.display='none';
    }

    bto2.onclick=function(){
        document.getElementById('LoginForm').style.display='block';
    }
}

