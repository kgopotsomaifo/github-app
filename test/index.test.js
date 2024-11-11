let expect = require("chai").expect;
let request = require("request");

//Testing with a given Github account
describe("In the case of a correct Github user: ", () => {
  it("It should return an object with the correct Github user", function (done) {
    this.timeout(5000);
    //This user on Github
    request(
      "http://localhost:3001/api/search/kgopotsomaifo",
      (error, response, body) => {
        expect(body).to.equal(
          '{"username":"kgopotsomaifo","profile_picture":"https://avatars.githubusercontent.com/u/110554055?v=4","profile_url":"https://github.com/kgopotsomaifo","bio":null,"recent_repos":[{"name":"Data-Analytics","description":"Python scripts for data analysis","created_at":"2024-07-04T11:43:28Z","updated_at":"2024-07-04T11:45:26Z","commits":[{"message":"Add files via upload"}]},{"name":"J-Query-Animations","description":"Webpage which animates when prompted","created_at":"2024-07-04T17:14:00Z","updated_at":"2024-07-04T17:36:38Z","commits":[{"message":"Update README.md"},{"message":"Delete CNAME"},{"message":"Update CNAME"},{"message":"Update CNAME"},{"message":"Create CNAME"}]},{"name":"JavaScript-Arrays-functions-and-string-handling","description":"Caesar cypher","created_at":"2024-07-04T15:21:53Z","updated_at":"2024-07-04T15:25:08Z","commits":[{"message":"Update README.md"},{"message":"Add files via upload"},{"message":"Update README.md"},{"message":"Initial commit"}]},{"name":"JavaScript-fundamentals","description":"a simple but dynamic website about music","created_at":"2024-07-05T12:11:28Z","updated_at":"2024-07-17T14:17:04Z","commits":[{"message":"Update README.md"},{"message":"Delete .vscode/placeholder"},{"message":"Delete styles/placeholder"},{"message":"Add files via upload"},{"message":"Add files via upload"}]},{"name":"JavaScript-Variables-and-control-structures","description":"HyperionDev Capstone project","created_at":"2024-07-04T14:50:30Z","updated_at":"2024-07-04T14:57:28Z","commits":[{"message":"Update README.md"},{"message":"Update README.md"},{"message":"Update README.md"},{"message":"Add files via upload"},{"message":"Initial commit"}]}]}'
        );
        done();
      }
    );
  });
});
