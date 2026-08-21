module.exports = {
  token:
    process.env.token || "",
  prefix: "z!",
  color: "#00eeff",
  Mongo: process.env.MONGO_URI || process.env.Mongo || "",
  ownerIDS: ["859051097820889098"],
  vote: false,
  image: "https://i.imgur.com/SPtXR9d.png",
  setupBgLink: "https://i.imgur.com/SPtXR9d.png",
  invite: "https://discord.com/oauth2/authorize?client_id=1420900418673836092&permissions=8&integration_type=0&scope=bot+applications.commands",
  inviteTwo: "https://discord.com/oauth2/authorize?client_id=1420900418673836092&permissions=8&integration_type=0&scope=bot+applications.commands",
  inviteThree: "https://discord.com/oauth2/authorize?client_id=1420900418673836092&permissions=8&integration_type=0&scope=bot+applications.commands",
  ssLink: "https://discord.gg/VMbqMG7nUq",
  topGg: "https://discord.gg/VMbqMG7nUq",
  topgg_Api: "",
  noprefixLog: "https://discord.com/api/webhooks/1539293132565389332/0jiAuifYUIslYh9nul4yF6psRjTstJiHkAFfr0d-EW6ekYhIt8AAfiE7rkucUntWuNDH",
  cmd_log: "https://discord.com/api/webhooks/1539293365026295868/eY2Pdi15OFa6G9-453dqtmd6SxV6g5UXZ1eUeP-5LjsH-D0-5tYBxir5ZrruEE8tr7-H",
  error_log: "https://discord.com/api/webhooks/1539293539148505171/4m87dowBchESf36JTMRerZw2YjWeSfQTT8CAETHx7x4c_ujemPHsk6NX8pRZ9pAjGQug",
  blacklist_log: "https://discord.com/api/webhooks/1539293702223167509/b5h636MIObBKzScxhVQsZH8Iz83VbjZofTCySc_qTahFIBdf5I2xIwr-YktkXAP6tC2A",
  join_log: "https://discord.com/api/webhooks/1539293866887225386/q1T3-OVFzwveOftdix7lv_3J8XjoXlhYSCdRClWXgzKpAFGRNHot84EdXTn06HH0Qvaf",
  leave_log: "https://discord.com/api/webhooks/1539294039260659822/hdZPkPMSBfTi6o21zxqhFfM8o3ijI3b1l-ywjRONgb3EAQW1F1c9U5A6VpmDGGWDS-0l",
  spotiId: "",
  spotiSecret: "",
  nodes: [
    {
      name: 'Lava 2',
      host: 'lava-v4.millohost.my.id',
      port: 443,
      password: 'https://discord.gg/mjS5J2K3ep',
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
      host: 'lavalinkv4.serenetia.com',
      port: 443,
      password: 'https://seretia.link/discord',
      secure: true
    }
  ],
};
