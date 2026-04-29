// Typing
const words=["IoT Developer","Future Scientist","Entrepreneur"];
let i=0,j=0,del=false;

function type(){
  let w=words[i];
  document.getElementById("typing").textContent=w.substring(0,j);

  if(!del) j++; else j--;

  if(j==w.length && !del){
    del=true;
    setTimeout(type,2000);
    return;
  }

  if(j==0 && del){
    del=false;
    i=(i+1)%words.length;
  }

  setTimeout(type,del?70:120);
}
type();

// Scroll reveal
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el=>obs.observe(el));