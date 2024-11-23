using System;
using VotingSystem.Models;
namespace VotingSystem.Models
{
    public class Candidate
    {
        public int CandidateId { get; set; }  // Unique identifier for the candidate
        public string Name { get; set; }      // Full name of the candidate
        public string Party { get; set; }     // Political party or affiliation (if applicable)
        public string ElectionId { get; set; } // The election this candidate is part of
        public string Description { get; set; } // Brief description of the candidate or campaign

        // Constructor
        public Candidate()
        {
        }

        public Candidate(int candidateId, string name, string party, string electionId, string description = "")
        {
            CandidateId = candidateId;
            Name = name;
            Party = party;
            ElectionId = electionId;
            Description = description;
        }
    }
}
