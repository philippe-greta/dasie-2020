function getIncludeHTML(name, querySelect) {
fetch(name)

.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector(querySelect).innerHTML = data;
});
}