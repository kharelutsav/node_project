const { json } = require("body-parser");
const data = [ 
    {
        URL: ["https://www.examfear.com/free-video-lesson/Class-10/Maths.htm", "/images/maths.jpg"],
        Class: "Ten", 
        Subject:"Maths",
        Teacher:"Math Teacher"
    },
    {
        URL: ["https://www.khanacademy.org/science/in-in-class10th-physics", "/images/science.jpg"],
        Class: "Ten", 
        Subject: "Science",
        Techer: "Science Teacher"
    },
    {
        URL:["https://nepalonlineschool.org/", "/images/social.jpg"],
        Class: "Ten", 
        Subject: "Social",
        Teacher:"Social Teacher"
    },
    {
        URL:["https://nepalonlineschool.org/", "/images/nepali.jpg"],
        Class: "Ten", 
        Subject: "Nepali",
        Teacher:"Nepali Teacher"
    },
    {
        URL:["https://www.englishspeak.com/en/english-lessons", "/images/english.jpg"],
        Class: "Ten", 
        Subject: "English",
        Teacher:"English Teacher"
    },
    {
        URL:["https://www.learningclassesonline.com/2020/01/computer-lesson-plan-class-10.html", "/images/computer.jpg"],
        Class: "Ten", 
        Subject: "Computer",
        Teacher:"Computer Teacher"
    }
]
console.log("Imported Succesfully")
const div1 = document.querySelector('div');
for(i=0; i<data.length; i++){
    const rec = data[i];
    const field = document.createElement("div");
    field.className = "two";
    let url;
    for(var c in rec){
        const field_value = document.createElement('p');
        if (c==='URL' || c === 'IMG'){
            url = `${rec[c][0]}`;
            src = `${rec[c][1]}`;
            var image = new Image();
            image.src = src;
            image.className = "addImage";
            field.prepend(image);
        }else{
            field_value.textContent = `${c}: ${rec[c]}`;
            field.append(field_value);
        }
    }
    field.addEventListener('click', ()=>{
        console.log(url);
        location.href = url;
    })
    div1.append(field);
}

// for(i=0; i<data.length; i++){
//     const rec = data[i];
//     const field = document.createElement("div");
//     for(var c in rec){
//         const field_value = document.createElement('p');
//         field_value.textContent = `${c}: ${rec[c]}`;
//         field.append(field_value);
//     }
//     document.body.append(field)
// }