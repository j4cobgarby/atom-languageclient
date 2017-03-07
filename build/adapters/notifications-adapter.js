Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _languageclient = require('../languageclient');

let NotificationsAdapter = class NotificationsAdapter {

  constructor(languageClient, name) {
    this._lc = languageClient;
    this._name = name;
    languageClient.onShowMessage(this.onShowMessage.bind(this));
  }

  // TODO: Wire up onShowMessageRequest

  onShowMessage(params) {
    const options = { dismissable: true, detail: this._name };
    switch (params.type) {
      case _languageclient.MessageType.Error:
        atom.notifications.addError(params.message, options);
        return;
      case _languageclient.MessageType.Warning:
        atom.notifications.addWarning(params.message, options);
        return;
      case _languageclient.MessageType.Log:
        console.log(params.message);
        return;
      case _languageclient.MessageType.Info:
      default:
        atom.notifications.addInfo(params.message, options);
        return;
    }
  }

  static actionItemToNotificationButton(actionItem) {
    return {
      text: actionItem.title
    };
  }
};
exports.default = NotificationsAdapter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9hZGFwdGVycy9ub3RpZmljYXRpb25zLWFkYXB0ZXIuanMiXSwibmFtZXMiOlsiTm90aWZpY2F0aW9uc0FkYXB0ZXIiLCJjb25zdHJ1Y3RvciIsImxhbmd1YWdlQ2xpZW50IiwibmFtZSIsIl9sYyIsIl9uYW1lIiwib25TaG93TWVzc2FnZSIsImJpbmQiLCJwYXJhbXMiLCJvcHRpb25zIiwiZGlzbWlzc2FibGUiLCJkZXRhaWwiLCJ0eXBlIiwiRXJyb3IiLCJhdG9tIiwibm90aWZpY2F0aW9ucyIsImFkZEVycm9yIiwibWVzc2FnZSIsIldhcm5pbmciLCJhZGRXYXJuaW5nIiwiTG9nIiwiY29uc29sZSIsImxvZyIsIkluZm8iLCJhZGRJbmZvIiwiYWN0aW9uSXRlbVRvTm90aWZpY2F0aW9uQnV0dG9uIiwiYWN0aW9uSXRlbSIsInRleHQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTs7SUFHcUJBLG9CLEdBQU4sTUFBTUEsb0JBQU4sQ0FBMkI7O0FBSXhDQyxjQUFZQyxjQUFaLEVBQXNEQyxJQUF0RCxFQUFvRTtBQUNsRSxTQUFLQyxHQUFMLEdBQVdGLGNBQVg7QUFDQSxTQUFLRyxLQUFMLEdBQWFGLElBQWI7QUFDQUQsbUJBQWVJLGFBQWYsQ0FBNkIsS0FBS0EsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBN0I7QUFDRDs7QUFFRDs7QUFFQUQsZ0JBQWNFLE1BQWQsRUFBK0M7QUFDN0MsVUFBTUMsVUFBVSxFQUFFQyxhQUFhLElBQWYsRUFBcUJDLFFBQVEsS0FBS04sS0FBbEMsRUFBaEI7QUFDQSxZQUFPRyxPQUFPSSxJQUFkO0FBQ0UsV0FBSyw0QkFBWUMsS0FBakI7QUFDRUMsYUFBS0MsYUFBTCxDQUFtQkMsUUFBbkIsQ0FBNEJSLE9BQU9TLE9BQW5DLEVBQTRDUixPQUE1QztBQUNBO0FBQ0YsV0FBSyw0QkFBWVMsT0FBakI7QUFDRUosYUFBS0MsYUFBTCxDQUFtQkksVUFBbkIsQ0FBOEJYLE9BQU9TLE9BQXJDLEVBQThDUixPQUE5QztBQUNBO0FBQ0YsV0FBSyw0QkFBWVcsR0FBakI7QUFDRUMsZ0JBQVFDLEdBQVIsQ0FBWWQsT0FBT1MsT0FBbkI7QUFDQTtBQUNGLFdBQUssNEJBQVlNLElBQWpCO0FBQ0E7QUFDRVQsYUFBS0MsYUFBTCxDQUFtQlMsT0FBbkIsQ0FBMkJoQixPQUFPUyxPQUFsQyxFQUEyQ1IsT0FBM0M7QUFDQTtBQWJKO0FBZUQ7O0FBRUQsU0FBT2dCLDhCQUFQLENBQXNDQyxVQUF0QyxFQUE4RjtBQUM1RixXQUFPO0FBQ0xDLFlBQU1ELFdBQVdFO0FBRFosS0FBUDtBQUdEO0FBbkN1QyxDO2tCQUFyQjVCLG9CIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMtYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcblxyXG5pbXBvcnQge0xhbmd1YWdlQ2xpZW50Q29ubmVjdGlvbiwgTWVzc2FnZVR5cGV9IGZyb20gJy4uL2xhbmd1YWdlY2xpZW50JztcclxuaW1wb3J0IHR5cGUge1Nob3dNZXNzYWdlUGFyYW1zLCBTaG93TWVzc2FnZVJlcXVlc3RQYXJhbXMsIE1lc3NhZ2VBY3Rpb25JdGVtfSBmcm9tICcuLi9sYW5ndWFnZWNsaWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb25zQWRhcHRlciB7XHJcbiAgX2xjOiBMYW5ndWFnZUNsaWVudENvbm5lY3Rpb247XHJcbiAgX25hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobGFuZ3VhZ2VDbGllbnQ6IExhbmd1YWdlQ2xpZW50Q29ubmVjdGlvbiwgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9sYyA9IGxhbmd1YWdlQ2xpZW50O1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICBsYW5ndWFnZUNsaWVudC5vblNob3dNZXNzYWdlKHRoaXMub25TaG93TWVzc2FnZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IFdpcmUgdXAgb25TaG93TWVzc2FnZVJlcXVlc3RcclxuXHJcbiAgb25TaG93TWVzc2FnZShwYXJhbXM6IFNob3dNZXNzYWdlUGFyYW1zKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXNtaXNzYWJsZTogdHJ1ZSwgZGV0YWlsOiB0aGlzLl9uYW1lIH07XHJcbiAgICBzd2l0Y2gocGFyYW1zLnR5cGUpIHtcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FcnJvcjpcclxuICAgICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IocGFyYW1zLm1lc3NhZ2UsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5XYXJuaW5nOlxyXG4gICAgICAgIGF0b20ubm90aWZpY2F0aW9ucy5hZGRXYXJuaW5nKHBhcmFtcy5tZXNzYWdlLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuTG9nOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcy5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSW5mbzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkSW5mbyhwYXJhbXMubWVzc2FnZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFjdGlvbkl0ZW1Ub05vdGlmaWNhdGlvbkJ1dHRvbihhY3Rpb25JdGVtOiBNZXNzYWdlQWN0aW9uSXRlbSk6IGF0b20kTm90aWZpY2F0aW9uQnV0dG9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRleHQ6IGFjdGlvbkl0ZW0udGl0bGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19