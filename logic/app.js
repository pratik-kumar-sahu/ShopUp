const options = document.getElementById('options');
options.style.display = 'none';

const toggleOptions = () => {
    if (options.style.display === 'none') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
};
