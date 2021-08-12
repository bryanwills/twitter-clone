import { useState } from 'react';
import { useParams } from 'react-router-dom';
import tweetsDB from '../../data/tweetsDB';
import Tweet from '../common/Tweet';

const Tweets = ({ show }) => {
  const [tweets] = useState(tweetsDB);
  const { username } = useParams();

  const convert = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'k';
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'm';
  };

  // In home page
  if (tweets.length > 0 && show === 'all') {
    return (
      <section className="feed-tweets">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            avatar={tweet.avatar}
            authorName={tweet.fullName}
            authorUsername={tweet.username}
            text={tweet.text}
            comments={convert(tweet.comments)}
            retweets={convert(tweet.retweets)}
            likes={convert(tweet.likes)}
            shared={convert(tweet.shared)}
          />
        ))}
      </section>
    );
  }
  // In profile page
  else if (tweets.length > 0 && show === username) {
    <section className="feed-tweets">
      {tweets.filter((tweet) => {
        if (tweet.username === username) {
          return (
            <Tweet
              key={tweet.id}
              avatar={tweet.avatar}
              authorName={tweet.fullName}
              authorUsername={tweet.username}
              text={tweet.text}
              comments={convert(tweet.comments)}
              retweets={convert(tweet.retweets)}
              likes={convert(tweet.likes)}
              shared={convert(tweet.shared)}
            />
          );
        } else {
          return '';
        }
      })}
    </section>;
  }
  // If there's no tweets at all
  else {
    return (
      <section className="feed-tweets-empty">
        <p className="feed-tweets-empty__text">No tweets</p>
      </section>
    );
  }
};

export default Tweets;
