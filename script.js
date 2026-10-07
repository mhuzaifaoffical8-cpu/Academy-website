// ====== EDIT THESE ======
var WA="03281407504"; // your WhatsApp number, country code first, no + or spaces
var COURSES=[
 {id:"eng",ic:"",name:"AI/ML",d:"Python, LLMS",dur:"3 months",fee:3000,reg:1000},
 {id:"web",ic:"",name:"Web Development",d:"HTML, CSS, JavaScript and projects",dur:"4 months",fee:12000,reg:1500},
 {id:"ms",ic:"",name:"App Development",d:"Cokotlin",dur:"Monthly",fee:4000,reg:500},
 {id:"cs",ic:"",name:"Computer & Office Skills",d:"MS Office, typing, internet basics",dur:"2 months",fee:5000,reg:500}
];
// ========================
var $=function(i){return document.getElementById(i)},fmt=function(n){return "Rs. "+n.toLocaleString("en-PK")};
$("cg").innerHTML=COURSES.map(function(c){return '<div class="card course"><div class="ic">'+c.ic+'</div><h3>'+c.name+'</h3><p>'+c.d+'</p><span class="tag">'+c.dur+'</span><div class="price" style="margin-top:12px">'+fmt(c.fee)+' <small>/ month</small></div></div>'}).join("");
$("co").innerHTML=COURSES.map(function(c){return '<option value="'+c.id+'">'+c.name+'</option>'}).join("");
function months(c){var m=parseInt(c.dur);return isNaN(m)?1:m}
function calc(){
 var c=COURSES.filter(function(x){return x.id===$("co").value})[0],full=$("pl").value==="full",m=months(c),total=c.fee*m,disc=full&&m>1?Math.round(total*.05):0,now=full?total-disc+c.reg:c.fee+c.reg;
 $("s1").textContent=c.name;$("s2").textContent=c.dur;$("s3").textContent=fmt(c.reg);$("s4").textContent=disc?"- "+fmt(disc):"None";$("s5").textContent=fmt(now);
 $("s6").textContent=full?"One payment covers the whole course.":"Then "+fmt(c.fee)+" each month after the first.";
 return {c:c,now:now,plan:full?"Full payment":"Monthly installments"};
}
$("co").onchange=$("pl").onchange=calc;calc();
$("go").onclick=function(){
 var n=$("n").value.trim(),p=$("ph").value.trim();
 if(!n||p.replace(/\D/g,"").length<10){$("err").textContent="Please enter your name and a valid phone number.";return}
 $("err").textContent="";var r=calc();
 var t="Assalam o Alaikum! I want to enroll.\nName: "+n+"\nPhone: "+p+"\nEmail: "+($("em").value||"-")+"\nCourse: "+r.c.name+"\nPlan: "+r.plan+"\nAmount to pay now: "+fmt(r.now);
 window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank");
};
$("rc").onclick=function(e){e.preventDefault();window.open("https://wa.me/"+WA+"?text="+encodeURIComponent("Assalam o Alaikum! I have paid my fee. Receipt attached.\nName: "+($("n").value||"")),"_blank")};
document.querySelectorAll("#tb button").forEach(function(b){b.onclick=function(){
 document.querySelectorAll("#tb button,.pm").forEach(function(x){x.classList.remove("on")});b.classList.add("on");$(b.dataset.t).classList.add("on")}});
document.querySelectorAll(".cp").forEach(function(b){b.onclick=function(){
 try{navigator.clipboard.writeText(b.dataset.c);b.textContent="Copied ✓";setTimeout(function(){b.textContent="Copy"},1500)}catch(e){}}});
