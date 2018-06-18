function info() {
  return "API for Employee Directory";
}

function employees(root, args, context, info) {
  return context.db.query.employees({}, info);
}

function employee(root, args, context, info) {
  const { id } = args;
  return context.db.query.employee(
    {
      where: { id }
    },
    info
  );
}

module.exports = {
  info,
  employees,
  employee
};
