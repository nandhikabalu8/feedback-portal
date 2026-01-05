
function save(){
 let f=JSON.parse(localStorage.getItem("f"))||[];
 f.push(name.value+": "+msg.value);
 localStorage.setItem("f",JSON.stringify(f));
 name.value=msg.value="";
}
m.addEventListener("show.bs.modal",()=>{
 list.innerHTML=(JSON.parse(localStorage.getItem("f"))||[]).join("<hr>");
});
