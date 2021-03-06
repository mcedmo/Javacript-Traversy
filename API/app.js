document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create XHR object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true);
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.responseText);
        }
    }

    xhr.send();
}