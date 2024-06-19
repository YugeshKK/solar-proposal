var oldScrollX = document.getElementById('content-scroll').scrollX;


function onScrollBtnClick(dir) {
    const contentBox = document.querySelector('.content-main-container');
    if(dir === 'left') {
         contentBox.scrollBy({top: 0, left: -100, behavior: 'smooth'});
         // $('.active-nav-block').removeClass('active-nav-block').prev().addClass('active-nav-block');
    } else {
         contentBox.scrollBy({top: 0, left: 100, behavior: 'smooth'});
         // $('.active-nav-block').removeClass('active-nav-block').next().addClass('active-nav-block');
    }
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 37) {
         onScrollBtnClick('left');
    }
    if (e.keyCode === 39) {
         onScrollBtnClick('right');
    }
    e.preventDefault();
});

function toggleNavDiag() {
    $('.nav-overlay').toggleClass('open-overlay');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView();
    // $('.active-nav-block').removeClass('active-nav-block');
    // $('#' + id + '-nav').addClass('active-nav-block');
    toggleNavDiag();
}

var text= document.getElementById('text');

function changeText(key){
    if(key=='mine'){
        text.innerHTML='Coal and natural gas are responsible for nearly 70% of electricity generation in the U.S., and demand is directly influencing rising utility prices. Mining these resources causes irreparable damage to the environment.';
    }
    else if(key=='fact'){
        text.innerHTML='The first thing I notice is the smell; leather, wood, polish with a faint citrus scent. It’s very pleasant, and the lighting is soft, subtle. In fact, I can’t see the source, but it’s around the cornice in the room,';
    }
    else if(key=='grid'){
        text.innerHTML='At the foot of the bed, set apart a few feet, is a large oxblood chesterfield couch, just stuck in the middle of the room facing the bed. An odd arrangement… to have a couch facing the bed, and I smile to myself';
    }
    else if(key=='house'){
        text.innerHTML='I’ve picked on the couch as odd, when really it’s the most mundane piece of furniture in the room. I glance up and stare at the ceiling.'
    }
}

