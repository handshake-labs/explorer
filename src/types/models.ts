export const BLOCK = "block" as const;
export interface Block {
  height: number;
  weight: number;
  size: number;
  version: number;
  merkleRoot: string;
  witnessRoot: string;
  treeRoot: string;
  reservedRoot: string;
  mask: string;
  time: number;
  bits: string;
  difficulty: number;
  chainwork: string;
  nonce: number;
  extraNonce: string;
}
export interface BlockRef {
  hash: string;
}
export interface BlockRequest {
  hash: string;
  page: number;
}
export interface BlockResponse {
  block: Block;
  prevBlocks: BlockRef[];
  nextBlocks: BlockRef[];
  transactionsCount: number;
  transactionsPerPage: number;
  transactions: Transaction[];
}
export interface Transaction {
  txid: string;
  witnessTx: string;
  fee: number;
  rate: number;
  indexBlock: number;
  version: number;
  locktime: number;
  size: number;
  inputs: TxInput[];
  outputs: TxOutput[];
}
export interface TxInput {
  hashPrevout: string;
  indexPrevout: number;
  sequence: number;
}
export interface TxOutput {
  indexOut: number;
  value: number;
  address: string | null;
  covenantAction: string;
  covenantNameHash?: string;
  covenantHeight?: string;
  covenantName?: string;
  covenantBidHash?: string;
  covenantNonce?: string;
  covenantRecordData?: string;
  covenantBlockHash?: string;
  covenantVersion?: string;
  covenantAddress?: string;
  covenantClaimHeight?: string;
  covenantRenewalCount?: string;
}
