import Overlay from "../components/Overlay";
import Loading from "../components/Loading";
import Tweet from "../components/Tweet";
import { useEffect, useState } from "react";

const Home = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      // let response = await fetch("api/twitter/timeline");
      // const { data } = await response.json();
      const data = [
        {
          created_at: "Mon Sep 27 15:12:29 +0000 2021",
          id: 1442507444756918300,
          id_str: "1442507444756918277",
          text: "@taatsboss wurde gesperrt sein neuer Account ist @staatsb0ss der @paul dem bre follow da",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: "@taatsboss",
                name: "@taatsboss",
                id: 1442397879644647400,
                id_str: "1442397887644647425",
                indices: [0, 10],
              },
              {
                screen_name: "staatsb0ss",
                name: "staatsboss",
                id: 1442397887644647400,
                id_str: "1442397887644647425",
                indices: [49, 60],
              },
              {
                screen_name: "paul",
                name: "paul",
                id: 1442397877644647400,
                id_str: "1442397887644647425",
                indices: [65, 70],
              },
            ],
            urls: [],
          },
          source:
            '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 711607463750058000,
            id_str: "711607463750057984",
            name: "mok ☀",
            screen_name: "mokoffiziell",
            location: "",
            description: "Alles Satire - Parodie - Macht Notis an - @mok_off",
            url: null,
            entities: {
              description: {
                urls: [],
              },
            },
            protected: false,
            followers_count: 83206,
            friends_count: 219,
            listed_count: 98,
            created_at: "Sun Mar 20 17:36:55 +0000 2016",
            favourites_count: 102330,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 14084,
            lang: null,
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: "000000",
            profile_background_image_url:
              "http://abs.twimg.com/images/themes/theme1/bg.png",
            profile_background_image_url_https:
              "https://abs.twimg.com/images/themes/theme1/bg.png",
            profile_background_tile: false,
            profile_image_url:
              "http://pbs.twimg.com/profile_images/1261616770118451201/NvyRUzAp_normal.jpg",
            profile_image_url_https:
              "https://pbs.twimg.com/profile_images/1261616770118451201/NvyRUzAp_normal.jpg",
            profile_banner_url:
              "https://pbs.twimg.com/profile_banners/711607463750057984/1588070595",
            profile_link_color: "000000",
            profile_sidebar_border_color: "000000",
            profile_sidebar_fill_color: "000000",
            profile_text_color: "000000",
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: true,
            follow_request_sent: false,
            notifications: false,
            translator_type: "none",
            withheld_in_countries: [],
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 56,
          favorited: false,
          retweeted: true,
          lang: "de",
        },
      ];
      setTimeline(data);
    };

    fetchAPI();
  }, []);

  return (
    <Overlay>
      {timeline.map((tweet) => (
        <div id={tweet.id} key={tweet.id}>
          <Tweet tweet={tweet} />
        </div>
      ))}
    </Overlay>
  );
};

export default Home;
