"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class default_1/*command*/  extends discord_akairo_1.Command {
    constructor() {
        super('', {
            aliases: ['', ''],
            category: '',
            description: {
                content: '',
                usage: '',
                examples: [''] //exampleArray
            },
            ratelimit: 6 //how many times can you execute / minute
        });
    }
    exec(message) {
        return message.util.send();
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2V4YW1wbGUtY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxlQUFxQixXQUFXLENBQUMsU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDTixPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxFQUFFO2dCQUNYLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWM7YUFDaEM7WUFDRCxTQUFTLEVBQUUsQ0FBQyxDQUFDLHlDQUF5QztTQUN6RCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sSUFBSSxDQUFDLE9BQWdCO1FBRXhCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBQ0o7QUFqQkQsNEJBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7TWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCwgSW1hZ2VTaXplLCBUZXh0Q2hhbm5lbCwgTWVzc2FnZUF0dGFjaG1lbnR9IGZyb20gJ2Rpc2NvcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyAvKmNvbW1hbmQqLyBleHRlbmRzIENvbW1hbmQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJycsIHsgLy9uYW1lXG4gICAgICAgICAgICBhbGlhc2VzOiBbJycsICcnXSwgLy9hbGlhc2VzXG4gICAgICAgICAgICBjYXRlZ29yeTogJycsIC8vY2F0ZWdvcnkgb2YgY29tbWFuZFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJywgLy9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIHVzYWdlOiAnJywgLy9ob3cgdG8gdXNlXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFsnJ10gLy9leGFtcGxlQXJyYXlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYXRlbGltaXQ6IDYgLy9ob3cgbWFueSB0aW1lcyBjYW4geW91IGV4ZWN1dGUgLyBtaW51dGVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcblxuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoKTtcbiAgICB9XG59XG4iXX0=