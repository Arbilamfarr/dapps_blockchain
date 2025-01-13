// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract Election {
    enum State {
        NotStarted,
        InProgress,
        Ended
    }

    struct Candidate {
        uint256 id;
        address candidateAddress;
        uint256 voteCount;
    }

    address public owner;
    State public electionState;

    struct Voter {
        uint256 id;
        bool isVoter;
    }

    mapping(uint256 => Candidate) candidates;
    mapping(address => bool) voted;

    mapping(address => Voter) voters;

    uint256 public candidatesCount = 0;

    uint256 public votersCount = 0;

    constructor() {
        owner = msg.sender;
        electionState = State.NotStarted;
    }

    event Voted(uint256 indexed _candidateId);

    function startElection() public {
        require(msg.sender == owner);
        require(electionState == State.NotStarted);
        electionState = State.InProgress;
    }

    function endElection() public {
        require(msg.sender == owner);
        require(electionState == State.InProgress);
        electionState = State.Ended;
    }

    function addCandidate(address _address, uint _candidateId) public {
        require(owner == msg.sender, "Only owner can add candidates");
        require(
            electionState == State.NotStarted,
            "Election has already started"
        );

        candidates[_candidateId] = Candidate(_candidateId, _address, 0);
        candidatesCount++;
    }

    function addVoter(address _voter, uint _voterId) public {
        require(owner == msg.sender, "Only owner can add voter");
        require(!voters[_voter].isVoter, "Voter already added");
        require(
            electionState == State.NotStarted,
            "Voter can't be added after election started"
        );

        voters[_voter].isVoter = true;
        voters[_voter].id = _voterId;
    }

    function getRole(address _current) public view returns (uint256) {
        if (owner == _current) {
            return 1;
        } else if (voters[_current].isVoter) {
            return 2;
        } else {
            return 3;
        }
    }

    function vote(uint256 _candidateId) public {
        require(
            electionState == State.InProgress,
            "Election is not in progress"
        );
        require(voters[msg.sender].isVoter, "Non authorised user cannot vote");
        require(!voted[msg.sender], "You have already voted");

        candidates[_candidateId].voteCount++;
        voted[msg.sender] = true;

        emit Voted(_candidateId);
    }

    function getCandidateDetails(
        uint256 _candidateId
    ) public view returns (address, uint256) {
        return (
            candidates[_candidateId].candidateAddress,
            candidates[_candidateId].voteCount
        );
    }
}
