
document.querySelector('.btn').addEventListener('click', () => {


    const number = document.querySelector('.inputNumber').value;

    const xhr = new XMLHttpRequest();


    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


    xhr.onload = function () {


        if (this.status === 200) {

            let response = JSON.parse(this.responseText);
            let output = '';





            if (response.type === 'success') {

                response.value.forEach(element => {
                    output += `<li>${element.joke}</li>`;
                });

            } else {

                output += `<li>Something Went Wrong</li>`
            }


            document.querySelector('.joke').innerHTML = output;

        }




    }

    xhr.send();



});