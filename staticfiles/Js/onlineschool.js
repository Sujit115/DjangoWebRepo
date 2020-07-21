document.querySelectorAll('li').forEach((key, value) => {
    key.addEventListener('click', () => {
        document.querySelector('.show-text-container p').innerText = key.innerText
    })
})
document.addEventListener('click',(e)=>{
	if(e.target.closest('.dropdown-container')){
    	document.querySelector('.options-container').classList.toggle('hide')
			document.querySelector('.icon-container').classList.toggle('rotateit')

    	return

	};
    document.querySelector('.options-container').classList.add('hide')
	document.querySelector('.icon-container').classList.toggle('rotateit')


})







let result = ''
document.querySelectorAll('li').forEach((key, value) => {
        key.addEventListener('click', async(e) => {
            document.querySelector('.show-text-container p').innerText = key.innerText;
            e.preventDefault();
            data = '?Subject=' + `${document.querySelector('.show-text-container p').innerText}`;
            history.replaceState('/nepalonlineschool/', 'Title', '/nepalonlineschool/' + data);
            // url = '{% url 'nos' %}' 
            // response = await fetch('{% url 'homepage' %}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': '{{csrf_token}}',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    subject: (document.querySelector('.show-text-container p').innerText)
                }),
                mode: 'cors',
                credentials: 'include'
            })
            const result = await response.json()
                .then((result) => {
                    console.log(result.data)
                    document.querySelector('.course-content-container').innerHTML = ''
                    for (i in Object.keys(result.data)) {
                        console.log(result.data[i].subject_name)
                        document.querySelector('.course-content-container').innerHTML += (
                            `<div class="course-content-container-wrapper">
                                <div class="column-1-thumbnail">
                                    <img src="${result.data[i].contributer_image}" alt="">
                                </div>
                                <div class="column2-content">
                                    <div class="header-content">
                                        <h2>${result.data[i].subject_name}</h2>
                                    </div>
                                    <div class="contributer-section">
                                        <p>Subject: ${result.data[i].subject_name}</p>
                                        <p>Contributed By: ${result.data[i].contributer_name}</p>
                                    </div>
                                    <div class="buttons-section">
                                        <div class="watch-button button">
                                            <button><a href="">Learn</a></button>
                                        </div>
                                        <div class="share-button button">
                                            <button><a href="">Share</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                        )
                    }
                })
        })
        window.addEventListener('DOMContentLoaded', () => {
            if (window.location.href.split('/') > '1') {
                document.querySelector('.show-text-container p').innerText = window.location.href.split('=')[1].replace('+', ' ').replace('%20',' ')
            }
        })

    })