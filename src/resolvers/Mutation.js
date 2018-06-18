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

module.exports = {
  addEmployee
};
