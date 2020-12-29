function getDoctorInfos(id) {
    const url = 'https://intense-ravine-40625.herokuapp.com/doctors/' + id;
    fetch(url)
        .then(response => response.json()
        ).then(response_json => {

        }
    ).catch(function (error) {
        alert("There is a problem in getting data!");
    })
}

getDoctorInfos(5)