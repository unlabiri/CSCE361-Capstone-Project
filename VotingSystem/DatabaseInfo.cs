﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq.Expressions;
//using System.Data.SqlClient;

//Author: Zephyr Rose
//Created 11/7/24

namespace VotingSystem
{
    internal class DatabaseInfo
    {
        public static void initDB()
        {
            Debug.WriteLine("inside initDB");
            try
            {
                SqlConnection conn = new SqlConnection();
                conn.ConnectionString =
              "Data Source=ZEPHYRLAPTOP\\ZRAMAZINGSQL;" +
              "Initial Catalog=VotingSystem;" +
              "User id=sa;" +
              "Password=CSCE361TEST;" +
              "TrustServerCertificate =True;";
                conn.Open();
                Debug.WriteLine("connection success!!");
                List<Voter> voterList = new List<Voter>(155); 
                voterList = initUsers(conn);
                foreach (Voter voter in voterList)
                {
                    Debug.Write("Voter: ");
                    Debug.Write(voter.FirstName);
                    Debug.Write(voter.LastName);
                    Debug.WriteLine(voter.Username);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("error connecting to server");
                Debug.WriteLine(ex.Message);
            }
        }


        public static List<Voter> initUsers(SqlConnection conn)
        {
            List<Voter> voterList = new List<Voter>(155);
            using (SqlCommand command = new SqlCommand("SELECT * FROM VOTER", conn))
            using (SqlDataReader reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    //Debug.WriteLine("{0} {1} {2}", reader.GetInt32(3), reader.GetString(4), reader.GetString(5));
                    Voter voter = new Voter(reader.GetInt32(0), reader.GetString(1), reader.GetString(2), reader.GetString(8), reader.GetString(7), reader.GetString(4), reader.GetString(5), reader.GetString(6), reader.GetString(3));
                    voterList.Add(voter);
                }
            }
            return voterList;
        }
        
        
        
        
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

