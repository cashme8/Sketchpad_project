// This script uses a black color
// Additionally,It implements a progressive darkening effect where each interaction darkens the square by 10%.
// The goal is to achieve a fully black (or completely colored) square in only ten interactions.



document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("grid-container");
    const button = document.getElementById("new-grid-button");

    function createGrid(squaresPerSide) {
        // Clear the existing grid
        container.innerHTML = '';
        // Calculate the size of each square
        const squareSize = 600 / squaresPerSide; // 600 is the width and height of the container

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const square = document.createElement("div");
            square.classList.add("grid-item");    // Name the new class of squares
            square.style.width = `${squareSize}px`;     // The width of a side
            square.style.height = `${squareSize}px`;    // The height of a side
            square.dataset.darkness = 0; // Initialize darkness level at 0s
            container.appendChild(square);        // Add squares into the container

            // Add an event listener for mouseover to change the background color
            square.addEventListener("mouseover", () => {
                let darkness = parseFloat(square.dataset.darkness);
                if (darkness < 1) {
                    darkness += 0.1;
                    square.dataset.darkness = darkness;
                    square.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`;
                }  
            });
        }
    }

    // We can set an Initial grid of 16*16 but then it would cover the options
    // createGrid(16);
    // Start with a 16x16 grid

    // Add event listener to the new-grid-button
    button.addEventListener("click", () => {
        let squaresPerSide;
        do {
            squaresPerSide = parseInt(prompt("Enter the number of squares per side for the new grid (max 100):"));
            if (squaresPerSide > 100) {
                alert("Please enter a number less than or equal to 100.");
            }
        } while (squaresPerSide > 100);

        if (squaresPerSide && squaresPerSide > 0) {
            createGrid(squaresPerSide);
        } else {
            alert("Please enter a valid number greater than 0.");
        }
    });
});