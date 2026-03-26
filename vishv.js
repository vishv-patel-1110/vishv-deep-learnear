let url="https://dog.ceo/api/breeds/image/random";
   let btn=document.querySelector("button");
   btn.addEventListener("click",async ()=>{
        let bbb= await getimage();
        console.log(bbb);
        let img=document.querySelector("#patel");
        img.setAttribute("src",bbb)
   })
 async function getimage(){
    try{
     let res=await axios.get(url);
     return res.data.message;
    } catch(err) {
        console.log("error-",err);
    }
 }