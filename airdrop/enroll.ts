import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { IDL, Turbin3Prereq } from "./programs/Turbin3_prereq";
import wallet from "./Turbin3-wallet.json";


        const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
        const connection = new Connection("https://api.devnet.solana.com");
        
        const github = Buffer.from("https://github.com/PinkieJasmine", "utf8");

        const provider = new AnchorProvider(connection, new Wallet(keypair), { commitment: "confirmed" 
        });
        const programId = new PublicKey("WBAQSygkwMox2VuWKU133NxFrpDZUBdvSBeaBEue2Jq");
        const program: Program<Turbin3Prereq> = new Program(IDL, programId, provider);


    const enrollment_seeds = [Buffer.from("prereq"),
        keypair.publicKey.toBuffer()];
    const [enrollment_key, _bump] =
        PublicKey.findProgramAddressSync(
            enrollment_seeds, 
            programId
    );

    (async () => {
        try {
        const txhash = await program.methods
        .complete(github)
        .accounts({
            signer: keypair.publicKey,
            prereq: enrollment_key,
            systemAccount: PublicKey.default,
    })
    .signers([keypair])
    .rpc();
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();