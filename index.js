pageContent = () => {
    return `
        <main>
			<section class="section-container">
				<h1>Learning to code? This is the most important thing you will ever read!</h1>

				<ul>
					<li class="li-green">💰 Land a job with a 6 figure salary</li>
					<li class="li-yellow">💻 Master JavaScript in 3 hours</li>
					<li class="li-blue">⚛️ Learn React in 10 minutes</li>
					<li class="li-pink">☕ Be a NodeJS Dev by lunchtime</li>
				</ul>

				<h3>My subliminal learning technique worked for Mark Zuckerberg and Albert Einstein, and it can work for you!</h3>
				<img src="images/bugatti.jpg">
				<p>Want a great job in tech? Want a six-figure salary? Then you have come to the right place. I am going to tell you all you need to know to get all of that and much more, without you lifting a finger. You can learn passively. Just sit back, close your eyes, and let the sound of my voice make the code sink deep into your brain. </p>
			</section>
		</main>
        <div class="modal" id="modal">
			<div class="close-modal-btn-container">
				<button class="modal-close-btn" id="modal-close-btn">X</button>
			</div>
			<div class="modal-inner" id="modal-inner">
                
			</div>
		</div>`
}

const modalFormProgress = () => {
    return `
        <div class="cookie-modal-default-content">
            <div class="modal-header">
                <h2>We ❤️ Your Data!</h2>

                
                <p 
                    class="modal-text" 
                    id="modalTextStepZero"
                >
                        We have a strict policy on tracking and spamming: we'll definitely track you, and we'll definitely spam you. To use this site, enter your name and email address and accept our ridiculous terms and conditions.
                </p>

                
                <div class="modal-inner-loading">
                    <img src="images/loading.svg" class="loading">
                    <p id="uploadTextStepOne">
                        Uploading your data to the dark web...
                    </p>
                    
                    <p id="uploadTextStepTwo">
                        Making the sale...
                    </p>
                </div>
            </div>
            <form id="consent-form">
                <input 
                    type="text"
                    id="fullNameInput"
                    name="fullNameInput"
                    placeholder="Full name"
                    required
                >
                <input 
                    type="email"
                    id="emailInput"
                    name="emailInput"
                    placeholder="Email"
                    required
                >
                <div
                    class="modal-choice-btns"
                    id="modal-choice-btns"
                >
                    <button 
                        type="submit" 
                        class="modal-btn"
                    >
                        Accept
                    </button>
                    <button 
                        type="button"
                        class="modal-btn"
                    >
                        Decline
                    </button>
                </div>
            </form>	
        </div>	
        <div class="cookie-modal-confirmation">
            <h2>Thanks you sucker!</h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>
        </div>		
    `;
}



loadEvent = () => {
    // ROOT
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = pageContent();

    // Cookie modal
    const cookieModal = document.getElementById('modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // MODAL SKELETON
    const modalInner = document.getElementById('modal-inner');
    modalInner.insertAdjacentHTML('afterbegin', modalFormProgress());
    
    // Modal elements
    const cookieModalDefaultContent = document.querySelector('.cookie-modal-default-content');
    const consentForm = document.getElementById('consent-form');
    const modalTextStepZero = document.getElementById('modalTextStepZero');
    const cookieModalConfirmation = document.querySelector('.cookie-modal-confirmation');
    const modalInnerLoading = document.querySelector('.modal-inner-loading');
    const uploadTextStepOne = document.getElementById('uploadTextStepOne');
    const uploadTextStepTwo = document.getElementById('uploadTextStepTwo');

   
    // Show modal after 1,5s
    setTimeout(() => {
        cookieModal.style.display = 'inline';
        cookieModalConfirmation.style.display = 'none';
    }, 1500);

    // Close modal
    modalCloseBtn.addEventListener('click', () => {
        cookieModal.style.display = 'none';
    })

    
    // SUBMIT FORM
    consentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Step 1
        modalTextStepZero.style.display = 'none';
        modalInnerLoading.style.display = 'inline';
        uploadTextStepTwo.style.display = 'none';
        // Step 2
        setTimeout(() => {
            uploadTextStepOne.style.display = 'none';
            uploadTextStepTwo.style.display = 'inline';
        }, 1500);

        // Step 3
        setTimeout(() => {
            cookieModalDefaultContent.style.display = 'none';
            cookieModalConfirmation.style.display = 'inline';
        }, 3000)
    });
};

window.addEventListener("load", loadEvent);