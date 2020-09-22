export type GetNameInfoParams = {
"name": string
"page": number
}
export type GetNameInfoResult = {
"reserved": bool
"reservation": ReservedName
"records": Array<RecordRow>
"count": number
"limit": number
}
export type ReservedName = {
"Name": Bytes
"OriginName": Bytes
"NameHash": Bytes
"ClaimAmount": number
}
export type Bytes = string
export type RecordRow = {
"Height": number
"CovenantRecordData": Bytes
"Count": number
}
export type GetBlockByHeightParams = {
"height": number
}
export type GetBlockByHeightResult = {
"block": Block
"maxHeight": number
}
export type Block = {
"hash": Bytes
"height": number
"weight": number
"size": number
"version": number
"hashMerkleRoot": Bytes
"witnessRoot": Bytes
"treeRoot": Bytes
"reservedRoot": Bytes
"mask": Bytes
"time": number
"bits": Bytes
"difficulty": number
"chainwork": Bytes
"nonce": number
"extraNonce": Bytes
}
export type GetListLockupVolumeParams = {
"page": number
}
export type GetListLockupVolumeResult = {
"names": Array<NameVolumeRow>
"count": number
"limit": number
}
export type NameVolumeRow = {
"OpenHeight": number
"CovenantNameHash": Bytes
"CovenantName": Bytes
"MaxLockup": number
"MaxRevealed": number
"VolumeLockup": number
"VolumeRevealed": number
"BidCount": number
"Count": number
}
export type GetListRevealVolumeParams = {
"page": number
}
export type GetListRevealVolumeResult = {
"names": Array<NameVolumeRow>
"count": number
"limit": number
}
export type GetListBidsParams = {
"page": number
}
export type GetListBidsResult = {
"names": Array<NameVolumeRow>
"count": number
"limit": number
}
export type SearchParams = {
"query": string
}
export type SearchResult = {
"transactions": Array<string>
"blocks": Array<number>
"names": Array<string>
}
export type GetMempoolTxsParams = {
"page": number
}
export type GetMempoolTxsResult = {
"txs": Array<MempoolTx>
}
export type MempoolTx = {
"hash": Bytes
"witnessHash": Bytes
"mtime": number
"version": number
"locktime": number
"inputs": Array<MempoolTxInput>
"outputs": Array<TxOutput>
}
export type MempoolTxInput = {
"prevout": {
"hash": Bytes
"index": number
}
"witness": Array<Bytes>
"sequence": number
"address": string
}
export type TxOutput = {
"value": number
"address": string
"covenantAction": CovenantAction
"covenantNameHash"?: Bytes
"covenantHeight"?: Bytes
"covenantName"?: Bytes
"covenantBidHash"?: Bytes
"covenantNonce"?: Bytes
"covenantRecordData"?: Bytes
"covenantBlockHash"?: Bytes
"covenantVersion"?: Bytes
"covenantAddress"?: Bytes
"covenantClaimHeight"?: Bytes
"covenantRenewalCount"?: Bytes
"name"?: Bytes
}
export type CovenantAction = string
export type GetTransactionsByBlockHashParams = {
"hash": Bytes
"page": number
}
export type GetTransactionsByBlockHashResult = {
"txs": Array<Transaction>
"count": number
"limit": number
}
export type Transaction = {
"txid": Bytes
"witnessTx": Bytes
"fee": number
"rate": number
"version": number
"locktime": number
"size": number
"height": number
"inputs": Array<TxInput>
"outputs": Array<TxOutput>
}
export type TxInput = {
"hashPrevout": Bytes
"indexPrevout": number
"sequence": number
}
export type GetListExpensiveParams = {
"page": number
}
export type GetListExpensiveResult = {
"names": Array<NameRow>
"count": number
"limit": number
}
export type NameRow = {
"OpenHeight": number
"CovenantNameHash": Bytes
"CovenantName": Bytes
"MaxLockup": number
"MaxRevealed": number
"BidCount": number
"Count": number
}
export type GetRecordsParams = {
"name": string
"page": number
}
export type GetRecordsParamsResult = {
"records": Array<RecordRow>
"count": number
"limit": number
}
export type GetAuctionHistoryParams = {
"page": number
"name": string
}
export type GetAuctionHistoryParamsResult = {
"history": Array<AuctionHistoryRow>
"count": number
"limit": number
}
export type AuctionHistoryRow = {
"Height": number
"Txid": Bytes
"CovenantName": string
"LockupValue": number | null
"RevealValue": number | null
"CovenantAction": string
"CovenantRecordData": string
"CovenantNameHash": string
"Count": number
}
export type GetTransactionByTxidParams = {
"txid": Bytes
}
export type API = {
"/name": {
"params": GetNameInfoParams
"result": GetNameInfoResult
}
"/block": {
"params": GetBlockByHeightParams
"result": GetBlockByHeightResult
}
"/lists/lockup_volume": {
"params": GetListLockupVolumeParams
"result": GetListLockupVolumeResult
}
"/lists/reveal_volume": {
"params": GetListRevealVolumeParams
"result": GetListRevealVolumeResult
}
"/lists/bids": {
"params": GetListBidsParams
"result": GetListBidsResult
}
"/search": {
"params": SearchParams
"result": SearchResult
}
"/mempool": {
"params": GetMempoolTxsParams
"result": GetMempoolTxsResult
}
"/block/txs": {
"params": GetTransactionsByBlockHashParams
"result": GetTransactionsByBlockHashResult
}
"/lists/expensive": {
"params": GetListExpensiveParams
"result": GetListExpensiveResult
}
"/names/records": {
"params": GetRecordsParams
"result": GetRecordsParamsResult
}
"/names/auction": {
"params": GetAuctionHistoryParams
"result": GetAuctionHistoryParamsResult
}
"/tx": {
"params": GetTransactionByTxidParams
"result": Transaction
}
}
