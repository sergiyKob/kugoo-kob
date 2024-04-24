import Choices from "choices.js";
import 'choices.js/public/assets/styles/choices.min.css';

const multiDefault = () => {
    const elements = document.querySelectorAll('.multi-default');

    elements.forEach((el) => {
        const choices = new Choices(el, {
            searchEnabled: false,
        });
    });
};

multiDefault();