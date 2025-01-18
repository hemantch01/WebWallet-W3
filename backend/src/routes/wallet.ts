import { Router } from 'express';
import { generateMnemonic, mnemonicToSeed, mnemonicToSeedSync } from 'bip39';
import nacl from 'tweetnacl';
import {derivePath} from 'ed25519-hd-key';
import {Keypair} from '@solana/web3.js';
const router = Router();

// Define a route to generate a mnemonic phrase
router.get('/wallet', (req, res) => {
  const mnemonic = generateMnemonic(); // Generate a BIP39 mnemonic
  const seed = mnemonicToSeedSync(mnemonic);
for(let i=0;i<4;i++){
    const path = `m/44'/501'/${i}'`; 
    const derivedSeed = derivePath(path,seed.toString('hex')).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}
});

// Export the router directly (no need for a function wrapper)
export default router;
