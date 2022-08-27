// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form 
// должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, 
// выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в обьект, где имя поля будет 
// именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти 
// значения полей формы методом reset.

const form = document.querySelector(".login-form");
const message = "Все поля должны быть заполнены!";

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const {
//         elements: { email, password }
//     } = event.currentTarget;
    
//     if (email.value === "" || password.value === "") {
//         alert(message);
//     }
//     console.log(`Email: ${email.value}`);
//     console.log(`Password: ${password.value}`);
//     event.currentTarget.reset();
// });

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
        
    const email = formEl.email.value;
    const password = formEl.password.value;

    const formData = { email, password };

    if (email === "" || password === "") {
        return alert(message);
    }
    
    console.log(formData);
    event.currentTarget.reset();
}