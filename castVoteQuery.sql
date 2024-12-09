DROP TABLE IF EXISTS CastVotes;
DROP TABLE IF EXISTS Candidates;
DROP TABLE IF EXISTS Election;
DROP TABLE IF EXISTS Voter;

-- CONTAINS ALL USERS REGISTERED TO VOTE
CREATE TABLE Voter(
	VoterID int IDENTITY(1,1) PRIMARY KEY,
	FirstName varchar(32) NOT NULL,
	LastName varchar(32) NOT NULL,
	VoterNum char(12) NOT NULL,
	Username varchar(16) NOT NULL,
	VoterPassword varchar(32) NOT NULL,
	VoterAddress varchar(64) NOT NULL,
	ZipCode char(5) NOT NULL,
	Birthdate date NOT NULL
)

-- CONTAINS ALL CURRENT ELECTIONS
CREATE TABLE Election(
	ElectionID int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	VoteName varchar(32) NOT NULL
)

-- HOLDS ALL CANDIDATES AND ISSUES FOR ALL ELECTIONS
CREATE TABLE Candidates(
	CandidateID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	ElectionID int REFERENCES Election(ElectionID) NOT NULL,
	CanName varchar(32) NOT NULL,
	TypVote int NOT NULL
	-- PRIMARY KEY (CandidateID, ElectionID)
)

-- CONTAINS ALL VOTES CAST FOR ALL ELECTIONS
CREATE TABLE CastVotes(
	VoterID int REFERENCES Voter(VoterID) NOT NULL,
	ElectionID int REFERENCES Election(ElectionID) NOT NULL,
	CandidateID int REFERENCES Candidates(CandidateID) NOT NULL,
	PRIMARY KEY (VoterID, ElectionID)
)

insert into Voter (FirstName, LastName, VoterNum, Username, VoterPassword, VoterAddress, ZipCode, Birthdate) values
	('Jo', 'Brand', '000000000001', 'zramazing', 'password', '1234 Ave.', '68676', '2003-11-06'),
	('Sarah', 'Kendall', '000000000002', 'rcamelin', 'password', '1234 St.', '68658', '2002-11-26'),
	('Jamali', 'Maddox', '000000000003', 'aaljabiri', 'password23', '1234 Rd.', '68607', '2003-12-12');

insert into Election (VoteName) values 
	('Mayor'),
	('City Council'),
	('Board of Education');

insert into Candidates (ElectionID, CanName, TypVote) values
	('1', 'Joe Lycett', 1),
	('1', 'James Acaster', 1),
	('1', 'Rose Matafeo', 1),
	('2', 'Phil Wang', 1),
	('2', 'Sian Gibson', 1),
	('2', 'Lolly Adifope', 1),
	('2', 'Joe Thomas', 1),
	('2', 'Alex Horne', 1),
	('2', 'Richard Osman', 1),
	('2', 'Rob Beckett', 1),
	('3', 'Greg Davies', 1),
	('3', 'Bob Mortimer', 1),
	('3', 'Liza Tarbuck', 1),
	('3', 'Ed Gamble', 1),
	('3', 'Johnny Vegas', 1),
	('3', 'Mike Wozniak', 1),
	('3', 'Victoria Corren-Mitchell', 1);

INSERT INTO CastVotes (VoterID, ElectionID, CandidateID) values 
	(2, 3, 14),
	(1, 2, 8),
	(3, 1, 1);

-- SELECT * FROM Voter;
-- SELECT * FROM Election;
-- SELECT * FROM Candidates;
-- SELECT * FROM CastVotes;
-- SELECT FirstName, LastName, Voter.VoterID, CandidateID, ElectionID FROM CastVotes INNER JOIN Voter ON Voter.VoterID=CastVotes.VoterID;
-- SELECT CanName, CandidateID, VoteName, Election.ElectionID FROM Candidates INNER JOIN	Election on Election.ElectionID=Candidates.ElectionID;
-- select * from Candidates where TypVote = 2;