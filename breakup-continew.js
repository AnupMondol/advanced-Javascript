 const nums = [1,2,3,4,-5,-6,7,-8,9];

 for (let i = 0; i < nums.length; i++){
     
     if(nums[i] > 3){
         break;
     }
    //  console.log (nums[i]);
 }

 const numss = [1,2,3,4,-5,-6,7,-8,9];

 for (let i = 0; i < numss.length; i++){
     
     if(nums[i] < 0){
         continue;
    }

    console.log(numss[i]);

 }