export type GetNameInfoParams = {
  name: string;
  page: number;
};
export type GetNameInfoResult = {
  reserved: boolean;
  reservation: ReservedName;
  records: Array<RecordRow>;
  count: number;
  limit: number;
};
export type ReservedName = {
  Name: Bytes;
  OriginName: Bytes;
  NameHash: Bytes;
  ClaimAmount: number;
};
export type Bytes = string;
export type RecordRow = {
  Height: number;
  CovenantRecordData: Bytes;
  Count: number;
};
export type GetBlockByHeightParams = {
  height: number;
};
export type GetBlockByHeightResult = {
  block: Block;
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
export type GetTransactionsByBlockHeightParams = {
  height: number;
  limit: number;
  offset: number;
};
export type GetTransactionsByBlockHeightResult = {
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
export type GetListLockupVolumeParams = {
  page: number;
};
export type GetListLockupVolumeResult = {
  names: Array<NameVolumeRow>;
  count: number;
  limit: number;
};
export type NameVolumeRow = {
  OpenHeight: number;
  CovenantNameHash: Bytes;
  CovenantName: Bytes;
  MaxLockup: number;
  MaxRevealed: number;
  VolumeLockup: number;
  VolumeRevealed: number;
  BidCount: number;
  Count: number;
};
export type GetListRevealVolumeParams = {
  page: number;
};
export type GetListRevealVolumeResult = {
  names: Array<NameVolumeRow>;
  count: number;
  limit: number;
};
export type GetListBidsParams = {
  page: number;
};
export type GetListBidsResult = {
  names: Array<NameVolumeRow>;
  count: number;
  limit: number;
};
export type GetAuctionHistoryParams = {
  page: number;
  name: string;
};
export type GetAuctionHistoryParamsResult = {
  history: Array<AuctionHistoryRow>;
  count: number;
  limit: number;
};
export type AuctionHistoryRow = {
  Height: number;
  Txid: Bytes;
  CovenantName: string;
  LockupValue: number | null;
  RevealValue: number | null;
  CovenantAction: string;
  CovenantRecordData: string;
  CovenantNameHash: string;
  Count: number;
};
export type GetMempoolTxsParams = {
  limit: number;
  offset: number;
};
export type GetMempoolTxsResult = {
  txs: Array<Transaction>;
};
export type GetBlocksParams = {
  limit: number;
  offset: number;
};
export type GetBlocksResult = {
  blocks: Array<Block>;
  count: number;
};
export type GetListExpensiveParams = {
  page: number;
};
export type GetListExpensiveResult = {
  names: Array<NameRow>;
  count: number;
  limit: number;
};
export type NameRow = {
  OpenHeight: number;
  CovenantNameHash: Bytes;
  CovenantName: Bytes;
  MaxLockup: number;
  MaxRevealed: number;
  BidCount: number;
  Count: number;
};
export type GetRecordsParams = {
  name: string;
  page: number;
};
export type GetRecordsParamsResult = {
  records: Array<RecordRow>;
  count: number;
  limit: number;
};
export type SearchParams = {
  query: string;
};
export type SearchResult = {
  transactions: Array<string>;
  blocks: Array<number>;
  names: Array<string>;
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
export type API = {
  "/name": {
    params: GetNameInfoParams;
    result: GetNameInfoResult;
  };
  "/block": {
    params: GetBlockByHeightParams;
    result: GetBlockByHeightResult;
  };
  "/block/txs": {
    params: GetTransactionsByBlockHeightParams;
    result: GetTransactionsByBlockHeightResult;
  };
  "/lists/lockup_volume": {
    params: GetListLockupVolumeParams;
    result: GetListLockupVolumeResult;
  };
  "/lists/reveal_volume": {
    params: GetListRevealVolumeParams;
    result: GetListRevealVolumeResult;
  };
  "/lists/bids": {
    params: GetListBidsParams;
    result: GetListBidsResult;
  };
  "/names/auction": {
    params: GetAuctionHistoryParams;
    result: GetAuctionHistoryParamsResult;
  };
  "/mempool": {
    params: GetMempoolTxsParams;
    result: GetMempoolTxsResult;
  };
  "/blocks": {
    params: GetBlocksParams;
    result: GetBlocksResult;
  };
  "/lists/expensive": {
    params: GetListExpensiveParams;
    result: GetListExpensiveResult;
  };
  "/names/records": {
    params: GetRecordsParams;
    result: GetRecordsParamsResult;
  };
  "/search": {
    params: SearchParams;
    result: SearchResult;
  };
  "/tx": {
    params: GetTransactionByTxidParams;
    result: GetTransactionByTxidResult;
  };
};
