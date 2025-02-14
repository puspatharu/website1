

///   navigationbar 
const navigation = document.querySelector('.navigation');
const changecolorheight = 88;
window.addEventListener('scroll', () => {
  if (window.scrollY > changecolorheight) {
    navigation.style.backgroundColor = '#04091e';

  } else {
    navigation.style.backgroundColor = 'transparent';

  }
})

//dropdown menu



// menu bar
const menubar = document.getElementById('bar')
const ul = document.getElementById('menu')
const crossbar = document.querySelector('#cross')
const body = document.querySelector('.container')

menubar.addEventListener('click', () => {
  ul.style.display = 'flex';
  body.style.backgroundColor = 'rgb(14, 19, 39)'
  menubar.style.display = 'none';
  crossbar.style.display = 'flex';
})

crossbar.addEventListener('click', () => {
  ul.style.display = 'none';
  body.style.backgroundColor = '';
  menubar.style.display = 'block';
  crossbar.style.display = 'none'
})




// course offer section

const courseArr=[
  {
   image:"./p1.jpg.webp",
   rate:'$150',
people:355,
teleNumber:55,
head:'Learn Designing',
paragraph:"When television was young, there was a hugely popular show based on the still popular fictional characte"
  },
  {
    image:"./p2.jpg.webp",
    rate:'$150',
 people:355,
 teleNumber:55,
 head:'Learn React js beginners',
 paragraph:"When television was young, there was a hugely popular show based on the still popular fictional characte"
  },
  {
    image:"./p3.jpg.webp",
    rate:'$150',
 people:355,
 teleNumber:55,
 head:'Learn Photography',
 paragraph:"When television was young, there was a hugely popular show based on the still popular fictional characte" 
  },
  {
    image:"./p4.jpg.webp",
    rate:'$150',
 people:355,
 teleNumber:55,
 head:'Learn surveying',
 paragraph:"When television was young, there was a hugely popular show based on the still popular fictional characte" 
  },
 
   {
     image:"./p2.jpg.webp",
     rate:'$150',
  people:355,
  teleNumber:55,
  head:'Learn React js beginners',
  paragraph:"When television was young, there was a hugely popular show based on the still popular fictional characte"
   },
   {
    image:"./p3.jpg.webp",
    rate:'$150',
 people:355,
 teleNumber:55,
 head:'Learn Photography',
 paragraph:"When television was young, there was a hugely popular show based on the still popular fictional characte" 
  },
  {
    image:"./p1.jpg.webp",
    rate:'$150',
 people:355,
 teleNumber:55,
 head:'Learn Designing',
 paragraph:"When television was young, there was a hugely popular show based on the still popular fictional characte"
   },
  {
    image:"./p4.jpg.webp",
    rate:'$150',
 people:355,
 teleNumber:55,
 head:'Learn surveying',
 paragraph:"When television was young, there was a hugely popular show based on the still popular fictional characte" 
  },
]

const course = document.getElementById('course-offer-item');
const scrollbtn=document.getElementById('scrollbtn')
// const coursebtn=document.querySelector('.coursebtn')
// console.log(coursebtn);
let newcourse=courseArr.length/4
let view=4;
function slidecourse(start1,end){
  course.innerHTML='';
courseArr.slice(start1,end).map((val,i)=>{

    course.innerHTML+=`
        <div class="all-designing-course">
          <div class="designing-course">
            <div class="zoomcourse">
              <img class="zoom-img" src="${val.image}" 
              alt="">
            </div>
            <div class="dollar">${val.rate}</div>
            <div class="countpeople">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 640 512"><path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32S80 82.1 80 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2M480 256c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96m48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4c24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48c0-61.9-50.1-112-112-112"/></svg>
                <p>${val.people}</p>
                </div>
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-3 -2 24 24"><path fill="currentColor" d="m5.978 14.969l.002-.033zm.001-.167l.001.003v-.003zm.04 1.9c2.678-2.462 3.007-2.656 3.793-2.734C13.364 13.615 16 11.01 16 8.004c0-3.26-3.085-6.003-7-6.003S2 4.745 2 8.004c0 1.893 1.175 3.767 3.054 4.957c.783.495.958 1.117.941 1.778l-.009.15c.022.33.032.92.033 1.814zm3.99-.743q-.277.027-4.32 3.774a1 1 0 0 1-1.68-.742q.03-3.543-.024-4.04c-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005C0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955z"/></svg>
               <p>${val.teleNumber}</p>
              </div>
            </div>
          </div>
      <div>
        <h4>${val.head}</h4>
        <p>${val.paragraph}</p>
      </div>
      </div>
    `
  
})
}
slidecourse(0,4);
let ind=0;
 let increment=3;
for(let i=0;i<newcourse;i++){
  ind=i==0?i:i+increment;
  if(i!==0){
 increment+=3;
  }
  
 scrollbtn.innerHTML+=`
  <div class="coursebtn" onclick="nextCourse(${ind},this)"><span></span></div>
 `
}


function nextCourse(index,buttonElement){
let coursebtn=document.querySelectorAll('.coursebtn')
start1=index;
end=start1+view;
slidecourse(start1,end)
coursebtn.forEach((btn)=>{
btn.style.backgroundColor='';
});
buttonElement.style.backgroundColor='rgb(232, 123, 49)';
}



// Upcoming  Events 
const mypost=[
  {
images:"./e1.jpg",
date:"25th Februry,2018",
head:'The Universe Through A Child S Eyes',
paragraph:'for most of us,the idea of astronomy is something we directly connect to "stargazing",telescopes and seeing magnificent displays in the heavens.'
  },
  {
    images:"./e2.jpg",
    date:"25th Februry,2018",
    head:'The Universe Through A Child S Eyes',
    paragraph:'for most of us,the idea of astronomy is something we directly connect to "stargazing",telescopes and seeing magnificent displays in the heavens.'
      },
 
      {
        images:"./e2.jpg",
        date:"25th Februry,2018",
        head:'The Universe Through A Child S Eyes',
        paragraph:'for most of us,the idea of astronomy is something we directly connect to "stargazing",telescopes and seeing magnificent displays in the heavens.'
          },
          {
            images:"./e1.jpg",
            date:"25th Februry,2018",
            head:'The Universe Through A Child S Eyes',
            paragraph:'for most of us,the idea of astronomy is something we directly connect to "stargazing",telescopes and seeing magnificent displays in the heavens.'
              },
              {
                images:"./e1.jpg",
                date:"25th Februry,2018",
                head:'The Universe Through A Child S Eyes',
                paragraph:'for most of us,the idea of astronomy is something we directly connect to "stargazing",telescopes and seeing magnificent displays in the heavens.'
                  },
                  {
                    images:"./e2.jpg",
                    date:"25th Februry,2018",
                    head:'The Universe Through A Child S Eyes',
                    paragraph:'for most of us,the idea of astronomy is something we directly connect to "stargazing",telescopes and seeing magnificent displays in the heavens.'
                      }
]
const upcomingEvent=document.getElementById('event')
const eventslidebtn=document.getElementById('eventslidebtn')


const newpost=mypost.length/2;
function upcomingE(first,last){
  upcomingEvent.innerHTML='';
  mypost.slice(first,last).map((val,i)=>{
      upcomingEvent.innerHTML+=`
      <div class="eventwithimg">
      <div class="eventzoom">
        <img class="eventimg" src="${val.images}" alt="">
      </div>
      <div class="eventsection">
        <p>${val.date}</p>
        <h3>${val.head}</h3>
        <p>${val.paragraph}</p>
      </div>
    </div>
      `
  })
}
upcomingE(0,2);

let incValue=1;
let newIndex=0;

for(let i=0;i<newpost;i++){
  newIndex=i==0?i:i+incValue;
  if(i!==0){
 incValue+=1;
  }

  eventslidebtn.innerHTML+=`
  <div class="eventslide" id="eventbtn" onclick="nextpost(${newIndex},this)"><span></span></div>
  `
}


function nextpost(index,buttonElement){
  let eventslide=document.querySelectorAll('.eventslide');
  first=index;
  last=first+2;
  upcomingE(first,last);
  eventslide.forEach((btn)=>{
btn.style.backgroundColor='';
  })
  buttonElement.style.backgroundColor='rgb(232, 123, 49)'
}



// Accessories
const myAccessoryArr=[
  {
    heading:"Fannie Rowe",
    para:'Accesories Here you can find the best computer accessory for your laptop,monitor,printer,scanner,speaker.Here you can find the best computer accesory for your laptop,monitor,printer,scanner,speaker.'
  },
  {
heading:'Hulda Sutton',
para:'Accesories Here you can find the best computer accessory for your laptop,monitor,printer,scanner,speaker.Here you can find the best computer accesory for your laptop,monitor,printer,scanner,speaker.'
  },
  {
    heading:"computer Course",
    para:'Accesories Here you can find the best computer accessory for your laptop,monitor,printer,scanner,speaker.Here you can find the best computer accesory for your laptop,monitor,printer,scanner,speaker.'
  },
  {
    heading:'Designing Course',
    para:'Accesories Here you can find the best computer accessory for your laptop,monitor,printer,scanner,speaker.Here you can find the best computer accesory for your laptop,monitor,printer,scanner,speaker.'
      },
      {
        heading:"Photoshop Course",
        para:'Accesories Here you can find the best computer accessory for your laptop,monitor,printer,scanner,speaker.Here you can find the best computer accesory for your laptop,monitor,printer,scanner,speaker.'
      },
      {
        heading:'Javascript course',
        para:'Accesories Here you can find the best computer accessory for your laptop,monitor,printer,scanner,speaker.Here you can find the best computer accesory for your laptop,monitor,printer,scanner,speaker.'
          },
          {
            heading:"HTMl CSS",
            para:'Accesories Here you can find the best computer accessory for your laptop,monitor,printer,scanner,speaker.Here you can find the best computer accesory for your laptop,monitor,printer,scanner,speaker.'
          },
          {
            heading:'Hulda Sutton',
            para:'Accesories Here you can find the best computer accessory for your laptop,monitor,printer,scanner,speaker.Here you can find the best computer accesory for your laptop,monitor,printer,scanner,speaker.'
              },
]
const accessory=document.getElementById('accessory');
const accessorybtn=document.getElementById('accessorybtn');

// let lastIndex=startIndex+perview;
function renderAcc(startIndex,lastIndex){
  accessory.innerHTML='';
  myAccessoryArr.slice(startIndex,lastIndex).map((val,i)=>{
    // if(i<2){
      accessory.innerHTML+=`
      <div class="accessorypara">
      <div class="starchecked">
      <div>
      <h3>
      ${val.heading}
        </h3>
      </div>
    <div class="stars">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#f6bf40" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#f6bf40" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"/></svg>
    
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#f6bf40" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="grey" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="grey" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"/></svg>
    
     </div>
     </div>
     <p>${val.para}</p>
  </div>   `
  // }
  })
}
renderAcc(0,2);

let newarr=(myAccessoryArr.length/2);
// prev=0;
let inc=1;
let index=0;
for(let i=0;i<newarr;i++){
  index=i==0?i:i+inc;
  if(i!==0){
    inc+=1;
  }
  
  accessorybtn.innerHTML+=`
  
  <div class="starbtn" id="Accbtn" onclick="nextAcc(${index},this)"><span></span></div>
  `
}
// let startIndex=0;
let perview=2;
function nextAcc(index,buttonElement){
  let starbtn=document.querySelectorAll('.starbtn');
  startIndex=index;
  lastIndex=startIndex+perview;
  renderAcc(startIndex,lastIndex);
  starbtn.forEach((btn)=>{
btn.style.backgroundColor='';
  })
buttonElement.style.backgroundColor='rgb(232, 123, 49)';
}








//form validaition
let regex1 = /^[a-zA-Z]*$/;
regular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const username = document.getElementById('name')
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const choosecourse = document.getElementById('select');
const submit = document.getElementById('submit');

const namepara = document.getElementById('namepara');
const emailpara = document.getElementById('emailpara');
const contactpara = document.getElementById('contactpara');
const selectpara = document.getElementById('selectpara');

submit.addEventListener('click', () => {
  const name1 = username.value;
  const num1 = contact.value;
  const abcemail1 = email.value;
  const select = choosecourse.value;
  console.log(select);
  if (!name1.match(regex1) || name1 == '') {
    namepara.innerText = 'Enter charecter only';
  }
  if (num1.lenght > 10 || num1.length < 10 || num1 == '') {
    contactpara.innerText = 'Enter 10 digit number';
  }
  if (!abcemail1.match(regular || abcemail1 == '')) {
    emailpara.innerText = 'Enter valid email';
  }
  if (select == '') {
    selectpara.innerText = 'Choose any course';
  }
})

const emailid = document.getElementById('emailid');
const emailbtn = document.getElementById('emailbtn');
const validemail = document.getElementById('validemail')
emailbtn.addEventListener('click', () => {
  console.log(emailid.value);
  if (email.value !== emailid.value || emailid.value == '') {
    validemail.innerText = 'Enter same email as form '
  }

})



///       arrow button


//for single button
// const arrowbutton= document.querySelector('.arrowbtn')
// const buttontext= document.querySelector('.buttontext')
// arrowbutton.addEventListener('mouseover',()=>{
//   buttontext.textContent='DETAILS';
// })
// arrowbutton.addEventListener('mouseout',()=>{
//   buttontext.textContent='';
// })

//for multiple button

const arrowbutton = document.querySelectorAll('.arrowbtn');
arrowbutton.forEach((val) => {
  const buttontext = val.querySelector('.buttontext');
  val.addEventListener('mouseover', () => {
    buttontext.textContent = 'DETAILS';
  })
  val.addEventListener('mouseout', () => {
    buttontext.textContent = '';
  })
})





