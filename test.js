const paginate = (foundItem) => {
    itemsPerDisplay = 3;
    const pages = Math.ceil(foundItem.length / itemsPerDisplay);
    const newFoundItems = Array.from(
      { length: pages },
      (_, index) => {
        const start = index * itemsPerDisplay;
        return foundItem.slice(start, start + itemsPerDisplay);
      }
    );
    return newFoundItems;
  };
  const output = paginate(foundItem);
  console.log(output);

  if (text.length > 0) {
    const parts = text.split('*');
    let lastPart = parts[parts.length - 1].trim();
    lastPart = lastPart.replace(/\b(?:0|98)\b/g, "");

    if(lastPart === "1"){
      const selectedInput = rotaractRange.find((item) => item.id === 1);
      rotaractUserInput = 1;
      rotaractRangeValue= selectedInput.name;
        //  display the first array of the loop
      output = paginate(R_A_D);
      const items = output[add].map((item, index) => `${index + 1}. ${item.name}`);
      const result = items.concat("next").join('\n');
      return `CON Select Rotaract Club\n${result}`;
    }
    else if (lastPart === "2"){
      const selectedInput = rotaractRange.find((item) => item.id === 2);
      rotaractUserInput = 2;
      rotaractRangeValue= selectedInput.name;
      return `CON Select Rotaract Club\n${R_E_H.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else if (lastPart === "3"){
      const selectedInput = rotaractRange.find((item) => item.id === 3);
      rotaractUserInput = 3;
      rotaractRangeValue= selectedInput.name;
      return `CON Select Rotaract Club\n${R_I_K.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else if (lastPart === "4"){
      const selectedInput = rotaractRange.find((item) => item.id === 4);
      rotaractUserInput = 4;
      rotaractRangeValue= selectedInput.name;
      return `CON Select Rotaract Club\n${R_L_M.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else if (lastPart === "5"){
      const selectedInput = rotaractRange.find((item) => item.id === 5);
      rotaractUserInput = 5;
      rotaractRangeValue= selectedInput.name;
      return `CON Select Rotaract Club\n${R_N.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else if(lastPart === "6"){
      const selectedInput = rotaractRange.find((item) => item.id === 6);
      rotaractUserInput = 6;
      rotaractRangeValue= selectedInput.name;
      return `CON Select Rotaract Club\n${R_O_S.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else if(lastPart === "7"){
      const selectedInput = rotaractRange.find((item) => item.id === 7);
      rotaractUserInput = 7;
      rotaractRangeValue= selectedInput.name;
      return `CON Select Rotaract Club\n${R_T_Z.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else if (lastPart.length === 0){
      return `CON Welcome to continue please select Rotaract Club Range\n${rotaractRange.map((item, index) => `${index + 1}. ${item.name}`).join('\n')}`;
    }
    else{
      return `CON Invalid input please select a correct Rotaract Club Range\n${rotaractRange.map((item, index) => `${index + 1}. ${item.name}`).join('\n')}`;
    }
    }
  else {
    return `CON Welcome to Rotary district 9212. To continue please select Rotaract Club Range\n${rotaractRange.map((item, index) => `${index + 1}. ${item.name}`).join('\n')}`;
  }

  //club
  const rotaractClubNameFunction= (text,rotaractUserInput)=>{
    const slice = text.split('*');
    let splitText2 = slice[slice.length - 1].trim();
    splitText2 = splitText2.replace(/\b(?:0|98)\b/g, "");
    
    if(rotaractUserInput == 1){
      const selectedRotaractClub=R_A_D.find((item) => item.id.toString() === splitText2);
      if(selectedRotaractClub){
        rotaractClub=selectedRotaractClub.name;
        return `CON Select Club Range\n${clubRange.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
      }
      else if(splitText2 === "next"){
         add= add + 1;
         if (add > output.length - 1) {
            add = 0;
         }
         output = paginate(R_A_D);
         const items = output[add].map((item, index) => `${index + 1}. ${item.name}`);
         const result = items.concat("next").join('\n');
         return `CON Select Rotaract Club\n${result}`;
      }
      else if (splitText2.length === 0){
        return `CON Select Rotaract Club\n${R_A_D.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
      }
      else{
         return `CON Invalid Rotaract Club. Please try again.\n${R_A_D.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`
      }
  }
  else if(rotaractUserInput == 2){
      const selectedRotaractClub=R_E_H.find((item) => item.id.toString() === splitText2);
      if(selectedRotaractClub){
        rotaractClub=selectedRotaractClub.name;
        return `CON Select Club Range\n${clubRange.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
      }
      else if (splitText2.length === 0){
        return `CON Select Rotaract Club\n${R_E_H.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
      }
      else{
        return `CON Invalid Rotaract Club. Please try again.\n${R_E_H.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`
      }
  }
  else if(rotaractUserInput == 3){
      const selectedRotaractClub=R_I_K.find((item) => item.id.toString() === splitText2);
      if(selectedRotaractClub){
        rotaractClub=selectedRotaractClub.name;
        return `CON Select Club Range\n${clubRange.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
      }
      else if (splitText2.length === 0){
        return `CON Select Rotaract Club\n${R_I_K.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
      }
      else{
        return `CON Invalid Rotaract Club. Please try again.\n${R_I_K.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`
      }
  }
  else if(rotaractUserInput == 4){
    const selectedRotaractClub=R_L_M.find((item) => item.id.toString() === splitText2);
    if(selectedRotaractClub){
      rotaractClub=selectedRotaractClub.name;
      return `CON Select Club Range\n${clubRange.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else if (splitText2.length === 0){
      return `CON Select Rotaract Club\n${R_L_M.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else{
      return `CON Invalid Rotaract Club. Please try again.\n${R_L_M.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`
    }
  }
  else if(rotaractUserInput == 5){
      const selectedRotaractClub=R_N.find((item) => item.id.toString() === splitText2);
      if(selectedRotaractClub){
        rotaractClub=selectedRotaractClub.name;
        return `CON Select Club Range\n${clubRange.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
      }
      else if (splitText2.length === 0){
        return `CON Select Rotaract Club\n${R_N.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
      }
      else{
        return `CON Invalid Rotaract Club. Please try again.\n${R_N.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`
      }
  }
  else if(rotaractUserInput == 6){
    const selectedRotaractClub=R_O_S.find((item) => item.id.toString() === splitText2);
    if(selectedRotaractClub){
      rotaractClub=selectedRotaractClub.name;
      return `CON Select Club Range\n${clubRange.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else if (splitText2.length === 0){
      return `CON Select Rotaract Club\n${R_O_S.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
    }
    else{
      return `CON Invalid Rotaract Club. Please try again.\n${R_O_S.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`
    }
  }
  else if(rotaractUserInput == 7){
      const selectedRotaractClub=R_T_Z.find((item) => item.id.toString() === splitText2);
      if(selectedRotaractClub){
          rotaractClub=selectedRotaractClub.name;
          return `CON Select Club Range\n${clubRange.map((item,index)=>`${index + 1}. ${item.name}`).join('\n')}`;
      }
      else if (splitText2.length === 0){
        return `CON Select Rotaract Club\n${R_T_Z.map((item, index) => `${index + 1}. ${item.name}`).join('\n')}`
      }
      else{
        return `CON Invalid Rotaract Club. Please try again.\n${R_T_Z.map((item, index) => `${index + 1}. ${item.name}`).join('\n')}`
      }
  }
  }