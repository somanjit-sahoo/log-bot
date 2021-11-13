const { Client, Collection, MessageEmbed } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

//Logging System
const logs = require('discord-logs');
logs(client, {
    debug: true
});
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

//Important events, do not edit

client.on('guildMemberNicknameUpdate', async (message, oldNickname, newNickname) => {
    const logschema = require('./models/joinlog')
    const data = await logschema.findOne({ Guild: message.guild.id});
    const LogChannel = message.guild.channels.cache.get(data.Channel);
    const unhandledGuildChannelUpdate = new MessageEmbed()
        .setTitle('Nickname Updated!')
        .setColor('#2F3136')
        .setDescription(`Old Nickname: ${oldNickname}\nNew Nickname: ${newNickname}, if null then it has been set to default name`);
    return LogChannel.send({ embeds: [unhandledGuildChannelUpdate] });
})


client.on('rolePositionUpdate', async (message, role) => {
    const roleposschema = require('./models/roleposupdate')
    const data = await roleposschema.findOne({ Guild: message.guild.id});
    const LogroleposChannel = message.guild.channels.cache.get(data.Channel);
    const roleposupdateembed = new MessageEmbed()
        .setTitle('Role position changed!')
        .setColor('#2F3136')
        .setDescription(`Role positions have been updated!, Role's numerical number: ${role}`);
    return LogroleposChannel.send({ embeds: [roleposupdateembed] });
})

client.on('rolePermissionsUpdate', async (message, role1) => {
    const rolepermschema = require('./models/roleperm')
    const data = await rolepermschema.findOne({ Guild: message.guild.id});
    const LogrolepermChannel = message.guild.channels.cache.get(data.Channel);
    const rolepermupdateembed = new MessageEmbed()  
        .setTitle('Role permissions changed!')
        .setColor('#2F3136')
        .setDescription(`A role's permission has been updated!, Role ID: ${role1}`);
    return LogrolepermChannel.send({ embeds: [rolepermupdateembed] });
})

client.on('voiceChannelJoin', async (message, channel) => {
    const vcjoinschema = require('./models/vcjoin')
    const data = await vcjoinschema.findOne({ Guild: message.guild.id});
    const LogemojiaddChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()  
        .setTitle('VC Joined!')
        .setColor('#2F3136')
        .setDescription(`Someone has joined ${channel} `);
    return LogemojiaddChannel.send({ embeds: [roleaddembed] });
})

client.on('voiceChannelLeave', async (message, channel) => {
    const vcjoinschema = require('./models/vcjoin')
    const data = await vcjoinschema.findOne({ Guild: message.guild.id});
    const LogemojiaddChannel = message.guild.channels.cache.get(data.Channel);
    const vcembed = new MessageEmbed()  
        .setTitle('VC Left!')
        .setColor('#2F3136')
        .setDescription(`Someone has left ${channel} `);
    return LogemojiaddChannel.send({ embeds: [vcembed] });
})

client.on('voiceChannelDeaf', async (message, channel) => {
    const vcjoinschema = require('./models/vcjoin')
    const data = await vcjoinschema.findOne({ Guild: message.guild.id});
    const LogemojiaddChannel = message.guild.channels.cache.get(data.Channel);
    const vcembed = new MessageEmbed()  
        .setTitle('Someone deafened!')
        .setColor('#2F3136')
        .setDescription(`Someone went deafened in ${channel} `);
    return LogemojiaddChannel.send({ embeds: [vcembed] });
})

client.on('voiceChannelMute', async (message, channel) => {
    const vcjoinschema = require('./models/vcjoin')
    const data = await vcjoinschema.findOne({ Guild: message.guild.id});
    const LogemojiaddChannel = message.guild.channels.cache.get(data.Channel);
    const vcembed = new MessageEmbed()  
        .setTitle('Someone went muted!')
        .setColor('#2F3136')
        .setDescription(`Someone has went muted in ${channel} `);
    return LogemojiaddChannel.send({ embeds: [vcembed] });
})

client.on('voiceChannelUnmute', async (message, channel) => {
    const vcjoinschema = require('./models/vcjoin')
    const data = await vcjoinschema.findOne({ Guild: message.guild.id});
    const LogemojiaddChannel = message.guild.channels.cache.get(data.Channel);
    const vcembed = new MessageEmbed()  
        .setTitle('Someone went unmuted!')
        .setColor('#2F3136')
        .setDescription(`Someone has went unmuted in ${channel} `);
    return LogemojiaddChannel.send({ embeds: [vcembed] });
})

client.on('voiceChannelUndeaf', async (message, channel) => {
    const vcjoinschema = require('./models/vcjoin')
    const data = await vcjoinschema.findOne({ Guild: message.guild.id});
    const LogemojiaddChannel = message.guild.channels.cache.get(data.Channel);
    const vcembed = new MessageEmbed()  
        .setTitle('Someone went undeafened!')
        .setColor('#2F3136')
        .setDescription(`Someone has went undeafened in ${channel} `);
    return LogemojiaddChannel.send({ embeds: [vcembed] });
})

client.on('voiceStreamingStart', async (message, channel) => {
    const vcjoinschema = require('./models/vcjoin')
    const data = await vcjoinschema.findOne({ Guild: message.guild.id});
    const LogemojiaddChannel = message.guild.channels.cache.get(data.Channel);
    const vcembed = new MessageEmbed()  
        .setTitle('Someone started streaming!')
        .setColor('#2F3136')
        .setDescription(`Someone has started streaming something in ${channel} `);
    return LogemojiaddChannel.send({ embeds: [vcembed] });
})


client.on('voiceStreamingStop', async (message, channel) => {
    const vcjoinschema = require('./models/vcjoin')
    const data = await vcjoinschema.findOne({ Guild: message.guild.id});
    const LogemojiaddChannel = message.guild.channels.cache.get(data.Channel);
    const vcembed = new MessageEmbed()  
        .setTitle('Someone stopped streaming!')
        .setColor('#2F3136')
        .setDescription(`Someone has stopped streaming in ${channel} `);
    return LogemojiaddChannel.send({ embeds: [vcembed] });
})

client.on('voiceChannelSwitch', async (message, oldChannel, newChannel) => {
    const vcjoinschema = require('./models/vcjoin')
    const data = await vcjoinschema.findOne({ Guild: message.guild.id});
    const LogemojiaddChannel = message.guild.channels.cache.get(data.Channel);
    const vcembed = new MessageEmbed()  
        .setTitle('Someone switched VCs!')
        .setColor('#2F3136')
        .setDescription(`Someone has switched VCs, from ${oldChannel} to ${newChannel} `);
    return LogemojiaddChannel.send({ embeds: [vcembed] });
})

client.on("roleCreate", async function(message, role){
    const rolecreateschema = require('./models/roleadd')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('Someone has created a new role')
    .setColor('#2F3136')
    .setDescription(`Check Audit Log for more details!`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("roleDelete", async function(message, role){
    const rolecreateschema = require('./models/roleadd')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('Someone has deleted a role!')
    .setColor('#2F3136')
    .setDescription(`Check Audit Log for more details!`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildBanAdd", async function(message, guild, user){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('A member has been banned!')
    .setColor('#2F3136')
    .setDescription(`A user has been banned\nCheck Audit Log for Further details`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildBanRemove", async function(message, guild, user){
    const rolecreateschema = require('./models/moz  derationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('A member has been unbanned!')
    .setColor('#2F3136')
    .setDescription(`A user has been unbanned\nCheck Audit Log for Further details`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("roleUpdate", async function(message, oldRole, newRole){
    const rolecreateschema = require('./models/roleadd')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('A role has been updated!')
    .setColor('#2F3136')
    .setDescription(`Old specs of the role: ${oldRole}\nNew updates on the role: ${newRole}\nCheck Audit Log for more detailed information!`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("channelCreate", async function(message, channel){
    const rolecreateschema = require('./models/channelupdate')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('Someone has created a new channel!')
    .setColor('#2F3136')
    .setDescription(`Channel: ${channel}>\nCheck audit log for more details!`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("channelDelete", async function(message, channel){
    const rolecreateschema = require('./models/channelupdate')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('Someone has deleted a channel!')
    .setColor('#2F3136')
    .setDescription(`Channel: ${channel}>\nCheck audit log for more details!`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("channelUpdate", async function(message, oldChannel, newChannel){
    const rolecreateschema = require('./models/channelupdate')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('Someone has edited a channel!')
    .setColor('#2F3136')
    .setDescription(`Channel: ${oldChannel}\nCheck audit log for more details!`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildMemberAdd", async function(message, member){
    const rolecreateschema = require('./models/joinlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('A member has joined!')
    .setColor('#2F3136')
    .setDescription(`${member.tag} has joined this server ☜(ﾟヮﾟ☜)`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildMemberRemove", async function(message, member){
    const rolecreateschema = require('./models/joinlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('A member has left!')
    .setColor('#2F3136')
    .setDescription(`${member.tag} has left this server\nThey were maybe kicked or they left themselves!`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("messageDelete", async function(message){
    const rolecreateschema = require('./models/messagemodel')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('A message has been deleted!')
    .setColor('#2F3136')
    .setDescription(`A message has been deleted, Message: ${message}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("messageContentEdited", async function(message, oldContent, newContent){
    const rolecreateschema = require('./models/messagemodel')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle('A message has been deleted!')
    .setColor('#2F3136')
    .setDescription(`A message has been updated!\nOld Message: ${oldContent}\nNew Message: ${newContent}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildChannelPermissionsUpdate", async function(message, channel, oldPermissions, newPermissions){
    const rolecreateschema = require('./models/messagemodel')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`A channel's permissions have been updated!`)
    .setColor('#2F3136')
    .setDescription(`Channel: ${channel}\nOld Permissions: ${oldPermissions}\nNew Permissions: ${newPermissions}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildChannelTopicUpdate", async function(message, channel, oldTopic, newTopic){
    const rolecreateschema = require('./models/messagemodel')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`A channel's topic has been updated!`)
    .setColor('#2F3136')
    .setDescription(`Channel: ${channel}\nOld Topic: ${oldTopic}\nNew Topic: ${newTopic}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("emojiCreate", async function(message, emoji){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`A new emoji has been added!`)
    .setColor('#2F3136')
    .setDescription(`A new custom emoji has been added to this server\nEmoji: ${emoji}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("emojiDelete", async function(message, emoji){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`A new emoji has been deleted!`)
    .setColor('#2F3136')
    .setDescription(`A new custom emoji has been deleted from this server\nEmoji: ${emoji}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("emojiUpdate", async function(message, emoji){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`A new emoji has been updated!`)
    .setColor('#2F3136')
    .setDescription(`An emoji of this server has been updated!\nEmoji: ${emoji}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildBannerAdd", async function(message, guild, bannerURL){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`A new banner has been added to this server!`)
    .setColor('#2F3136')
    .setDescription(`A new custom banner has been added to this server\nServer: ${guild}\nBanner: ${bannerURL}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildAfkChannelAdd", async function(message, guild, afkChannel){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`A new afk channel has been added to this server!`)
    .setColor('#2F3136')
    .setDescription(`A new afk channel was added!\nServer: ${guild}\nNew AFK Channel: ${afkChannel}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildMemberUpdate", async function(message, oldMember, newMember){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`Someone has been updated`)
    .setColor('#2F3136')
    .setDescription(`Someone has got a new role or had their settings for this guild changed\nPreviously: ${oldMember}\nNow: ${newMember}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildUpdate", async function(message, oldGuild, newGuild){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`THIS SERVER'S SETTINGS HAVE BEEN UPDATED!!!`)
    .setColor('#2F3136')
    .setDescription(`THIS SERVER'S SETTINGS HAVE BEEN UPDATED, PLEASE CHECK THE AUDIT LOG ASAP TO PREVENT ANY SORT OF DANGER YOU SENSE!!\nPreviously: ${oldGuild}\nNow: ${newGuild}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildVerificationAdd", async function(message, guild){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`GG! You have been  officialy verified by DISCORD`)
    .setColor('#2F3136')
    .setDescription(`GG! ${guild} just got verified by **DISCORD!**`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildVerificationRemove", async function(message, guild){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`Oh no! This server is no longer a verified discord server ;-;`)
    .setColor('#2F3136')
    .setDescription(`${guild}'s verification just got taken away!'`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildPartnerAdd", async function(message, guild){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`GG! You are now an official DISCORD PARTNER!`)
    .setColor('#2F3136')
    .setDescription(`GG! ${guild} is now in the **DISCORD'S PARTNERS** list!`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("guildPartnerRemove", async function(message, guild){
    const rolecreateschema = require('./models/moderationlog')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`This server is now longer a discord partner`)
    .setColor('#2F3136')
    .setDescription(`${guild}'s partnership has been taken away!`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.on("channelPinsUpdate", async function(message, channel, time){
    const rolecreateschema = require('./models/channelupdate')
    const data = await rolecreateschema.findOne({ Guild: message.guild.id});
    const roleaddlogChannel = message.guild.channels.cache.get(data.Channel);
    const roleaddembed = new MessageEmbed()
    .setTitle(`A channel's pin(s) ha(s)(ve) been updated`)
    .setColor('#2F3136')
    .setDescription(`A Channel's pin(s) ha(s)(ve) been updated!\nDetails:\n${channel}:${time}`)
    return roleaddlogChannel.send({ embeds: [roleaddembed] })
});

client.login(client.config.token);