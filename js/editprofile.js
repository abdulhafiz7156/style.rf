console.log("Create by https://abdulhafiz-portfolio.vercel.app/")

document.addEventListener("DOMContentLoaded", function() {
  if (window.File && window.FileList && window.FileReader) {
    const filesInput = document.getElementById("files");
    const imagesContainer = document.querySelector(".images"); // Select the images div

    filesInput.addEventListener("change", function(e) {
      const files = e.target.files;
      const filesLength = files.length;

      for (let i = 0; i < filesLength; i++) {
        const file = files[i];
        const fileReader = new FileReader();

        fileReader.onload = function(e) {
          const file = e.target;
          const span = document.createElement("div");
          span.className = "uploaded__file";

          const img = document.createElement("img");
          img.className = "imageThumb";
          img.src = e.target.result;
          img.title = file.name;

          // Create a button element with the SVG
          const removeButton = document.createElement("button");
          removeButton.className = "removeButton"; // Assign a class for styling
          removeButton.innerHTML = `
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0C8.95373 0 0 8.95373 0 20C0 31.0463 8.95373 40 20 40C31.045 40 40 31.045 40 20C40 8.95503 31.0463 0 20 0ZM27.0712 25.3037C27.56 25.7925 27.56 26.5837 27.0712 27.0712C26.5824 27.56 25.7912 27.56 25.3037 27.0712L20.0075 21.775L14.675 27.1075C14.1825 27.5988 13.385 27.5988 12.8937 27.1075C12.4012 26.615 12.4012 25.8175 12.8937 25.3262L18.2262 19.9937L12.9299 14.6975C12.4412 14.2087 12.4412 13.4175 12.9299 12.93C13.4187 12.4412 14.2099 12.4412 14.6974 12.93L19.9937 18.2263L25.365 12.855C25.8575 12.3625 26.6549 12.3625 27.1462 12.855C27.6387 13.3475 27.6387 14.145 27.1462 14.6363L21.7749 20.0076L27.0712 25.3037Z" fill="black"/>
                        </svg>
                    `;
          removeButton.addEventListener("click", function() {
            span.remove(); // Remove the image span on button click
          });

          span.appendChild(img);
          span.appendChild(document.createElement("br"));
          span.appendChild(removeButton); // Append the button instead of span

          // Append the span to the images div
          imagesContainer.appendChild(span);
        };

        fileReader.readAsDataURL(file);
      }

      console.log(files);
    });
  } else {
    alert("Your browser doesn't support the File API");
  }
});
