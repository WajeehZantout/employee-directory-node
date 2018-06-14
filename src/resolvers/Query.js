function info() {
  return "API for Employee Directory";
}

function employees(root, args, context, info) {
  return context.db.query.employees({}, info);
}

module.exports = {
  info,
  employees
};
