```graphql
# schema-codegen-start
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
# schema-codegen-end
```

```javascript
// resolver-codegen-start
const resolvers = {
  Query: {
    creditUnions: () => {
      return [
        {
          id: '1',
          Contract_Number: 'CU001',
          Credit_Union_Name: 'Credit Union A',
          Premium_Report: [],
          Premium_Adjustment: [],
          Single_Premium_Certificate_Return: []
        },
        {
          id: '2',
          Contract_Number: 'CU002',
          Credit_Union_Name: 'Credit Union B',
          Premium_Report: [],
          Premium_Adjustment: [],
          Single_Premium_Certificate_Return: []
        }
      ];
    }
  },
  Mutation: {
    searchCreditUnion: (_, { input }) => {
      const { Contract_Number, Credit_Union_Name, State } = input;
      // Mock data retrieval logic
      const mockData = [
        {
          id: '1',
          Contract_Number: 'CU001',
          Credit_Union_Name: 'Credit Union A',
          State: 'CA',
          Premium_Report: [],
          Premium_Adjustment: [],
          Single_Premium_Certificate_Return: []
        },
        {
          id: '2',
          Contract_Number: 'CU002',
          Credit_Union_Name: 'Credit Union B',
          State: 'NY',
          Premium_Report: [],
          Premium_Adjustment: [],
          Single_Premium_Certificate_Return: []
        }
      ];

      return mockData.filter(creditUnion => {
        return (
          (!Contract_Number || creditUnion.Contract_Number === Contract_Number) &&
          (!Credit_Union_Name || creditUnion.Credit_Union_Name === Credit_Union_Name) &&
          (!State || creditUnion.State === State)
        );
      });
    }
  }
};
// resolver-codegen-end
```