exports.eejsBlock_customStyles = function (hook_name, args, cb) {
  args.content = '<!-- Removed Custom Styles by ep_disable_custom_scripts plugin -->';
  return cb();
};

exports.eejsBlock_customScripts = function (hook_name, args, cb) {
  args.content = '<!-- Removed Custom Scripts by ep_disable_custom_scripts plugin -->';
  return cb();
};

exports.clientVars = function (hook, context, callback) {
  return callback({disableCustomScriptsAndStyles: true});
};
