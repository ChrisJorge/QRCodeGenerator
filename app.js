// import inquirer from "inquirer";
import { input } from '@inquirer/prompts';
import qrcode from 'qrcode';


let answer =  await input({message: 'Enter the URL for the website'});

qrcode.toString(answer,{type: 'terminal'}, (err,url) => {
    console.log(url)
})