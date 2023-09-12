document.addEventListener("DOMContentLoaded", () => {
    const expandMore = document.querySelectorAll("[expand-more]")

    console.log(expandMore)

    function expand() {
        const showContent = document.getElementById(this.dataset.target)

        if (showContent.classList.contains("expand-active")) {
            this.innerHTML = this.dataset.showtext
        } else {
            this.innerHTML = this.dataset.hidetext
        }
        showContent.classList.toggle("expand-active")
    }

    expandMore.forEach(expandMore => {
        expandMore.addEventListener("click", expand)
    })
})