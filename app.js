const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require('./constants');
const mysql2 = require('mysql2');
require('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


let rotarianClubRangeSelected; 
let rotarianClubNameSelected;
let userInput;
let name;
let membership;
let selectedFund;
let amountSelected;
let add = 0;
let output;
let firstSelection;



const paginate = (foundItem) => {
  itemsPerDisplay = 5;
  const pages = Math.ceil(foundItem.length / itemsPerDisplay);
  const newFoundItems = Array.from(
    { length: pages },
    (_, index) => {
      const start = index * itemsPerDisplay;
      return foundItem.slice(start, start + itemsPerDisplay);
    }
  );
  return newFoundItems;
}


// Create a connection
const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // the password you set
  database: process.env.DATABASE, // the name of your database
  port: '3307'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database.');
  // Close the connection
  connection.end();
});

app.post("/ussd", (req, res) => {
  let {
    sessionId = req.body.SESSION_ID || req.body['session-id'] || req.body.session_id || req.body.session || req.body.sessionId,
    serviceCode = req.body.SERVICE_CODE || req.body.ORIG || req.body['service-code'] || req.body.service_code || req.body.serviceCode,
    phoneNumber = req.body.DEST || req.body.MSISDN || req.body.msisdn,
    text = req.body.USSD_PARAMS || req.body.USSD_STRING || req.body['ussd-string'] || req.body.ussd_string || req.body.ussdString
  } = req.body;
  console.log(req.body);
  if (text.length > 0) {
    text = text.replace(/8915/g, '');
    text = text.replace(/\*+/g, '*');
    text = text.replace(/^\*|\*$/g, '');
  }

  let response = "";

  if(text == ''){
    name= '';
    rotarianClubRangeSelected = ''; 
    rotarianClubNameSelected= '';
    userInput = '';
    membership = '';
    selectedFund = '';
    amountSelected = '';
    add = 0;
    output = '';
    firstSelection = '';
  }

  const initial = (text) => {
    if (phoneNumber !== '254745671868' && phoneNumber !== '254707122352' && phoneNumber !== '254714009059' && phoneNumber !== '254720299122' && phoneNumber !== '254722286505') {
      return `END Coming soon`;
    }
    else{
      // Your code for allowed numbers
      if (text.length > 0) {
        const parts = text.split('*');
        let lastPart = parts[parts.length - 1].trim();
        if(lastPart == "1"){
          firstSelection = "Rotarian";
          const selectedFirstInput=[
            {
              id:1,
              console:"welcome console"
            },
            {
              id:2,
              user_input:firstSelection
            },
            {
              id:3,
              phone_number: phoneNumber
            },
            {
               id:4,
               service_code:serviceCode
            },
            {
              id:5,
              session_id:sessionId
            },
            {
              id:6,
              date:new Date()
            }
          ]
          console.log(selectedFirstInput);  
          return `CON Select Rotarian Club Range\n${clubRange.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
        }
        else if (lastPart == "2"){
          return `END Coming soon`
        }
        else{
          return `CON Invalid input.\nTo continue Select\n1.Rotarian\n2.Rotaractor`
        }
      }
      else{
        return `CON Welcome to Rotary District 9212.\nTo continue Select\n1.Rotarian\n2.Rotaractor`
      }
    }
    }

  const clubRangeFunction = (text)=>{
    const slices = text.split('*');
    let splitText = slices[slices.length - 1].trim();
    
  if (splitText === "1") {
      const club = clubRange.find((item) => item.id === 1);
      userInput = 1;
      rotarianClubRangeSelected = club.name;

      const selectedClubRangeOutput=[
        {
          id:1,
          console:"selected rotarian club range console"
        },
        {
          id:2,
          user_input:rotarianClubRangeSelected
        },
        {
          id:3,
          phone_number: phoneNumber
        },
        {
           id:4,
           service_code:serviceCode
        },
        {
          id:5,
          session_id:sessionId
        },
        {
          id:6,
          date:new Date()
        }
      ]
      console.log(selectedClubRangeOutput);  

      output = paginate(A_D);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat("n. next").join('\n');
      return `CON Select Rotarian Club Name\n${result}`;
  } 
  else if (splitText === "2") {
    const club = clubRange.find((item) => item.id === 2);
    userInput=2;
    rotarianClubRangeSelected = club.name;

    const selectedClubRangeOutput=[
      {
        id:1,
        console:"selected rotarian club range console"
      },
      {
        id:2,
        user_input:rotarianClubRangeSelected
      },
      {
        id:3,
        phone_number: phoneNumber
      },
      {
         id:4,
         service_code:serviceCode
      },
      {
        id:5,
        session_id:sessionId
      },
      {
        id:6,
        date:new Date()
      }
    ]
    console.log(selectedClubRangeOutput);  

    output = paginate(E_H);
    const items = output[add].map((item) => `${item.id}. ${item.name}`);
    const result = items.concat("n. next").join('\n');
    return `CON Select Rotarian Club Name\n${result}`;
  } 
  else if (splitText === "3") {
    const club  = clubRange.find((item) => item.id === 3);
    userInput = 3;
    rotarianClubRangeSelected = club.name;

    const selectedClubRangeOutput=[
      {
        id:1,
        console:"selected rotarian club range console"
      },
      {
        id:2,
        user_input:rotarianClubRangeSelected
      },
      {
        id:3,
        phone_number: phoneNumber
      },
      {
         id:4,
         service_code:serviceCode
      },
      {
        id:5,
        session_id:sessionId
      },
      {
        id:6,
        date:new Date()
      }
    ]
    console.log(selectedClubRangeOutput);  
    
    output = paginate(I_K);
    const items = output[add].map((item) => `${item.id}. ${item.name}`);
    const result = items.concat("n. next").join('\n');
    return `CON Select Rotarian Club Name\n${result}`;
  }
  else if (splitText === "4"){
    const club = clubRange.find((item) => item.id === 4);
    userInput = 4;
    rotarianClubRangeSelected = club.name;

    const selectedClubRangeOutput=[
      {
        id:1,
        console:"selected rotarian club range console"
      },
      {
        id:2,
        user_input:rotarianClubRangeSelected
      },
      {
        id:3,
        phone_number: phoneNumber
      },
      {
         id:4,
         service_code:serviceCode
      },
      {
        id:5,
        session_id:sessionId
      },
      {
        id:6,
        date:new Date()
      }
    ]
    console.log(selectedClubRangeOutput);  

    output = paginate(L);
    const items = output[add].map((item) => `${item.id}. ${item.name}`);
    const result = items.concat("n. next").join('\n');
    return `CON Select Rotarian Club Name\n${result}`;
  }
  else if (splitText === "5"){
    const club  = clubRange.find((item) => item.id === 5);
    userInput = 5;
    rotarianClubRangeSelected = club.name;

    const selectedClubRangeOutput=[
      {
        id:1,
        console:"selected rotarian club range console"
      },
      {
        id:2,
        user_input:rotarianClubRangeSelected
      },
      {
        id:3,
        phone_number: phoneNumber
      },
      {
         id:4,
         service_code:serviceCode
      },
      {
        id:5,
        session_id:sessionId
      },
      {
        id:6,
        date:new Date()
      }
    ]
    console.log(selectedClubRangeOutput);  

    output = paginate(M);
    const items = output[add].map((item) => `${item.id}. ${item.name}`);
    const result = items.concat("n. next").join('\n');
    return `CON Select Rotarian Club Name\n${result}`;
  }
  else if (splitText === "6"){
    const club = clubRange.find((item) => item.id === 6);
    userInput = 6;
    rotarianClubRangeSelected = club.name;

    const selectedClubRangeOutput=[
      {
        id:1,
        console:"selected rotarian club range console"
      },
      {
        id:2,
        user_input:rotarianClubRangeSelected
      },
      {
        id:3,
        phone_number: phoneNumber
      },
      {
         id:4,
         service_code:serviceCode
      },
      {
        id:5,
        session_id:sessionId
      },
      {
        id:6,
        date:new Date()
      }
    ]
    console.log(selectedClubRangeOutput);  

    output = paginate(N);
    const items = output[add].map((item) => `${item.id}. ${item.name}`);
    const result = items.concat("n. next").join('\n');
    return `CON Select Rotarian Club Name\n${result}`;
    }
  else if (splitText === "7"){
      const club = clubRange.find((item) => item.id === 7);
      userInput = 7;
      rotarianClubRangeSelected = club.name;
      const selectedClubRangeOutput=[
        {
          id:1,
          console:"selected rotarian club range console"
        },
        {
          id:2,
          user_input:rotarianClubRangeSelected
        },
        {
          id:3,
          phone_number: phoneNumber
        },
        {
           id:4,
           service_code:serviceCode
        },
        {
          id:5,
          session_id:sessionId
        },
        {
          id:6,
          date:new Date()
        }
      ]
      console.log(selectedClubRangeOutput);  

      output = paginate(O_S);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat("n. next").join('\n');
      return `CON Select Rotarian Club Name\n${result}`;
      }
  else if (splitText === "8"){
      const club = clubRange.find((item) => item.id === 8);
      userInput = 8;
      rotarianClubRangeSelected = club.name;
      const selectedClubRangeOutput=[
        {
          id:1,
          console:"selected rotarian club range console"
        },
        {
          id:2,
          user_input:rotarianClubRangeSelected
        },
        {
          id:3,
          phone_number: phoneNumber
        },
        {
           id:4,
           service_code:serviceCode
        },
        {
          id:5,
          session_id:sessionId
        },
        {
          id:6,
          date:new Date()
        }
      ]
      console.log(selectedClubRangeOutput);  

      output = paginate(T_Z);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat("n. next").join('\n');
      return `CON Select Rotarian Club Name\n${result}`;
  }
  else {
    return `CON Invalid Rotarian Club Range. Please try again\n${clubRange.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
  }
  }
  
  const clubNameFunction=(userInput, text)=>{
    const slice = text.split('*');
    let splitText2 = slice[slice.length - 1].trim();
    let string = 'p. previous\nn. next'
    if(userInput == 1){
      const selectedClub=A_D.find((item) => item.id.toString() === splitText2);
      if(selectedClub){
          rotarianClubNameSelected=selectedClub.name;
          const selectedClubOutput=[
            {
              id:1,
              console:"selected rotarian club name console"
            },
            {
              id:2,
              user_input:rotarianClubNameSelected
            },
            {
              id:3,
              phone_number: phoneNumber
            },
            {
               id:4,
               service_code:serviceCode
            },
            {
              id:5,
              session_id:sessionId
            },
            {
              id:6,
              date:new Date()
            }
          ]
          console.log(selectedClubOutput);
          return `CON Enter Name of Member`
      }
      else if(splitText2.toLowerCase() === "n"){
        add= add + 1;
        if (add >= output.length - 1) {
           add = output.length - 1;
           string = "p. previous"
        }
        output = paginate(A_D);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON ${result}`;
     }
     else if(splitText2.toLowerCase() === "p"){
      add= add - 1;
      if (add <= 0) {
         add = 0;
         string = "n. next"
      }
      output = paginate(A_D);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat(string).join('\n');
      return `CON ${result}`;
     }
     else{
        if (add >= output.length - 1) {
          add = output.length - 1;
          string = "p. previous"
        }
        else if(add <= 0) {
          add = 0;
          string = "n. next"
        }
        output = paginate(A_D);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON Invalid Rotarian Club Name. Please try again.\n${result}`;
      }
  }
  else if(userInput == 2){
      const selectedClub=E_H.find((item) => item.id.toString() === splitText2);
      if(selectedClub){
          rotarianClubNameSelected=selectedClub.name;
          const selectedClubOutput=[
            {
              id:1,
              console:"selected rotarian club name console"
            },
            {
              id:2,
              user_input:rotarianClubNameSelected
            },
            {
              id:3,
              phone_number: phoneNumber
            },
            {
               id:4,
               service_code:serviceCode
            },
            {
              id:5,
              session_id:sessionId
            },
            {
              id:6,
              date:new Date()
            }
          ]
          console.log(selectedClubOutput);  
          return `CON Enter Name Of Member`
      }
      else if(splitText2.toLowerCase() === "n"){
        add= add + 1;
        if (add >= output.length - 1) {
           add = output.length - 1;
           string = "p. previous"
        }
        output = paginate(E_H);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON ${result}`;
     }
     else if(splitText2.toLowerCase() === "p"){
      add= add - 1;
      if (add <= 0) {
         add = 0;
         string = "n. next"
      }
      output = paginate(E_H);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat(string).join('\n');
      return `CON ${result}`;
      }
      else{
        if (add >= output.length - 1) {
          add = output.length - 1;
          string = "p. previous"
        }
        else if(add <= 0) {
          add = 0;
          string = "n. next"
        }
        output = paginate(E_H);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON Invalid Rotarian Club Name. Please try again.\n${result}`;
      }
  }
  else if(userInput == 3){
      const selectedClub=I_K.find((item) => item.id.toString() === splitText2);
      if(selectedClub){
          rotarianClubNameSelected=selectedClub.name;
          const selectedClubOutput=[
            {
              id:1,
              console:"selected rotarian club name console"
            },
            {
              id:2,
              user_input:rotarianClubNameSelected
            },
            {
              id:3,
              phone_number: phoneNumber
            },
            {
               id:4,
               service_code:serviceCode
            },
            {
              id:5,
              session_id:sessionId
            },
            {
              id:6,
              date:new Date()
            }
          ]
          console.log(selectedClubOutput);   
          return `CON Enter Name Of Member`
      }
      else if(splitText2.toLowerCase() === "n"){
        add= add + 1;
        if (add >= output.length - 1) {
           add = output.length - 1;
           string = "p. previous"
        }
        output = paginate(I_K);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON ${result}`;
     }
     else if(splitText2.toLowerCase() === "p"){
      add= add - 1;
      if (add <= 0) {
         add = 0;
         string = "n. next"
      }
      output = paginate(I_K);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat(string).join('\n');
      return `CON ${result}`;
     }
      else{
        if (add >= output.length - 1) {
          add = output.length - 1;
          string = "p. previous"
        }
        else if(add <= 0) {
          add = 0;
          string = "n. next"
        }
        output = paginate(I_K);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON Invalid Rotarian Club Name. Please try again.\n${result}`;
      }
      }
      else if(userInput == 4){
      const selectedClub=L.find((item) => item.id.toString() === splitText2);
      if(selectedClub){
          rotarianClubNameSelected=selectedClub.name;
          const selectedClubOutput=[
            {
              id:1,
              console:"selected rotarian club name console"
            },
            {
              id:2,
              user_input:rotarianClubNameSelected
            },
            {
              id:3,
              phone_number: phoneNumber
            },
            {
               id:4,
               service_code:serviceCode
            },
            {
              id:5,
              session_id:sessionId
            },
            {
              id:6,
              date:new Date()
            }
          ]
          console.log(selectedClubOutput);   
          return `CON Enter Name Of Member`
      }
      else if(splitText2.toLowerCase() === "n"){
        add= add + 1;
        if (add >= output.length - 1) {
           add = output.length - 1;
           string = "p. previous"
        }
        output = paginate(L);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON ${result}`;
     }
     else if(splitText2.toLowerCase() === "p"){
      add= add - 1;
      if (add <= 0) {
         add = 0;
         string = "n. next"
      }
      output = paginate(L);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat(string).join('\n');
      return `CON ${result}`;
     }
      else{
        if (add >= output.length - 1) {
          add = output.length - 1;
          string = "p. previous"
        }
        else if(add <= 0) {
          add = 0;
          string = "n. next"
        }
        output = paginate(L);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON Invalid Rotarian Club Name. Please try again.\n${result}`;
      }
  }
  else if(userInput == 5){
      const selectedClub=M.find((item) => item.id.toString() === splitText2);
      if(selectedClub){
          rotarianClubNameSelected=selectedClub.name;
          const selectedClubOutput=[
            {
              id:1,
              console:"selected rotarian club name console"
            },
            {
              id:2,
              user_input:rotarianClubNameSelected
            },
            {
              id:3,
              phone_number: phoneNumber
            },
            {
               id:4,
               service_code:serviceCode
            },
            {
              id:5,
              session_id:sessionId
            },
            {
              id:6,
              date:new Date()
            }
          ]
          console.log(selectedClubOutput);      
          return `CON Enter Name Of Member`
      }
      else if(splitText2.toLowerCase() === "n"){
        add= add + 1;
        if (add >= output.length - 1) {
           add = output.length - 1;
           string = "p. previous"
        }
        output = paginate(M);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON ${result}`;
     }
     else if(splitText2.toLowerCase() === "p"){
      add= add - 1;
      if (add <= 0) {
         add = 0;
         string = "n. next"
      }
      output = paginate(M);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat(string).join('\n');
      return `CON ${result}`;
     }
      else{
        if (add >= output.length - 1) {
          add = output.length - 1;
          string = "p. previous"
        }
        else if(add <= 0) {
          add = 0;
          string = "n. next"
        }
        output = paginate(M);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON Invalid Rotarian Club Name. Please try again.\n${result}`;
      }
  }
  else if(userInput == 6){
      const selectedClub=N.find((item) => item.id.toString() === splitText2);
      if(selectedClub){
          rotarianClubNameSelected=selectedClub.name;
          const selectedClubOutput=[
            {
              id:1,
              console:"selected rotarian club name console"
            },
            {
              id:2,
              user_input:rotarianClubNameSelected
            },
            {
              id:3,
              phone_number: phoneNumber
            },
            {
               id:4,
               service_code:serviceCode
            },
            {
              id:5,
              session_id:sessionId
            },
            {
              id:6,
              date:new Date()
            }
          ]
          console.log(selectedClubOutput);      
          return `CON Enter Name Of Member`
      }
      else if(splitText2.toLowerCase() === "n"){
        add= add + 1;

        if (add >= output.length - 1) {
           add = output.length - 1;;
           string = "p. previous"
        }
        output = paginate(N);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON ${result}`;
     }
     else if(splitText2.toLowerCase() === "p"){
      add= add - 1;

      if (add <= 0) {
         add = 0;
         string = "n. next"
      }
      output = paginate(N);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat(string).join('\n');
      return `CON ${result}`;
     }
      else{
        if (add >= output.length - 1) {
          add = output.length - 1;
          string = "p. previous"
        }
        if(add <= 0) {
          add = 0;
          string = "n. next"
        }
        output = paginate(N);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON Invalid Rotarian Club Name. Please try again.\n${result}`;
      }
  }
  else if(userInput == 7){
      const selectedClub=O_S.find((item) => item.id.toString() === splitText2);
      if(selectedClub){
          rotarianClubNameSelected=selectedClub.name;
          const selectedClubOutput=[
            {
              id:1,
              console:"selected rotarian club name console"
            },
            {
              id:2,
              user_input:rotarianClubNameSelected
            },
            {
              id:3,
              phone_number: phoneNumber
            },
            {
               id:4,
               service_code:serviceCode
            },
            {
              id:5,
              session_id:sessionId
            },
            {
              id:6,
              date:new Date()
            }
          ]
          console.log(selectedClubOutput);    
          return `CON Enter Name Of Member`
      }
      else if(splitText2.toLowerCase() === "n"){
        add= add + 1;
        if (add >= output.length - 1) {
           add = output.length - 1;
           string = "p. previous"
        }
        output = paginate(O_S);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON ${result}`;
     }
     else if(splitText2.toLowerCase() === "p"){
      add= add - 1;
      if (add <= 0) {
         add = 0;
         string = "n. next"
      }
      output = paginate(O_S);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat(string).join('\n');
      return `CON ${result}`;
     }
      else{
        if (add >= output.length - 1) {
          add = output.length - 1;
          string = "p. previous"
        }
        else if(add <= 0) {
          add = 0;
          string = "n. next"
        }
        output = paginate(O_S);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON Invalid Rotarian Club Name. Please try again.\n${result}`;
      }
  }
  else if(userInput == 8){
      const selectedClub=T_Z.find((item) => item.id.toString() === splitText2);
      if(selectedClub){
          rotarianClubNameSelected=selectedClub.name;
          const selectedClubOutput=[
            {
              id:1,
              console:"selected rotarian club name console"
            },
            {
              id:2,
              user_input:rotarianClubNameSelected
            },
            {
              id:3,
              phone_number: phoneNumber
            },
            {
               id:4,
               service_code:serviceCode
            },
            {
              id:5,
              session_id:sessionId
            },
            {
              id:6,
              date:new Date()
            }
          ]
          console.log(selectedClubOutput);       
          return `CON Enter Name Of Member`
      }
      else if(splitText2.toLowerCase() === "n"){
        add= add + 1;
        if (add >= output.length - 1) {
           add = output.length - 1;
           string = "p. previous"
        }
        output = paginate(T_Z);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON ${result}`;
     }
     else if(splitText2.toLowerCase() === "p"){
      add= add - 1;
      if (add <= 0) {
         add = 0;
         string = "n. next"
      }
      output = paginate(T_Z);
      const items = output[add].map((item) => `${item.id}. ${item.name}`);
      const result = items.concat(string).join('\n');
      return `CON ${result}`;
     }
      else{
        if (add >= output.length - 1) {
          add = output.length - 1;
          string = "p. previous"
        }
        else if(add <= 0) {
          add = 0;
          string = "n. next"
        }
        output = paginate(T_Z);
        const items = output[add].map((item) => `${item.id}. ${item.name}`);
        const result = items.concat(string).join('\n');
        return `CON Invalid Rotarian Club Name. Please try again.\n${result}`;    
      }
  }
  }

  const nameFunction = (text)=>{
    const slice = text.split('*');
    const lastPart = slice[slice.length - 1].trim();

      if (/^[A-Za-z\s]+$/.test(lastPart)) {
        name = lastPart;
        const selectedNameOutput=[
          {
            id:1,
            console:"Inputed name console"
          },
          {
            id:2,
            user_input:name
          },
          {
            id:3,
            phone_number: phoneNumber
          },
          {
             id:4,
             service_code:serviceCode
          },
          {
            id:5,
            session_id:sessionId
          },
          {
            id:6,
            date:new Date()
          }
        ]
        console.log(selectedNameOutput);    
        return `CON Enter Membership ID`;
      } else {
        return `CON Invalid Name. Please try again.`;
      }
  }

  const membershipFunction=(text)=>{
      const slice = text.split('*');
      const splitText2 = slice[slice.length - 1].trim();
      if(/^[a-zA-Z0-9\s]+$/.test(splitText2)){
        membership = splitText2;
        const selectedMembershipOutput=[
          {
            id:1,
            console:"selected membership name console"
          },
          {
            id:2,
            user_input:membership
          },
          {
            id:3,
            phone_number: phoneNumber
          },
          {
             id:4,
             service_code:serviceCode
          },
          {
            id:5,
            session_id:sessionId
          },
          {
            id:6,
            date:new Date()
          }
        ]
        console.log(selectedMembershipOutput);    
        return `CON Select Fund\n${fundsAvailable.map((item, index) => `${index + 1}. ${item.name}`).join('\n')}`
      }
      else{
        return `CON Invalid Membership ID. Please try again`
      }
  }
  
  const fundSelectedFunction = (text)=>{
    const slice = text.split('*');
    const splitText = slice[slice.length - 1].trim();
    const fund=fundsAvailable.find((item) => item.id.toString() === splitText);
    if(fund){
      selectedFund = fund.name;
      const selectedFundOutput=[
        {
          id:1,
          console:"selected fund console"
        },
        {
          id:2,
          user_input:selectedFund
        },
        {
          id:3,
          phone_number: phoneNumber
        },
        {
           id:4,
           service_code:serviceCode
        },
        {
          id:5,
          session_id:sessionId
        },
        {
          id:6,
          date:new Date()
        }
      ]
      console.log(selectedFundOutput);   
      return `CON Select Amount\n${amountsAvailable.map((item, index) => `${index + 1}. ${item.amount}`).join('\n')}`
    }
    else{
     return `CON invalid Fund Selection. Please try again\n${fundsAvailable.map((item, index) => `${index + 1}. ${item.name}`).join('\n')}`
    }
  }
  
  const amountSelectedFunction = (text)=>{
    const slice = text.split('*');
    const splitText = slice[slice.length - 1].trim();
    const amount=amountsAvailable.find((item) => item.id.toString() === splitText);
    if(amount){
      amountSelected = amount.amount;
      const selectedAmountOutput=[
        {
          id:1,
          console:"selected amount console"
        },
        {
          id:2,
          user_input:amountSelected
        },
        {
          id:3,
          phone_number: phoneNumber
        },
        {
           id:4,
           service_code:serviceCode
        },
        {
          id:5,
          session_id:sessionId
        },
        {
          id:6,
          date:new Date()
        }
      ]
      console.log(selectedAmountOutput);   

      if(splitText == "1"){
        return `END Please wait to input your M-pesa PIN to complete payment of Ksh ${amountSelected}. Thank you.`
      }
      else if (splitText == "2"){
          return `END Please wait to input your M-pesa PIN to complete payment of Ksh ${amountSelected}. Thank you.`
      }
      else if (splitText == "3"){
          return `END Please wait to input your M-pesa PIN to complete payment of Ksh ${amountSelected}. Thank you.`
      }
      else if (splitText == "4"){
          return `END Please wait to input your M-pesa PIN to complete payment of Ksh ${amountSelected}. Thank you.`
      }
    }
    else
    {
      return `CON Invalid Amount Selection. Please try again\n${amountsAvailable.map((item, index) => `${index + 1}. ${item.amount}`).join('\n')}`
    }
  }

  if (firstSelection) {
    // `First Selection` has a value
    // Perform the necessary actions
    if(rotarianClubRangeSelected){
       // `clubRange` has a value
       // Perform the necessary actions
       if(rotarianClubNameSelected){
         // `clubName` has a value
         // Perform the necessary actions
         if(name){
           // `name` has a value
           // Perform the necessary actions
            if(membership){
            // `membership Id` has a value
            // Perform the necessary actions
            if(selectedFund){
             // `Fund type` has a value
             // Perform the necessary actions
              if(amountSelected){
                // `Amount selected` has a value
                // Perform the necessary actions
                // No extra actions to be performed
              }
              else{
                 // `Amount selected` does not have a value
                 response = amountSelectedFunction(text)
              }
            }
            else{
              // `fund type` does not have a value
              response =fundSelectedFunction(text);
            }
         }
         else{
            // `membership` does not have a value
            response = membershipFunction(text)
         }
        }
        else{
         // `name` does not have a value
         response = nameFunction(text)
        }
       }else{
        // `clubName` does not have a value
        response = clubNameFunction(userInput, text)
       }
    }
  else{
        // `clubRange` does not have a value
        response = clubRangeFunction(text);
    }
  } 
  else {
    // `First Selection` does not have a value
    response = initial(text);
  }

res.set('Content-Type', 'text/plain');
res.send(response);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});