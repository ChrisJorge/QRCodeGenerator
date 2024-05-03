// import inquirer from "inquirer";
import { input, checkbox } from '@inquirer/prompts';
import qrcode from 'qrcode';


let answer =  await input({message: 'Enter the URL for the website'});
let choice = await checkbox({message: 'Select How To View',
choices: [
    {name: 'Terminal', value: 1},
    {name: "Download", value: 2},
    {name: 'Terminal and Download', value: 3}
],
});

qrcode.toString(answer,{type: 'terminal'}, (err,url) => {
    console.log(url)
})