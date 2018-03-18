import axios from "axios";

// The getArticles method retrieves articles from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getArticles: function(query) {
  	console.log("query in getArticles: ", query);
    return axios.get("/api/articles", { params: { q: query } });
  },

  getSavedArticles: function() {
    return axios.get("/api/saved");
  },

  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  },

  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  }
};
