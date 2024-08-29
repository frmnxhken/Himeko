# 🪭Himeko

Himeko merupakan library sederhana untuk membuat validasi formulir javascript pada sisi klien.

Himeko sangat mudah untuk digunakan (easy to use)

<br/>

## A. Installasi

Untuk dapat menggunakan library ini, Anda cukup mendownload file himeko_validation.js yang ada pada repository ini.

Setelah file library di download, Anda bisa mengimport file himeko menggunakan script.

Contoh:

```html
<script src="himeko_validation.js"></script>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Himeko</title>
</head>
<body>

    <script src="himeko_validation.js"></script>
    
</body>
</html>
```
Setelah mengimport file library seperti di atas, Anda dapat langsung menggunakannya dengan cara menginisialisasi class yang ada pada library himeko.
##

## B. Cara Penggunaan

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Himeko</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="github" onclick="window.location.href='https://github.com/frmnxhken/Himeko'">
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png" alt="icon">
        <h1>Github</h1>
    </div>

    <div class="container">
        <form method="post">
            <div class="header">
                <h1>Himeko</h1>
                <p>Easy to use form validation javascript</p>
            </div>
            <div class="form-input">
                <div class="input">
                    <label>First Name</label>
                    <input type="text" name="firstname">
                    <div class="error-message" data-message="firstname"></div>
                </div>
                <div class="input">
                    <label>Last Name</label>
                    <input type="text" name="lastname">
                    <div class="error-message" data-message="lastname"></div>
                </div>
            </div>
            <div class="input">
                <label>E-mail</label>
                <input type="text" name="email">
                <div class="error-message" data-message="email"></div>
            </div>
            <div class="input">
                <label>Address</label>
                <textarea name="address"></textarea>
                <div class="error-message" data-message="address"></div>
            </div>
            <button type="submit">Join Us</button>
        </form>
    </div>

    <script src="himeko_validation.js"></script>
    <script>
        const form = document.querySelector("form")
        
        // initialitation library
        const himeko = new Himeko.Validate();
        
        form.addEventListener("submit", function(e) {
            e.preventDefault()
            
            const firstname = himeko.validation(form.firstname, ["required", "alphabet", "min:4", "max:24"]);
            const lastname = himeko.validation(form.lastname, ["required", "alphabet"]);
            const email = himeko.validation(form.email, ["required", "email"]);
            const address = himeko.validation(form.address, ["required"]);
            
        })
    </script>
</body>
</html>
```

### 1. Inisialisasi

Untuk dapat menggunakan library himeko, Anda harus terlebih dahulu melakukan inisialisasi terhadap library seperti berikut:

```js
const himeko = new Himeko.Validate()
```
### 2. Penggunaan Validasi

Pertama-tama Anda panggil form yang ingin Anda validasi seperti berikut:
```js
const form = document.querySelector("form")
```

Untuk memvalidasi field terhadap form, Anda dapat mengikuti aturan penulisan seperti berikut:

```js
form.addEventListener("submit", function(e) {
    e.preventDefault()
    const firstname = himeko.validation(form.firstname, ["required", "alphabet", "min:4", "max:24"]);
    const lastname = himeko.validation(form.lastname, ["required", "alphabet"]);
    const email = himeko.validation(form.email, ["required", "email"]);
    const address = himeko.validation(form.address, ["required"]);
})
```
Untuk jenis atau tipe validasi, Anda bisa lihat list pada tabel yang ada di bawah!

### 3. Menampilkan Pesan Error

```html
<div class="input">
    <label>E-mail</label>
    <input type="text" name="email">
    <div class="error-message" data-message="email"></div>
</div>
```

Untuk menampilkan pesan error, Anda cukup membuat element html dengan data-message="name dari input"
contoh:

```html
<input type="text" name="email">
<div class="error-message" data-message="email"></div>
```

data-message sesuai dengan value yang ada pada input name yaitu email.

## 3. Jenis Validasi Yang Tersedia


