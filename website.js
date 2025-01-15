

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

// blog for dropdown


// course offer section
const course = document.getElementById('course-offer-item');
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const slide = document.querySelectorAll('.all-designing-course');
const slidePerView = 4;
const totalSLide = slide.length;
let currentIndex = 0;





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





