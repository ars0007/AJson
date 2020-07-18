module.exports.connect = (mongoose) => {
 return mongoose.connect(
    "mongodb+srv://admin:Saubhik123@ajson-mfb65.mongodb.net/ajson?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
};
