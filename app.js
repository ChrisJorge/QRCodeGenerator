// import inquirer from "inquirer";
import { input, checkbox } from '@inquirer/prompts';
import qrcode from 'qrcode';

const option = (num,answer) => {
    switch(num)
    {
        case 1:
            qrcode.toString(answer,{type: 'terminal'}, (err,url) => {
                console.log(url);
            });
            break;
        case 2:
            qrcode.toFile('./QRCODE.png', answer);
            console.log('QRCode successfully created!');
            break;
    }

}
let answer =  await input({message: 'Enter the URL for the website'});
let choice = await checkbox({message: 'Select How To View',
choices: [
    {name: 'Terminal', value: 1},
    {name: "Download", value: 2},
],
});

choice.map((x) => {
    option(x, answer);
});
