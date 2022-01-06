pragma solidity ^0.4.17;

contract Index {
    string public message;

    constructor(string initMessage) public {
        message = initMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}