// const lang = ["js", "rb", "py", "java", "cpp"]

// const values = lang.forEach( (item) => {

// console.log(item);
// return item
// })

// console.log(values);

const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const Newnums = Nums.filter( (item)=> item > 4  )
   
// console.log(Newnums);


// const Newnum = Nums.filter((item) => {
//         return  item > 4    //return is required
//     })  




// const newnums = []

// Nums.forEach((num)=>{
//     if(num > 4){
//         newnums.push(num)
//     }
// } )
//     console.log(newnums);



    const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter( (bk) => {
    if ((bk.genre === 'Fiction' || bk.genre === 'Science') && bk.publish >= 1985) {
        return bk.genre && bk.publish
    }
  } )
  console.log(userbooks);
  