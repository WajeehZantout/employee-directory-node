function addEmployee(root, args, context, info) {
  const { firstName, lastName, jobTitle, phoneNumber } = args;
  return context.db.mutation.createEmployee(
    {
      data: {
        firstName,
        lastName,
        jobTitle,
        phoneNumber
      }
    },
    info
  );
}

function removeEmployee(root, args, context, info) {
  const { id } = args;
  return context.db.mutation.deleteEmployee(
    {
      where: { id }
    },
    info
  );
}

module.exports = {
  addEmployee,
  removeEmployee
};
