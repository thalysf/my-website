window.onload = main();

function main()
{
    let about_img = document.getElementById('about-img-box');
    about_img.addEventListener('mouseover', 
        function()
        {
            document.querySelector('.about-img-text').style.color = "#02c39a"
            document.querySelector('.about-img-text').style.backgroundColor = "#cecaca62"
        });
    about_img.addEventListener('mouseout', 
        function()
        {
            document.querySelector('.about-img-text').style.color = "#00a896";
            document.querySelector('.about-img-text').style.backgroundColor = "#cecaca38"
        });
}
function changeDropdownToggle(x) 
{
    if (x.matches)// If media query matches
    { 
      document.getElementById('login-dropdown').classList.add('dropleft');
    }
    else 
    {
        document.getElementById('login-dropdown').classList.remove('dropleft');
    }
}
let x = window.matchMedia("(min-width: 992px)");
changeDropdownToggle(x);
x.addListener(changeDropdownToggle);  
