const textareaEl = document.querySelector('.textarea');
const wordsEl = document.querySelector('.stat__number--words');
const charactersEl = document.querySelector('.stat__number--characters');
const twitterEl = document.querySelector('.stat__number--twitter');
const facebookEl = document.querySelector('.stat__number--facebook');

const countExceededHandler = (twitterCount, facebookCount) => {

    if (twitterCount < 0)
        twitterEl.classList.add('stat__number--limit');
    else
        twitterEl.classList.remove('stat__number--limit');

    if (facebookCount < 0)
        facebookEl.classList.add('stat__number--limit');
    else
        facebookEl.classList.remove('stat__number--limit');
};

textareaEl.addEventListener('input', () => {

    let contentValue = textareaEl.value;

    if (contentValue.includes('<script>')) {
        alert('<script> is not allowed.');
        contentValue = contentValue.replace('<script>', '');
        textareaEl.value = contentValue;
    }

    const length = contentValue.length;
    const twitterAndFacebookLengthArr = [280 - length, 2200 - length];

    wordsEl.textContent = contentValue.split(/\s+/)
        .filter(item => item.length > 0)
        .length;

    [charactersEl.textContent,
        twitterEl.textContent,
        facebookEl.textContent] = [length, ...twitterAndFacebookLengthArr];

    countExceededHandler(...twitterAndFacebookLengthArr);
});