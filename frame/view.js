export const bodyView = (title, desc) => {
   return `
     <div class="body123">
    <div id="box123" class="box123" style="display: none;">
      <header>
        <h3>${title}</h3>
        <p>${desc}</p>
        <svg width="20" height="20" class="closebtn" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1.5L22.8627 22.5627" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.8625 1.5L1.49986 22.5627" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


      </header>

      <form action="" name="submit-to-google-sheet">
        <div class="v123"></div>
         <input type="text" placeholder="* Name" name="${title}" value='KT' style='visibility: hidden; height:0px; padding:0px'> 
        <input type="text" placeholder="* Name" name="Name" required>

        <div class="v123"></div>
        <input type="email" placeholder="* Email" name="Email" required>

        <div class="v123"></div>
        <textarea id="" name="Message" placeholder="* Message" rows="8" required></textarea>

        <button id="SUB123" class="shrrr">Submit </button>

      </form>

      
    </div>

    <button id="b123" class="animateB123"
      style="width: 60px; height: 60px; outline: none; border-radius: 50%; border:none; padding-top:5px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="c123">
<rect x="0.900146" y="4.5" width="22.2" height="15" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
<path d="M22.5 5.25L12.8719 12.1272C12.3503 12.4998 11.6497 12.4998 11.1281 12.1272L1.5 5.25" stroke="currentColor" stroke-width="1.5"/>
</svg>


  </div>
  `
}