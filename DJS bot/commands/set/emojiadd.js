const { Clinet, Message, MessageEmbed } = require("discord.js");
const Schema = require('../../models/emojiadd')

module.exports = {
    name: 'set-emojiadd-log',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You do not have permission to use this command!");
        const channel = message.mentions.channels.first() || message.channel;

        Schema.findOne({ Guild: message.guild.id}, async (err, data) => {
            if(data) data.delete();
            new Schema({
                Guild: message.guild.id,
                Channel: channel.id
            }).save();
            message.reply(`Emoji add Log Has Been Set To <#${channel.id}>`)
        })
    }
}