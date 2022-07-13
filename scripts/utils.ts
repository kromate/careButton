export const functionality = (openIcon, closeIcon, scriptURL)=> {
    const btnIcon = document.querySelector('#c123') 
    const boxContainer = document.querySelector('#box123') as HTMLDivElement
    const btnContainer = document.querySelector('#c123')

    const form = document.forms['submit-to-google-sheet'];
    if (btnIcon && boxContainer && btnContainer) {
        	document?.querySelector('.closebtn')?.addEventListener('click', () => {
			btnIcon.innerHTML = openIcon;
			boxContainer.style.display = 'none';
			btnContainer.classList.add('animateB123');
		});
		document?.getElementById('b123')?.addEventListener('click', () => {
			const box = document?.getElementById('box123')?.style.display;
			if (box === 'block') {
				btnIcon.innerHTML = openIcon;
				boxContainer.style.display = 'none';
				btnContainer.classList.add('animateB123');
			} else {
				btnIcon.innerHTML = closeIcon;
				boxContainer.style.display = 'block';
				btnContainer.classList.remove('animateB123');
			}
		});

	
		form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = document.querySelector('#SUB123') as HTMLButtonElement
            if (submitBtn) {
            submitBtn.disabled = true;
			submitBtn.innerHTML = 'Sending...';
            }
		
			fetch(scriptURL, { method: 'POST', body: new FormData(form) })
				.then((response) => {
					formSubmit(form);
				})
				.catch((error) => formError(form));
		});
	
    }
    

    		const formSubmit =(form)=> {
			form.innerHTML = `
                      <h3>Form Submitted</h3>
              <button onclick='showForm()' class='shrrr'>Send Another</button>
        `;
		};
		const formError = (form)=> {
			form.innerHTML = `
                      <h3>An Error Occurred <br> please send again</h3>
              <button onclick='showForm()' class='shrrr'>Retry</button>
        `;
		};

		const showForm = (form)=> {
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
    
