const aboutMe = document.getElementById('about');
const aboutPage = document.getElementById('about-me');
const resumeBtn = document.getElementById('my-resume');
const resumePage = document.getElementById('resume-box');
const portfolio = document.getElementById('portfolio');
const portfolioIcon = document.getElementById('portfolio-icon');
const homeIcon = document.getElementById('home');
const contactIcon = document.getElementById('contact-icon');
const contactPage = document.getElementById('contact');


//event listeners
//contact page
contactIcon.addEventListener('click', ()=>{
    contactPage.classList.toggle('right-nav');
    portfolio.classList.remove('right-nav');
    resumePage.classList.remove('right-nav');
    aboutPage.classList.remove('right-nav');
})
//home page
homeIcon.addEventListener('click', () => {
    portfolio.classList.remove('right-nav');
    resumePage.classList.remove('right-nav');
    aboutPage.classList.remove('right-nav');
    contactPage.classList.remove('right-nav');
})
//open portfolio
portfolioIcon.addEventListener('click', () => {
    portfolio.classList.toggle('right-nav');
    resumePage.classList.remove('right-nav');
    aboutPage.classList.remove('right-nav');
    contactPage.classList.remove('right-nav');

});
//open resume
resumeBtn.addEventListener('click', () => {
    resumePage.classList.toggle('right-nav');
    portfolio.classList.remove('right-nav');
    aboutPage.classList.remove('right-nav');
    contactPage.classList.remove('right-nav');



});

//open about me
aboutMe.addEventListener('click', () => {
    aboutPage.classList.toggle('right-nav');
    portfolio.classList.remove('right-nav');
    resumePage.classList.remove('right-nav');
    contactPage.classList.remove('right-nav');

});






