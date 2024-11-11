using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//ballot for empty, unfilled ballot: does not collect vote data
//author: Ada Aljabiri dated 11/11/2024
namespace VotingSystem.Models
{
    internal class Ballot
    {
        public int ElectionID { get; set; }
        public List<Candidate> Candidates { get; set; }

        public Ballot(int electionID, List<Candidate> candidates) {
            ElectionID = electionID;
            Candidates = candidates;
        }
     
    }
}
