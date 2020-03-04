
const express = require('express');
let app = express();

const { Client } = require('pg')
const client = new Client({
  user: "postgres",
  password: "khalildihya",
  host: "localhost",
  port: 5432,
  database: "postgres"

})

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");

  next();
})

app.listen(3000, () => {
  console.log('server is running')
})

var resultats;
client.connect()
  .then(() => console.log("Connected successfuly"))
  //Quels sont les projet en incubation ensemble a un instant t 
  //Quels sont toutes les livraisons prévues d'une application donnée, avec quelles dépendances
 /* .then(() => client.query(`
                            select * from V_PROJET_COULOIR_APPLICATION 
  `))
  .then(results => {



    app.get('/projet_couloir_appli', function (req, res) {

      res.send(results.rows);
    })
    //tous les projets avec une même date de MEP 
  })
  */.then(() => client.query(`
                              select DISTINCT P2.* from projet_lot P1, projet_lot P2
                              where P1.id_projet_lot != P2.id_projet_lot 
                              and P1.date_mep = P2.date_mep 
                              
                               `))
  .then(results => {
    resultats = results;
   


    let data = results.rows;
    data.forEach(el => {
      //console.log('elements: ', el)
      let id_projet_lot = el.id_projet_lot;
      let code_projet = el.code_projet;
      let libelle = el.libelle;

      let libelle_long = el.libelle_long;
      let date_mep = el.date_mep;
      let date_deb_incubation = el.date_livraison;
      let date_fin_incubation = el.date_integration;

      let date_parse = date_mep.toString().split('T')
      let date_aux_mep = date_parse.toString().split(' ')
      let dateMepParsed = date_aux_mep[2] + " " + date_aux_mep[1] + " " + date_aux_mep[3]

      let date_deb_incub_parse = date_deb_incubation.toString().split('T')
      let date_aux_deb_incub = date_deb_incub_parse.toString().split(' ')
      let datedebIncubParsed = date_aux_deb_incub[2] + " " + date_aux_deb_incub[1] + " " + date_aux_deb_incub[3]


      let date_fin_incub_parse = date_fin_incubation.toString().split('T')
      let date_aux_fin_incub = date_fin_incub_parse.toString().split(' ')
      let datefinIncubParsed = date_aux_fin_incub[2] + " " + date_aux_fin_incub[1] + " " + date_aux_fin_incub[3]

    })

    // projets ensemble en incubation sur un même couloir et au même moment ont des adhérences communes
  })
  .catch(e => console.log(e))
  .finally(() => client.end())
  
  app.get('/projet_mm_date_mep', function (req, res) {
    res.send(resultats.rows);
  })
  /*
  .then(() => client.query(`
                              select distinct V1.ID_PROJET_LOT, V1.CODE_PROJET, V1.DATE_MEP, V1.ID_COULOIR,
                              V1.NM_CLR, V1.FLAG_INSTALL, V1.DATE_DB_INCUB,
                              V1.DATE_FN_INCUB, V1.ID_APP, V1.NOM_APP , V2.ID_PROJET_LOT, V2.CODE_PROJET, V2.DATE_DB_INCUB, V2.DATE_FN_INCUB
                              from V_PROJET_COULOIR_APPLI V1 
                              LEFT OUTER JOIN
                              V_PROJET_COULOIR_APPLI V2
                              on (V1.ID_PROJET_LOT != V2.ID_PROJET_LOT)
                              where 
                              V1.ID_APP= V2.ID_APP
                              and V1.ID_COULOIR = V2.ID_COULOIR
                              --AND V1.NM_CLR = 'CLEA1'
                              AND V1.DATE_DB_INCUB > V2.DATE_DB_INCUB
                              AND V1.DATE_DB_INCUB < V2.DATE_FN_INCUB
      `))
  .then(results => {
    app.get('/projet_ensemble_mm_couloir_mm_moment_adherences_communes', function (req, res) {
      res.send(results.rows);
    })
    // projets ensemble en incubation sur un même couloir et au même moment

  }).then(() => client.query(`
                              select distinct V1.ID_PROJET_LOT, V1.CODE_PROJET, V1.DATE_MEP, V1.ID_COULOIR,
                              V1.NM_CLR, V1.FLAG_INSTALL, V1.DATE_DB_INCUB,
                              V1.DATE_FN_INCUB, V1.ID_APP, V1.NOM_APP , V2.ID_PROJET_LOT, V2.CODE_PROJET, V2.DATE_DB_INCUB, V2.DATE_FN_INCUB
                              from V_PROJET_COULOIR_APPLI V1
                              LEFT OUTER JOIN
                              V_PROJET_COULOIR_APPLI V2
                              on (V1.ID_PROJET_LOT != V2.ID_PROJET_LOT)
                              where 1=1
                              --V1.ID_APP = V2.ID_APP
                              and V1.ID_COULOIR = V2.ID_COULOIR
                              AND V1.NM_CLR = 'CLEA1'
                              AND V1.DATE_DB_INCUB > V2.DATE_DB_INCUB
                              AND V1.DATE_DB_INCUB < V2.DATE_FN_INCUB

      `))
  .then(results => {
    app.get('/projet_ensemble_mm_couloir_mm_moment', function (req, res) {
      res.send(results.rows);
    })
    // projets ensemble en incubation ont des adhérences sur des versions différentes des mêmes applis 
  }).then(() => client.query(`    
                              select distinct v.id_projet_lot, v.code_projet, v.date_mep, v.id_couloir, v.nm_clr, v.flag_install, v.date_db_incub, v.date_fn_incub, v.id_app, v.nom_app
                              from v_projet_couloir_application v
                              left join v_projet_couloir_application v2 on v2.id_projet_lot != v.id_projet_lot
                              where v.id_app = v2.id_app
                              and v.id_couloir = v2.id_couloir
                              and v.date_mep = v2.date_mep
  `))
  .then(results => {
    app.get('/projet_ensemble_incubatio_adherences_versions_differentes', function (req, res) {
      res.send(results.rows);
    })
  })
  //chart couloir
  .then(() => client.query(`    
                            select  nm_clr, count(  id_couloir) as nombre from (          
                            select Distinct id_projet_lot, code_projet,id_couloir, nm_clr 
                            from v_projet_couloir_application
                            where nm_clr like 'C%'
                            order by id_projet_lot ) as R
                            group by nm_clr   
  `))
  .then(results => {
    app.get('/chart', function (req, res) {
      res.send(results.rows);
    })
  })



*/