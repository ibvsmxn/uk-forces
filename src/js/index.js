// NAVIGATION CHANGE COLOUR ON SCROLL
window.onscroll = () => {
    const target = document.body;
    if(this.scrollY <= 50) target.className = ''; else target.className = 'scroll';
    // if(this.scrollY > 4750) target.className = 'end';

    // console.log(this.scrollY);
};


// FOOTER GET CURRENT YEAR
document.getElementById("copyYear").innerHTML = new Date().getFullYear();