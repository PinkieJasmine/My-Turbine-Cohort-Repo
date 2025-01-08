import { Idl } from "@coral-xyz/anchor";
export type Turbin3Prereq =  Idl &{ 
    "version": "0.1.0";
    "name": "Turbin3_prereq";
    instructions: [
        {
          name: "complete";
          accounts: [
            { name: "signer"; isMut: false; isSigner: true },
            { name: "prereq"; isMut: true; isSigner: false },
            { name: "systemAccount"; isMut: false; isSigner: false }
          ];
          args: [{ name: "github"; type: "bytes" }];
        }
      ];
};

  
export const IDL: Turbin3Prereq = { 
    "version": "0.1.0",
    "name": "Turbin3_prereq",
    instructions: [
        {
          name: "complete",
          accounts: [
            { name: "signer", isMut: false, isSigner: true },
            { name: "prereq", isMut: true, isSigner: false },
            { name: "systemAccount", isMut: false, isSigner: false },
          ],
          args: [{ name: "github", type: "bytes" }],
        },
    ],
}

