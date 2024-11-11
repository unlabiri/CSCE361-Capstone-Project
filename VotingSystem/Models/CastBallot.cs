using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//captures vote data, deals with not allowing duplicate votes
//author: Ada Aljabiri dated 11/11/2024
namespace VotingSystem.Models
{
    internal class CastBallot
    {
        public int VoterID { get; set; }
        public int ElectionID { get; set; }
        public DateTime SubmissionDate { get; set; }
        public List<int> SelectedCandidateIDs { get; set; }

        public CastBallot(int voterID, int electionID)
        {
            VoterID = voterID;
            ElectionID = electionID;
            SubmissionDate = DateTime.Now;
            SelectedCandidateIDs = new List<int>();
    }
        public bool CastVote(int candidateID)
        {
            if (SelectedCandidateIDs.Contains(candidateID))
            {
                return false;  // returns false if candidate was already voted for
            }
            
            // unique votes get appended
            SelectedCandidateIDs.Add(candidateID);
            return true;
        }
    }
}
