/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface INodeInterface extends ethers.utils.Interface {
  functions: {
    'addStaker(address)': FunctionFragment
    'challengeHash()': FunctionFragment
    'childCreated(uint256)': FunctionFragment
    'confirmData()': FunctionFragment
    'deadlineBlock()': FunctionFragment
    'destroy()': FunctionFragment
    'firstChildBlock()': FunctionFragment
    'initialize(address,bytes32,bytes32,bytes32,uint256,uint256)': FunctionFragment
    'latestChildNumber()': FunctionFragment
    'newChildConfirmDeadline(uint256)': FunctionFragment
    'noChildConfirmedBeforeBlock()': FunctionFragment
    'prev()': FunctionFragment
    'removeStaker(address)': FunctionFragment
    'requirePastChildConfirmDeadline()': FunctionFragment
    'requirePastDeadline()': FunctionFragment
    'stakerCount()': FunctionFragment
    'stakers(address)': FunctionFragment
    'stateHash()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'addStaker', values: [string]): string
  encodeFunctionData(
    functionFragment: 'challengeHash',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'childCreated',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'confirmData',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'deadlineBlock',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'destroy', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'firstChildBlock',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      string,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'latestChildNumber',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'newChildConfirmDeadline',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'noChildConfirmedBeforeBlock',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'prev', values?: undefined): string
  encodeFunctionData(functionFragment: 'removeStaker', values: [string]): string
  encodeFunctionData(
    functionFragment: 'requirePastChildConfirmDeadline',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'requirePastDeadline',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'stakerCount',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'stakers', values: [string]): string
  encodeFunctionData(functionFragment: 'stateHash', values?: undefined): string

  decodeFunctionResult(functionFragment: 'addStaker', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'challengeHash',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'childCreated',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'confirmData', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'deadlineBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'destroy', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'firstChildBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'latestChildNumber',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'newChildConfirmDeadline',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'noChildConfirmedBeforeBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'prev', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'removeStaker',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'requirePastChildConfirmDeadline',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'requirePastDeadline',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'stakerCount', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stakers', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stateHash', data: BytesLike): Result

  events: {}
}

export class INode extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: INodeInterface

  functions: {
    addStaker(
      staker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    challengeHash(overrides?: CallOverrides): Promise<[string]>

    childCreated(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    confirmData(overrides?: CallOverrides): Promise<[string]>

    deadlineBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    firstChildBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    initialize(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    latestChildNumber(overrides?: CallOverrides): Promise<[BigNumber]>

    newChildConfirmDeadline(
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    noChildConfirmedBeforeBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    prev(overrides?: CallOverrides): Promise<[BigNumber]>

    removeStaker(
      staker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    requirePastChildConfirmDeadline(overrides?: CallOverrides): Promise<[void]>

    requirePastDeadline(overrides?: CallOverrides): Promise<[void]>

    stakerCount(overrides?: CallOverrides): Promise<[BigNumber]>

    stakers(staker: string, overrides?: CallOverrides): Promise<[boolean]>

    stateHash(overrides?: CallOverrides): Promise<[string]>
  }

  addStaker(
    staker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  challengeHash(overrides?: CallOverrides): Promise<string>

  childCreated(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  confirmData(overrides?: CallOverrides): Promise<string>

  deadlineBlock(overrides?: CallOverrides): Promise<BigNumber>

  destroy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  firstChildBlock(overrides?: CallOverrides): Promise<BigNumber>

  initialize(
    _rollup: string,
    _stateHash: BytesLike,
    _challengeHash: BytesLike,
    _confirmData: BytesLike,
    _prev: BigNumberish,
    _deadlineBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  latestChildNumber(overrides?: CallOverrides): Promise<BigNumber>

  newChildConfirmDeadline(
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  noChildConfirmedBeforeBlock(overrides?: CallOverrides): Promise<BigNumber>

  prev(overrides?: CallOverrides): Promise<BigNumber>

  removeStaker(
    staker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  requirePastChildConfirmDeadline(overrides?: CallOverrides): Promise<void>

  requirePastDeadline(overrides?: CallOverrides): Promise<void>

  stakerCount(overrides?: CallOverrides): Promise<BigNumber>

  stakers(staker: string, overrides?: CallOverrides): Promise<boolean>

  stateHash(overrides?: CallOverrides): Promise<string>

  callStatic: {
    addStaker(staker: string, overrides?: CallOverrides): Promise<BigNumber>

    challengeHash(overrides?: CallOverrides): Promise<string>

    childCreated(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>

    confirmData(overrides?: CallOverrides): Promise<string>

    deadlineBlock(overrides?: CallOverrides): Promise<BigNumber>

    destroy(overrides?: CallOverrides): Promise<void>

    firstChildBlock(overrides?: CallOverrides): Promise<BigNumber>

    initialize(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    latestChildNumber(overrides?: CallOverrides): Promise<BigNumber>

    newChildConfirmDeadline(
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    noChildConfirmedBeforeBlock(overrides?: CallOverrides): Promise<BigNumber>

    prev(overrides?: CallOverrides): Promise<BigNumber>

    removeStaker(staker: string, overrides?: CallOverrides): Promise<void>

    requirePastChildConfirmDeadline(overrides?: CallOverrides): Promise<void>

    requirePastDeadline(overrides?: CallOverrides): Promise<void>

    stakerCount(overrides?: CallOverrides): Promise<BigNumber>

    stakers(staker: string, overrides?: CallOverrides): Promise<boolean>

    stateHash(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    addStaker(
      staker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    challengeHash(overrides?: CallOverrides): Promise<BigNumber>

    childCreated(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    confirmData(overrides?: CallOverrides): Promise<BigNumber>

    deadlineBlock(overrides?: CallOverrides): Promise<BigNumber>

    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    firstChildBlock(overrides?: CallOverrides): Promise<BigNumber>

    initialize(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    latestChildNumber(overrides?: CallOverrides): Promise<BigNumber>

    newChildConfirmDeadline(
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    noChildConfirmedBeforeBlock(overrides?: CallOverrides): Promise<BigNumber>

    prev(overrides?: CallOverrides): Promise<BigNumber>

    removeStaker(
      staker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    requirePastChildConfirmDeadline(
      overrides?: CallOverrides
    ): Promise<BigNumber>

    requirePastDeadline(overrides?: CallOverrides): Promise<BigNumber>

    stakerCount(overrides?: CallOverrides): Promise<BigNumber>

    stakers(staker: string, overrides?: CallOverrides): Promise<BigNumber>

    stateHash(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    addStaker(
      staker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    challengeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>

    childCreated(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    confirmData(overrides?: CallOverrides): Promise<PopulatedTransaction>

    deadlineBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    firstChildBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initialize(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    latestChildNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>

    newChildConfirmDeadline(
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    noChildConfirmedBeforeBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    prev(overrides?: CallOverrides): Promise<PopulatedTransaction>

    removeStaker(
      staker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    requirePastChildConfirmDeadline(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    requirePastDeadline(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    stakerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>

    stakers(
      staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    stateHash(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}