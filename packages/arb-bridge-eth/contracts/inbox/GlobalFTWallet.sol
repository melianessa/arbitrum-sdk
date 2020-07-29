// SPDX-License-Identifier: Apache-2.0

/*
 * Copyright 2019-2020, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

pragma solidity ^0.5.11;

import "../interfaces/IERC20.sol";
import "./FTRecords.sol";

contract GlobalFTWallet is FTRecords {
    function ownedERC20s(address _owner)
        external
        view
        returns (address[] memory)
    {
        UserFTWallet storage wallet = ftWallets[_owner];
        address[] memory addresses = new address[](wallet.ftList.length);
        uint256 addressCount = addresses.length;
        for (uint256 i = 0; i < addressCount; i++) {
            addresses[i] = wallet.ftList[i].contractAddress;
        }
        return addresses;
    }

    function withdrawERC20(address _tokenContract) external {
        uint256 value = getERC20Balance(_tokenContract, msg.sender);
        require(
            removeToken(msg.sender, _tokenContract, value),
            "Wallet doesn't own sufficient balance of token"
        );
        IERC20(_tokenContract).transfer(msg.sender, value);
    }

    function depositERC20(
        address _tokenContract,
        address _destination,
        uint256 _value
    ) internal {
        IERC20(_tokenContract).transferFrom(msg.sender, address(this), _value);
        addToken(_destination, _tokenContract, _value);
    }

    function transferERC20(
        address _from,
        address _to,
        address _tokenContract,
        uint256 _value
    ) internal returns (bool) {
        if (!removeToken(_from, _tokenContract, _value)) {
            return false;
        }
        addToken(_to, _tokenContract, _value);
        return true;
    }
}
