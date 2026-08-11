// contact form handler (client-side). Replace 'your-form-id' in the form action with your Formspree form ID.

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    status.textContent = 'Sending...';
    const action = form.getAttribute('action');

    try{
      const formData = new FormData(form);
      const res = await fetch(action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if(res.ok){
        status.textContent = 'Message sent — thank you!';
        form.reset();
      } else {
        const data = await res.json();
        status.textContent = data.error || 'There was a problem sending your message.';
      }
    } catch(err){
      console.error(err);
      status.textContent = 'Network error — please try again later.';
    }
  });
});
