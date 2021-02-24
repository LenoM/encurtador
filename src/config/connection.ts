import { createConnection, getConnection } from 'typeorm';

const connection = {
  async create(connectionName: string) {
    await createConnection(connectionName);
    return getConnection(connectionName);
  },
};

export default connection;
