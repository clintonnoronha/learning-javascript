const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');
const counterValueEl = document.querySelector('.counter__value');
const incrementBtnEl = document.querySelector('.counter__button--increment');
const decrementBtnEl = document.querySelector('.counter__button--decrement');
const resetBtnEl = document.querySelector('.counter__reset-button');

const incrementCounterHandler = () => {
    const limitValue = 5;
    const currentValue = +(counterValueEl.textContent);
    const newValue = currentValue + 1;

    if (newValue === 1) {
        decrementBtnEl.disabled = false;
        counterValueEl.textContent = currentValue + 1;
    } else if (newValue >= limitValue) {
        counterTitleEl.innerHTML = 'Limited! Buy <b>PRO</b> for >5';
        counterEl.classList.add('counter--limit');
        incrementBtnEl.disabled = true;
        counterValueEl.textContent = limitValue;
    } else {
        counterValueEl.textContent = currentValue + 1;
    }

    incrementBtnEl.blur();
};

incrementBtnEl.addEventListener('click', incrementCounterHandler);

decrementBtnEl.addEventListener('click', () => {
    const currentValue = +(counterValueEl.textContent);
    const newValue = currentValue - 1;

    if (newValue === 0) {
        counterValueEl.textContent = 0;
        decrementBtnEl.disabled = true;
        return;
    } else if (currentValue === 5) {
        counterTitleEl.textContent = 'Fancy Counter';
        counterEl.classList.remove('counter--limit');
        incrementBtnEl.disabled = false;
    }

    counterValueEl.textContent = newValue;
    decrementBtnEl.blur();
});

resetBtnEl.addEventListener('click', () => {
    counterTitleEl.textContent = 'Fancy Counter';
    counterEl.classList.remove('counter--limit');
    incrementBtnEl.disabled = false;
    decrementBtnEl.disabled = true;
    counterValueEl.textContent = 0;
    resetBtnEl.blur();
});

document.addEventListener('keydown', incrementCounterHandler);