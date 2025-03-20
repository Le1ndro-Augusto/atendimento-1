document.getElementById("cpfCnpj").addEventListener("input", function(event) {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length > 14) value = value.slice(0, 14);
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
        value = value.replace(/(\d{2})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1/$2");
        value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    }
    event.target.value = value;
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let cpfCnpj = document.getElementById("cpfCnpj").value.replace(/\D/g, "");
    let nameError = document.getElementById("nameError");
    let cpfCnpjError = document.getElementById("cpfCnpjError");
    let valid = true;

    if (name.length > 100) {
        nameError.style.display = "block";
        valid = false;
    } else {
        nameError.style.display = "none";
    }

    if (!(cpfCnpj.length === 11 || cpfCnpj.length === 14)) {
        cpfCnpjError.style.display = "block";
        valid = false;
    } else {
        cpfCnpjError.style.display = "none";
    }

    if (!valid) {
        event.preventDefault();
        return;
    }

    let reason = document.getElementById("reason").value;
    let message = `Olá, meu nome é ${name}. Meu CPF/CNPJ é ${cpfCnpj} e gostaria de falar sobre: ${reason}.`;
    let whatsappUrl = `https://wa.me/5592984215343?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

