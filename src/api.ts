export type GetBlocksParams = {
  limit: number;
  offset: number;
};
export type GetBlocksResult = {
  blocks: Array<Block>;
  count: number;
};
export type Block = {
  hash: Bytes;
  height: number;
  weight: number;
  size: number;
  version: number;
  hashMerkleRoot: Bytes;
  witnessRoot: Bytes;
  treeRoot: Bytes;
  reservedRoot: Bytes;
  mask: Bytes;
  time: number;
  bits: Bytes;
  difficulty: number;
  chainwork: Bytes;
  nonce: number;
  extraNonce: Bytes;
  txsCount: number;
};
export type Bytes = string;
export type SearchParams = {
  query: string;
};
export type SearchResult = {
  transactions: Array<string>;
  blocks: Array<number>;
  names: Array<string>;
};
export type GetMempoolTxsParams = {
  limit: number;
  offset: number;
};
export type GetMempoolTxsResult = {
  txs: Array<Transaction>;
};
export type Transaction = {
  txid: Bytes;
  block_height: number;
  witnessTx: Bytes;
  fee: number;
  rate: number;
  version: number;
  locktime: number;
  size: number;
  height: number;
  inputs: Array<TxInput>;
  outputs: Array<TxOutput>;
};
export type TxInput = {
  hashPrevout: Bytes;
  indexPrevout: number;
  sequence: number;
};
export type TxOutput = {
  value: number;
  address: string;
  covenantAction: CovenantAction;
  covenantNameHash?: Bytes;
  covenantHeight?: Bytes;
  covenantName?: Bytes;
  covenantBidHash?: Bytes;
  covenantNonce?: Bytes;
  covenantRecordData?: Bytes;
  covenantBlockHash?: Bytes;
  covenantVersion?: Bytes;
  covenantAddress?: Bytes;
  covenantClaimHeight?: Bytes;
  covenantRenewalCount?: Bytes;
  name?: string;
};
export type CovenantAction = string;
export type GetBlockByHeightParams = {
  height: number;
};
export type GetBlockByHeightResult = {
  block: Block;
  height: number;
};
export type GetTransactionByTxidParams = {
  txid: Bytes;
};
export type GetTransactionByTxidResult = {
  txid: Bytes;
  block_height: number;
  witnessTx: Bytes;
  fee: number;
  rate: number;
  version: number;
  locktime: number;
  size: number;
  height: number;
  inputs: Array<TxInput>;
  outputs: Array<TxOutput>;
};
export type GetTransactionsByBlockHeightParams = {
  height: number;
  limit: number;
  offset: number;
};
export type GetTransactionsByBlockHeightResult = {
  txs: Array<Transaction>;
};
export type GetNameParams = {
  name: string;
};
export type GetNameResult = {
  reserved?: ReservedName;
  bids_count: number;
  records_count: number;
};
export type ReservedName = {
  originName: Bytes;
  name: string;
  nameHash: Bytes;
  claimAmount: number;
};
export type GetNameBidsByHashParams = {
  name: string;
  limit: number;
  offset: number;
};
export type GetNameBidsByHashResult = {
  bids: Array<NameBid>;
};
export type NameBid = {
  txid: Bytes;
  height: number;
  lockup: number;
  reveal: number;
};
export type GetNameRecordsByHashParams = {
  name: string;
  limit: number;
  offset: number;
};
export type GetNameRecordsByHashResult = {
  records: Array<NameRecord>;
};
export type NameRecord = {
  txid: Bytes;
  height: number;
  data: Bytes;
};
export type API = {
  "/blocks": {
    params: GetBlocksParams;
    result: GetBlocksResult;
  };
  "/search": {
    params: SearchParams;
    result: SearchResult;
  };
  "/mempool": {
    params: GetMempoolTxsParams;
    result: GetMempoolTxsResult;
  };
  "/block/height/": {
    params: GetBlockByHeightParams;
    result: GetBlockByHeightResult;
  };
  "/tx": {
    params: GetTransactionByTxidParams;
    result: GetTransactionByTxidResult;
  };
  "/block": {
    params: GetBlockByHeightParams;
    result: GetBlockByHeightResult;
  };
  "/block/txs": {
    params: GetTransactionsByBlockHeightParams;
    result: GetTransactionsByBlockHeightResult;
  };
  "/name": {
    params: GetNameParams;
    result: GetNameResult;
  };
  "/name/bids": {
    params: GetNameBidsByHashParams;
    result: GetNameBidsByHashResult;
  };
  "/name/records": {
    params: GetNameRecordsByHashParams;
    result: GetNameRecordsByHashResult;
  };
};
