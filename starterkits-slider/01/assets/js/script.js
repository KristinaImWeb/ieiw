// generiert mit ChatGPT:

const slider = document.querySelector('.slider');

// Function to update body class
const updateClass = () => {
    const sliderValue = slider.value;
    document.body.className = `state-${sliderValue}`;
};

// Initial call to set the class
updateClass();

// Event listener to update class when slider value changes
slider.addEventListener('input', updateClass);