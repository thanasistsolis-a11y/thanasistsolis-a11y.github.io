let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000);
}
window.onload = function () {
    alert("Ο συγκεκριμένος ιστότοπος πραγματοποιήθηκε στα πλαίσια εξέτασης του μαθήματος Τεχνολογίες Διαδικτύου του Τμήματος Πολιτισμικής Τεχνολογίας & Επικοινωνίας. Το περιεχόμενο της ιστοσελίδας έχει άδεια περιεχομένου CC0 (Creative Commons zero) και δεν αποτελεί προϊόν εμπορικής χρήσης.");
};