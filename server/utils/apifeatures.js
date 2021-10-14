class ApiFeatures {
  constructor(query, quertStr) {
    this.query = query;
    this.quertStr = quertStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
      console.log(keyword)
      
      this.query=this.query.find({...keyword});
      return this;
  }
}

module.exports = ApiFeatures;
