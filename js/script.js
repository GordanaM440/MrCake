// Vänta tills hela HTML-dokumentet har laddats
document.addEventListener('DOMContentLoaded', function() {

  // =====================
  // Kontaktformulär
  // =====================

  // Hämta kontaktformuläret via dess ID
  const contactForm = document.getElementById("contactForm");

  // Kontrollera att formuläret finns på sidan
  if (contactForm) {
    // Hämta inputfält för namn
    const nameInput = document.getElementById("name");
    // Hämta inputfält för e-post (kontaktformulär)
    const emailInputContact = document.getElementById("emailContact");
    // Hämta textarea för meddelande
    const messageInput = document.getElementById("message");
    // Hämta element där felmeddelanden ska visas
    const errorMessage = document.getElementById("errorMessage");
    // Hämta element där framgångsmeddelanden ska visas
    const successMessage = document.getElementById("successMessage");

    // Lägg till en lyssnare för när formuläret skickas
    contactForm.addEventListener("submit", function(event) {
      // Stoppar formuläret från att skickas till servern
      event.preventDefault();

      // Töm tidigare meddelanden
      errorMessage.textContent = "";
      successMessage.textContent = "";

      // Kolla om namnfältet är tomt
      if (nameInput.value.trim() === "") {
        errorMessage.textContent = "Vänligen fyll i ditt namn."; // Visa fel
        return; // Stoppar vidare kod
      }

      // Kolla om e-postfältet är tomt
      if (emailInputContact.value.trim() === "") {
        errorMessage.textContent = "Vänligen fyll i din e-postadress.";
        return;
      }

      // Skapa ett enkelt regex för att kontrollera giltig e-post
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Kolla om e-posten matchar mönstret
      if (!emailPattern.test(emailInputContact.value.trim())) {
        errorMessage.textContent = "Vänligen ange en giltig e-postadress.";
        return;
      }

      // Kolla om meddelandefältet är tomt
      if (messageInput.value.trim() === "") {
        errorMessage.textContent = "Vänligen skriv ett meddelande.";
        return;
      }

      // Om allt är korrekt fyllt i
      successMessage.textContent = "Tack! Ditt meddelande är redo att skickas."; // Visa meddelande
      contactForm.reset(); // Töm formuläret
    });
  }

  // =====================
  // Nyhetsbrev (Prenumeration)
  // =====================

  // Hämta nyhetsbrevsformuläret via ID
  const subscribeForm = document.getElementById('subscribeForm');

  // Kontrollera att formuläret finns
  if (subscribeForm) {
    // Hämta e-postfältet i nyhetsbrevsformuläret
    const emailInputSubscribe = subscribeForm.querySelector('input[name="email"]');
    // Hämta element där meddelanden ska visas
    const formMessage = document.getElementById('formMessage');

    // Lägg till lyssnare när formuläret skickas
    subscribeForm.addEventListener('submit', function(event) {
      // Stoppar formuläret från att skickas
      event.preventDefault();

      // Töm tidigare meddelanden
      formMessage.textContent = '';
      formMessage.style.color = '';

      // Hämta och trimma värdet från e-postfältet
      const email = emailInputSubscribe.value.trim();
      // Regex för att validera e-post
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Kolla om e-postfältet är tomt
      if (email === '') {
        formMessage.textContent = 'Vänligen fyll i din e-postadress.'; // Visa fel
        formMessage.style.color = 'red'; // Sätt textfärg röd
        emailInputSubscribe.focus(); // Sätt fokus på fältet
      } 
      // Kolla om e-posten är ogiltig
      else if (!emailPattern.test(email)) {
        formMessage.textContent = 'Vänligen ange en giltig e-postadress.';
        formMessage.style.color = 'red';
        emailInputSubscribe.focus();
      } 
      // Om allt är korrekt
      else {
        formMessage.textContent = 'Tack för din prenumeration!'; // Visa framgångsmeddelande
        formMessage.style.color = 'green'; // Sätt färgen grön
        subscribeForm.reset(); // Töm fältet
      }
    });
  }

});
