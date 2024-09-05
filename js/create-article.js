document.addEventListener("DOMContentLoaded", function() {
    if (window.File && window.FileList && window.FileReader) {
        const filesInput = document.getElementById("files");

        filesInput.addEventListener("change", function(e) {
            const files = e.target.files;
            const filesLength = files.length;

            for (let i = 0; i < filesLength; i++) {
                const file = files[i];
                const fileReader = new FileReader();

                fileReader.onload = function(e) {
                    const file = e.target;
                    const span = document.createElement("span");
                    span.className = "pip";

                    const img = document.createElement("img");
                    img.className = "imageThumb";
                    img.src = e.target.result;
                    img.title = file.name;

                    const removeSpan = document.createElement("span");
                    removeSpan.className = "remove";
                    removeSpan.textContent = "Remove image";
                    removeSpan.addEventListener("click", function() {
                        span.remove();
                    });

                    span.appendChild(img);
                    span.appendChild(document.createElement("br"));
                    span.appendChild(removeSpan);

                    filesInput.insertAdjacentElement("afterend", span);
                };

                fileReader.readAsDataURL(file);
            }

            console.log(files);
        });
    } else {
        alert("Your browser doesn't support the File API");
    }
});
