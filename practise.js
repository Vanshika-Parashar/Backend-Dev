const user = {name:"Satvik",email:"satvik.gaur12@gmail.com" , phone: 1234567890 , password:"satvik123"}; ;
// methods of object:

// const userName = user.name;
// const email = user.email;
// console.log(userName);
// console.log(email);


// const {name , email , phone} = user;
// console.log(name);
// console.log(email);
// console.log(phone);


// Object Reference:
// const user1={...user};
// const user2=user1;
// user1.name="Satvik Gaur";
// user2.name="Arsh"
// console.log(user);
// console.log(user1);


// Spread Operator:
// const updateUser = {...user , address:"mathura"}
// console.log(updateUser);

// hide pasword with rest operator  :
// const {password,...publicData} = user;
// console.log(publicData);

// Array Methods:
// const number = [1,2,3,4,5]; 

// // array ke har element ko 2 se multiply karke naya array newNumber banata hai.
// const newNumber = number.map((num) => num * 2); 
// console.log(newNumber);
// const sumofnumbers=Number.reduce(sum,Number,0);
// console.log(sumofnumbers);




//DAY2:
// const fetchuser=(userId)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const users={1:{name:"vanshika",email:"vanshika@gmail.com",address:"mathura"},2:{name:"sneha",email:"sneha@gmail.com",address:"delhi"}}

//         })
//         const user=users[userId];
//         if(user){
//             resolve(user);
//         }else{
//             reject("user not found");
//         }

//     })
// }
//fetch user
//.then((user)=>console.log(user));
//.catch((err)=>console.log(err));
//const response=await fetch("url");
// const userData=async(userId)=>{
//     try{
//         const user=await fetchuser(userId);
//         console.log("user data is fetched");
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// DAY 3:
//fetch data using api using  .then and .catch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((link) => {
//     return link.json();
//   })
//   .then((data) => {
//     console.log("Data using then and catch:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

//fetch data using api using async await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");

    }
    const data = await response.json();
    console.log("User Data:", data);

  } catch (error){
    console.error("Fetch errors:",error);
  }

  }
fetchData();

