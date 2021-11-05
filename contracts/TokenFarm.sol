// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './DappToken';
import './DaiToken';


contract TokenFarm {
    string public name = "Dapp Token Form";
    DappToken public dappToken;
    DaiToken public daiToken;

    constructor (DappToken _dappToken, DaiToken _daiToken) public {
        dappToken = _dappToken;
        daiToken = _daiToken;
    }
    
}