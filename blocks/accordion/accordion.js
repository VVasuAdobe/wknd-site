export default function decorate(block) {
    let element = block.children;
    for(var i=0; i<element.length; i++){
        var child = element[i];
        child.firstElementChild.classList.add("acc_tab");
        child.firstElementChild.classList.add("acc_tab_bottom");
        child.lastElementChild.classList.add("acc_pannel");
    }

    var acc = document.getElementsByClassName("acc_tab");
    for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
             panel.style.display = "none";
             this.classList.add("acc_tab_bottom");
        } else {
            panel.style.display = "block";
            this.classList.remove("acc_tab_bottom");
        }
    });
    }
}

