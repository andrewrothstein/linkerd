describe("Query", function() {
  var Query = require('../js/query.js');

  describe("Query", function() {

    it("should fail on a failure", function() {
      expect(1 + 1).toBe(2);
    });

    it("builds a query for a router and metric", function() {
      var routerName = "fooRouter";
      var query = Query.clientQuery().withRouter(routerName).withMetric("fooMetric").build();
      var expectedRegex = new RegExp('^rt\/(fooRouter)\/dst\/id\/(.*)\/(fooMetric)$');
      expect(query).toEqual(expectedRegex);
    })
  });
});
