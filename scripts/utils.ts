export const functionality = (openIcon, closeIcon)=> {
    const btnIcon = document.querySelector('#c123')
    const boxContainer = document.querySelector('#box123')
    const btnContainer = document.querySelector('#c123')
		document?.querySelector('.closebtn')?.addEventListener('click', () => {
			btnIcon.innerHTML = openIcon;
			boxContainer.style.display = 'none';
			btnContainer.classList.add('animateB123');
		});
		document?.getElementById('b123')?.addEventListener('click', () => {
			const box = document?.getElementById('box123')?.style.display;
			if (box === 'block') {
				document.getElementById('c123').innerHTML = openIcon;
				document.getElementById('box123').style.display = 'none';
				document.getElementById('b123').classList.add('animateB123');
			} else {
				document.getElementById('c123').innerHTML = closeIcon;
				document.getElementById('box123').style.display = 'block';
				document.getElementById('b123').classList.remove('animateB123');
			}
		});

		const form = document.forms['submit-to-google-sheet'];

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			document.querySelector('#SUB123').disabled = true;
			document.querySelector('#SUB123').innerHTML = 'Sending...';
			fetch(scriptURL, { method: 'POST', body: new FormData(form) })
				.then((response) => {
					formSubmit();
				})
				.catch((error) => formError());
		});

		formSubmit = function () {
			form.innerHTML = `
                      <h3>Form Submitted</h3>
              <button onclick='showForm()' class='shrrr'>Send Another</button>
        `;
		};
		formError = function () {
			form.innerHTML = `
                      <h3>An Error Occurred <br> please send again</h3>
              <button onclick='showForm()' class='shrrr'>Retry</button>
        `;
		};

		showForm = function () {
			form.innerHTML = `
                       <div class="v123"></div>
         <input type="text" placeholder="* Name" name="Product" value='KT' style='visibility: hidden; height:0px; padding:0px'> 
        <input type="text" placeholder="* Name" name="Name" required>

        <div class="v123"></div>
        <input type="email" placeholder="* Email" name="Email" required>

        <div class="v123"></div>
        <textarea id="" name="Message" placeholder="* Message" rows="8" required></textarea>

        <button id="SUB123" class="shrrr">Submit </button>
        `;
		};
	}