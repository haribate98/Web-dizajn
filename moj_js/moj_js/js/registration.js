(function() {
    var form = document.getElementById('form-registration');
    form.addEventListener('submit', function(ev) {
        if(!validate()) {
            ev.preventDefault();
        } else {
            alert('Uspesna registracija');
        }
    });

    function validateUsername() {
        var text = document.getElementById('username').value;
        if(text.length < 5) return false;

        for(var i = 0; i < text.length; i++) {
            if(text.charAt(i) >= '0' && text.charAt(i) <= '9') continue;
            if(text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') continue;
            if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z') continue;

            return false;
        }
        return true;
    }

    function validatePassword() {
        var text = document.getElementById('password').value;
        if(text.length < 8) return false;

        for(var i = 0; i < text.length; i++) {
            if(text.charAt(i) >= '0' && text.charAt(i) <= '9') continue;
            if(text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') continue;
            if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z') continue;

            return false;
        }
        return true;
    }

    function validateDate() {
        var text = document.getElementById('date').value;
        var parts = text.split('/');
        if(parts.length !== 3) return false;

        var dan = +parts[0];
        var mesec = +parts[1];
        var godina = +parts[2];

        if(dan < 1 || dan > 31) return false;
        if(mesec < 1 || mesec > 12) return false;
        if(godina < 1900 || godina > (new Date()).getFullYear()) return false;

        return true;
    }

    function validateName() {
        var text = document.getElementById('name').value;
        if(text.length < 1) return false;

        for(var i = 0; i < text.length; i++) {
            if(text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') continue;
            if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z') continue;

            return false;
        }
        return true;
    }

    function validateLastName() {
        var text = document.getElementById('lastname').value;
        if(text.length < 1) return false;

        for(var i = 0; i < text.length; i++) {
            if(text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') continue;
            if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z') continue;

            return false;
        }
        return true;
    }
    

    function validate() {
        if(!validateUsername()) {
            alert('Username treba sadrzati samo brojeve i slova i mora biti dugacak barem 5 karaktera.');
            return false;
        }
        if(!validatePassword()) {
            alert('Password treba biti dugacak barem 8 karaktera i sadrzati samo brojeve i slova');
            return false;
        }
        if(!validateDate()) {
            alert('Datum treba biti u formatu "dd/mm/gggg".');
            return false;
        }
        if(!validateName()) {
            alert('Ime treba sadrzati samo slova.');
            return false;
        }
        if(!validateLastName()) {
            alert('Prezime treba sadrzati samo slova.');
            return false;
        }

        return true;
    }
})();
