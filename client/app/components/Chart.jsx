import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import axios from 'axios';
import countries from '../../countries.js';

const getCountryCounts = hits => {
  let dataProvider = {};
  let dpArray = []
  hits.forEach((article) => {
    let countryName = countries[article.country];
    if (dataProvider[countryName]) {
      dataProvider[countryName]++;
    } else {
      dataProvider[countryName] = 1;
    }
  });
  for (let country in dataProvider) {
    dpArray.push({
      country: country,
      hits: dataProvider[country]
    })
  }
  return dpArray.sort((a, b) => {
    return b.hits - a.hits;
  });
};

const hits = [{"_id":"59f7c74db0c4a82c3c11772c","id":"YQhUKZ8fNTJYv2ulZHRqg8d4IOEIhXUTwHvCY9Z2frsorlWzee_4p5eSkV3sl-AL","key":"marketing","score":1,"title":"Orthopedic Prosthetic Devices Market Assessment Report Now Available at Credence Research","country":"CO","crawl_date":"2017-10-30T10:17:16Z","url":"http://bizpr.us/2017/10/30/orthopedic-prosthetic-devices-market-assessment-report-now-available-credence-research/","host":"bizpr.us","text":"October 30, 2017 Business & Professional Services Press Release No comments \nCredence Research has recently issued a new market assessment report titled “ Orthopedic Prosthetic Devices – Growth, Future Prospects and Competitive Analysis, 2016 – 2023”. The global Orthopedic Prosthetic Devices Market study provides a comprehensive view of the ongoing and future phases of the Orthopedic Prosthetic Devices industry based on parameters such as major commercial events, research initiatives, government guidelines, market drivers, restraints and opportunities and detailed industry segmentation and regional distribution. \nBrowse the report at http://www.credenceresearch.com/report/orthopedic-prosthetic-devices-market \nBased on geographic/regional distribution the global Orthopedic Prosthetic Devices Market is studied for key regional markets focusing on the respective geographic trends and statistics, and thereby delivering market size and forecast values. The Orthopedic Prosthetic Devices Market based on geographic classification is studied for North America, Europe, Asia-Pacific, Latin America, and Middle East and Africa markets. Among these, the North America, Europe and Asia-Pacific Orthopedic Prosthetic Devices Market is studied for top country-level markets. The Orthopedic Prosthetic Devices industry in each individual country market is studied based on parameters such as per capita income, population, gross domestic product (GDP), status of infrastructure, purchasing power parity, etc. Technology development, industry concentration, end-user preference, and similar such grounds are also considered while estimating the market for Orthopedic Prosthetic Devices. The market estimates are provided for the period 2014-2023, along with corresponding compounded annual growth rates (CAGRs) for the forecast period 2016-2023. \nThis report on Orthopedic Prosthetic Devices Market also offers competition assessment tools such as market positioning of key players, attractive investment proposition, and Porter’s Five Forces model to give the readers a view of the competitive scenario of the Orthopedic Prosthetic Devices Market. The Orthopedic Prosthetic Devices Market report is concluded with company profiles chapter. This section highlights major information about the key players engaged in development, manufacture, distribution and sale of Orthopedic Prosthetic Devices in the international markets. \nDownload Free Sample Request – http://www.credenceresearch.com/report/orthopedic-prosthetic-devices-market \nMajor extracts from the Table of Content of Orthopedic Prosthetic Devices Market, 2016-2023 report: \nOrthopedic Prosthetic Devices Market Dynamics – Drivers, Challenges, Opportunities \nOrthopedic Prosthetic Devices Market Size and Forecast for the Period 2014-2023 \nOrthopedic Prosthetic Devices Market CAGR for the Period 2016-2023 \nOrthopedic Prosthetic Devices Market Competitive Analysis, by Key Players \nOrthopedic Prosthetic Devices Market: Attractive Investment Proposition, by Geography \nOrthopedic Prosthetic Devices Market: Key Commercial Events \nOrthopedic Prosthetic Devices Market: Future Prospects (upcoming product approvals) \nRelated Reports","sentiment_score":0.217118,"concepts":{"purchasing power parity":0.96629,"gross domestic product":0.765115,"united states":0.764224,"per capita income":0.704017},"__v":0},{"_id":"59f7c74eb0c4a82c3c117743","id":"19UNlML_AJRlP4kYe7Wx7BnOGUQTlsNSU4V2J1Vmn0oBqHmvN2t8hEKOFqTZRAk6","key":"marketing","score":1,"title":"Global Cocoa Butter Equivalent (CBE) Market is projected to display a robust growth represented by a CAGR of 9.15% by volume during 2017– 2022","country":"CO","crawl_date":"2017-10-30T07:04:40Z","url":"http://bizpr.us/2017/10/30/global-cocoa-butter-equivalent-cbe-market-projected-display-robust-growth-represented-cagr-9-15-volume-2017-2022/","host":"bizpr.us","text":"October 30, 2017 Business & Professional Services Press Release , Food & Dining Press Release No comments \nA comprehensive research report created through extensive primary research (inputs from industry experts, companies, stakeholders) and secondary research, the report aims to present the analysis of Global Cocoa Butter Equivalent Market on the basis of Analysis By Type (Shea Butter and Other Specialty Fat), By Region (North America, Europe, APAC and ROW) and By Country (U.S., Canada, Mexico, U.K., Germany, France, India, China, South Korea, Brazil and Saudi Arabia). Over the recent years, the global Cocoa Butter Equivalent industry has been growing rapidly owing to rise in demand for chocolate, high price of cocoa butter. Globally, the growth in Cocoa Butter Equivalent market is driven improvement in chocolate functionality on addition of cocoa butter equivalent. \nAccording to research report, “Global Cocoa Butter Equivalent (CBE) Market – Volume and Value Analysis By Type, By Region, By Country: Opportunities and Forecast (2017-2022) – By Type (Shea Butter, Other Specialty Fats ), By Region (N.America, Europe, APAC, RoW), By Country (US, Canada, Mexico, Germany, France, UK, India, China, South Korea, Brazil, Saudi Arabia)”, global market is projected to display a robust growth represented by a CAGR of 7.00% by value and 9.15% by volume during 2017– 2022, chiefly driven by increase in disposable consumer income. \nRequest a Sample copy of Global Cocoa Butter Equivalent (CBE) Market Report at : https://www.bharatbook.com/request-sample/939856 \nAmong the type, other specialty fats is projected to witness fastest growth. Among the regions, Asia Pacific is predicted to advance at the highest rate, mainly driven by large population base, rapid economic development and increase in disposable consumer income. \nThe report titled, “Global Cocoa Butter Equivalent (CBE) Market – Volume and Value Analysis By Type, By Region, By Country: Opportunities and Forecast (2017-2022) – By Type (Shea Butter, Other Specialty Fats ), By Region (N.America, Europe, APAC, RoW), By Country (US, Canada, Mexico, Germany, France, UK, India, China, South Korea, Brazil, Saudi Arabia)”, has covered and analysed the potential of Global Cocoa Butter Equivalent Market and provides statistics and information on market size, shares and growth factors. The report intends to provide cutting-edge market intelligence and help decision makers take sound investment evaluation. Besides, the report also identifies and analyses the emerging trends along with major drivers, challenges and opportunities in the global cocoa butter equivalent market. Additionally, the report also highlights market entry strategies for various companies across the globe. \nTo browse the full r eport with Table of Contents , click the link below : https://www.bharatbook.com/food-market-research-reports-939856/global-cocoa-butter-equivalen-namerica-europe-apac-row.html About Bharat Book Bureau : Bharat Book Bureau is the leading market research information provider for market research reports, company profiles, industry study, country reports, business reports, newsletters and online databases Bharat Book Bureau provides over a million reports from more than 400 publishers around the globe. We cover sectors starting from Aeronautics to Zoology. \nContact us at : Tel: +91 22 27810772 / 27810773 Email: poonam@bharatbook.com Follow us on : Twitter, Facebook, Linkedin, Google Plus Share this:","main_image_url":"https://bizpr.us/wp-content/uploads/2017/10/Cocoa-Butter-Equivalent-300x240.jpg","sentiment_score":0.597723,"concepts":{"marketing":0.929663,"united states":0.87558,"saudi arabia":0.823167,"chocolate":0.809048,"g20 nations":0.721616,"japan":0.717911},"__v":0}];

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: []
    }
  }

  componentWillMount(props) {
    // axios.get('/articles/concept/' + this.props.tag, {params: {query: this.props.tag}})
    // .then(response => {
    //   this.setState({hits: response.data});
    // })

    this.setState({hits: getCountryCounts(hits)});
  }

  render() {
    console.log(countries);
    return (
      <AmCharts.React
        style={{
          width: "100%",
          height: "450px",
        }}
        options={{
          "type": "pie",
          "theme": "light",
          "percentPrecision": 0,
          //groupedColor: "#036850",
          colors: [
            // "#47776c", 
            // "#528c7f", 
            // "#5a9b8c", 
            // "#64ad9c", 
            // "#6ebfac", 
            // "#78d3be", 
            // "#82e5ce"
            '#E0A257',
            '#DEAC53',
            '#DDB94F',
            '#DBC54A',
            '#BBC056',
            '#97BB64',
            '#72B572',
            '#72B783',
            '#71BA96',
            '#71BCAA',
            '#69A9AA',
            '#5F93AA',
            '#557DAA',
            '#6981AD',
            '#8086B1',
            '#978BB5',
            '#8086B1',
            '#6981AD',
            '#557DAA',
            '#5F93AA',
            '#69A9AA',
            '#71BCAA',
            '#71BA96',
            '#72B783',
            '#72B572',
            '#97BB64',
            '#BBC056',
            '#DBC54A',
            '#DDB94F',
            '#DEAC53'
          ],
          //gradientRatio: [0, 0.2, 0.4, 0.6, 0.8, 1],
          "titles": [ {
            "text": this.props.tag,
            "size": 20
          } ],
          dataProvider: getCountryCounts(this.state.hits),
          "valueField": "hits",
          "titleField": "country",
          "startEffect": "elastic",
          "startDuration": 3,
          "labelRadius": 15,
          "innerRadius": "50%",
          "depth3D": 10,
          "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b></span>",
          "angle": 15,
          "export": {
            "enabled": true
          }
        }} 
      />
    )
  }
}

export default Chart;