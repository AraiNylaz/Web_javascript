/*let exoplanetsTable = [ 
  { uniqueName : "TRAPPIST-1-d", hClass : "Mésoplanète", discoveryYear : 2016 },
  { uniqueName : "KOI-1686.01", hClass : "Mésoplanète", discoveryYear : 2011 },
  { uniqueName : "LHS 1723 b", hClass : "Mésoplanète", discoveryYear : 2017 },
];*/

const db = require('../models/db_conf');



module.exports.list = () => db.prepare("SELECT * FROM EXOPLANETS").all();

module.exports.save = (data) => {
  //exoplanetsTable.push(data);
  const stmt = db.prepare('INSERT INTO EXOPLANETS(unique_name, hclass, discovery_year) VALUES (?, ?, ?)');
  const info = stmt.run(data.uniqueName, data.hClass, data.discoveryYear);
  console.log("exoplanet model save" + info.changes);
};

module.exports.search = (uniqueName) => {
  // Initialiser le tableau à vide sinon -> appel push -> cannot read property of null
  const exoplanetList = [];
  for (exoplanet of exoplanetsTable) {
    if (exoplanet.uniqueName.toUpperCase().startsWith(uniqueName.toUpperCase())) {
      console.log("trouvé " + JSON.stringify(exoplanet));
      exoplanetList.push(exoplanet)
    }
  }
  return exoplanetList;
};