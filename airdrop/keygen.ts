import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58'; 
// import promptSync from 'prompt-sync';
let kp = Keypair.generate()
console.log(`You've generated a new Solana wallet:
    ${kp.publicKey.toBase58()}`)
console.log(`[${kp.secretKey}]`)  




// const prompt = promptSync();

// // Decode Base58 to byte array
// function base58ToWallet() {
//     const base58String = input('Enter your Base58 private key: ');
//     try {
//         const wallet = bs58.decode(base58String);
//         console.log('Decoded Wallet (byte array):', Array.from(wallet));
//     } catch (err) {
//         console.error('Invalid Base58 string:', err.message);
//     }
// }

// Encode byte array to Base58
function walletToBase58() {
    const wallet = [245,110,142,135,235,38,47,88,30,60,215,95,68,13,128,166,252,188,184,58,148,224,44,122,36,56,35,241,118,167,241,78,74,4,10,73,251,93,46,172,17,10,34,120,170,52,236,234,199,252,61,157,226,90,172,239,87,62,93,129,71,45,130,89];
    const base58String = bs58.encode(Buffer.from(wallet));
    console.log('Encoded Base58 String:', base58String);
}


// base58ToWallet();
walletToBase58();
