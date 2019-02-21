function getDogImage(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Woops! Something went wrong, try again!'));
}

function displayResults(responseJson){
    console.log(responseJson);
    if(responseJson.status === 'success'){
    $('.js-dog-results').append(`<img src="${responseJson.message}">`);
    }
}

function watchForm(){
    $('form').on('submit', function(event){
        event.preventDefault();
        clearDogs();
        let dogBreed = $('#dogBreed').val().toLowerCase();
        getDogImage(dogBreed);
    })
}

function clearDogs(){
    $('.js-dog-results').empty();
}

$(function(){
    console.log("app loaded, waiting for submit.")
    watchForm();
})