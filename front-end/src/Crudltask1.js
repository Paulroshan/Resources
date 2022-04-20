let arr=new Array('karthi,Ravi,Dhanush,Indra,Gokul');


const erase=()=>{
   
    let temp=prompt("tell us which position to be deleted")
    
     final=final.filter((value,index)=>
     {
       return value!==final[temp]

const upd=()=>{
    const hai=document.getElementById("content").value;
    const newone=prompt("Tell us best frnd  "+arr[hai],"")
    arr[hai]=newone
    list();
}

const re=()=>{
    const hai=document.getElementById("content").value;
    document.getElementById("results").innerHTML=arr[hai];
}

const cr=()=>{
    const hai=document.getElementById("content").value;
    arr.push(hai);
    list();
}

const list=()=>{
    let gather="";
    gather+="<table class='table text-center text-light'><thead><tr><th>Friends</th></tr></thead><tbody>";

    arr.map((elem)=>{
        gather+="<tr><td>"+elem+"</td></tr>";
    })

    gather+="</tbody></table>";

    document.getElementById("results").innerHTML=gather;
}