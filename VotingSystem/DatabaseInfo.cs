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
        public static bool AddNewUser(int userId, string firstName, string lastName, DateTime birthday, DateTime registrationDate, string phoneNumber, string username, string password, string zipCode)
        {
            return false;
    }

        //allows a user to be deleted, will take the userID as argument
        public static bool DeleteUser(int userId, string firstName, string username)
        {
            return false;
        }

        //returns the name of a user from the database, will take userID as an argument

        public static string GetName(int userId)
        {
            return null;
        }

        //returns the user's voter ID from the database, will take userID as an argument

        public static int GetVoterId(int userId)
        {
            return 0; 
        }
    }


}

