import {test} from '@playwright/test'
//to put the test in test suite we can use the following code : 
test.describe("The Log in Feature",()=>{
 //if i wil use the After all or before all i will go to the .config file and change the fullyParallel to false
    test.afterAll(()=>{
    console.log("iam inside The After All");
   })
    test.beforeEach(()=>{
        console.log("iam inside The Before Each");
    })
 test("Should have the correct Title",async()=>{
console.log("iam inside test case 1");
})
test("you should have a correct URL",async()=>{
    console.log("iam inside test case 2");
    })   
    test.afterEach(()=>{
console.log("iam in the AfterEach test case");
    })
    //if we will only test a single test case then we should use this code : 
    test.only("this is only",()=>{
        console.log("iam inside The Before Each");
    })
        //if we will skip test a single test case then we should use this code : 
    test.skip("this is skip",()=>{
        console.log("iam inside The Before Each");
    })
})
