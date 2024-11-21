let box = document.querySelector(".center");
box.addEventListener("mousemove",function(details){     // details --> parameter giving details of the cursor location
    let boxLocation = box.getBoundingClientRect();     // Location of the box 
    let insideBoxVal = (details.clientX - boxLocation.left);  // Location of cursor inside the box (clientX --> x-coordinate)
    if (insideBoxVal < boxLocation.width/2){
        // console.log("left")
        let redColor = gsap.utils.mapRange(0,boxLocation.width/2,255,0,insideBoxVal)  // mapRange(inMin,inMax,outmin,outMax,valTomap)
        gsap.to(box,{           // dom 
            backgroundColor : `rgb(${redColor},0,0)`
        })
    } else{
       let greenColor = gsap.utils.mapRange(boxLocation.width,boxLocation.width/2,255,0,insideBoxVal)
        gsap.to(box,{
            backgroundColor : `rgb(0,${greenColor},0)`
        })
        // console.log("right")
    }
})
box.addEventListener("mouseleave",function(){
    gsap.to(box, {
        backgroundColor : "white"
    })
})