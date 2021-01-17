"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class EmbedCommand extends discord_akairo_1.Command {
    constructor() {
        super('embed', {
            aliases: ['embed', 'mkembed'],
            category: 'utility',
            description: {
                content: 'Make an embed. (If your option includes spaces, you should put it in quotation marks.',
                usage: 'embed (-o) (--options)',
                examples: ['embed -t Title -c Color -d Description -i Image -T Thumbnail', 'embed -t "My epic title owo" --color 00ffee -d "Woah this is a cool description" --image localhost:///home/fadedave/flushed.png'] //exampleArray
            },
            ratelimit: 6,
            args: [
                {
                    id: 'title',
                    type: 'string',
                    match: 'option',
                    flag: ['-t', '--title']
                },
                {
                    id: 'color',
                    type: 'string',
                    match: 'option',
                    flag: ['-c', '--color']
                },
                {
                    id: 'description',
                    type: 'string',
                    match: 'option',
                    flag: ['-d', '--description']
                },
                {
                    id: 'image',
                    type: 'url',
                    match: 'option',
                    flag: ['-i', '--image']
                },
                {
                    id: 'thumbnail',
                    type: 'url',
                    match: 'option',
                    flag: ['-th', '--thumbnail']
                },
            ]
        });
    }
    exec(message, { title, color, description, image, thumbnail }) {
        const embed = new discord_js_1.MessageEmbed();
        if (title)
            embed.setTitle(`${title}`);
        if (description)
            embed.setDescription(`${description}`);
        if (image)
            embed.setImage(`${image}`);
        if (color)
            embed.setColor(`${color}`);
        if (thumbnail)
            embed.setThumbnail(`${thumbnail}`);
        return message.util.send(embed).catch(() => message.util.reply('You made an error in your embed, and it threw an exception. Make sure that your embed is less than 2048 characters, that is a common problem.'));
    }
}
exports.default = EmbedCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWQtY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy91dGlsaXR5L2VtYmVkLWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQXlHO0FBRXpHLE1BQXFCLFlBQWEsU0FBUSx3QkFBTztJQUM3QztRQUNJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1lBQzdCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsdUZBQXVGO2dCQUNoRyxLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixRQUFRLEVBQUUsQ0FBQyw4REFBOEQsRUFBRSxpSUFBaUksQ0FBQyxDQUFDLGNBQWM7YUFDL047WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDRjtvQkFDSSxFQUFFLEVBQUMsT0FBTztvQkFDVixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsUUFBUTtvQkFDZixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO2lCQUMxQjtnQkFDRDtvQkFDSSxFQUFFLEVBQUMsT0FBTztvQkFDVixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsUUFBUTtvQkFDZixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO2lCQUMxQjtnQkFDRDtvQkFDSSxFQUFFLEVBQUMsYUFBYTtvQkFDaEIsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQztpQkFDaEM7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFDLE9BQU87b0JBQ1YsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztpQkFDMUI7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFDLFdBQVc7b0JBQ2QsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQztpQkFDL0I7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQXdGO1FBQzlKLE1BQU0sS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRSxDQUFBO1FBQzVCLElBQUksS0FBSztZQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQ3JDLElBQUksV0FBVztZQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZELElBQUksS0FBSztZQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQ3JDLElBQUksS0FBSztZQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQ3JDLElBQUksU0FBUztZQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLCtJQUErSSxDQUFDLENBQUMsQ0FBQztJQUNyTixDQUFDO0NBQ0o7QUF0REQsK0JBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7TWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCwgSW1hZ2VTaXplLCBUZXh0Q2hhbm5lbCwgTWVzc2FnZUF0dGFjaG1lbnR9IGZyb20gJ2Rpc2NvcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdlbWJlZCcsIHsgLy9uYW1lXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ2VtYmVkJywgJ21rZW1iZWQnXSwgLy9hbGlhc2VzXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3V0aWxpdHknLCAvL2NhdGVnb3J5IG9mIGNvbW1hbmRcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ01ha2UgYW4gZW1iZWQuIChJZiB5b3VyIG9wdGlvbiBpbmNsdWRlcyBzcGFjZXMsIHlvdSBzaG91bGQgcHV0IGl0IGluIHF1b3RhdGlvbiBtYXJrcy4nLCAvL2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgdXNhZ2U6ICdlbWJlZCAoLW8pICgtLW9wdGlvbnMpJywgLy9ob3cgdG8gdXNlXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFsnZW1iZWQgLXQgVGl0bGUgLWMgQ29sb3IgLWQgRGVzY3JpcHRpb24gLWkgSW1hZ2UgLVQgVGh1bWJuYWlsJywgJ2VtYmVkIC10IFwiTXkgZXBpYyB0aXRsZSBvd29cIiAtLWNvbG9yIDAwZmZlZSAtZCBcIldvYWggdGhpcyBpcyBhIGNvb2wgZGVzY3JpcHRpb25cIiAtLWltYWdlIGxvY2FsaG9zdDovLy9ob21lL2ZhZGVkYXZlL2ZsdXNoZWQucG5nJ10gLy9leGFtcGxlQXJyYXlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYXRlbGltaXQ6IDYsIC8vaG93IG1hbnkgdGltZXMgY2FuIHlvdSBleGVjdXRlIC8gbWludXRlXG4gICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDondGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBmbGFnOiBbJy10JywgJy0tdGl0bGUnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDonY29sb3InLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBmbGFnOiBbJy1jJywgJy0tY29sb3InXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDonZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBmbGFnOiBbJy1kJywgJy0tZGVzY3JpcHRpb24nXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDonaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndXJsJyxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBmbGFnOiBbJy1pJywgJy0taW1hZ2UnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDondGh1bWJuYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VybCcsXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZmxhZzogWyctdGgnLCAnLS10aHVtYm5haWwnXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7dGl0bGUsIGNvbG9yLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHRodW1ibmFpbH06IHt0aXRsZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpbWFnZTogc3RyaW5nLCB0aHVtYm5haWw6IHN0cmluZ30pOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcbiAgICAgICAgICAgIGlmICh0aXRsZSkgZW1iZWQuc2V0VGl0bGUoYCR7dGl0bGV9YClcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbikgZW1iZWQuc2V0RGVzY3JpcHRpb24oYCR7ZGVzY3JpcHRpb259YClcbiAgICAgICAgICAgIGlmIChpbWFnZSkgZW1iZWQuc2V0SW1hZ2UoYCR7aW1hZ2V9YClcbiAgICAgICAgICAgIGlmIChjb2xvcikgZW1iZWQuc2V0Q29sb3IoYCR7Y29sb3J9YClcbiAgICAgICAgICAgIGlmICh0aHVtYm5haWwpIGVtYmVkLnNldFRodW1ibmFpbChgJHt0aHVtYm5haWx9YCk7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChlbWJlZCkuY2F0Y2goKCkgPT4gbWVzc2FnZS51dGlsLnJlcGx5KCdZb3UgbWFkZSBhbiBlcnJvciBpbiB5b3VyIGVtYmVkLCBhbmQgaXQgdGhyZXcgYW4gZXhjZXB0aW9uLiBNYWtlIHN1cmUgdGhhdCB5b3VyIGVtYmVkIGlzIGxlc3MgdGhhbiAyMDQ4IGNoYXJhY3RlcnMsIHRoYXQgaXMgYSBjb21tb24gcHJvYmxlbS4nKSk7XG4gICAgfVxufVxuIl19