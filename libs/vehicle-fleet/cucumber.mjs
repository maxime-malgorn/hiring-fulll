const common = {
  requireModule: ['ts-node/register'],
  require: ['features/**/*.ts'],
};

export const mongo = {
  ...common,
  worldParameters: {
    mongo: true,
  },
};

export default common;
