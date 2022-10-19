import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

export default new class Whitelist {
  constructor(address) {
    this.merkleTree = this.getMerkleTree(address); 
  }

  getMerkleTree(addresses) {
    if (this.merkleTree === undefined) {
      const leafNodes = addresses.map(addr => keccak256(addr));
      
      this.merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    }

    return this.merkleTree;
  }

  getProofForAddress(address) {
    return this.getMerkleTree().getHexProof(keccak256(address));
  }

  getRawProofForAddress(address) {
    return this.getProofForAddress(address).toString().replaceAll('\'', '').replaceAll(' ', '');
  }

  contains(address) {
    return this.getLeafIndex(Buffer.from(keccak256(address))) >= 0;
  }
};