window.onscroll = () => {
    const target = document.body;
    if(this.scrollY <= 150) target.className = ''; else target.className = 'scroll';
    // if(this.scrollY > 4750) target.className = 'end';

    // console.log(this.scrollY);

    
};