export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    document.title = "Robert's Portfolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    const h1 = document.body.getElementsByTagName("h1");
    h1.innerText = "Robert";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
     const paraText = "a small passage about yourself ";

     const div = document.body.children[1];
     const p = div.children[1];
     p.innerText = paraText;
}
