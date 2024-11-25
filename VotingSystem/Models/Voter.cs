using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VotingSystem.Models;
// author: Ada Aljabiri dated 11/10/2024

namespace VotingSystem.Models
{
    internal class Voter
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthday { get; set; }
        public string PhoneNumber { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string ZipCode { get; set; }
        public string VoterVerificationNumber { get; set; }

        //initializes a voter Object
        public Voter(int userId, string firstName, string lastName, DateTime birthday, string phoneNumber, string username, string password, string zipCode, string voterVerificationNumber) {
            UserId = userId;
            FirstName = firstName;
            LastName = lastName;
            Birthday = birthday;
            PhoneNumber = phoneNumber;
            Username = username;
            Password = password;
            ZipCode = zipCode;
            VoterVerificationNumber = voterVerificationNumber;
        }
    }
}
