document.addEventListener("DOMContentLoaded",function(){
  var e=function(e){
    var t=this.parentNode.classList;
    t.contains("kote-food--disabled")||(t.toggle("kote-food--checked"),
    t.remove("kote-food--checked-hover"))},
    t=function(e){
      this.parentNode.classList.contains("kote-food--checked")&&this.parentNode.classList.add("kote-food--checked-hover")},
    c=function(e){
      e.preventDefault(),
    this.parentNode.parentNode.classList.add("kote-food--checked")},
    o=document.querySelectorAll(".kote-food .kote-food__card"),
    d=document.querySelectorAll(".kote-food .kote-food__buy-button");
    Array.prototype.forEach.call(o,function(c){
      c.addEventListener("click",e),
    c.addEventListener("mouseleave",t)}),
    Array.prototype.forEach.call(d,function(e){
      e.addEventListener("click",c)})});