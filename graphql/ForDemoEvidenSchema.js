import { gql } from 'apollo-server';

const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Report: [Premium_Report]
    Premium_Adjustment: [Premium_Adjustment]
    Single_Premium_Certificate_Return: [Single_Premium_Certificate_Return]
  }

  type Premium_Report {
    id: ID!
    Premium_Report: [Premium_Report]
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
    Premium_Adjustment: [Premium_Adjustment]
  }

  type Single_Premium_Certificate_Return {
    id: ID!
    Single_Premium_Certificate_Return: [Single_Premium_Certificate_Return]
  }

  input CreditUnionInput {
    id: ID
    Contract_Number: String
    Credit_Union_Name: String
    State: String
  }

  type Query {
    creditUnions: [Credit_Union]
  }

  type Mutation {
    searchCreditUnion(input: CreditUnionInput!): [Credit_Union]
  }
`;

export default typeDefs;