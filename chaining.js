// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum =number .map((num) =>num * 10)
//                      .map((num) =>num + 1)
//                      .filter((num) => num >= 35)

//                      console.log(newnum)

     //  +++++++++++ reduce() ++++++++++++++++++

     const mynums = [1, 2, 3]
    //  const myTotal = mynums.reduce(function (acc, currval){
    //     console.log(`acc: ${acc} and currval: ${currval}`)
    //     return acc + currval
    //  }, 0)

    
    // const myTotal = mynums.reduce((acc, currval) =>{acc + currval
    //     return acc + currval
    // }, 0)
    // console.log(myTotal);
     
    const shoppingcart = [
        {
            itemName : "Js course",
            price : 2999
        },
        {
            itemName : "python course",
            price : 1999
        },
        { 
            itemName : "App Dev course",
            price : 999
        },
        {
            itemName : "C++ course",
            price : 3999
        }

    ]
   const PTP =  shoppingcart.reduce((acc, item) => acc + item.price, 0  )

    console.log(PTP);
    