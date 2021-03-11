

//fetch (`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)





const api = {
    key : "e2091dcc0e42dfe6d6e0ba849440766b", 
    base : "http://api.openweathermap.org/data/2.5/"
}

let city = 'toronto';


//add fetch data 
fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`).then(response => {
   
    //Check the status of the request.
    if (response.status !== 200) {
        console.log(`error ${response.status}`)
        return;
    }
        //change the data into json
        response.json().then (data =>{
            let element = document.getElementById("hi");
            console.log(data)

            // //pick the elements with jquery
            // let listPicture = $(".listPicture");
            // //function to create the page when it load the document.
            // for (let picture of data) {
            //     //variables from the object 
            //     let title = picture.title; 
            //     let pictureUrl = picture.url; 
            //     //append the content with Jquery 
            //     listPicture.append (`<li><ul><li>${title}</li><img src=${pictureUrl}></ul></li>`); 
            //}
        })
        .catch (error => {
            console.log(`error ${error}`);
        })
})            

