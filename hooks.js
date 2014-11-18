exports.eejsBlock_customStyles = function (hook_name, args, cb) {
  args.content = "";
  return cb();
};

exports.eejsBlock_customScripts = function (hook_name, args, cb) {
  args.content = "";
  return cb();
};
