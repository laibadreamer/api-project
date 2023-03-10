fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(json => {
    console.log(json[0]);
    for (let index = 0; index < 15; index++) {
       const markup =
        `
        <li class="card-container">
            </div>
             <div class="name-container">
                 <span class="firstName">${json[index].name}</span>
                 <span class="lastName">${json[index].email}</span>
             </div>
             <p class="email"></p>
            </li>
    `
    document.querySelector('.list-container').innerHTML += markup
    }
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('')


//navbar

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
