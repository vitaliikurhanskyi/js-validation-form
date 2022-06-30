const name = document.getElementById('name')
const email = document.getElementById('email')
const text = document.getElementById('text')
const form = document.getElementById('form')
const error = document.getElementById('errors')

form.addEventListener('submit', function(e){

	function validateEmail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

	var messages = []

	if(!validateEmail(email.value)) {
		messages.push('Name is required!');
	}

	if(name.value === '' || name.value === null) {
		messages.push('Email Format Must Be \"example@example.com\"');
	}

	if(text.value === '' || text.value === null) {
		messages.push('Please Fill In The Text Box!');
	}


	if(messages.length > 0 ) {
		e.preventDefault();
		error.innerText = messages.join('\r\n  ')
	}

});

