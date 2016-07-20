"use strict";
$(function() {
  var $results = $('#results');
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    var q = $('#searchBox').val();
    $.getJSON("https://en.wikipedia.org/w/api.php?callback=?", {
        srsearch: q,
        action: "query",
        list: "search",
        format: "json"
      },
      function(data) {
        $results.empty();
        $.each(data.query.search, function(i, item) {
          $results.append('<a href="https://en.wikipedia.org/wiki/' + item.title + '"><div class="media"><div class="media-body"><h4 class="media-heading">' + item.title + '</h4></a>' + item.snippet + '</div></div>');
        });
      });
  });
})