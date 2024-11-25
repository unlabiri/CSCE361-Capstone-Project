using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Author: Zephyr Rose
//Created 11/7/24

namespace VotingSystem
{
    internal class GetDatabaseInfo
    {

        //allows a new user to be added, will eventually take many arguments
        public static bool AddNewUser(int userId, string firstName, string lastName, DateTime birthday, string phoneNumber, string username, string password, string zipCode, string voterVerificationNumber)
        {
            return false;
        }

        //allows a user to be deleted, will take the userID as argument
        public static bool DeleteUser(int userId, string username)
        {
            return false;
        }

        //returns the name of a user from the database, will take userID as an argument

        public static string GetName(int userId, string userName)
        {
            return null;
        }

        //returns the user's voter ID from the database, will take userID as an argument

        public static int GetVoterId(int userId, string userName)
        {
            return 0; 
        }

        //returns the voters status for a specific vote
        public static bool GetVoteStatus(int userId, string voterVerificationNumber, int ElectionId)
        {
            return false; 
        }

        //returns all current elections electionIDs, so that the info for each election
        //can be taken from this list of IDs
        public static List<int> GetAllElections()
        {
            return null;
        }

        //returns info for one election based on an election ID
        //TODO: change return type 
        public static bool GetElectionInfo(int ElectionId)
        {
            return false;
        }
    }


}

