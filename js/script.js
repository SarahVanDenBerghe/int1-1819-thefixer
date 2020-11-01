{
    $numbButton = document.querySelector(`.button__nebro`);
    $nebroImg = document.querySelector(`.nebro__image`);
    $nebroIntro = document.querySelector(`.rating__info`);
    $nebroText = document.querySelector(`.rating__message`);

    const init = () => {
        $numbButton.onclick = () => numbIncrease();

    }


    const numbIncrease = () => {
        changeNebro();
        const $numb = document.querySelector(`.times__feeded`);
        let count = parseInt($numb.textContent);
        count++;
        $numb.textContent = count;

        $numbButton.style.visibility = `hidden`;
        $nebroIntro.style.visibility = `hidden`;
        $nebroText.style.visibility = `visible`;
    }


    const changeNebro = () => {
        $nebroImg.src = "../assets/img/nebro_feeded.png";
    }


    init();
}