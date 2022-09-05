-- a. Create an entity relationship diagram to describe the query. e the query. It should include entities, 
-- its relati It should include entities, its relationships, onships,
-- primary keys, and data ty  primary keys, and data types.

-- tables
-- Table: T_FUNCTION
CREATE TABLE "T_FUNCTION" (
    "FunctionID" int  NOT NULL,
    "FunctionDescription" varchar(100)  NOT NULL,
    CONSTRAINT "T_FUNCTION_pk" PRIMARY KEY  ("FunctionID")
);

-- Table: T_TR_INBOX
CREATE TABLE "T_TR_INBOX" (
    "Inbox_ID" int  NOT NULL,
    "TS_ReceivedExchange" varchar(100)  NOT NULL,
    CONSTRAINT "T_TR_INBOX_pk" PRIMARY KEY  ("Inbox_ID")
);

-- Table: T_TSERVICE_REQUEST
CREATE TABLE "T_TSERVICE_REQUEST" (
    "SR_ID" int  NOT NULL,
    "Requestor_Mail" varchar(100)  NOT NULL,
    "Requestor_Name" varchar(100)  NOT NULL,
    "TS_Created" timestamp  NOT NULL,
    "TS_Assigned" timestamp  NOT NULL,
    "TS_Completed" timestamp  NOT NULL,
    "TS_Closed" timestamp  NOT NULL,
    "SRStatus" varchar(100)  NOT NULL,
    "CustomerName" varchar(100)  NOT NULL,
    "CBC_ID" int  NOT NULL,
    "ExpectedDurationHH" timestamp  NOT NULL,
    "TS_TierCommunicated" timestamp  NOT NULL,
    "TierCommunicator" varchar(100)  NOT NULL,
    "SRCompletionCommunicator" varchar(100)  NOT NULL,
    "Country" varchar(100)  NOT NULL,
    "Area" varchar(100)  NOT NULL,
    "DealOwnerID" int  NOT NULL,
    "DealOwnerFunction" int  NOT NULL,
    "InboxID" int  NOT NULL,
    CONSTRAINT "T_TSERVICE_REQUEST_pk" PRIMARY KEY  ("SR_ID")
);

-- Table: T_TSR_CIC_INFO
CREATE TABLE "T_TSR_CIC_INFO" (
    "TSR_ID" int  NOT NULL,
    "Field_XName" varchar(100)  NOT NULL,
    "SR_ID" int  NOT NULL
);

-- Table: T_USERS
CREATE TABLE "T_USERS" (
    "NT_User" int  NOT NULL,
    "Name" int  NOT NULL,
    CONSTRAINT "T_USERS_pk" PRIMARY KEY  ("NT_User")
);

-- foreign keys
-- Reference: T_TSERVICE_REQUEST_T_FUNCTION (table: T_TSERVICE_REQUEST)
ALTER TABLE "T_TSERVICE_REQUEST" ADD CONSTRAINT "T_TSERVICE_REQUEST_T_FUNCTION"
    FOREIGN KEY ("DealOwnerFunction")
    REFERENCES "T_FUNCTION" ("FunctionID");

-- Reference: T_TSERVICE_REQUEST_T_TR_INBOX (table: T_TSERVICE_REQUEST)
ALTER TABLE "T_TSERVICE_REQUEST" ADD CONSTRAINT "T_TSERVICE_REQUEST_T_TR_INBOX"
    FOREIGN KEY ("InboxID")
    REFERENCES "T_TR_INBOX" ("Inbox_ID");

-- Reference: T_TSERVICE_REQUEST_T_USERS (table: T_TSERVICE_REQUEST)
ALTER TABLE "T_TSERVICE_REQUEST" ADD CONSTRAINT "T_TSERVICE_REQUEST_T_USERS"
    FOREIGN KEY ("DealOwnerID")
    REFERENCES "T_USERS" ("NT_User");

-- Reference: T_TSR_CIC_INFO_T_TSERVICE_REQUEST (table: T_TSR_CIC_INFO)
ALTER TABLE "T_TSR_CIC_INFO" ADD CONSTRAINT "T_TSR_CIC_INFO_T_TSERVICE_REQUEST"
    FOREIGN KEY ("SR_ID")
    REFERENCES "T_TSERVICE_REQUEST" ("SR_ID");

-- End of file.



--  b. What is the result if we change all relations to LEFT JOIN instead of INNER JOIN?

/* 
  Changing the inner join to the left join would fetch the data that matches the query with its field and would also 
  fetch all the data from the T_TSERVICE_REQUEST table that doesn't match the query, but it'll get it as NULL fields
*/


-- c. In your own words, what is the operation performed by the function F_FUNC?

/* 
  F_FUNC is a function that calculates the difference in business days between two days passed to the function, it 
  subtracts the days of the weekend. In addition, it evaluates if the start or end day corresponds to a day of the 
  weekend to subtract them from the final result
*/