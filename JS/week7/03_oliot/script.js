/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/

function User(username, email) {
       this.username = username;
       this.email = email;
       this.showInfo = function(){//kutsutaan metoodi(funktio),joka näyttää käyttäjän tiedot
        console.log(`User:${this.username}, email: ${this.email}`);
       };
    }

const u1 = new User("lindap", "linda@example.com");//luodaan uusi käyttäjä
u1.showInfo();//kutsutaan showInfo()



/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/
class User2 {
    constructor(username, email) {
      this.username = username;
      this.email = email;
    }
    showInfo(){
 console.log(`User:${this.username}, email: ${this.email}`);
}
changeEmail(newEmail) {//metoodi
    this.email = newEmail;
    console.log(`Email updatet: ${this.email}`)
}
}
// Käyttö
const u2 = new User2("pekka", "pekka@old.fi");
u2.showInfo(); // Käyttäjä: pekka, sähköposti: pekka@old.fi
u2.changeEmail("p.korpela@fi"); // Sähköposti päivitetty: p.korpela@fi
u2.showInfo(); // Käyttäjä: pekka, sähköposti: p.korpela@fi



/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/
const theme = {
    name: "light",       // tai "dark"
    isActive: true       // true jos teema on aktiivinen, muuten false
};

//vaihtoehto 1:

const themeButton = document.getElementById("themeBtn");//Търсим HTML елемент с id="themeBtn" – 
// това трябва да е бутон, който сменя темата.
//Резултатът се записва в променливата themeButton.
themeButton.addEventListener("click", () => {//Добавяме слушател („event listener“ на събитие  "click") към бутона.
 //  Когато потребителят кликне бутона, ще се изпълни функцията в тялото на стрелковата функция () => { ... }.

    //vaihdetaan teeman nimi
    theme.name = theme.name === "light" ? "dark" : "light"
    theme.isActive = !theme.isActive;//Смяна на isActive
    document.body.setAttribute("data-theme", theme.name);//На тялото на HTML (<body>) задаваме атрибут data-theme със стойност "light" или "dark".
    //Това позволява чрез CSS да се приложат различни стилове, в зависимост от темата.

    console.log(`Teema: ${theme.name}, isActive: ${theme.isActive}`);//Отпечатване в конзолата

});

// Vaihtoehto 2:

document.getElementById("themeBtn").addEventListener("click", () => {
if (theme.name === "light") {
    theme.name = "dark"
} else {
    theme.name = "light"
}
if (theme.name === "dark"){
    theme.isActive = true; 
 } else {
        theme.isActive = false;
    }
    document.body.setAttribute("data-theme", theme.name)//teme-date  katso css
});



/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/

const counter = {value: 0,};//Създаваме обект counter със свойство value, което съдържа с
// тойността на брояча (започва от 0)

const val = document.getElementById("val")//Вземаме бутона с ID inc.
document.getElementById("inc").addEventListener("click", () => {//Добавяме обработчик на събитие (event listener), който се активира при натискане на бутона
console.log("Increase clicked")//Всеки път, когато се кликне бутона:
counter.value++//Увеличаваме стойността на брояча с 1 (counter.value++)
val.textContent = counter.value//Актуализираме текста в елемента val, за да покаже новата стойност.
});

document.getElementById("dec").addEventListener("click", () => {
    console.log("Decrease clicked")
    counter.value--;
    val.textContent = counter.value
});


/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/

const product = {
    name: "tuote",
    price: 10,
    quantity: 1
}
document.getElementById("itemName").textContent = product.name;//Намираме HTML елемент с ID itemName и записваме в него името на продукта.
document.getElementById("itemPrice").textContent = product.price;//Намираме елемент с ID itemPrice и му задаваме цената.


//Вземане на елементи от HTML за количеството и общата цена:
const qtyInput = document.getElementById("qty");//qtyInput: Това е полето (input), където потребителят въвежда желаното количество.
const total = document.getElementById("total");//total: Това е елемент, в който ще показваме общата цена. 

const updateTotal = () =>{//Дефинираме Функция за обновяване на тоталната цена:
    product.quantity = parseInt(qtyInput.value);//Вземаме стойността от полето qtyInput, конвертираме я в цяло число (parseInt)
    //  и я записваме в product.quantity./
    total.textContent = `Yhtäänsä €${product.price * product.quantity}`;//Изчисляваме общата цена: price * quantity.
    //Поставяме резултата като текст в елемента total.
}
qtyInput.addEventListener("input",updateTotal)//Добавяне на слушател за промяна на количеството:
//Когато потребителят въведе ново количество в input полето (при всяка промяна), 
// ще се извика функцията updatetTotal, за да се пресметне новата обща стойност.

updateTotal()// Извикване на функцията веднага при зареждане,за да покажем първоначалната стойност 
// (още преди потребителят да напише нещо).


/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/
class Task {
constructor(title, description, completed){
    this.title = title;
    this.description = description
    this.completed = completed
}
}
const tasks = [];//Създаваме празен масив tasks, където ще се съхраняват всички създадени задачи.



document.getElementById("addTask").addEventListener("click", () => {//Добавяне на слушател към бутон "Добави задача":
//Търсим бутон с ID addTask.
//Когато потребителят натисне бутона, се изпълнява функцията вътре в стрелковата функция.


    //Вземане на въведени стойности от потребителя:
    const title = document.getElementById("title").value;//title: взима текста от input поле с ID title.
    const description = document.getElementById("desc").value;//description: взима текста от input поле с ID desc.
    const completed = document.getElementById("completed").checked;//completed: проверява дали checkbox с ID completed е маркиран (true или false).

    const task = new Task(title, description, completed);//Създаваме нов обект от тип Task, като подаваме въведените стойности.


    tasks.push(task);//Добавяме новосъздадения обект task в масива tasks.


//Създаване на HTML елемент за визуализация:
    const li = document.createElement("li")//Създаваме нов <li> елемент – той ще представлява една задача в HTML списък.
//  Задаване на текст за <li> елемента: 
    li.textContent = `${task.title} - ${task.description} (${task.completed ? "completed" : "not finished"})`;
//Ако task.completed === true, ще се покаже completed, иначе not finished.
    
 //Добавяне на елемента в списъка със задачи в HTML:
    document.getElementById("taskList").appendChild(li);//Търсим елемент с ID taskList 
    // (например <ul id="taskList"></ul>) и му добавяме новия <li> елемент.
    })


/* Tehtävä 7
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/

class Car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year
    }
    getAge () {
        let age = new Date().getFullYear() - this.year;
        return age;
    }
}
const myCar = new Car("Toyota", "Corola", 2015);
console.log(myCar.getAge())

document.getElementById("carInfo").textContent = `Auto: ${myCar.brand} ${
    myCar.model
} Ikä: ${myCar.getAge()} vuotta`;

/* Tehtävä 8
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

const users = [
    {name: "Anna", score: 90},
    {name: "Mikko", score:75},
    {name: "Tiina", score: 85},
]
//Намираме HTML елемент със ID userList (например <ul id="userList"></ul>),
//където ще показваме имената и резултатите на потребителите.
    const userList = document.getElementById("userList")

//Дефинираме функция renderSortedUsers, която ще показва потребителите на екрана.    
    const renderSortedUsers = ()=> {


//ще изчисти съдържанието на userList преди повторно добавяне на потребители, 
//за да не се дублират при повторно сортиране.  
       /* userList.innerHTML = "";*/

//Добавяне на потребителите в HTML списъка:
        users.forEach((u) => {//За всеки потребител в масива:
            const li = document.createElement("li")//Създаваме нов HTML елемент <li>.
            li.textContent = `${u.name} - ${u.score}`;//Задаваме му текст: „име – резултат“.
            userList.appendChild(li);//Добавяме <li> елемента към userList.
        });
        }
 // Намираме бутон с ID sortUsers и добавяме обработчик (event listener) при натискане (click).      
        document.getElementById("sortUsers").addEventListener("click", ()=> {

        //Сортиране на потребителите по резултат:        
            users.sort((a, b) => a.score - b.score)//Използваме метода .sort() за сортиране на масива users.
       //Сравняваме резултатите (score):Потребители с по-нисък резултат отиват по-напред
            renderSortedUsers();

        })
//След сортирането, извикваме renderSortedUsers() отново, 
// за да се покаже обновеният (сортиран) списък.
renderSortedUsers();

/* Tehtävä 9
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/

//Създаваме обект shoppingList, който съдържа едно свойство:
//items: празен масив, в който ще добавяме всички продукти (като текст).
const shoppingList = {
    items: [],
};
//Намираме HTML елемент (например <ul id="list"></ul>),
//в който ще добавяме всеки нов продукт като <li> елемент.
const listElement = document.getElementById("list");

//Добавяне на слушател към бутона „Добави артикул“:
//Когато потребителят натисне бутона c ID addItem, се изпълнява кода в стрелковата функция
document.getElementById("addItem").addEventListener("click", () => {

 //Взимаме текста, който потребителят е въвел в input полето с ID itemInput. 
    const item = document.getElementById("itemInput").value;

 // Проверяваме дали потребителят наистина е въвел нещо. Ако полето е празно, не правим нищо. 
    if (item) {

 // Ако има въведен текст, го добавяме в масива items на обекта shoppingList.     
        shoppingList.items.push(item)

//Създаваме нов HTML елемент <li> и му задаваме текста на добавения артикул.
        const li = document.createElement("li");
        li.textContent = item;

 // Добавяме новия <li> в <ul id="list">, така че да се вижда на страницата.      
        listElement.appendChild(li);

 // Изчистваме input полето, за да е готово за следващия артикул.      
        document.getElementById("itemInput").value = ""
    }
});


/* Tehtävä 10
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/
const posts = [
    {title: "Postaus 1", content: "Sisältö 1", likes: 0},
    {title: "Postaus 2", content: "Sisältö 2", likes: 0},
]
//Вземаме референция към <ul id="posts"> от HTML.
//В нея ще добавяме списък с постове чрез JavaScript.
const postsElement = document.getElementById("posts");

//Дефинираме arrow function с име renderPosts, която ще рисува постовете в HTML.
const renderPosts = () => {//nuoli funktio

//Изчистваме съдържанието на <ul> елемента, за да не се дублира при презареждане.  
    postsElement.innerHTML = "";

//Обхождаме всеки пост в масива posts с .forEach().
//post е текущият пост, а index е неговият индекс в масива (0 или 1).  
    posts.forEach((post, index) => {

 //Създаваме нов <li> елемент за този пост.     
        const li = document.createElement("li")

//Задаваме вътрешното HTML съдържание на <li>:
//Показваме заглавие и съдържание.
//Добавяме бутон „Tykkää“, в който показваме броя харесвания.
//data-id="${index}" е специален атрибут, с който по-късно ще знаем кой пост е натиснат.
        li.innerHTML = `<strong>${post.title}<strong>: ${post.content}
        <button data-id="${index}">Tykkää (${post.likes})</button>
        `;

     // Добавяме всеки <li> в <ul id="posts">.
        postsElement.appendChild(li)
    })
}
//Добавяме слушател на събития – ще реагираме на клик вътре в списъка <ul>.
//e е обектът на събитието (event).
postsElement.addEventListener("click", (e) => {//event, voi olla mitä tahansa
    
// Проверяваме дали кликнатият елемент е бутон.
//e.target е елементът, върху който потребителят е кликнал.   
    if (e.target.tagName === "BUTTON") {//etsii se button

// Извличаме стойността на data-id, за да разберем кой пост е бил харесан       
        const index = e.target.getAttribute("data-id");

 //Увеличаваме likes на избрания пост с 1.       
        posts[index].likes++

// След като броят на харесванията се увеличи, прерисуваме списъка, 
// за да се покаже новата стойност.       
        renderPosts();//Tämä päivittää näkymän reaaliaikaisesti
    }
})
//Извикваме renderPosts() веднъж при стартиране на страницата, 
// за да се покажат постовете.
renderPosts(); 


/* Tehtävä 11
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

class Employee {
    constructor(name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary

    }
    increaseSalary(percentage) {
        this.salary = (this.salary * percentage).toFixed(2);//sama kuin this.salary = this.salary * parcenage
    }
    getInfo() {
console.log(`Työntekijä: ${this.name} - ${this.position}. Palkka on: ${this.salary}`);

    }
}
const employee = new Employee("Matti mäkäläinen", "Toimitusjohtaja", 100) // syöttäkää ja kutsukaa metodit
 employee.getInfo();
 employee.increaseSalary(1.15);
 employee.getInfo();

/* Tehtävä 12
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/
const timer = {
    seconds: 0,
    intervalId: null,
    start() {
        if (this.intervalId !== null) return;
        this.intervalId = setInterval(() => {
            this.seconds++;
            document.getElementById("timer").textContent = this.seconds;
        }, 1000);//1s == 10000
    },

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
};

document.getElementById("start").addEventListener("click", () => {
    console.log("Start button clicked");
    timer.start();   
});

document.getElementById("stop").addEventListener("click", () => {
    console.log("Stop button clicked");
    timer.stop();   
});

/* Tehtävä 13
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/


class Book {
    constructor (nimi, kirjailija, sivut) {
        this.nimi = nimi//oznachava zapazi stoinostta v obekta
        this.kirjailija = kirjailija
        this.sivut = sivut
    }
}

document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault()//käytetään aina formin käsitälyyn yhteydessä,vältemään sivun päivittämiseen
const title = document.getElementById("nimi").value
const author = document.getElementById("kirjailija").value
const pages = document.getElementById("sivut").value

const book = new Book(title, author, pages);
console.log(book);

const li = document.createElement("li")
li.textContent = `${book.nimi} by ${book,kirjailija}, ${book.sivut} sivua`;
document.getElementById("books").appendChild(li);

//Izchistvane na formata
e.target.reset();//e.target e samata forma, a .reset() -izchistva poletat v neja

});


/* Tehtävä 14
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/

const foxTracker = {
    foxes: [],
};

document.getElementById("addFox").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const location = document.getElementById("loc").value;

// Проверка дали има въведени стойности
//Проверяваме дали и двете полета не са празни.
//Ако едно от тях е празно – нищо няма да се добави
    if(name &&location) {

 //Добавяме нов обект { name, loc } в масива foxes.      
        foxTracker.foxes.push({name, location});

        const li = document.createElement("li")
        li.textContent = `${name} @ ${location}`;
        document.getElementById("foxes").appendChild(li)

        document.getElementById("name").value = "";
        document.getElementById("loc").value = "";

    }
});
