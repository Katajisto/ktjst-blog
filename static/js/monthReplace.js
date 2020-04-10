function replaceMonth(className) {
    //I know this is not a good fix...
    //Replace blog posts time stamp months with Finnish.

    let kuukaudet = ["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"];
    let months    = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let replaceElement = document.getElementsByClassName(className);

    for(let i = 0; i < replaceElement.length; i++) {
        let curElem = replaceElement[i]
        for(let i = 0; i < 12; i++) {
            curElem.innerHTML = curElem.innerHTML.replace(months[i], kuukaudet[i]);
        }
    }

}

replaceMonth("blog-post-date");
