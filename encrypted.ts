// <Built by SHAHABUDDIN>

import runSimulation  from "./simulation.js";
import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";


console.log(chalk.bgBlueBright("Welcome to your Hacking Portal"));

let {confirm} = await inquirer.prompt({

  name:"confirm",
  type:"confirm",
  message:"Do you want to proceed to the Nasa hacking protocol"
});

if(!confirm){

  ///Terminating hack sequence

let exitProgram = async function () {

let delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));
  
  await delay(1000);
  console.log(chalk.red("Terminating the hacking sequence..."));
  await delay(1000);
  console.log(chalk.red("Closing unauthorized access channels...") + chalk.green(" Done."));
  await delay(1000);
  console.log(chalk.red("Purging all digital footprints...") + chalk.green(" Done."));
  await delay(1000);
  console.log(chalk.red("Disabling remote neural link...") + chalk.green(" Done."));
  await delay(1000);
  console.log(chalk.red("Restoring original security protocols...") + chalk.green(" Done."));
  await delay(1000);
  console.log(chalk.red("Quantum mainframe returning to standby mode."));
  await delay(1000);
  console.log(chalk.green("Operation complete. You have successfully exited the system."));
}

await exitProgram();


  
}else{

  
  function dataRetreival(){

    let dataRetreivalProcess = Math.floor(Math.random() * 10) % 2 === 0? false:true

    let retreiveData = new Promise((resolve,reject)=>{

      if(dataRetreivalProcess){

        resolve(chalk.blue("Succesfully retreived Data"))
      }else{

        reject(chalk.redBright("access denied"));

        
      }
      

    })

    retreiveData
    
    .then(resolve => console.log(`${resolve}
      Retreving Meta DATA.....`))

    .catch(error => {
      console.log(`${error} 
        Trying Again....`)
      return dataRetreival();
    })
  }

  dataRetreival();

let hack_NASA = async function(){

  let delay = (time:number) => new Promise((resolve,) => setTimeout(resolve,time));


   await delay(1000);
   console.log(chalk.greenBright("Establishing secure connection to the satellite... Done."));
   runSimulation();
    await delay(1000);
    console.log(chalk.greenBright("Bypassing the mainframe security layer... Done."));
    runSimulation();
    await delay(1000);
    console.log(chalk.greenBright("Decrypting the payload data... Done."));
    runSimulation();
    await delay(1000);
    console.log(chalk.greenBright("Accessing the control system... Done."));
    runSimulation();
    await delay(1000);
    console.log(chalk.greenBright("Uploading the custom algorithm... Done.") );
    runSimulation();
    await delay(1000);
    console.log(chalk.greenBright("Overriding the command module... Done.") );
    runSimulation();
    await delay(1000);
    console.log(chalk.greenBright(  "3... 2... 1... Hack successful! Welcome to NASA's database.") );
    runSimulation();
    await delay(1000);
}


hack_NASA();
}


const spinner = ora('Loading...').start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading System...';
}, 1000);

setTimeout(() => {
  spinner.succeed('Success');
}, 2000);