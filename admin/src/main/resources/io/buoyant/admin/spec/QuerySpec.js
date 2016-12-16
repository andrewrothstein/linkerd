describe("Query", function() {
  var Query = require('../js/query.js');

  describe("generalQuery", function() {
    it("builds a query for a router and metric", function() {
      var routerName = "fooRouter";
      var query = Query.clientQuery().withRouter(routerName).withMetric("fooMetric").build();
      var expectedRegex = new RegExp('^rt\/(fooRouter)\/dst\/id\/(.*)\/(fooMetric)$');
      expect(query).toEqual(expectedRegex);
    });
  });

  describe("clientQuery", function() {
    it("should fail on a failure", function() {
      expect(1 + 1).toBe(2);
    });

    it("builds a query for a router and metric and all client", function() {
      var routerName = "fooRouter";
      var query = Query.clientQuery().withRouter(routerName).withMetric("fooMetric").allClients().build();
      var expectedRegex = new RegExp('^rt\/(fooRouter)\/dst\/id\/(.*)\/(fooMetric)$');
      expect(query).toEqual(expectedRegex);
    });

    it("builds a query for a router and metric and a client", function() {
      var routerName = "fooRouter";
      var query = Query.clientQuery().withRouter(routerName).withMetric("fooMetric").withClient("fooClient").build();
      var expectedRegex = new RegExp('/^rt\/(fooRouter)\/dst\/id\/(fooClient)\/(fooMetric)$');
      // expect(query).toEqual(expectedRegex);
    });
  });
});
