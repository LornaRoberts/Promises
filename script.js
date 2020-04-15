const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if (elRight + amount > bodyBoundary) {
                reject();
            }
            else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        
        }, delay);
    });
};

moveX(btn, 300, 1000)
.then(() => {
   return moveX(btn, 300, 1000);
})
.then(() => {
    return moveX(btn, 300, 1000);
})
.then(() => {
    return moveX(btn, 300, 1000);
})
.then(() => {
    alert('DONE WITH BOTH');
})
.catch(() => {
alert('OUT OF SPACE, CANNOT MOVE!')
});


btn.addEventListener('click', function(){
moveX;
});