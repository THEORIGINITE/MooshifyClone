var tl = gsap.timeline({onUpdate:updateSlider, defaults: {duration: 1}}),
    circle = document.getElementById("circle");

tl.to(circle, {morphSVG:"#hippo"}, "+=1")
  .to(circle, {morphSVG:"#star"}, "+=1")
  .to(circle, {morphSVG:"#elephant"}, "+=1")
  .to(circle, {morphSVG:circle}, "+=1");
