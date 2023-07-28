import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  article = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Laura Paddison",
      "title": "A crucial system of ocean currents is heading for a collapse that ‘would affect every person on the planet’ - CNN",
      "description": "A vital system of ocean currents in the Atlantic could collapse within a few decades – an event that would be catastrophic for global weather and “affect every person on the planet.”",
      "url": "https://www.cnn.com/2023/07/25/world/gulf-stream-atlantic-current-collapse-climate-scn-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230725062451-01-gulf-stream-climate-collapse-atlantic-current-intl.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-26T08:45:00Z",
      "content": "A vital system of ocean currents could collapse within a few decades if the world continues to pump out planet-heating pollution, scientists are warning an event that would be catastrophic for global… [+5411 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": null,
      "title": "NatWest CEO Alison Rose to Step Down Over Nigel Farage Accounts Closure - Bloomberg - Bloomberg",
      "description": null,
      "url": "https://www.bloomberg.com/news/articles/2023-07-26/natwest-ceo-alison-rose-to-step-down-politico-report-says",
      "urlToImage": "https://dims.apnews.com/dims4/default/90c6057/2147483647/strip/true/crop/4000x2250+0+375/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F75%2Fd7%2Fb0e600da8216a72ece57723afa52%2F1bbf1ef63197446a88efd5c3f6f2b35c",
      "publishedAt": "2023-07-26T07:07:30Z",
      "content": "To continue, please click the box below to let us know you're not a robot."
    },
    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "Daniel Popper and Larry Holder",
      "title": "Chargers, Justin Herbert agree to 5-year $262.5 million contract extension: Source - The Athletic",
      "description": "Herbert has thrown for 14,089 yards with 94 touchdowns and 35 interceptions resulting in a 96.2 passer rating in three NFL seasons.",
      "url": "https://theathletic.com/4717101/2023/07/25/justin-herbert-chargers-contract-extension/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/07/25193917/USATSI_19711561-scaled.jpg",
      "publishedAt": "2023-07-26T07:06:11Z",
      "content": "The Chargers and quarterback Justin Herbert have agreed to a multiyear extension, the team announced Tuesday. Heres what you need to know:\r\n<ul><li>The deal is for five years and $262.5 million, a le… [+3706 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Suntimes.com"
      },
      "author": "Georgia Nicols",
      "title": "Horoscope for Wednesday, July 26, 2023 - Chicago Sun-Times",
      "description": null,
      "url": "https://chicago.suntimes.com/2023/7/26/23802217/horoscopes-today-wednesday-july-26-2023",
      "urlToImage": "https://cst.brightspotcdn.com/dims4/default/7d82ad2/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Ff4eJhA5HICWLK1PY78PDzgal43I%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24800044%2FGeorgia_mug.jpeg",
      "publishedAt": "2023-07-26T05:01:21Z",
      "content": "Moon Alert\r\nThere are no restrictions to shopping or important decisions. The moon is in Scorpio.\r\nAries (March 21-April 19)\r\nThis is an excellent day to discuss how to divide or share something, per… [+3916 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Rolling Stone"
      },
      "author": "Charisma Madarang",
      "title": "Greta Gerwig on Outraged Conservatives Burning Barbies - Rolling Stone",
      "description": "The ‘Barbie’ director gave her take on the right-wing backlash to the blockbuster film during an interview with the New York Times",
      "url": "https://www.rollingstone.com/tv-movies/tv-movie-news/greta-gerwig-responds-barbie-right-wing-backlash-1234795183/",
      "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/07/greta-gerwig-right-wing-backlash-barbie.jpg?w=1600&h=900&crop=1",
      "publishedAt": "2023-07-26T04:59:57Z",
      "content": "Greta Gerwig’s Barbie grossed a record-breaking $155 million domestically — and $377 million internationally — in its first weekend. The blockbuster film also crushed right-wing efforts to boycott th… [+2046 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "SETH BORENSTEIN",
      "title": "Water at tip of Florida hits hot tub level, may have set world record for warmest seawater - The Associated Press",
      "description": "The water temperature on the tip of Florida hit hot tub levels, exceeding 100 degrees (37.8 degrees Celsius) two days in a row, which meteorologists say could potentially be the hottest seawater ever measured.",
      "url": "https://apnews.com/article/record-hot-water-florida-coral-climate-change-6414d44c6f120507d3ee37c059fb75cd",
      "urlToImage": "https://dims.apnews.com/dims4/default/90c6057/2147483647/strip/true/crop/4000x2250+0+375/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F75%2Fd7%2Fb0e600da8216a72ece57723afa52%2F1bbf1ef63197446a88efd5c3f6f2b35c",
      "publishedAt": "2023-07-26T04:22:00Z",
      "content": "The water temperature on the tip of Florida hit hot tub levels, exceeding 100 degrees (37.8 degrees Celsius) two days in a row. And meteorologists say that could potentially be the hottest seawater e… [+4260 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Stephen Collinson",
      "title": "McCarthy again marches to Trump’s tune by invoking Biden impeachment inquiry - CNN",
      "description": "The House Republican majority is hitting its stride as a fully weaponized arm of Donald Trump’s bid for a second White House term as it seeks to drag President Joe Biden into a swamp of so far unsubstantiated corruption allegations.",
      "url": "https://www.cnn.com/2023/07/26/politics/mccarthy-trump-biden-impeachment/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230725183343-mccarthy-trump-file.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-26T04:03:00Z",
      "content": "The House Republican majority is hitting its stride as a fully weaponized arm of Donald Trumps bid for a second White House term as it seeks to drag President Joe Biden into a swamp of so far unsubst… [+11212 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DW (English)"
      },
      "author": "Deutsche Welle",
      "title": "Australia: Over 50 pilot whales dead in mass stranding - DW (English)",
      "description": "Around 100 whales were spotted near the coast in Western Australia, making their way to the beach, where at least half later died. The phenomenon is believed to indicate either stress or illness within the pod.",
      "url": "https://www.dw.com/en/australia-over-50-pilot-whales-dead-in-mass-stranding/a-66348690",
      "urlToImage": "https://static.dw.com/image/66348542_6.jpg",
      "publishedAt": "2023-07-26T03:40:53Z",
      "content": "Nearly 100 pilot whales stranded themselves on a beach in Western Australia on Tuesday, with Australian officials announcing 51 had already died on Wednesday.\r\nThe highly social long-finned mammals o… [+1863 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Lim Hui Jie",
      "title": "Asia markets largely down ahead of Fed rate decision; Australia inflation falls in second quarter - CNBC",
      "description": "Asian markets are lower as investors brace for the Fed's rate decision on Wednesday. Markets are expecting the Fed to raise its rates by 25 basis points.",
      "url": "https://www.cnbc.com/2023/07/26/asia-markets-set-to-fall-ahead-of-fed-rate-decision-australia-inflation-figures.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107195553-1676533051938-gettyimages-1288026755-1008_14_mby00219wt003.jpeg?v=1690328565&w=1920&h=1080",
      "publishedAt": "2023-07-26T03:19:00Z",
      "content": "Asia-Pacific markets were largely down as investors brace for the U.S. Federal Reserve's rate decision on Wednesday.\r\nThe Fed is expected to approve what would be the 11th interest rate increase sinc… [+1587 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Morning Bid: Markets brace for Fed decision, earnings flood - Reuters",
      "description": "A look at the day ahead in European and global markets from Brigid Riley",
      "url": "https://www.reuters.com/markets/global-markets-view-europe-2023-07-26/",
      "urlToImage": "https://www.reuters.com/resizer/9rYcRJFuVUr-YvOXWXP9wa193rM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BJYKNNKM4VMUPKTLOZON2QWNL4.jpg",
      "publishedAt": "2023-07-26T03:10:05Z",
      "content": "A look at the day ahead in European and global markets from Brigid Riley\r\nAll eyes are on the Federal Reserve today as the first in a string of central banks to announce interest rate decisions this … [+2337 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Christian Arnold",
      "title": "LeBron James arrives at hospital after son Bronny suffers cardiac arrest - New York Post ",
      "description": "NBA superstar LeBron James had the concerned look that any parent would have when he arrived at Cedar Sinai Hospital after his son Bronny suffered cardiac arrest while practicing at USC on Monday. …",
      "url": "https://nypost.com/2023/07/25/lebron-james-arrives-at-hospital-after-bronnys-cardiac-arrest/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/newspress-collage-08gqb5k77-1690340344981.jpg?quality=75&strip=all&1690326057&w=1024",
      "publishedAt": "2023-07-26T03:06:00Z",
      "content": "NBA superstar LeBron James had the concerned look that any parent would have when he arrived at Cedar Sinai Hospital after his son Bronny suffered cardiac arrest while practicing at USC on Monday. \r\n… [+2454 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "Lionel Messi goes off in first start for Inter Miami as Herons show full potential with World Cup winner - CBS Sports",
      "description": "The superstar didn't need long to put two goals past Atlanta as the hosts cruised",
      "url": "https://www.cbssports.com/soccer/news/lionel-messi-goes-off-in-first-start-for-inter-miami-as-herons-show-full-potential-with-world-cup-winner/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/07/26/f98b9e02-d244-4643-a9ba-01778f827196/thumbnail/1200x675/ebfd4594961dcd1d0b7debb5427d4029/messi-6.jpg",
      "publishedAt": "2023-07-26T02:44:00Z",
      "content": "Lionel Messi's hot start in Miami is now sizzling. In his second appearance for Inter Miami, he found the net twice in the first 22 minutes vs. Atlanta United in the Leagues Cup group stage in a 4-0 … [+1664 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Mari Yamaguchi, USA TODAY",
      "title": "Family arrested in connection with beheading at Japan hotel earlier this month - USA TODAY",
      "description": "Runa Tamura, 39, and her parents were arrested Monday by police on suspicion of conspiring together to behead an elderly man at a Japan hotel.",
      "url": "https://www.usatoday.com/story/news/world/2023/07/25/police-have-arrested-family-connection-with-beheading-japan-hotel/70467264007/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2023/07/26/USAT/f8c98dab-f2ea-4115-bea6-f834b0ae4b90-AP23206060059522.jpg?auto=webp&crop=4999,2812,x0,y236&format=pjpg&width=1200",
      "publishedAt": "2023-07-26T02:33:00Z",
      "content": "Tokyo Japanese police said they arrested a woman and her parents in a beheading case in a popular night entertainment district in Japan's northern city of Sapporo, where a headless man was found in a… [+1937 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "East Idaho News"
      },
      "author": null,
      "title": "They took blockbuster drugs for weight loss and diabetes. Now their stomachs are paralyzed - East Idaho News",
      "description": "(CNN) — Joanie Knight has a message for anyone considering drugs like Ozempic or Wegovy, which have become popular for the dramatic weight loss they can help people achieve. “I wish I never touched it. I wish I’d never heard of it in my life,” said Knight, 37…",
      "url": "https://www.eastidahonews.com/2023/07/they-took-blockbuster-drugs-for-weight-loss-and-diabetes-now-their-stomachs-are-paralyzed/",
      "urlToImage": "https://s3.us-west-2.amazonaws.com/assets.eastidahonews.com/wp-content/uploads/2023/07/cnn-L19jb21wb25lbnRzL2ltYWdlL2luc3RhbmNlcy9jbGtoYms5NmswMGNqMmU2N3NvYjM1MjA4-L19wYWdlcy9jbGtoMWh1MXMwMDAwODdtODIyZ242eGZt.jpg",
      "publishedAt": "2023-07-26T02:33:00Z",
      "content": null
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "JULIA FRANKEL, ISABEL DEBRE, ILAN BEN ZION",
      "title": "Israel's government has passed the first part of its legal overhaul. The law's ripples are dramatic - The Associated Press",
      "description": "The Israeli government has passed the first major piece of legislation in Prime Minister Benjamin Netanyahu’s plan to overhaul the legal system. It's part of a broader plan that has triggered nationwide protests, divided the country and rattled the powerful m…",
      "url": "https://apnews.com/article/israel-netanyahu-judicial-overhaul-politics-bc66247c3f7824288d6f93dbd7b777c7",
      "urlToImage": "https://dims.apnews.com/dims4/default/f7922ac/2147483647/strip/true/crop/5700x3206+0+297/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F53%2F26%2F1555b944263fce5eddab0fc6b4e6%2Fcd55e73102b246cf8ce9db43b2b9016c",
      "publishedAt": "2023-07-26T02:30:00Z",
      "content": "The Israeli government has passed the first major piece of legislation in Prime Minister Benjamin Netanyahus plan to overhaul the countrys legal system part of a broader plan that has triggered natio… [+7137 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": null,
      "title": "Samsung Unpacked: How to Watch the Galaxy Z Fold 5, Flip 5 Event Live - CNET",
      "description": "The new Galaxy Z Fold and Z Flip phones are expected to make their debut.",
      "url": "https://www.cnet.com/tech/mobile/samsung-unpacked-how-to-watch-the-galaxy-z-fold-5-flip-5-event-live/",
      "urlToImage": "https://www.cnet.com/a/img/resize/555e9f441d4ee3bd89fc58d28ceb37c253a487a7/hub/2022/08/09/c50bf603-388c-49c5-8ffb-fdf86ead6933/samsung-galaxy-foldable-9808.jpg?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2023-07-26T02:00:00Z",
      "content": "Samsung is expected to launch the Galaxy Z Fold 5 and Galaxy Z Flip 5 in just a few hours. The new wave of foldable phones will likely be the focus of the company's Samsung Unpacked event on Wednesda… [+5721 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Florida Today"
      },
      "author": "Jamie Groh",
      "title": "SpaceX Falcon Heavy launch to bring sonic booms to the Space Coast - Florida Today",
      "description": "Space Coast should prepare for overnight sonic booms with SpaceX Falcon Heavy liftoff from KSC set for late Wednesday.",
      "url": "https://www.floridatoday.com/story/tech/science/space/2023/07/25/spacex-falcon-heavy-launch-to-bring-sonic-booms-to-the-space-coast/70461678007/",
      "urlToImage": "https://www.floridatoday.com/gcdn/presto/2023/01/16/PBRE/b05ce1a1-5682-4def-9a8b-cc3098a7c66f-crb011523_spacex_5_.jpg?crop=3731,2099,x0,y42&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2023-07-26T01:56:47Z",
      "content": "Wednesday night will be a long one for Space Coast residents unaccustomed to middle-of-the-night launches and double booster landings.\r\nAt Kennedy Space Center, SpaceX teams are gearing up for the ov… [+5612 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "REBECCA SANTANA",
      "title": "Judge blocks Biden administration’s asylum policy for migrants - The Associated Press",
      "description": "A federal judge has blocked a rule that allows immigration authorities to deny asylum to migrants who arrive at the U.S.-Mexico border without first applying online or seeking protection in a country they passed through. But the judge on Tuesday delayed his r…",
      "url": "https://apnews.com/article/asylum-limits-biden-border-c118ee7190c58f85bcf5db1e2a270429",
      "urlToImage": "https://dims.apnews.com/dims4/default/4324382/2147483647/strip/true/crop/4297x2417+0+224/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F26%2F8d%2F2afc65a83db808502c7a20b47242%2Fcd4fe8fb0e174ee499c27f369e0a0f96",
      "publishedAt": "2023-07-26T01:53:00Z",
      "content": "WASHINGTON (AP) A federal judge on Tuesday blocked a rule that allows immigration authorities to deny asylum to migrants who arrive at the U.S.-Mexico border without first applying online or seeking … [+4419 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Louis Casiano",
      "title": "Bowe Bergdahl court-martial conviction for Army desertion thrown out by federal judge - Fox News",
      "description": "A federal judge vacated the court-martial conviction for former Army soldier Bowe Bergdahl, who deserted his unit in Afghanistan.",
      "url": "https://www.foxnews.com/politics/bowe-bergdahl-court-martial-conviction-army-desertion-thrown-federal-judge",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/Boew-Bergdahl.jpg",
      "publishedAt": "2023-07-26T01:43:00Z",
      "content": "A former U.S. Army soldier who pleaded guilty to desertion after leaving his post while deployed in Afghanistan and was subsequently captured and tortured by the Taliban had his court-martial convict… [+1838 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Andrea Vacchiano, Adam Sabes",
      "title": "Hunter Biden's counsel faces possible sanctions after accusations of lying in criminal tax case - Fox News",
      "description": "The judge over Hunter Biden's case is threatening his legal team with sanctions over allegations that they lied in the criminal case, according to a court order.",
      "url": "https://www.foxnews.com/politics/hunter-bidens-counsel-faces-possible-sanctions-accusations-lying-criminal-tax-case",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/06/Hunter-Biden-Laptop-Lawsuit-Deposition-1.jpg",
      "publishedAt": "2023-07-26T01:12:00Z",
      "content": "The judge presiding over the Hunter Biden criminal case threatened Biden's legal team with sanctions over allegations about lying to the clerk's office.\r\nHunter Biden's counsel is accused of avoiding… [+2857 chars]"
    }
  ]
  constructor(){
    super();
    this.state = {
      articles: this.article,
      loading: false

    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7f234476b11c4e9daf27348b496445f0";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData .articles})
  }

  render() {
    return (
      <div className='container'>
        <h2>News - Top headlines</h2>
        
        <div className="row">
          {this.state.articles.map((element)=> {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
        
      </div>
    )
  }
}

export default News
