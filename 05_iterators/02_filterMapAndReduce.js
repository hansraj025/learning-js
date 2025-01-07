const langs = ['js', 'ruby', 'java', 'py', 'cpp'];

// For Each
let returnValue = langs.forEach((element) => {
    return element;
});
// console.log(returnValue);


// Filter
returnValue = langs.filter( (lang) => lang.startsWith('j'));
// console.log(returnValue);

returnValue = langs.filter( (lang) => {
    return lang.startsWith('j');
})
// console.log(returnValue);

const langsStartingWithj = [];
langs.forEach((lang) => {
    if (lang.startsWith('j')) {
        return langsStartingWithj.push(lang);
    }
});
// console.log(langsStartingWithj);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004, price: 100 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008, price: 200 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007, price: 300 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010, price: 400 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014, price: 500 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010, price: 600 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996, price: 700 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016, price: 800 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989, price: 900 },
  ];

returnValue = books.filter((bk) => bk.genre == 'Non-Fiction');
// console.log(returnValue);

returnValue = books.filter((bk) => {
    return bk.genre === 'History' && bk.publish > 1970;
});
// console.log(returnValue);

returnValue = books.map((bk) => bk.title + ' | ' + bk.genre + '| ' + bk.publish + ' | ' + bk.edition );
// console.log(returnValue);

returnValue = books
                .map((bk) => bk.title)
                .map((item) => item + ' x ')
                .map((item) => item + 3);
// console.log(returnValue);

returnValue = books.reduce((prev, curr) => prev + " | " + curr.title, "");
// console.log(returnValue);

const cartTotal = books.reduce((acc, curr) => acc + curr.price, 0);
// console.log(cartTotal);