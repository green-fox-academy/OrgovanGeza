'use strict';
export{}

// Create a method that decrypts duplicated-chars.txt
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.

import fs from 'fs';

function decrypter (source:string, decrypted:string){
    let sourceContent = fs.readFileSync(source,'utf-8');
    let decryptedContent = '';
    for (let i=0; i<sourceContent.length;i++){
        if (i%2!==0) continue;
        decryptedContent+=sourceContent[i];
    }
    fs.writeFileSync(decrypted,decryptedContent)
}

decrypter('duplicated-chars.txt','decrypted.txt')