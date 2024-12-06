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
//

export default resolvers;