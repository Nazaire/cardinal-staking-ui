import { PublicKey } from '@solana/web3.js'

export const poolMapping: {
  name: string
  displayName: string
  pool: PublicKey
}[] = [
  {
    name: 'cardinal',
    displayName: 'Cardinal',
    pool: new PublicKey('A1h3AEScGehWAWdm3Q7uob8MGnhhkbB7FvH9gGhdzPC3'),
  },
  {
    name: 'jambo',
    displayName: 'Jambo Mambo',
    pool: new PublicKey('9L86DUzzHDQtWyhooEj7d6g44aSqCGYf49WFRkdTyJnt'),
  },
]