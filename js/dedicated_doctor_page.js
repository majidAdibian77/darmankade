function getDoctorInfos(id) {
    // This function take id of doctor and set values of this doctor page
    // First data of this doctor is get from api
    // then elements of html page is taken to set values

    const url = 'https://intense-ravine-40625.herokuapp.com/doctors/' + id;
    fetch(url)
        .then(response => response.json()
        ).then(response_json => {
            // Following lines is for set values in card in doctor page
            doctor_avatar = document.getElementById('doctor-information-card-top').getElementsByTagName("img")[0]
            doctor_name = document.getElementById('doctor-information-card-middle').getElementsByTagName("h1")[0]
            doctor_spec = document.getElementById('doctor-information-card-middle').getElementsByTagName("h2")[0]
            doctor_number = document.getElementById('doctor-information-card-middle').getElementsByTagName("h3")[0]
            doctor_experience_year = document.getElementById('doctor-information-card-bottom').getElementsByTagName('span')[1]
            doctor_first_date = document.getElementById('doctor-information-card-bottom').getElementsByTagName('span')[3]
            doctor_online_payment = document.getElementById('doctor-information-card-bottom').getElementsByTagName('span')[5]
            doctor_avatar.src = response_json.avatar  // Set image of doctor
            doctor_name.innerHTML = response_json.name  // Set name of doctor
            doctor_spec.innerHTML = response_json.spec  // Set specialty of doctor
            doctor_number.innerHTML = ' شماره نظام پزشکی : ' + response_json.number  // Set medical system number
            doctor_experience_year.innerHTML = response_json.experience_years  // Set doctor experience
            doctor_first_date.innerHTML = response_json.first_empty_date  // Set first empty time of doctor
            doctor_online_payment.innerHTML = {true: 'دارد', false: 'ندارد'}[response_json.online_pay]  // Set online payment of doctor

getDoctorInfos(1)