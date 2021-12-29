// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SalutePortal {
    uint256 totalSalutes;

    constructor() {
        console.log("THIS IS SMART CONTRACT");
    }
    
    function salute() public {
        totalSalutes += 1;
        console.log("%s has saluted!", msg.sender);
    }

    function getTotalSalutes() public view returns (uint256) {
        console.log("We have %d total salutes!", totalSalutes);
        return totalSalutes;
    }

}