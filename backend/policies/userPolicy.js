const userPolicy = {
  findAll: async (hasAccess) => hasAccess,
  find: async (hasAccess) => hasAccess,
  update: async (hasAccess) => hasAccess,
  destroy: async (hasAccess) => hasAccess,
};

module.exports = userPolicy;
