function fill_doc_list(doctors)
{
    doc_box = document.getElementById('doc-box')
    container = document.getElementById('doctors-api-container')
    container.innerHTML = ''
    for (let index = 0; index < doctors.length; index++) {
        const doc = doctors[index];
        new_box = doc_box.cloneNode(true)
        new_box.style.display = 'block'
        
        new_box.children[0].children[0].children[0].src = doc['avatar']
        
        name_and_comments = new_box.children[0].children[1]
        name_and_comments.children[0].innerHTML = doc['name']
        name_and_comments.children[1].innerHTML = doc['spec']
        for (let i = 4 ; i >= doc['stars'] ; i++)
        {
            name_and_comments.children[2].children[i].children[0].fill = 'none'
        }
        name_and_comments.children[2].children[5].innerHTML = '(' + doc['comments'] + ' نظر' + ')'
        name_and_comments.children[3].innerHTML = doc['comment_text']

        contact_info = new_box.children[0].children[2]
        contact_info.children[0].children[0].children[1].innerHTML = doc['location']
        contact_info.children[0].children[1].children[1].innerHTML = 'تجربه کاری ' + doc['experience_years'] + ' سال'
        contact_info.children[0].children[2].children[1].innerHTML = doc['user_percent'] + ' درصد رضایت کاربران'
        contact_info.children[2].innerHTML = 'اولین نوبت خالی ' + doc['first_empty_date']

        container.appendChild(new_box)
    }
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        doctors = JSON.parse(this.response)
        console.log(doctors)
        fill_doc_list(doctors)
    }
};

xhttp.open("GET", "https://intense-ravine-40625.herokuapp.com/doctors", true);
xhttp.send();


