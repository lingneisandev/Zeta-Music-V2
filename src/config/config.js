module.exports = {
  token:
    process.env.token || "",
  prefix: "z!",
  color: "#00eeff",
  Mongo: process.env.MONGO_URI || process.env.Mongo || "",
  ownerIDS: ["859051097820889098"],
  vote: false,
  image: "https://media.discordapp.net/attachments/1392487471370997761/1433841399110828204/Profile_Banner.png?ex=6906285d&is=6904d6dd&hm=be6fb1bef07b8641d8501a618ffca7068822a299f8f7733e6d6bae741c646b99&=&format=webp&quality=lossless&width=544&height=192",
  setupBgLink: "https://media.discordapp.net/attachments/1392487471370997761/1433841399110828204/Profile_Banner.png?ex=6906285d&is=6904d6dd&hm=be6fb1bef07b8641d8501a618ffca7068822a299f8f7733e6d6bae741c646b99&=&format=webp&quality=lossless&width=544&height=192",
  invite: "https://discord.com/oauth2/authorize?client_id=1420900418673836092&permissions=8&integration_type=0&scope=bot",
  inviteTwo: "https://discord.com/oauth2/authorize?client_id=1420900418673836092&permissions=8&integration_type=0&scope=bot",
  inviteThree: "https://discord.com/oauth2/authorize?client_id=1420900418673836092&permissions=8&integration_type=0&scope=bot",
  ssLink: "https://discord.gg/VMbqMG7nUq",
  topGg: "https://discord.gg/VMbqMG7nUq",
  topgg_Api: "",
  noprefixLog: "https://discord.com/channels/950781805550788628/1539134343551655968",
  cmd_log: "https://discord.com/channels/950781805550788628/1539134455145431174",
  error_log: "https://discord.com/channels/950781805550788628/1539134615535493172",
  blacklist_log: "https://discord.com/channels/950781805550788628/1539134731592015922",
  join_log: "https://discord.com/channels/950781805550788628/1539134892774789180",
  leave_log: "https://discord.com/channels/950781805550788628/1539134972584140820",
  spotiId: "",
  spotiSecret: "",
  nodes: [
    {
      name: 'Lava 1',
      host: 'lavalink.jirayu.net',
      port: 13592,
      password: 'youshallnotpass',
      secure: false
    },
    {
      name: 'Lava 2',
      host: 'lavalinkv4.serenetia.com',
      port: 443,
      password: 'https://dsc.gg/ajidevserver',
      secure: true
    },
    {
      name: 'Lava 3',
      host: 'lava4.millohost.my.id',
      port: 443,
      password: 'https://discord.gg/mjS5J2K3ep',
      secure: true
    },
    {
      name: 'Lava 4',
      host: 'lavalink.jirayu.net',
      port: 443,
      password: 'youshallnotpass',
      secure: true
    }
  ],
};
