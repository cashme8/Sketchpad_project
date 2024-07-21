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
            container.appendChild(square);        // Add squares into the container

            // Add an event listener for mouseover to change the background color
            square.addEventListener("mouseover", () => {
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                square.style.backgroundColor = randomColor;     //this simply gives you any random color while hovering over the pad
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