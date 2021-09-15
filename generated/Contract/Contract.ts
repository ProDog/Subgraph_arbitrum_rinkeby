// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetFrom(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetTo(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get chainIDFrom(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get chainIDTo(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class DepositForRelayer extends ethereum.Event {
  get params(): DepositForRelayer__Params {
    return new DepositForRelayer__Params(this);
  }
}

export class DepositForRelayer__Params {
  _event: DepositForRelayer;

  constructor(event: DepositForRelayer) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetFrom(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetTo(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get chainIDFrom(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get chainIDTo(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class Harvest extends ethereum.Event {
  get params(): Harvest__Params {
    return new Harvest__Params(this);
  }
}

export class Harvest__Params {
  _event: Harvest;

  constructor(event: Harvest) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetFrom(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetTo(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get chainIDFrom(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get chainIDTo(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get v(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get r(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get s(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }
}

export class HarvestForRealyer extends ethereum.Event {
  get params(): HarvestForRealyer__Params {
    return new HarvestForRealyer__Params(this);
  }
}

export class HarvestForRealyer__Params {
  _event: HarvestForRealyer;

  constructor(event: HarvestForRealyer) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetFrom(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetTo(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get chainIDFrom(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get chainIDTo(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class Lock extends ethereum.Event {
  get params(): Lock__Params {
    return new Lock__Params(this);
  }
}

export class Lock__Params {
  _event: Lock;

  constructor(event: Lock) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetFrom(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetTo(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get relayer(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get deadline(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get chainIDFrom(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get chainIDTo(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SeAssetWhiteList extends ethereum.Event {
  get params(): SeAssetWhiteList__Params {
    return new SeAssetWhiteList__Params(this);
  }
}

export class SeAssetWhiteList__Params {
  _event: SeAssetWhiteList;

  constructor(event: SeAssetWhiteList) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get state(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class SetRelayerWhiteList extends ethereum.Event {
  get params(): SetRelayerWhiteList__Params {
    return new SetRelayerWhiteList__Params(this);
  }
}

export class SetRelayerWhiteList__Params {
  _event: SetRelayerWhiteList;

  constructor(event: SetRelayerWhiteList) {
    this._event = event;
  }

  get relayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get state(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetFrom(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetTo(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get chainIDFrom(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get chainIDTo(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Contract__getDepositInfoCurrentResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: Address;
  value5: Address;
  value6: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: Address,
    value5: Address,
    value6: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    return map;
  }
}

export class Contract__getHarvestInfoCurrentResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: Address;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  chainID(): BigInt {
    let result = super.call("chainID", "chainID():(uint256)", []);

    return result[0].toBigInt();
  }

  try_chainID(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("chainID", "chainID():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getDepositInfoCurrent(
    user: Address,
    assetFrom: Address,
    chainIDTo: BigInt
  ): Contract__getDepositInfoCurrentResult {
    let result = super.call(
      "getDepositInfoCurrent",
      "getDepositInfoCurrent(address,address,uint256):(uint256,uint256,uint256,uint256,address,address,address)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromAddress(assetFrom),
        ethereum.Value.fromUnsignedBigInt(chainIDTo)
      ]
    );

    return new Contract__getDepositInfoCurrentResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toAddress()
    );
  }

  try_getDepositInfoCurrent(
    user: Address,
    assetFrom: Address,
    chainIDTo: BigInt
  ): ethereum.CallResult<Contract__getDepositInfoCurrentResult> {
    let result = super.tryCall(
      "getDepositInfoCurrent",
      "getDepositInfoCurrent(address,address,uint256):(uint256,uint256,uint256,uint256,address,address,address)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromAddress(assetFrom),
        ethereum.Value.fromUnsignedBigInt(chainIDTo)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__getDepositInfoCurrentResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toAddress()
      )
    );
  }

  getDomainSeparator(_chainID: BigInt): Bytes {
    let result = super.call(
      "getDomainSeparator",
      "getDomainSeparator(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_chainID)]
    );

    return result[0].toBytes();
  }

  try_getDomainSeparator(_chainID: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getDomainSeparator",
      "getDomainSeparator(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_chainID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getHarvestInfoCurrent(
    user: Address,
    assetTo: Address,
    chainIDFrom: BigInt
  ): Contract__getHarvestInfoCurrentResult {
    let result = super.call(
      "getHarvestInfoCurrent",
      "getHarvestInfoCurrent(address,address,uint256):(uint256,uint256,uint256,address)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromAddress(assetTo),
        ethereum.Value.fromUnsignedBigInt(chainIDFrom)
      ]
    );

    return new Contract__getHarvestInfoCurrentResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toAddress()
    );
  }

  try_getHarvestInfoCurrent(
    user: Address,
    assetTo: Address,
    chainIDFrom: BigInt
  ): ethereum.CallResult<Contract__getHarvestInfoCurrentResult> {
    let result = super.tryCall(
      "getHarvestInfoCurrent",
      "getHarvestInfoCurrent(address,address,uint256):(uint256,uint256,uint256,address)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromAddress(assetTo),
        ethereum.Value.fromUnsignedBigInt(chainIDFrom)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__getHarvestInfoCurrentResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toAddress()
      )
    );
  }

  HARVEST_TYPEHASH(): Bytes {
    let result = super.call(
      "HARVEST_TYPEHASH",
      "HARVEST_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_HARVEST_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "HARVEST_TYPEHASH",
      "HARVEST_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isAssetInWhiteList(asset: Address): boolean {
    let result = super.call(
      "isAssetInWhiteList",
      "isAssetInWhiteList(address):(bool)",
      [ethereum.Value.fromAddress(asset)]
    );

    return result[0].toBoolean();
  }

  try_isAssetInWhiteList(asset: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAssetInWhiteList",
      "isAssetInWhiteList(address):(bool)",
      [ethereum.Value.fromAddress(asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isRelayerInWhiteList(relayer: Address): boolean {
    let result = super.call(
      "isRelayerInWhiteList",
      "isRelayerInWhiteList(address):(bool)",
      [ethereum.Value.fromAddress(relayer)]
    );

    return result[0].toBoolean();
  }

  try_isRelayerInWhiteList(relayer: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isRelayerInWhiteList",
      "isRelayerInWhiteList(address):(bool)",
      [ethereum.Value.fromAddress(relayer)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nonces(param0: Address): BigInt {
    let result = super.call("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_nonces(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  period(): BigInt {
    let result = super.call("period", "period():(uint256)", []);

    return result[0].toBigInt();
  }

  try_period(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("period", "period():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  periodDouble(): BigInt {
    let result = super.call("periodDouble", "periodDouble():(uint256)", []);

    return result[0].toBigInt();
  }

  try_periodDouble(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("periodDouble", "periodDouble():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get assetFrom(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get assetTo(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get reward(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get chainIDTo(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositForRelayerCall extends ethereum.Call {
  get inputs(): DepositForRelayerCall__Inputs {
    return new DepositForRelayerCall__Inputs(this);
  }

  get outputs(): DepositForRelayerCall__Outputs {
    return new DepositForRelayerCall__Outputs(this);
  }
}

export class DepositForRelayerCall__Inputs {
  _call: DepositForRelayerCall;

  constructor(call: DepositForRelayerCall) {
    this._call = call;
  }

  get assetFrom(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get assetTo(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get user(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get chainIDFrom(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get chainIDTo(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class DepositForRelayerCall__Outputs {
  _call: DepositForRelayerCall;

  constructor(call: DepositForRelayerCall) {
    this._call = call;
  }
}

export class HarvestCall extends ethereum.Call {
  get inputs(): HarvestCall__Inputs {
    return new HarvestCall__Inputs(this);
  }

  get outputs(): HarvestCall__Outputs {
    return new HarvestCall__Outputs(this);
  }
}

export class HarvestCall__Inputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }

  get assetTo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get chainIDFrom(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class HarvestCall__Outputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }
}

export class HarvestForRealyerCall extends ethereum.Call {
  get inputs(): HarvestForRealyerCall__Inputs {
    return new HarvestForRealyerCall__Inputs(this);
  }

  get outputs(): HarvestForRealyerCall__Outputs {
    return new HarvestForRealyerCall__Outputs(this);
  }
}

export class HarvestForRealyerCall__Inputs {
  _call: HarvestForRealyerCall;

  constructor(call: HarvestForRealyerCall) {
    this._call = call;
  }

  get assetFrom(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get usr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get chainIDTo(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class HarvestForRealyerCall__Outputs {
  _call: HarvestForRealyerCall;

  constructor(call: HarvestForRealyerCall) {
    this._call = call;
  }
}

export class LockCall extends ethereum.Call {
  get inputs(): LockCall__Inputs {
    return new LockCall__Inputs(this);
  }

  get outputs(): LockCall__Outputs {
    return new LockCall__Outputs(this);
  }
}

export class LockCall__Inputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }

  get assetFrom(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get chainIDTo(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class LockCall__Outputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAssetWhiteListCall extends ethereum.Call {
  get inputs(): SetAssetWhiteListCall__Inputs {
    return new SetAssetWhiteListCall__Inputs(this);
  }

  get outputs(): SetAssetWhiteListCall__Outputs {
    return new SetAssetWhiteListCall__Outputs(this);
  }
}

export class SetAssetWhiteListCall__Inputs {
  _call: SetAssetWhiteListCall;

  constructor(call: SetAssetWhiteListCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get state(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetAssetWhiteListCall__Outputs {
  _call: SetAssetWhiteListCall;

  constructor(call: SetAssetWhiteListCall) {
    this._call = call;
  }
}

export class SetDomainSeparatorCall extends ethereum.Call {
  get inputs(): SetDomainSeparatorCall__Inputs {
    return new SetDomainSeparatorCall__Inputs(this);
  }

  get outputs(): SetDomainSeparatorCall__Outputs {
    return new SetDomainSeparatorCall__Outputs(this);
  }
}

export class SetDomainSeparatorCall__Inputs {
  _call: SetDomainSeparatorCall;

  constructor(call: SetDomainSeparatorCall) {
    this._call = call;
  }

  get _chainID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDomainSeparatorCall__Outputs {
  _call: SetDomainSeparatorCall;

  constructor(call: SetDomainSeparatorCall) {
    this._call = call;
  }
}

export class SetRelayerWhiteListCall extends ethereum.Call {
  get inputs(): SetRelayerWhiteListCall__Inputs {
    return new SetRelayerWhiteListCall__Inputs(this);
  }

  get outputs(): SetRelayerWhiteListCall__Outputs {
    return new SetRelayerWhiteListCall__Outputs(this);
  }
}

export class SetRelayerWhiteListCall__Inputs {
  _call: SetRelayerWhiteListCall;

  constructor(call: SetRelayerWhiteListCall) {
    this._call = call;
  }

  get relayer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get state(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetRelayerWhiteListCall__Outputs {
  _call: SetRelayerWhiteListCall;

  constructor(call: SetRelayerWhiteListCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get assetFrom(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get chainIDTo(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
