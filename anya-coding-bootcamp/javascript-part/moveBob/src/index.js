document.addEventListener('DOMContentLoaded', () => {
    



    //!-----------------------------------------------------------------------------------------------------------



    //!EXERCISE TIME!

    const bob = document.querySelector('.face')

    let count = 0

    function moveBob(){
        count += 50
        console.log(count)
        bob.style.left = count + 'px';
    }
    
    bob.addEventListener('click', moveBob)

    //!-----------------------------------------------------------------------------------------------------------
    


})