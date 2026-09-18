function openDiary() {

    document
        .getElementById("cover")
        .classList.add("hidden");

    document
        .getElementById("page1")
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



function nextPage(pageNumber) {

    document
        .querySelectorAll(".page")
        .forEach(function(page) {

            page.classList.add("hidden");

        });


    document
        .getElementById("page" + pageNumber)
        .classList.remove("hidden");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}