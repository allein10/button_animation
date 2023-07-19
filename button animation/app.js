var button = document.querySelectorAll("a");
button.forEach(btn =>{
    btn.addEventListener("click",function(c){
        var x = c.clientX - c.target.offsetLeft;
        var y = c.clientY - c.target.offsetTop;
        var z = document.createElement("span");
        z.style.left = x + "px";
        z.style.top = y + "px";
        this.appendChild(z);
        setTimeout(() => {
            z.remove()
        }, 700);
    })
})