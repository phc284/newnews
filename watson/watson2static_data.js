const Continents = {
  nAmerica: ['AI','AG','AW','BS','BB','BZ','BM','BQ','VG','CA','KY','CR','CU',
    'CW','DM','DO','SV','GL','GD','GP','GT','HT','HN','JM','MQ','MX','MS','NI',
    'PA','PR','KN','LC','PM','VC','SX','TT','TC','US','VI'].join('|'),
  sAmerica: ['AR','BO','BR','CL','CO','EC','FK','GF','GY','PY','PE','GS','SR',
    'UY','VE'].join('|'),
  Europe: ['AX','AL','AD','AM','AT','AZ','BE','BA','BG','HR','CY','CZ',
    'DK','EE','FO','FI','FR','DE','GE','GI','GR','HU','GG','IS','IE','IM','IT',
    'JE','LV','LI','LT','LU','MK','MT','MD','MC','ME','NL','NO','PL','PT','RO',
    'RU','SM','RS','SK','SI','ES','SE','SJ','CH','UA','TR','GB','VA'].join('|'),
  Asia: ['AF','BH','BD','BT','IO','BN','KH','CN','HK','IN','ID','IR','IQ',
    'IL','JP','JO','KZ','KW','KG','LA','LB','MO','MY','MV','MN','MM','NP','KP',
    'OM','PK','PS','PH','QA','SA','SG','KR','LK','SY','TW','TJ','TH','TL','TM',
    'AE','UZ','VN','YE'].join('|'),
  Africa: [ 'DZ', 'AO', 'BJ', 'BW', 'BV', 'BF', 'BI', 'CM', 'CV', 'CF',
    'TD', 'KM', 'CI', 'CD', 'EG', 'GQ', 'ER', 'ET', 'GA', 'GM', 'GH', 'HM', 'GN',
    'GW', 'JU', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MA',
    'MZ', 'NA', 'NE', 'NG', 'CO', 'RE', 'RW', 'SH', 'ST', 'SN', 'SC', 'SL', 'SO',
    'ZA', 'SS', 'SD', 'SZ', 'TZ', 'TG', 'TN', 'UG', 'EH', 'ZM', 'ZW' ].join('|'),
  Oceania: [ 'AS', 'AU', 'UM', 'CX', 'CC', 'CK', 'FM', 'FJ', 'PF', 'TF',
    'GU', 'HM', 'KI', 'MH', 'UM', 'NR', 'NC', 'NZ', 'NU', 'NF', 'MP', 'PW', 'PG',
    'PN', 'WS', 'SB', 'TK', 'TO', 'TV', 'VU', 'UM', 'WF'].join('|')
}
var continentName = Continents['Oceania'];

const continent_Top20 = require(`./${continentName}_top20.js`);
var staged_articles = [];
continent_Top20.aggregations[0].aggregations[0].aggregations[0].results.map( ({key, aggregations}) =>{
  aggregations[0].hits.hits.map( ({id, score, title, country, crawl_date, url, host, text, main_image_url, enriched_text}) => {
    staged_articles.push({
      id:id,
      key:key,
      score:score,
      title:title,
      country:country,
      crawl_date:crawl_date,
      url:url,
      host:host,
      text:text,
      main_image_url:main_image_url,
      sentiment_score:enriched_text.sentiment.document.score,
      concepts: enriched_text.concepts,
      category:enriched_text.categories[0]
    });
  });
})
// console.log(staged_articles.length);
fs.writeFile(`./watson/${continentName}_top20_filtered.js`, JSON.stringify({results:staged_articles},null,2), (err) => {
  if(err){
    console.log(err);
  } else {
    console.log(`SUCCESS: ${staged_articles.length} articles written to ${continentName}_top20_filtered.js`);
  }
})
