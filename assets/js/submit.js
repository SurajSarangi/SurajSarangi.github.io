document.forms[0].addEventListener('submit', async(e)=> {
    e.preventDefault();
    let x = document.getElementById("respmsg");
    x.textContent = "Sending your details...";
    x.style.color="rgb(0,255,255)";
    let req = {};
    for(let i=0; i<e.target.length-2;i++){
        req[e.target[i].name] = e.target[i].value;
    }
    let url = `https://remarks-server.onrender.com/`;
    let headers = {'Content-Type' : 'application/json'};
    try{
        let res = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(req)
        });
        if(res.status === 200){
            x.textContent = "Thank you for getting in touch.";
            x.style.color="rgb(0,255,50)";
        } else {
            throw new Error("Error updating db.");
        }
    } catch(err){
        x.textContent = "There seems to be an error. Please contact me using one of the social handles. Thank you.";
        x.style.color="rgb(255,100,50)";
    }
})