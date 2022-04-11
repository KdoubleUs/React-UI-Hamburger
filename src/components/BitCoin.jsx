import image from "../images/coinImg.webp";
const Bio = () => {
  return (
    <div className="bioContainer">
      <img src={image} alt="none"></img>
      <div className="cryptoHead">
        <h1>What Is Cryptocurrency?</h1>
        <p>
          A cryptocurrency is a medium of exchange that is digital, encrypted
          and decentralized. Unlike the U.S. Dollar or the Euro, there is no
          central authority that manages and maintains the value of a
          cryptocurrency. Instead, these tasks are broadly distributed among a
          cryptocurrency’s users via the internet. You can use crypto to buy
          regular goods and services, although most people invest in
          cryptocurrencies as they would in other assets, like stocks or
          precious metals. While cryptocurrency is a novel and exciting asset
          class, purchasing it can be risky as you must take on a fair amount of
          research to fully understand how each system works.
        </p>
      </div>

      <div className="messageContainer">
        <h1 className="bioHead">What is BitCoin? The King of Crypto Coin</h1>
        <p>
          Virtual currency has been a hot topic for over a decade now. With so
          much recent news, it can be difficult to fully understand the
          significance and overall purpose of this expanding market. The task is
          made easier, however, by knowing the history of the most widely-traded
          crypto on the market: Bitcoin. Bitcoin was first introduced in 2008 as
          a decentralized currency without the need for a central bank or any
          intermediaries. It can be sent to and from users via the bitcoin
          network, a peer-to-peer network in which transactions are
          authenticated by nodes and recorded on a blockchain. The inventor of
          Bitcoin remains a bit of a mystery. A paper titled Bitcoin: A
          Peer-to-Peer Electronic Cash System was posted on Oct. 31, 2008 to a
          cryptography mailing list with “Satoshi Nakamoto” as the author.
          However, Nakamoto has never revealed any personal information about
          himself and his identity has never been confirmed. This has led many
          to believe the name is a pseudonym for one or more creators. In 2009,
          Bitcoin was first used after it was released as open-source software,
          when Nakamoto mined the starting block of the blockchain. This is
          referred to as the Genesis Block, and it contained the first 50
          Bitcoins ever created. From there on, Bitcoin continued to be mined by
          other early contributors until 2010. That’s when programmer Laszlo
          Hanyecz made the first known commercial transaction using the
          cryptocurrency through the purchase of two Papa John’s pizzas for
          10,000 Bitcoins. (Fun fact: That amount of Bitcoin is worth over $300
          million as of this writing). Since then, Bitcoin has been traded
          hundreds of millions of times, with the earliest major transactions
          occurring in black markets. The largest of these was Silk Road, which
          traded nearly 10 million Bitcoins during its existence.
        </p>
      </div>
    </div>
  );
};

export default Bio;
