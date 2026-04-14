const chars = [
    [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','I','J','K','L','M',
        'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    ],
    [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','I','J','K','L','M',
        'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        '0','1','2','3','4','5','6','7','8','9',
        '!','@','#','$','%','^','&','*','(',')',
        '-','_','=','+','[',']','{','}','|','\\',
        ':',';','"',"'",'<','>',',','.','?','/'
    ],
];

const chars_no_symbols = [
    
]

let include_symbols = true;
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

function toggle() {
    include_symbols = !include_symbols;
}

function generate_password(password_length = 15) {
    password = "";
    password_length = parseInt(document.getElementById("number").value) || 15;

    for (let i = 0; i < password_length; i++) {
        password += chars[include_symbols ? 1 : 0][Math.floor(Math.random() * chars[include_symbols ? 1 : 0].length)];
    }

    return password;
}

function get_passwords() {
    password1.textContent = generate_password();
    password2.textContent = generate_password();

    password1.style.display = "block";
    password2.style.display = "block";
}

function updateClipboard(text) {
    navigator.clipboard.writeText(text)
    alert("Password copied!")
}

// password1.addEventListener("click", () => updateClipboard(password1.textContent))
// password1.addEventListener("click", () => updateClipboard(password2.textContent))