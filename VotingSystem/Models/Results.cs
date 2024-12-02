using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VotingSystem.Models;
// name: Ada Aljabiri dated: 11/11/2024
// Not a model class   
namespace VotingSystem.Models
{
    public class Results
    {
        // method that counts the votes from a list of CastBallot objects
        public Dictionary<int, int> CountVotes(List<VotingSystem.Models.CastBallot> castBallots)
        {
            // storage for each candidate's vote count
            Dictionary<int, int> voteCounts = new Dictionary<int, int>();

            // iterate over each ballot to count votes
            foreach (var ballot in castBallots)
            {
                foreach (var candidateID in ballot.SelectedCandidateIDs)
                {
                    if (voteCounts.ContainsKey(candidateID))
                    {
                        voteCounts[candidateID]++;
                    }
                    else // adds candidate's ID with it's  vote
                    {
                        voteCounts[candidateID] = 1;
                    }
                }
            }

            return voteCounts;  //returns a dictionary with candidateID as the key and vote count as the value
        }
    }
}
