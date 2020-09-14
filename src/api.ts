export type GetBlockByHeightParams = {
  height: number;
};
export type GetBlockByHeightResult = {
  block: Block;
  maxHeight: number;
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
};
export type Bytes = string;
export type GetTransactionsByBlockHashParams = {
  hash: Bytes;
  page: number;
};
export type GetTransactionsByBlockHashResult = {
  txs: Array<Transaction>;
  count: number;
  limit: number;
};
export type Transaction = {
  txid: Bytes;
  witnessTx: Bytes;
  fee: number;
  rate: number;
  version: number;
  locktime: number;
  size: number;
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
};
export type CovenantAction = string;
export type GetRecordsParams = {
  name: string;
  page: number;
};
export type GetRecordsParamsResult = {
  records: Array<RecordRow>;
  count: number;
  limit: number;
};
export type RecordRow = {
  Height: number;
  CovenantRecordData: Bytes;
  Count: number;
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
export type SearchParams = {
  query: string;
};
export type SearchResult = {
  result: RawMessage;
};
export type RawMessage = Array<number>;
export type API = {
  "/block": {
    params: GetBlockByHeightParams;
    result: GetBlockByHeightResult;
  };
  "/block/txs": {
    params: GetTransactionsByBlockHashParams;
    result: GetTransactionsByBlockHashResult;
  };
  "/names/records": {
    params: GetRecordsParams;
    result: GetRecordsParamsResult;
  };
  "/names/auction": {
    params: GetAuctionHistoryParams;
    result: GetAuctionHistoryParamsResult;
  };
  "/lists/expensive": {
    params: GetListExpensiveParams;
    result: GetListExpensiveResult;
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
  "/search": {
    params: SearchParams;
    result: SearchResult;
  };
};
