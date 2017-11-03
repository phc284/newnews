import React from 'react';
import Article from '../components/Article.jsx';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArticles, selectTag } from '../actions';
import Paper from 'material-ui/Paper';

// const articles = [
//   {"featured":"true","_id":"59fa51709be7d8217c0559dc","id":"hN0eOGGAIj70FoW2Zm070I5ybCDCvUS9qjmVBixDsYdSWeeXFVUWIOgltQJMahUY","key":"logo","score":1,"title":"IRHL Logo Design by ctone19","country":"PE","crawl_date":"2017-11-01T16:06:02Z","url":"https://www.freelancer.com.pe/projects/graphic-design/irhl-logo-design/","host":"freelancer.com.pe","text":"Please have a look at my Portfolio [url removed, login to view](Concepts) A 100% Custom & Eye Catching Logo for hockey league will cost you just $40. Relevant Skills and Experience - Multip Más $40 USD en 1 día (158 comentarios) damncreative I can design you a professional league logo like we have in NBA, NFL NHL etc. I have the required skills and experience, on top of that I guarantee money back if you don't like. Lets do this Relevant Skills and Experi Más $150 USD en 3 días (180 comentarios)","main_image_url":"https://www.f-cdn.com/assets/img/facebook/default-04d56222.jpg","sentiment_score":0.72811,"concepts":{"national basketball association":0.898525,"national football league":0.896764,"national hockey league":0.891051,"texas":0.858707,"experience":0.794896,"california":0.745846,"promotion and relegation":0.7452,"philadelphia":0.739642,"new york":0.738409,"professional sports league organization":0.738359,"florida":0.736176},"__v":0}, 
//   {"_id":"59fa51749be7d8217c055aba","id":"iY589iUBO6Uy_9-riRDi5Q1Lm7-qe_-gazoIshso2CryHEBaEpIfxCChBmx4xQqw","key":"new york city","score":1,"title":"Up to six dead in New York vehicle attack","country":"IE","crawl_date":"2017-11-01T04:39:34Z","url":"http://www.looptonga.com/global-news/six-dead-new-york-vehicle-attack-68824","host":"looptonga.com","text":"Up to six people have been killed in New York after a truck was driven into people using a busy bike path in New York, reports say.\nPolice have confirmed there have been \"several fatalities\" after the truck was driven down a cycle/pedestrian path, striking multiple people.\nThe truck then collided with another vehicle, and the driver got out. Police said the man had imitation firearms and was shot by officers at the scene. The suspect is now in custody.\nCNN reported sources said up to six people were killed, while local news channel PIX 11 said at least five people had been hurt.\nSource: RNZI","main_image_url":"http://looppacificassets.s3.amazonaws.com/styles/no_watermark/s3/thumbnails/image/up_to_six_dead_in_new_york_vehicle_attack.jpg?itok=AplCeUo9","sentiment_score":-0.68045,"concepts":{"world trade center":0.949352,"new york city":0.852332,"new york":0.792932,"english-language films":0.768482,"new jersey":0.749168,"new york city subway":0.719405,"action news":0.708706},"__v":0},
//   {"_id":"59fa51749be7d8217c055b57","id":"ofcsQx7N23jogf8yYOdXukPGvwre7w5OMyt4ZvAVYJHAxI8Q5zwSIhyeVRgRNBSJ","key":"european union","score":1,"title":"Using vehicles as weapons of terror in Europe and America","country":"FR","crawl_date":"2017-11-01T13:07:36Z","url":"http://southafrica.shafaqna.com/EN/ZA/1250247","host":"southafrica.shafaqna.com","text":"4 minutes ago Using vehicles as weapons of terror in Europe and America A pickup driver ploughed a truck into cyclists and pedestrians in New York on Tuesday, killing eight people in the first deadly act of terror in the city since September 11, 2001. ¿Cómo se financia Cataluña y es realmente el motor de la economía de España? - BBC Spanish PICS: #ManhattanAttack suspect an Uber driver - iol Absa pays tribute to manager killed in home break-in - iol News24.com | Top Africa stories: Kenya, Mugabe, Liberia - news24 El gobierno de Macri confirma que cinco de las víctimas del atentado en Nueva York son argentinos - BBC Spanish Amazon contratará a 2.700 personas en España para la campaña de Navidad - lavanguardia eNCA | WATCH: Joburg Metro bus catches fire - enca 10 Mentiras y verdades sobre animales que deberíamos desmentir cuanto antes - rolloid El Murcia hace historia ante un Barça en caída libre - elpais 40 Divertidos disfraces de tus películas favoritas para ser el más original de la fiesta - rolloid timeslive © 2014 Shafaqna.com All Rights Reserved. South Africa News strongly believes in 'circulation of information' for public interest and we would therefore carefully use your material in a non-commercial way. South Africa News is just a News Reader using automatic input devices. Thus, the main publishers and sources are clearly responsible for their content. ﻿","sentiment_score":0.901368,"concepts":{"all rights reserved":0.878355,"johannesburg":0.874893,"african union":0.8366,"south america":0.828266,"input device":0.814786,"metropolitan area":0.805258,"united states":0.805076,"africa":0.789201,"zimbabwe":0.784835,"new york":0.770409,"los angeles":0.71585,"italian language":0.715016},"__v":0},
//   {"featured":"true","_id":"59fa51749be7d8217c055b94","id":"AC-UbZbJlrAUMMws39myiGL2dl1ZlIeK6GaonkCric6xYwEV0fTVJHGEWqDP7h1m","key":"terrorism","score":1,"title":"New York terror: Theresa May condemns 'cowardly attack' and will 'defeat evil terrorism'","country":"GB","crawl_date":"2017-11-01T00:19:37Z","url":"http://www.express.co.uk/news/world/873867/new-york-terror-attack-theresa-may-condemns-sadiq-khan-donald-trump-NYC-Bill-de-Blasio","host":"express.co.uk","text":"New York terror: Theresa May condemns 'cowardly attack' and will 'defeat evil terrorism' New York terror: Theresa May condemns 'cowardly attack' and will 'defeat evil terrorism' THERESA May has spoken out in solidarity with New York City after a terror attack which killed eight people. PUBLISHED: 23:19,   23:49, Tue, Oct 31, 2017 \nMore than a dozen people are also injured from the incident after a truck careered down a cycle path near the 9/11 memorial site in Manhattan on Tuesday. \nThe driver, 29, was shot by police after jumping out of the rented vehicle with what turned out to be a pellet and paintball gun. \nHe was taken to a hospital and is in police custody. GETTY Theresa May called it a \"cowardly attack\" and that the UK stands with New York Related articles New York terror attack in pictures: Shock photos show attack aftermath \nMrs May tweeted: \"Appalled by this cowardly attack, my thoughts are with all affected. Together we will defeat the evil of terrorism. UK stands with New York City.” \nSadiq Khan also paid tribute, he said: \"London stands in grief and solidarity with the great city of New York tonight after the despicable and cowardly terrorist attack in Manhattan. \n\"My heart goes out to the victims and their families. \n\"New Yorkers are strong and resilient - I know they will not be cowed by this assault on the innocent, and on our shared values and way of life.\" \nThe Foreign Office said it is standing by to provide assistance to any Britons affected by the atrocity. \nA spokesman said: \"We are in contact with the local authorities and stand ready to provide any assistance but are not aware of any British citizens involved as yet.\" GETTY At least eight people have been killed and 12 people injured \nNew York Mayor Bill de Blasio said the attack is \"a particularly cowardly act of terror aimed at innocent civilians going about their daily lives\". \nNew York Governor Andrew Cuomo said it was a \"lone wolf\" attack and there is no evidence it is part of a wider plot. \nPolice said the vehicle, a rented Home Depot truck, entered the cycle path on West Street and mowed down several people. GETTY Sadiq Khan also paid tribute and described the attack as \"cowardly\" \nThe truck also smashed into a yellow school bus, injuring two adults and two children. \nPresident Trump tweeted: \"In NYC, looks like another attack by a very sick and deranged person. Law enforcement is following this closely. NOT IN THE USA!\" \nHe later followed the tweet with: \"We must not allow ISIS to return, or enter, our country after defeating them in the Middle East and elsewhere. Enough!\" GETTY New York Governor Andrew Cuomo said it was a \"lone wolf\" attack \nIt is not yet clear whether the attacker had any links to Islamic State. \nHe then added: \"My thoughts, condolences and prayers to the victims and families of the New York City terrorist attack. God and your country are with you!\" Related articles","main_image_url":"http://cdn.images.express.co.uk/img/dynamic/78/750x445/873867.jpg","sentiment_score":-0.433462,"concepts":{"new york city":0.956408,"new york":0.708283},"__v":0},
//   {"_id":"59fa51749be7d8217c055bf8","id":"4rHIAFrrh5-ZO-U3nY62GfrhKpL2CfEQ4H4RBTcxjNHkkm2mkOELl0Uu7Ivv5C-0","key":"bbc","score":1,"title":"New York truck attack: Trump calls for end of green card lottery - BBC News","country":"DE","crawl_date":"2017-11-01T19:23:43Z","url":"https://eblnews.com/video/new-york-truck-attack-trump-calls-end-green-card-lottery-bbc-news-246365","host":"eblnews.com","text":"BBC News   17:28 CET \nUS President Donald Trump has called for the green card lottery to be scrapped, saying it allowed the New York truck attack suspect into the US. \nIn a series of tweets he called for the immigration programme to be replaced with a merit-based system. \nMr Trump pinned blame for the scheme on Senator Chuck Schumer, who accused Mr Trump of cutting anti-terror funding. \nAuthorities have not yet confirmed how the suspect in Tuesday's attack, Sayfullo Saipov, immigrated to the US. \nMr Trump tweeted on Wednesday morning: \"The terrorist came into our country through what is called the 'Diversity Visa Lottery Program,' a Chuck Schumer beauty. I want merit based.","main_image_url":"https://cdn.eblnews.com/sites/default/files/styles/img_684x385/public/cover/2017-11/vaTvNujo9Ls.jpg?itok=wkq3Qgdg","sentiment_score":0.0820558,"concepts":{"donald trump":0.980387,"democratic party":0.911795,"chuck schumer":0.835867,"new york":0.750015,"united states":0.741884,"immigration to the united states":0.704956},"__v":0},
//   {"_id":"59fa51789be7d8217c055d98","id":"zqSR6V70ZJL8uQw7ypnk1ggdZuC5XvlqDfqGOHyGCux08Jmy5_5Z5iuS7TAIpCmW","key":"new york city","score":1,"title":"2 die in New York state crash","country":"TV","crawl_date":"2017-11-01T06:59:21Z","url":"http://raycomgroup.worldnow.com/story/36731827/2-die-in-new-york-state-crash","host":"raycomgroup.worldnow.com","text":"2 die in New York state crash Oct 31, 2017 \nHENRIETTA, NY (WROC/CNN) - Authorities have released the names of the people involved in Monday's fatal crash in the Rochester, NY area. \nKristina Maye and Terry Gilbert, both 25, were killed. \nThe vehicle Maye was driving left the southbound lanes of an interstate, crossed the median and entered northbound lanes. \nThat's where their car struck an unmarked police car driven by on-duty state police Lt. Amie Feroleto, flipping her vehicle. \nThe state trooper was taken to a hospital with injuries that were not considered life-threatening. It's unclear why Maye drove into oncoming traffic. \nState police are investigating. \nCopyright 2017 WROC via CNN. All rights reserved. Right Now","main_image_url":"https://bloximages.newyork1.vip.townnews.com/mysuncoast.com/content/tncms/assets/v3/editorial/2/da/2dabf2a5-a36f-587c-99d4-930bde2cc7c7/59f9247789800.image.jpg?resize=700%2C400","sentiment_score":-0.440391,"concepts":{"new york":0.989682,"rochester, new york":0.98671,"new york city":0.852499,"state police":0.766896,"united states":0.704387},"__v":0},
//   {"_id":"59fa51789be7d8217c055d13","id":"Vw45QCrhCwAXlNeDYwgz_KNaF8cdoOcUsYseHGs36hiyxgaAzxzEDZluHQbz-6Ft","key":"new york","score":1,"title":"Tourists dead in NYC attack; suspect a former Uber driver","country":"AU","crawl_date":"2017-11-01T14:05:42Z","url":"http://www.traveltalkmag.com.au/news/tourists-dead-in-nyc-attack-suspect-a-former-uber-driver","host":"traveltalkmag.com.au","text":"Tourists dead in NYC attack; suspect a former Uber driver Fatal terror attack hits Manhattan \nSince 9/11,New York has managed to avoid major terrorism incidents. But on Tuesday, the sort of vehicular attack that has recently plagued European cities like London, Berlin, Barcelona, Nice and Stockholm hit the city. \nImage Reuters / Brendan McDermid \n\nThe attack, which has left eight people dead and 11 others injured, occurred when the suspect drove a pickup truck down a busy bike path along the Hudson River in Manhattan. \n\nThe man accused of the crime, Sayfullo Saipov, then smashed into a school bus, and ran along a road brandishing a pellet gun yelling “God is great”. \n\nHe was eventually shot in the abdomen by police, the New York Times reported. According to the paper, New York City Mayor Bill de Blasio labelled the rampage a terrorist attack “based on information we have at this moment”. \n\nBut authorities are treating the incident as a lone wolf attack, two counterterrorism officials were quoted as saying. \n\nAmong those killed were five Argentine tourists, who were in NY for a 30-year high school reunion party, a senior official from their home province said. Belgian officials said another person who was killed, along with three of those injured, were from Belgium. No Australians have been reported harmed. \nImage Don Emmert / AFP - Getty \n\nApparently, some nearby thought the attack to be a stunt for Halloween. “We heard people screaming, ‘gun’‘shooter’ and ‘run away,’” said teenager Sirus Minovi, who attends Stuyvesant High School, close to where the truck came to a halt. “We thought it was a Halloween prank.” \n\nAccording to the Times, Saipov, 29, had previously been an Uber driver in New Jersey. \n\n“We have been in contact with the F.B.I. and have offered our assistance,” an Uber official said. \n\n“We will remain in close contact with law enforcement and the F.B.I. to assist with their investigation. \n\n“We are aggressively and quickly reviewing this partner’s history with Uber, and at this time we have not identified any related concerning safety reports.”","main_image_url":"http://www.traveltalkmag.com.au/cms-content/articles/listing-59f9612c12fb3.jpg","sentiment_score":-0.540908,"concepts":{"terrorism":0.965147,"new york city":0.903567,"hudson river":0.809405,"new york":0.781278,"manhattan":0.751552,"new jersey":0.706164},"__v":0},
//   {"_id":"59fa51789be7d8217c055d15","id":"h0PbsH4Orl9zh3yzEHf7O02jK3TfTRjqol33fmyqt9WDKsnKxuFosJ9r7hPdCVLu","key":"new york","score":1,"title":"Cuomo slams Trump for his tweets on New York City terror attack: 'The last thing it's about is politics, period'","country":"AU","crawl_date":"2017-11-01T20:26:47Z","url":"https://www.businessinsider.com/cuomo-trump-tweets-new-york-nyc-terror-attack-2017-11","host":"businessinsider.com","text":"Screenshot/CNN Andrew Cuomo. New York Gov. Andrew Cuomo was asked about President Donald Trump’s tweets on Tuesday’s terror attack. He said they were unhelpful. In one of Trump’s Wednesday tweets, he wrote: “The terrorist came into our country through what is called the ‘Diversity Visa Lottery Program,’ a Chuck Schumer beauty. I want merit based.” \nNew York Gov. Andrew Cuomo on Wednesday called President Donald Trump’s tweetstorm on the New York City terror attack unhelpful. \nCuomo, speaking at a press conference alongside New York City Mayor Bill de Blasio and law enforcement officials, said the president was not handling the aftermath of the attack appropriately. \n“The president’s tweets I think were not helpful,” he said. “I don’t think they were factual. I think they tended to point fingers and politicize the situation.” \nAfter tweeting his “thoughts, condolences, and prayers, to the victims and families” of the attack on Tuesday, Trump tweeted that he was asking the Department of Homeland Security to ramp up its “Extreme Vetting Program.” \n“Being politically correct is fine, but not for this!” he said. \nThen on Wednesday morning, Trump went after Senate Minority Leader Chuck Schumer, a New York Democrat, for an immigration program known as the Diversity Visa Program. That program was created in a bill that Schumer, as a House representative, introduced in 1990. But in 2013, as a member of the Gang of Eight on immigration, Schumer helped craft a proposal that would have scrapped it. That legislation passed the Senate but was never brought up for a vote in the House. \n“The terrorist came into our country through what is called the ‘Diversity Visa Lottery Program,’ a Chuck Schumer beauty,” he tweeted . “I want merit based.” \n“We are fighting hard for Merit Based immigration, no more Democrat Lottery Systems. We must get MUCH tougher (and smarter). @foxandfriends,” he added . \nThe man accused of killing eight people Tuesday when he rammed a rented pickup truck down a lower Manhattan bicycle path came into the US as a part of the program, Homeland Security said. Police identified him as 29-year-old Sayfullo Saipov, an immigrant originally from Uzbekistan who arrived in the US in 2010. Saipov left a note that said he carried out the attack in the name of ISIS, police said. \n“It was referring back to an immigration system that dealt with a lottery, and blaming people who passed that immigration policy,” Cuomo said of Trump’s Twitter storm. “His tweet wasn’t even accurate, as far as I’m concerned. That was a bipartisan law that was passed that had basically no relevance to the facts of the situation.” \n“As I said before, you play into the hands of the terrorists to the extent that you disrupt and divide and frighten people in this society and the tone now should be the exact opposite, by all officials on all levels,” he continued. “This is about unification. This is about solidarity. This is about normalization. This is about protection. And the last thing it’s about is politics, period.” \nTrump, in a meeting with Cabinet officials shortly after Cuomo’s press conference, doubled down on his earlier remarks, saying “we have to get much less politically correct” and adding that Democrats “don’t want to do what’s right for our country. \nPointing to the diversity lottery program, Trump said “diversity sounds nice.” \n“It’s not nice,” he said. “It’s not good.” Watch Cuomo’s comments below: \nGov. Cuomo says Trump’s tweets this morning “were not helpful.” https://t.co/HzZ5MncVNR — Meg Wagner (@megwagner) November 1, 2017 NOW WATCH: Briefing videos \nSite highlights each day to your inbox. Email Address \nFollow Business Insider Australia on Facebook , Twitter , LinkedIn , and Instagram . Tagged In","main_image_url":"https://static.businessinsider.com/image/59f9f0dc58a0c130008b4e0d-400/image.jpg","sentiment_score":-0.261289,"concepts":{"democratic party":0.987447,"new york":0.766359,"new york city":0.72363,"kirsten gillibrand":0.715888},"__v":0} 
// ];


// const tilesData = [
//   {
//     title: 'Breakfast',
//     author: 'jill111',
//     featured: true,
//   },
//   {
//     title: 'Tasty burger',
//     author: 'pashminu',
//   },
//   {
//     title: 'Camera',
//     author: 'Danson67',
//   },
//   {
//     title: 'Morning',
//     author: 'fancycrave1',
//     featured: true,
//   },
//   {
//     title: 'Hats',
//     author: 'Hans',
//   },
//   {
//     title: 'Honey',
//     author: 'fancycravel',
//   },
//   {
//     title: 'Vegetables',
//     author: 'jill111',
//   },
//   {
//     title: 'Water plant',
//     author: 'BkrmadtyaKarki',
//   },
// ];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */


class Newspaper extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    axios.get('/keys')
    .then( response => {
      let articles = response.data.topArticles;
      this.setState({articles: articles});
    })
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.activeWord !== this.props.activeWord) {
        nextProps.getArticles(nextProps.activeWord);
      }
    }

  render() {
    const articles = this.props.articles || this.state.articles;
    return (
      <Paper className="newspaper" zDepth={1}>
        {articles.map((article, index) => {
          if (article) {
            if (articles.length >= 5 && index%8 === 0) {
              article.featured = true;
            }
            return <div>
                <Article 
                  key={index} 
                  handleTouchTap={this.props.selectTag} 
                  article={article} 
                  concepts={article.concepts}/>
              </div>
          }})}   
      </Paper>
    );
  }

}

function mapStateToProps (state) {
  return {
    articles: state.articles,
    activeWord: state.activeWord
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getArticles: getArticles,
    selectTag: selectTag
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Newspaper);

