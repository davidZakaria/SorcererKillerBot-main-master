module.exports = {
  name: "join",
  aliases: "j",
  description: "Make Sorcerer Bot join your current voice channel.",
  execute(message, args, cmd, bot, Discord) {
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("SPEAK"))
      return message.channel.send(
        "You do not have permission to use this command."
      );

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return;
    voiceChannel.join();
  },
};
