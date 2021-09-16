const eventPolicy = {
  entity: "event",
  findAll: async (hasAccess) => hasAccess,
  find: async (hasAccess) => hasAccess,
  create: async (hasAccess) => hasAccess,
  update: async (hasAccess) => hasAccess,
  destroy: async (hasAccess) => hasAccess,
};

module.exports = eventPolicy;
